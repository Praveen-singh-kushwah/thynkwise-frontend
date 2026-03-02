'use client';

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import GemQuiz from "./GemQuiz";
import style from "./GemQuizForm.module.css";

// ✅ Importing the API function
import { addGemQuizUser } from "@/lib/GemLib/GemLib";

const GemQuizForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Handles form submission and calls the API
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // 🚀 Call API to submit form values
      const response = await addGemQuizUser(values);
      console.log("API response:", response);

      // ✅ On success, show message and transition to quiz
      if (response?.status) {
        setSuccessMsg(response?.msg || "Form submitted successfully! Loading quiz...");
        setErrorMsg("");
        resetForm();

        // Show quiz after a short delay
        setTimeout(() => {
          setIsFormSubmitted(true);
          setSuccessMsg("");
        }, 1000);
      } else {
        // ❌ API responded with error
        setSuccessMsg("");
        setErrorMsg(response?.msg || "Failed to submit the form");
      }
    } catch (error) {
      // ⚠️ Catch unexpected errors
      console.error("Submission error:", error);
      setSuccessMsg("");
      setErrorMsg(error.message || "An unexpected error occurred");
    } finally {
      // 🔄 Always stop submitting spinner
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      {isFormSubmitted ? (
        <GemQuiz />
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
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .trim()
                  .matches(
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    "Invalid Email"
                  )
                  .required("Email is required"),
                name: Yup.string().trim().required("Name is required"),
                company_name: Yup.string().trim().required("Company Name is required"),
                phone: Yup.string()
                  .required("Phone number is required")
                  .test(
                    "is-valid-phone",
                    "Invalid phone number",
                    (value) => value && value.length >= 5
                  ),
              })}
            >
              {({ values, isSubmitting, setFieldValue }) => (
                <Form className="php-email-form">
                  <div className="gy-3 row">
                    <div className="col-lg-6">
                      <div className={"mb-3 " + style["form_box"]}>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
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
                      <div className={"mb-3 " + style["form_box"]}>
                        <Field
                          type="text"
                          name="company_name"
                          className="form-control"
                          id="company_name"
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
                      <div className={"mb-3 " + style["form_box"]}>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
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
                      <div className={"mb-3 " + style["form_box"]}>
                        <PhoneInput
                          name="phone"
                          id="phone"
                          international
                          defaultCountry="IN"
                          placeholder="Phone Number"
                          value={values.phone}
                          className="phone-input"
                          onChange={(value) => {
                            setFieldValue("phone", value);
                          }}
                        />
                        <ErrorMessage
                          name="phone"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className={"text-center " + style["header-button"]}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing" : "Submit"}
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
