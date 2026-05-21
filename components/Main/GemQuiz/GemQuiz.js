"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./GemQuizForm.module.css";
import GemQuizResult from "./GemQuizResult";
import { uploadGemQuizPdf } from "@/lib/GemLib/GemLib";
import { useState } from "react";

const gemLabels = {
  Sapphire: "Sapphire (Fun-Loving, Outgoing)",
  Ruby: "Ruby (Driven, Competitive)",
  Pearl: "Pearl (Caring, Empathetic)",
  Emerald: "Emerald (Logical, Organized)",
};

export default function GemQuiz({ quizData, userId, pageData = {} }) {
  const [resultText, setResultText] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const initialValues = quizData.reduce((acc, q) => {
    acc[q.question_id] = "";
    return acc;
  }, {});

  const validationSchema = Yup.object().shape(
    quizData.reduce((acc, q) => {
      acc[q.question_id] = Yup.string().required("Please select an answer");
      return acc;
    }, {})
  );

  const submitQuiz = async (values, { setSubmitting }) => {
    try {
      setErrorMessage(null);

      const answerCount = {
        Sapphire: 0,
        Ruby: 0,
        Pearl: 0,
        Emerald: 0,
      };
      const readableAnswers = [];

      quizData.forEach((q, questionIndex) => {
        const selectedAnswerId = values[q.question_id];
        const selectedAnswerIndex = q.answers.findIndex(
          (answer) => answer.answer_id === selectedAnswerId
        );
        const selectedAnswer = q.answers[selectedAnswerIndex];

        if (
          selectedAnswer?.gemType &&
          answerCount[selectedAnswer.gemType] !== undefined
        ) {
          answerCount[selectedAnswer.gemType]++;
        }

        readableAnswers.push({
          questionNumber: questionIndex + 1,
          question: q.question,
          selectedOption:
            selectedAnswerIndex >= 0
              ? String.fromCharCode(65 + selectedAnswerIndex)
              : "",
          selectedAnswer: selectedAnswer?.answer || "",
          selectedGem: selectedAnswer?.gemType || "",
          questionId: q.question_id,
          answerId: selectedAnswerId,
        });
      });

      const maxCount = Math.max(...Object.values(answerCount));
      if (maxCount === 0) {
        throw new Error("No valid answers selected.");
      }

      const topGem = Object.keys(answerCount).find(
        (gem) => answerCount[gem] === maxCount
      );
      const dominantGem = gemLabels[topGem];

      const results = {
        Sapphire: answerCount.Sapphire,
        Ruby: answerCount.Ruby,
        Pearl: answerCount.Pearl,
        Emerald: answerCount.Emerald,
      };

      const resultHTML = `
        <h3 class="text-2xl font-bold mb-2 text-primary">Your Dominant GEM Personality: <u>${dominantGem}</u></h3>
        <p class="font-semibold mb-2">Breakdown of answers:</p>
        <ul class="list-group list-group-flush mb-2">
          <li class="list-group-item">Sapphire (A): ${answerCount.Sapphire}</li>
          <li class="list-group-item">Ruby (B): ${answerCount.Ruby}</li>
          <li class="list-group-item">Pearl (C): ${answerCount.Pearl}</li>
          <li class="list-group-item">Emerald (D): ${answerCount.Emerald}</li>
        </ul>
        <p>You answered all ${quizData.length} questions.</p>
      `;

      const response = await uploadGemQuizPdf({
        category: dominantGem,
        results,
        user_id: userId,
        answers: readableAnswers,
        totalQuestions: quizData.length,
      });

      if (response.status) {
        setResultText(resultHTML);
      } else {
        throw new Error(response.msg || "Failed to save quiz results.");
      }
    } catch (error) {
      console.error("Error during result handling:", error);
      setErrorMessage(
        error.message ||
          "An error occurred while processing your quiz. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setResultText(null);
    setErrorMessage(null);
  };

  if (resultText) {
    return (
      <GemQuizResult
        resultText={resultText}
        onRetake={handleRetake}
        pageData={pageData}
      />
    );
  }

  return (
    <div className="card shadow p-4 py-5 rounded-2">
      <div className="alert alert-info">
        {pageData.quizTip ||
          "Tip: Don't pick what sounds ideal. Choose the first answer that feels true. What would you actually do, not what you think you should do?"}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitQuiz}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isSubmitting, errors, submitCount }) => (
          <Form>
            <div className="card-body">
              {quizData.map((q, index) => (
                <div key={q.question_id} className="mb-4 border-bottom pb-3">
                  <strong className="d-block fs-5 mb-2">{q.question}</strong>
                  <div className="d-flex flex-column gap-2">
                    {q.answers.map((a, i) => (
                      <div key={a.answer_id} className="form-check">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name={q.question_id}
                          id={`q${index}-${a.answer_id}`}
                          value={a.answer_id}
                          aria-label={`Answer ${String.fromCharCode(
                            65 + i
                          )} for question ${index + 1}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`q${index}-${a.answer_id}`}
                        >
                          {String.fromCharCode(65 + i)}: {a.answer}
                        </label>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name={q.question_id}
                    component="div"
                    className="text-danger mt-1"
                  />
                </div>
              ))}
            </div>

            <div className={`text-center ${style["header-button"]}`}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Processing..."
                  : pageData.submitButtonText || "Submit"}
              </button>
            </div>

            {submitCount > 0 && Object.keys(errors).length > 0 && (
              <div className="text-danger text-center mt-3">
                Please answer all questions before submitting the quiz.
              </div>
            )}

            {errorMessage && (
              <div className="text-danger text-center mt-3">{errorMessage}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
