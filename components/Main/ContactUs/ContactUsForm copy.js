"use client";
import sendEmail from "@/lib/SendgridLib";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import style from "./ContactUs.module.css";
import { addContact } from "@/lib/ConatctLib";

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
  position: Yup.string().trim().required("Position is required"),
  company_name: Yup.string().trim().required("Company Name is required"),
  phone: Yup.string()
    .test("isValidPhone", "Invalid phone number format", (value) => {
      return isValidPhoneNumber(value || ""); // Validate using react-phone-number-input
    })
    .required("Phone Number is required"),
  message: Yup.string().trim().required("Message is required"),
  // preferences: Yup.array()
  //   .min(1, "At least one preference is required")
  //   .required("Preferences are required"),
  // other_preference: Yup.string().when("preferences", {
  //   is: (preferences) => preferences && preferences.includes("Others"),
  //   then: (schema) => schema.required("Please specify your preference"),
  //   otherwise: (schema) => schema.optional(),
  // }),
});

// Initial Form Values
const initialValues = {
  name: "",
  company_name: "",
  email: "",
  phone: "",
  message: "",
  // preferences: [],
  // other_preference: "",
  position: "",
};

const ContactForm = () => {
  const router = useRouter();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const apiResponse = await addContact(values);
      if (apiResponse.status == "success") {
        // var params = {
        //   ...values,
        //   to_email: "partner@thynkwise.co.in",
        //   // to_email: "sooraj.ksoft@gmail.com",
        // };
        // const response = await sendEmail(params);
        setSuccessMsg("Thanks, your message is sent successfully");
        setErrorMsg("");
        resetForm();
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
        <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
          <div className={style["contact_from_box"]}>
            <div className={"pb-4 " + style["contact_title"]}>
              <h2 className="mb-2">Get In Touch</h2>
              <p>
                Please fill out the form below, and a member of our team will
                get back to you shortly.
              </p>
            </div>
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
                      placeholder="Work Email"
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
                    <Field
                      type="text"
                      className="form-control"
                      name="position"
                      id="position"
                      placeholder="Position"
                    />
                    <ErrorMessage
                      name="position"
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
                {/* <div className="col-lg-12">
                  <div className={"mb-30 "}>
                    <label className="form-label">
                      Current CRM Systems Implemented: (Please select
                      all that apply):
                    </label>
                    <div
                      role="group"
                      aria-labelledby="checkbox-group"
                      className={"checkbox-container d-grid gap-3"}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "10px",
                      }}
                    >
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="Salesforce"
                          className={style["custom-checkbox"]}
                        />
                        <span>Salesforce</span>
                      </label>
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="HubSpot"
                          className={style["custom-checkbox"]}
                        />
                        <span>HubSpot</span>
                      </label>
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="Freshsales"
                          className={style["custom-checkbox"]}
                        />
                        <span>Freshsales</span>
                      </label>
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="Microsoft Dynamics"
                          className={style["custom-checkbox"]}
                        />
                        <span>Microsoft Dynamics</span>
                      </label>
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="Apollo"
                          className={style["custom-checkbox"]}
                        />
                        <span>Apollo</span>
                      </label>
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="Open to suggestions"
                          className={style["custom-checkbox"]}
                        />
                        <span>Open to suggestions</span>
                      </label>
                      <label
                        className={
                          "align-items-center checkbox-item d-flex gap-2"
                        }
                      >
                        <Field
                          type="checkbox"
                          name="preferences"
                          value="Others"
                          className={style["custom-checkbox"]}
                        />
                        <span>Others</span>
                      </label>
                      {values.preferences.includes("Others") && (
                        <div className="mt-2">
                          <Field
                            type="text"
                            name="other_preference"
                            className="form-control"
                            placeholder="Please specify"
                          />
                          <ErrorMessage
                            name="other_preference"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      )}
                    </div>
                    <ErrorMessage
                      name="preferences"
                      component="small"
                      className="text-danger"
                    />
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className={"mb-30 " + style["form_box"]}>
                    <Field
                      as="textarea"
                      className="form-control mil-up"
                      name="message"
                      rows={3}
                      placeholder="How can we help you? (Please provide a brief description of your needs or questions)"
                    />
                    <ErrorMessage
                      name="message"
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

export default ContactForm;
