"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import GemQuiz from "./GemQuiz";
import style from "./GemQuizForm.module.css";
import { addGemQuizUser, getQuizQuestion } from "@/lib/GemLib/GemLib";

const GemQuizForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [userId, setUserId] = useState(null); // ✅ Store user ID to pass to GemQuiz

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await addGemQuizUser(values);
      console.log("API response:", response);

      const isAllowedToProceed =
        response?.status || response?.msg === "User already exist!";

      if (isAllowedToProceed) {
        // ✅ Always treat as success
        setSuccessMsg("Form submitted successfully! Loading quiz...");
        setErrorMsg("");

        // ✅ Set user ID from response
        if (response?.data?.id) {
          setUserId(response.data.id);
        }

        // ✅ Reset form only on first-time user
        if (response?.status) {
          resetForm();
        }

        // ✅ Always try to fetch quiz questions
        try {
          const quizRes = await getQuizQuestion();
          if (quizRes?.status) {
            setQuizData(quizRes.data);
          } else {
            setErrorMsg("Failed to load quiz questions.");
            return;
          }
        } catch (err) {
          setErrorMsg("Quiz loading error.");
          return;
        }

        // ✅ Proceed to quiz
        setTimeout(() => {
          setIsFormSubmitted(true);
          setSuccessMsg("");
        }, 1000);
      } else {
        setSuccessMsg("");
        setErrorMsg(response?.msg || "Form submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSuccessMsg("");
      setErrorMsg(error.message || "Unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      {isFormSubmitted && quizData ? (
        <GemQuiz quizData={quizData} userId={userId} />
      ) : (
        <div className="col-sm-12 col-md-12 col-lg-12 p-0 pt-4 pb-5">
          <div className={style["contact_from_box"]}>
            <Formik
              initialValues={{
                name: "",
                company_name: "",
                email: "",
                phone: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is required"),
                company_name: Yup.string().required("Company Name is required"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("Email is required"),
                phone: Yup.string()
                  .test(
                    "isValidPhone",
                    "Invalid phone number format",
                    (value) => {
                      return isValidPhoneNumber(value || ""); // Validate using react-phone-number-input
                    }
                  )
                  .required("Phone Number is required"),
              })}
            >
              {({ values, setFieldValue, isSubmitting }) => (
                <Form className="php-email-form">
                  <div className="gy-3 row">
                    <div className="col-lg-6">
                      <div className={`mb-3 ${style["form_box"]}`}>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={`mb-3 ${style["form_box"]}`}>
                        <Field
                          type="text"
                          name="company_name"
                          className="form-control"
                          placeholder="Company Name"
                        />
                        <ErrorMessage
                          name="company_name"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={`mb-3 ${style["form_box"]}`}>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={`mb-3 ${style["form_box"]}`}>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={values.phone}
                          onChange={(value) => setFieldValue("phone", value)}
                          className="phone-input"
                        />
                        <ErrorMessage
                          name="phone"
                          component="small"
                          className="text-danger"
                        />
                      </div>
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
                    <div className="text-center col-md-12">
                      {successMsg && (
                        <small className="text-success">{successMsg}</small>
                      )}
                      {errorMsg && (
                        <small className="text-danger">{errorMsg}</small>
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default GemQuizForm;
