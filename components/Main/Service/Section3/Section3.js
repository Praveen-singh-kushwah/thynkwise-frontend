import React from "react";
import style from "./Section3.module.css";
import { FaPause } from "react-icons/fa";
import Link from "next/link";
export default function Section3() {
  return (
    <>
      <div className={style["call-do-action-section"]}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
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
              </div>
              <div
                className={
                  style["call-do-action-content"] + " " + "text-center"
                }
              >
                <h2 className="text-white">
                  We deliver solutions to build trusting <br />
                  <span className="sub-title">
                    {" "}
                    Relationships with our clients.
                  </span>
                </h2>
                <p className="text-white">
                  Tailored for your business, ensuring you receive quality IT
                  services.
                </p>
                <div className={" btn-cda mt-40 " + style["btn-common"]}>
                  <Link href="/contact-us">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
