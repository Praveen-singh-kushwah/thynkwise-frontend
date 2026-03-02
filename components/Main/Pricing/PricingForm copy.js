"use client";
import { addEnquiry } from "@/lib/ConatctLib";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
// import style from "./ContactUs.module.css";
import style from "./PricingTable.module.css";
// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().trim()
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
  const [successMsg, setSuccessMsg] = useState("");
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
        setSuccessMsg("Thanks, your message is sent successfully");
        setErrorMsg("");
        resetForm();
        // Trigger the callback to close the modal
        // Refresh the page
        setTimeout(() => {
          if (onFormSubmitSuccess) {
            onFormSubmitSuccess();
          }
        }, 1000);
      } else {
        setSuccessMsg("");
        setErrorMsg(apiResponse.msg);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSuccessMsg("");
      setErrorMsg(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <div className="col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
          <div className={style["contact_from_box"]}>
            <Form className="php-email-form">
              <div className="gy-3 row">
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
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PricingForm;
