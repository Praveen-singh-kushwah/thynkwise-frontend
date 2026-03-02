"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import style from "./NewPage.module.css";
import { addResourceUser } from "@/lib/Resource";

const NewPage = () => {
  const router = useRouter();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    // console.log("Form submitted with values:", values);
    try {
      const response = await addResourceUser(values); // call real API
      // console.log("addResourceUser response:", response);

      if (response?.status) {
        // <- check .status now
        const token = response?.data?.token || "";
        router.push(`/resource?k=${token}`);
        setSuccessMsg(
          response.msg || "Thanks, your message is sent successfully"
        );
        setErrorMsg("");
        resetForm();
      } else {
        setSuccessMsg("");
        setErrorMsg(response?.msg || "Failed to send message");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSuccessMsg("");
      setErrorMsg(error.message || "An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
          .test("isValidPhone", "Invalid phone number format", (value) => {
            return isValidPhoneNumber(value || ""); // Validate using react-phone-number-input
          })
          .required("Phone Number is required"),
      })}
    >
      {({ values, isSubmitting, setFieldValue, errors }) => {
        console.log("Validation errors:", errors);
        return (
          <div className="container">
            <div className="col-sm-12 col-md-12 col-lg-12 pl-0 pr-0 pt-30 pb-40">
              <div className={style["contact_from_box"]}>
                <Form className="php-email-form">
                  <div className="gy-3 row">
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
                      <div className={"mb-30 " + style["form_box"]}>
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
                      <div className={"mb-30 " + style["form_box"]}>
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
                      <div className={"mb-30 " + style["form_box"]}>
                        <PhoneInput
                          name="phone"
                          id="phone"
                          international
                          defaultCountry="IN"
                          placeholder="Phone Number"
                          value={values.phone}
                          className={"phone-input"}
                          onChange={(value) => {
                            console.log("Phone value:", value);
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
                      <button type="submit" disabled={isSubmitting}>
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
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default NewPage;
