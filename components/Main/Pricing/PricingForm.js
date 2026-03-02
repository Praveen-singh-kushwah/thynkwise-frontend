"use client";
import { addEnquiry } from "@/lib/ConatctLib";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
// import style from "./ContactUs.module.css";
import style from "./PricingTable.module.css";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Invalid Email"
    )
    .required("Email is required"),
  name: Yup.string().trim().required("Name is required"),
  company: Yup.string().trim().required("Company Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .test(
      "is-valid-phone",
      "Invalid phone number",
      (value) => value && value.length >= 5
    ),
});

// Initial Form Values
const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

const PricingForm = ({ data, onFormSubmitSuccess }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Include the selected plan name in the data sent to addEnquiry
      const formData = {
        ...values,
        plan: data, // Add the selected plan
      };

      const apiResponse = await addEnquiry(formData);
      if (apiResponse.status === "success") {
        setIsFormSubmitted(true);
        setErrorMsg(""); // Clear any previous error messages
        resetForm();

        // Trigger the callback after 5 seconds
        setTimeout(() => {
          if (onFormSubmitSuccess) {
            onFormSubmitSuccess();
          }
        }, 5000000);
      } else {
        setIsFormSubmitted(false);
        setErrorMsg(apiResponse.msg);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setIsFormSubmitted(false);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
      <div className={style["contact_from_box"]}>
        {isFormSubmitted ? (
          <>
            <div
              className="text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "20px",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                Thanks for reaching out! 🎉 Your details are in. Expect a reply
                within 24 hours!
              </p>
              {/* <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                Got it! We're on it and will connect with you soon. Keep an eye
                on your inbox for next steps.
              </p> */}
            </div>
            <div
              className={
                "d-flex justify-content-center mt-4 " + style["header-button"]
              }
            >
              <Link href="https://api.thynkwise.co.in/7-steps.pdf" target="_blank">
              <span className={style['btnlabel']}><FaDownload className={style["animateButton"]} /></span> 7 STEPS TO TOP 1% CLUB
              </Link>
            </div>
          </>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, isSubmitting, setFieldValue }) => (
              <Form className="php-email-form">
                <div className=" row">
                  <div className="col-lg-12">
                    <div className={"mb-30 " + style["form_box"]}>
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

                  <div className="col-lg-12">
                    <div className={"mb-30 " + style["form_box"]}>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Work Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className={"mb-30 " + style["form_box"]}>
                      <PhoneInput
                        name="phone"
                        id="phone"
                        international
                        defaultCountry="IN"
                        placeholder="Phone Number"
                        value={values.phone}
                        className={"phone-input"}
                        onChange={(value) => setFieldValue("phone", value)}
                      />
                      <ErrorMessage
                        name="phone"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className={"mb-30 " + style["form_box"]}>
                      <Field
                        type="text"
                        name="company"
                        className="form-control"
                        id="company"
                        placeholder="Company Name"
                      />
                      <ErrorMessage
                        name="company"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className={"text-center " + style["header-button"]}>
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Processing" : "Send Message"}
                    </button>
                  </div>
                  <div className="text-center col-md-12 mt-3">
                    {errorMsg && (
                      <small className="text-danger">{errorMsg}</small>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default PricingForm;
