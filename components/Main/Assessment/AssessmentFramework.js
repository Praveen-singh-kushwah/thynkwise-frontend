"use client";
import { addCustomerQuestion, getScore } from "@/lib/QuestionLib";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./AssessmentFramework.module.css";
export default function AssessmentFramework({ userInfo }) {
  const totalQuestions = userInfo.questions.reduce(
    (total, section) => total + section.questions.length,
    0
  );
  const [currentSection, setCurrentSection] = useState(
    userInfo.userProgress ? Math.floor(userInfo.userProgress / 5) : 0
  );
  const [questionIndex, setQuestionIndex] = useState(
    userInfo.userProgress ? userInfo.userProgress % 5 : 0
  );
  const [completed, setCompleted] = useState(false);
  const [loadingAnswer, setLoadingAnswer] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [resumeOption, setResumeOption] = useState(false);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(100); // Initial score set to 100
  const [progress, setProgress] = useState(0); // Add progress state

  const questionsPerPage = 13;
  const sections = userInfo?.questions || [];

  const currentQuestions = sections[currentSection]?.questions.slice(
    questionIndex,
    questionIndex + questionsPerPage
  );

  // Calculate the mark for each question
  const markPerQuestion = 100 / totalQuestions;

  // Pre-populate answered questions from userInfo when component mounts
  useEffect(() => {
    if (userInfo.answeredQuestions) {
      setSelectedAnswers(userInfo.answeredQuestions);
    }

    if (userInfo.isCompleted) {
      setCompleted(true);
      setResumeOption(false);
    } else if (userInfo.userProgress > 0) {
      setResumeOption(true);
    } else {
      setStarted(true);
    }
  }, [userInfo]);

  // Update progress bar when the section or question changes
  useEffect(() => {
    const sectionProgress = (currentSection / sections.length) * 100;
    setProgress(Math.min(sectionProgress, 100)); // Ensure progress doesn't exceed 100%
  }, [currentSection]);

  // Fetch the final score when the assessment is completed
  useEffect(() => {
    const fetchScore = async () => {
      if (completed) {
        try {
          const scoreResponse = await getScore({
            user_id: userInfo.user_id,
          });
          if (scoreResponse.status) {
            setScore(scoreResponse.data); // Use the score from API response
          } else {
            console.error("Failed to fetch score:", scoreResponse.msg);
          }
        } catch (error) {
          console.error("Failed to fetch score:", error);
        }
      }
    };

    fetchScore();
  }, [completed, userInfo.user_id]);

  // Handle checkbox change
  const handleCheckboxChange = async (questionId) => {
    const newSelectedAnswers = {
      ...selectedAnswers,
      [questionId]: !selectedAnswers[questionId],
    };
    setSelectedAnswers(newSelectedAnswers);

    try {
      await addCustomerQuestion({
        question_id: questionId,
        user_id: userInfo.user_id,
      });
    } catch (error) {
      console.error("Failed to save question:", error);
    }
  };

  const handleResume = () => {
    setCurrentSection(Math.floor(userInfo.userProgress / questionsPerPage));
    setQuestionIndex(userInfo.userProgress % questionsPerPage);
    setSelectedAnswers(userInfo.answeredQuestions);
    setStarted(true);
    setResumeOption(false);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentSection(0);
    setQuestionIndex(0);
    setStarted(true);
    setResumeOption(false);
    setScore(100);
    setCompleted(false);
  };

  const handleNextQuestions = () => {
    if (
      questionIndex + questionsPerPage <
      sections[currentSection].questions.length
    ) {
      setQuestionIndex(questionIndex + questionsPerPage);
    }
  };

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setQuestionIndex(0);
    }
  };

  const handleSubmit = async () => {
    if (loadingAnswer) return;
    setLoadingAnswer(true);

    try {
      await addCustomerQuestion({
        user_id: userInfo.user_id,
        is_submit: 1,
      });
      setCompleted(true); // Set completed to trigger score fetching
    } catch (error) {
      console.error("Failed to submit answers:", error);
    } finally {
      setLoadingAnswer(false);
    }
  };

  const getAlertClass = () => {
    if (score <= 20) return "alert-danger";
    if (score <= 40) return "alert-warning";
    if (score <= 60) return "alert-secondary";
    if (score <= 80) return "alert-info";
    return "alert-success";
  };

  const getFinalMessage = () => {
    if (score <= 20)
      return "Your business is in danger. Immediate action is needed.";
    if (score <= 40)
      return "Your business is unstable. Improvement is required.";
    if (score <= 60) return "Your business is stable but not yet scalable.";
    if (score <= 80) return "Your business is growing. Focus on optimization.";
    return "You are in hyper-growth mode. Keep scaling!";
  };

  return (
    <div className={style["assessment-container"]}>
      {completed ? (
        <>
          <div
            className={"d-flex flex-column gap-3 " + style["thankyou-inner"]}
          >
            <div className="check text-center">
              <img src="/assets/images/bg/checkmark.png" alt="check png" />
            </div>
            <h5 className={"text-center " + style["thankyou-text"]}>
              Thank you for your participation
            </h5>
            <p className="fs-5 text-center">
              Your final score is:{" "}
              <span className="fw-bold fs-4">{Math.round(score)}/100</span>
            </p>
            <div
              className={`alert ${getAlertClass()} text-center`}
              role="alert"
            >
              <h3 className="m-0">{getFinalMessage()}</h3>
            </div>
            <div className="fs-5 fw-bold text-center">
              Book a Free Consultation Now
            </div>
            <div className="d-flex gap-4 flex-wrap justify-content-center">
              <div className="text-center">
                <div
                  className={style["header-button"]}
                  style={{ marginTop: "20px" }}
                >
                  <Link href="/#">
                    <button>Free Appointment</button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div
                  className={style["header-button"]}
                  style={{ marginTop: "20px" }}
                >
                  <Link href="/">
                    <button>Back to Home</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : resumeOption ? (
        <div className="text-center mt-5">
          <h3>Welcome back!</h3>
          <p>
            Would you like to continue from where you left off or start again?
          </p>
          <button className="btn btn-primary me-2" onClick={handleResume}>
            Start Where You Left Off
          </button>
          <button className="btn btn-secondary" onClick={handleRestart}>
            Start Again
          </button>
        </div>
      ) : !completed && sections.length > 0 && started ? (
        <>
          <div className="progress my-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}% Complete
            </div>
          </div>

          <div className="fs-2 fw-bold mb-30 text-center">
            {sections[currentSection]?.title || "Assessment"}
          </div>

          <table className="custom-table table table-responsive text-center">
            <tbody>
              {currentQuestions.map((question) => (
                <tr key={question.id}>
                  <td className="text-start">
                    <div className="align-items-center d-flex gap-3 py-1">
                      <input
                        type="checkbox"
                        className={"me-2 " + style["custom-checkbox"]}
                        checked={!!selectedAnswers[question.id]}
                        onChange={() => handleCheckboxChange(question.id)}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: question.question,
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-center mt-4">
            {questionIndex + questionsPerPage <
            sections[currentSection].questions.length ? (
              <div className={style["header-button"]}>
                <button onClick={handleNextQuestions} disabled={loadingAnswer}>
                  Continue
                </button>
              </div>
            ) : currentSection < sections.length - 1 ? (
              <div className={style["header-button"]}>
                <button onClick={handleNextSection} disabled={loadingAnswer}>
                  Continue
                </button>
              </div>
            ) : (
              <div className={style["header-button"]}>
                <button onClick={handleSubmit} disabled={loadingAnswer}>
                  Submit
                </button>
              </div>
            )}
          </div>

          {loadingAnswer && (
            <div className="text-center mt-3">
              <span>Submitting answers...</span>
            </div>
          )}
        </>
      ) : (
        <div>No questions available.</div>
      )}
    </div>
  );
}
