"use client";

import { toaster } from "@/components/Common/Toaster";
import { addNewsLetter } from "@/lib/ConatctLib";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import * as Yup from "yup";
import style from "./Newsletter.module.css";

export default function NewsLetterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email format"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      const response = await addNewsLetter(values);
      resetForm(); // Reset the form immediately after submission
      if (response.status) {
        toaster("success", response.msg, {
          onclose: () => router.push("/"), // Navigate after toaster closes
        });
      } else {
        console.error("Form submission failed: ", response.msg);
        toaster("error", response.msg, {
          onclose: () => router.push("/"), // Navigate after toaster closes
        });
      }
    } catch (error) {
      console.error("Error during form submission: ", error);
      resetForm(); // Reset the form if there's an error
      toaster("error", "An unexpected error occurred.", {
        onclose: () => router.push("/"), // Navigate after toaster closes
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={style["subscribe_form"]}>
            {/* Email Input Field */}
            <Field
              type="email"
              name="email"
              id="email"
              className={`form-control ${style["custom-form"]}`}
              placeholder="Enter Your Email"
            />
            <ErrorMessage
              name="email"
              component="small"
              className="text-white"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn ${style["btn-custom"]}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Subscribe"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
