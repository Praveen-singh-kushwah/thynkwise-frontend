"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import style from "./TestClient.module.css";
import { AssessmentRegistration, getCustomerQuestion } from "@/lib/QuestionLib";

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Invalid Email"
    )
    .required("Email is required"),
  name: Yup.string().required("Name is required"),
  company_name: Yup.string().required("Company Name is required"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/,
      "Invalid phone number format"
    )
    .required("Phone Number is required"),
});

// Initial Form Values
const initialValues = {
  name: "",
  company_name: "",
  email: "",
  phone: "",
};

// TestForm Component
const TestForm = ({ onSubmit }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (values) => {
    try {
      const apiResponse = await AssessmentRegistration(values);

      if (apiResponse.status && apiResponse.data?.id) {
        const user_id = apiResponse.data.id;

        const questionResponse = await getCustomerQuestion({ user_id });

        if (questionResponse.status && questionResponse.data.length > 0) {
          const titlesArray = questionResponse.data;
          const allQuestions = titlesArray.reduce((acc, title) => {
            return [...acc, ...title.questions];
          }, []);
          let lastQuestionId = 0;
          const answeredQuestions = {};
          allQuestions.forEach((question) => {
            const details = question.customer_question_details || [];
            details.forEach((detail) => {
              if (detail.user_id === user_id) {
                lastQuestionId = Math.max(
                  lastQuestionId,
                  parseInt(detail.question_id)
                );
                answeredQuestions[detail.question_id] = true;
              }
            });
          });
          onSubmit({
            ...values,
            user_id,
            questions: titlesArray,
            userProgress: lastQuestionId ? lastQuestionId : 0,
            answeredQuestions,
            isCompleted: lastQuestionId >= allQuestions.length,
          });
        } else {
          setErrorMsg(
            questionResponse.msg ||
              "No data found or failed to fetch questions."
          );
        }
      } else {
        setErrorMsg(apiResponse.msg || "Failed to register.");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
      console.error("Error during form submission:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className={style["contact_from_box"]}>
          <div className={"pb-4 " + style["contact_title"]}>
            <p>Welcome to our easy assessment! 😊</p>
            <p>It's all about understanding your needs and getting you on the right track.</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className={style["form_box"]}>
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

            <div className="col-lg-12">
              <div className={style["form_box"]}>
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

            <div className="col-lg-12">
              <div className={style["form_box"]}>
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

            <div className="col-lg-12">
              <div className={style["form_box"]}>
                <PhoneInput
                  name="phone"
                  international
                  defaultCountry="IN"
                  value={values.phone}
                  onChange={(value) => setFieldValue("phone", value)}
                  className={"phone-input"}
                  placeholder="Phone Number"
                />
                <ErrorMessage
                  name="phone"
                  component="small"
                  className="text-danger"
                />
              </div>
            </div>
            <div className={"text-center " + style["header-button"]}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Processing" : "Start Assessment"}
              </button>
            </div>
            {errorMsg && <div className="text-danger mt-3">{errorMsg}</div>}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
