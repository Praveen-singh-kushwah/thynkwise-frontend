"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AssessmentFramework from "./AssessmentFramework";
import style from "./TestClient.module.css";
import TestForm from "./TestForm";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Pagebanner from "@/components/Common/Pagebanner";

export default function TestFormDetail() {
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleFormSubmit = (values) => {
    setUserInfo(values);
    setAssessmentStarted(true);
  };

  return (
    <>
      {!assessmentStarted && (
        <>
          <Header />
          <Pagebanner title={"Assessment Framework"} />{" "}
        </>
      )}
      <div
        className={`${assessmentStarted ? "py-3" : "pt-20 pb-15"} ${
          style["contact-us"]
        }`}
      >
        <div className="container">
          <div className="row">
            <div
              className={
                assessmentStarted
                  ? "col-lg-12"
                  : "col-sm-12 col-md-6 col-lg-6 p-0"
              }
            >
              {!assessmentStarted ? (
                <TestForm onSubmit={handleFormSubmit} />
              ) : (
                <div className="align-items-center d-flex flex-column gap-2 justify-content-center py-2">
                  <Link href="/">
                    <Image
                      src={process.env.SITE_LOGO}
                      alt="Site Logo"
                      width={175}
                      height={95}
                      priority
                      quality={100}
                      className="w-100"
                    />
                  </Link>
                  <AssessmentFramework userInfo={userInfo} />
                </div>
              )}
            </div>

            {!assessmentStarted && (
              <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
                <div className={style["cda-content-area"]}>
                  <div className={"pb-4 " + style["contact_title"]}>
                    <h2 className="ps-5">What Happens Next?</h2>
                  </div>
                  <div
                    className={
                      "d-md-flex d-sm-block align-items-center gap-3  " +
                      style["cda-single-content"]
                    }
                  >
                    <div className={"px-3 " + style["cda-icon"]}>1</div>
                    <div className={style["cda-content-inner"]}>
                      <h4 className="fs-4">
                        Expert insights{" "}
                        <span className="fs-5">
                          tailored to your business needs.
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div
                    className={
                      "d-md-flex d-sm-block align-items-center gap-3 " +
                      style["cda-single-content"]
                    }
                  >
                    <div className={"px-3 " + style["cda-icon"]}>2</div>
                    <div className={style["cda-content-inner"]}>
                      <h4 className="fs-4">
                        Discover growth
                        <span className="fs-5">
                          {" "}
                          opportunities for better performance.
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                  <div
                    className={
                      "d-md-flex d-sm-block align-items-center gap-3 " +
                      style["cda-single-content"]
                    }
                  >
                    <div className={"px-3 " + style["cda-icon"]}>3</div>
                    <div className={style["cda-content-inner"]}>
                      <h4 className="fs-4">
                        Personalized plan
                        <span className="fs-5">
                          {" "}
                          to leverage strengths and solve challenges.
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                  <div
                    className={
                      "d-md-flex d-sm-block align-items-center gap-3 " +
                      style["cda-single-content"]
                    }
                  >
                    <div className={"px-3 " + style["cda-icon"]}>4</div>
                    <div className={style["cda-content-inner"]}>
                      <h4 className="fs-4">
                        Optimize for success
                        <span className="fs-5">
                          {" "}
                          with long-term goal alignment.
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {!assessmentStarted && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}
