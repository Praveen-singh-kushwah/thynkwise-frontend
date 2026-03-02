"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./GemQuizForm.module.css";
import GemQuizResult from "./GemQuizResult";
import { uploadGemQuizPdf } from "@/lib/GemLib/GemLib";

const gemMap = {
  0: "Sapphire (Fun-Loving, Outgoing)",
  1: "Ruby (Driven, Competitive)",
  2: "Pearl (Caring, Empathetic)",
  3: "Emerald (Logical, Organized)",
};

export default function GemQuiz({ quizData, userId }) {
  const [resultText, setResultText] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Initialize form values
  const initialValues = quizData.reduce((acc, q) => {
    acc[q.question_id] = "";
    return acc;
  }, {});

  // Validation schema
  const validationSchema = Yup.object().shape(
    quizData.reduce((acc, q) => {
      acc[q.question_id] = Yup.string().required("Please select an answer");
      return acc;
    }, {})
  );

  // Handle quiz submission
  const submitQuiz = async (values, { setSubmitting }) => {
    try {
      setErrorMessage(null); // Clear previous errors

      const answerCount = [0, 0, 0, 0];

      quizData.forEach((q) => {
        const selectedAnswerId = values[q.question_id];
        const answerIndex = q.answers.findIndex(
          (a) => a.answer_id === selectedAnswerId
        );
        if (answerIndex !== -1) {
          answerCount[answerIndex]++;
        }
      });

      // Find dominant gem
      const maxCount = Math.max(...answerCount);
      if (maxCount === 0) {
        throw new Error("No valid answers selected.");
      }
      const topIndex = answerCount.indexOf(maxCount);
      const dominantGem = gemMap[topIndex];

      // Prepare results
      const results = {
        Sapphire: answerCount[0],
        Ruby: answerCount[1],
        Pearl: answerCount[2],
        Emerald: answerCount[3],
      };

      // Generate result HTML
      const resultHTML = `
        <h3 class="text-2xl font-bold mb-2 text-primary">Your Dominant GEM Personality: <u>${dominantGem}</u></h3>
        <p class="font-semibold mb-2">Breakdown of answers:</p>
        <ul class="list-group list-group-flush mb-2">
          <li class="list-group-item">Sapphire (A): ${answerCount[0]}</li>
          <li class="list-group-item">Ruby (B): ${answerCount[1]}</li>
          <li class="list-group-item">Pearl (C): ${answerCount[2]}</li>
          <li class="list-group-item">Emerald (D): ${answerCount[3]}</li>
        </ul>
        <p>You answered all ${quizData.length} questions.</p>
      `;

      // Upload results
      const response = await uploadGemQuizPdf({
        category: dominantGem,
        results,
        user_id: userId,
      });

      if (response.status) {
        setResultText(resultHTML); // Only set resultText on success
      } else {
        throw new Error(response.msg || "Failed to upload quiz results.");
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

  // Handle quiz retake
  const handleRetake = () => {
    setResultText(null);
    setErrorMessage(null);
  };

  // Render results if successful
  if (resultText) {
    return <GemQuizResult resultText={resultText} onRetake={handleRetake} />;
  }

  return (
    <div className="card shadow p-4 py-5 rounded-2">
      <div className="alert alert-info">
        Tip: Don’t pick what sounds ideal. Choose the first answer that feels
        true. What would you actually do — not what you think you should do?
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
                {isSubmitting ? "Processing..." : "Submit"}
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
