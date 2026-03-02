'use client';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from "./GemQuizForm.module.css";
import GemQuizResult from './GemQuizResult';

const gemMap = {
  0: 'Sapphire (Fun-Loving, Outgoing)',
  1: 'Ruby (Driven, Competitive)',
  2: 'Pearl (Caring, Empathetic)',
  3: 'Emerald (Logical, Organized)',
};

export default function GemQuiz({ quizData }) {
  const [resultText, setResultText] = useState(null);

  const initialValues = quizData.reduce((acc, q) => {
    acc[q.question_id] = '';
    return acc;
  }, {});

  const validationSchema = Yup.object().shape(
    quizData.reduce((acc, q) => {
      acc[q.question_id] = Yup.string().required('Please select an answer');
      return acc;
    }, {})
  );

  const submitQuiz = async (values, { setSubmitting }) => {
    try {
      const answerCount = [0, 0, 0, 0]; // A, B, C, D counts

      quizData.forEach((q) => {
        const selectedAnswerId = values[q.question_id];
        const answerIndex = q.answers.findIndex(a => a.answer_id === selectedAnswerId);
        if (answerIndex !== -1) answerCount[answerIndex]++;
      });

      const topIndex = answerCount.indexOf(Math.max(...answerCount));
      const dominantGem = gemMap[topIndex];

      const resultHTML = `
        <h3 class="text-2xl font-bold mb-2">Your Dominant GEM Personality: <u>${dominantGem}</u></h3>
        <p class="font-semibold">Breakdown:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Sapphire (A): ${answerCount[0]}</li>
          <li class="list-group-item">Ruby (B): ${answerCount[1]}</li>
          <li class="list-group-item">Pearl (C): ${answerCount[2]}</li>
          <li class="list-group-item">Emerald (D): ${answerCount[3]}</li>
        </ul>
      `;

      setResultText(resultHTML);
    } catch (error) {
      console.error("Error calculating quiz result:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setResultText(null);
  };

  if (resultText) {
    return <GemQuizResult resultText={resultText} onRetake={handleRetake} />;
  }

  return (
    <div className="card shadow p-4 py-5 rounded-2">
      <h2 className="card-title text-center fs-3 mb-4">GEM Personality Assessment</h2>
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
                        />
                        <label className="form-check-label" htmlFor={`q${index}-${a.answer_id}`}>
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

            <div className={'text-end ' + style["header-button"]}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Submit Answers
              </button>
            </div>

            {submitCount > 0 && Object.keys(errors).length > 0 && (
              <div className="text-danger text-center mt-3">
                Please answer all questions before submitting the quiz.
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
