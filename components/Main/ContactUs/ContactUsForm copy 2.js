"use client";
import { addContact, getCompanies } from "@/lib/ConatctLib";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import AsyncSelect from "react-select/async";
import { useDebouncedCallback } from "use-debounce";
import * as Yup from "yup";
import style from "./ContactUs.module.css";

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
  // cin_number: "", // ⬅️ captured from company select
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

  // ⬇️ AsyncSelect loading indicator (shown on the control)
  const [companyLoading, setCompanyLoading] = useState(false);

  // ⬇️ duplication / race guards + simple cache
  const lastQueryRef = useRef("");
  const lastOptionsRef = useRef([]);
  const seqRef = useRef(0);

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

  // // Fetch unit options
  // useEffect(() => {
  //   async function fetchData() {
  //     // setLoading(true);
  //     const [res1] = await Promise.all([getColleges({ limit: 10 })]);
  //     console.log("res1: ", res1);
  //     if (res1?.data?.length > 0) {
  //       console.log("res1?.data: ", res1?.data);
  //       setColleges(
  //         res1.data.map((item) => ({
  //           value: item.id,
  //           label: `${item.college}`,
  //         }))
  //       );
  //     }
  //     // setLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // ⬇️ Debounced loader for AsyncSelect to avoid multiple rapid API calls
  const debouncedLoad = useDebouncedCallback(async (input, resolve) => {
    const q = (input || "").trim();

    // show nothing until user types at least 4 chars
    if (q.length < 4) {
      resolve([]);
      return;
    }

    // dedupe: if same as last query, reuse cached options (no fetch)
    if (q === lastQueryRef.current && lastOptionsRef.current.length > 0) {
      resolve(lastOptionsRef.current);
      return;
    }

    const mySeq = ++seqRef.current;
    setCompanyLoading(true);
    try {
      // POST { company_name_search: q }
      const resp = await getCompanies(q);
      console.log(resp, "resp")
      const list = resp?.data?.company_list || [];
      const options = list.map((item) => ({
        value: item.company_name,
        label: item.company_name, // only company name shown
        cin: item.cin_number,
        type: item.company_type,
      }));

      // only apply if still latest sequence
      if (mySeq === seqRef.current) {
        lastQueryRef.current = q;
        lastOptionsRef.current = options;
        resolve(options);
      }
    } catch (e) {
      // on error return empty to AsyncSelect
      if (mySeq === seqRef.current) {
        resolve([]);
      }
    } finally {
      if (mySeq === seqRef.current) {
        setCompanyLoading(false);
      }
    }
  }, 600); // 600ms debounce

  // ⬇️ AsyncSelect loadOptions signature: (inputValue, callback) => void | Promise<Options>
  const loadCompanyOptions = (inputValue, callback) => {
    // Do not fetch immediately; use debounced loader to prevent multiple calls
    debouncedLoad(inputValue, callback);
    // Return nothing; we'll call callback when debounced load finishes
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

                {/* <div className="col-lg-6">
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
                </div> */}
                <div className="col-lg-6">
                  <div className={"mb-30 " + style["form_box"]}>
                    <AsyncSelect
                      id="company_name"
                      inputId="company_name"              // optional but fine to keep stable
                      instanceId="companyNameSelect"      // 🔥 NEW: fixes "live-region" id mismatch
                      classNamePrefix="react-select"
                      placeholder="Company Name"
                      isClearable
                      cacheOptions
                      defaultOptions={false} // ⬅️ show nothing until user searches
                      loadOptions={loadCompanyOptions}
                      isLoading={companyLoading}
                      value={
                        values.company_name
                          ? { label: values.company_name, value: values.company_name }
                          : null
                      }
                      noOptionsMessage={({ inputValue }) =>
                        (inputValue || "").trim().length < 4
                          ? "Type at least 4 characters"
                          : companyLoading
                            ? "Loading..."
                            : "No results"
                      }
                      onChange={(selected) => {
                        if (selected) {
                          setFieldValue("company_name", selected.value);
                          setFieldValue("cin_number", selected.cin); // ⬅️ Save cin_number too
                        } else {
                          setFieldValue("company_name", "");
                          setFieldValue("cin_number", "");
                        }
                      }}
                      // Prevent AsyncSelect from firing extra loads on focus/blur
                      // It will only call loadOptions when input changes due to our debounced loader
                      filterOption={() => true}
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
                      all that apply):
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
