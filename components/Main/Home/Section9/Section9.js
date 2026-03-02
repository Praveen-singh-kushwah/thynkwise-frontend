import React from "react";
import Link from "next/link";
import style from "./Section3.module.css";
// import { FaPause } from "react-icons/fa";
export default function Section9() {
  return (
    <>
      <div className="py-5">
        <div className={style["call-do-action-section"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <div
                className={
                  style["call-do-action-video"] + " " + "text-center mb-35"
                }
              >
                <div className={style["video-icon-cda"]}>
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="#"
                  >
                    <FaPause />
                  </a>
                </div>
              </div> */}
                <div
                  className={
                    style["call-do-action-content"] + " " + "text-center"
                  }
                >
                  <h2 className="text-white">
                    Ready to transform your sales process? <br />
                    <span className="sub-title">
                      {" "}
                      Contact us today to discover how thynkWISE<br/> can help your
                      team achieve exceptional results.
                    </span>
                  </h2>
                  {/* <p className="text-white">
                    Tailored for your business, ensuring you receive quality IT
                    services.
                  </p> */}
                  <div className={" btn-cda mt-40 " + style["btn-common"]}>
                  <Link href="/contact-us">Contact Us</Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
