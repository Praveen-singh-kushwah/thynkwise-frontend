import React from "react";
import style from "./Section3.module.css";
import Bounce1 from "@/components/Common/Animations/Bounce1";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Section8({ data }) {
  if (!data) return null;

  const imageUrl = data.mainImage?.url
    ? process.env.CMS_URL + data.mainImage.url
    : "/assets/images/thynkwise/img6.png";

  return (
    <>
      <div className={style["about-area"]}>
        <div className="container">
          <div className="row align-items-center">

            {/* Image Column */}
            <div className="col-lg-6 col-md-12">
              <div className={style["dreamit-about-thumb"]}>
                <Image
                  width={525}
                  height={525}
                  priority
                  src={imageUrl}
                  className="mobile-image h-auto"
                  alt={data.mainImage?.alternativeText || data.heading}
                />

                {/* animated shape (unchanged) */}
                <Bounce1
                  element={"div"}
                  className={
                    "d-md-none d-none d-lg-block " +
                    style["about-shape-thumb1"]
                  }
                >
                  <Image
                    width={222}
                    height={232}
                    src="/assets/images/logo/fastest-way-to.png"
                    alt="thynkWISE infographic"
                  />
                </Bounce1>
              </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-6 col-md-12">
              <div
                className={
                  "text-black pb-10 " + style["consen-section-title"]
                }
              >
                <h2>{data.heading}</h2>
              </div>

              <div className="lines pb-15">
                <div className="line" />
              </div>

              <div className={style["dreamit-icon-list"]}>
                <ul className="d-flex flex-column">
                  {data.listItem?.map((item, index) => (
                    <li key={index}>
                      <FaCheck />
                      <span className="fw-bold">{item.title}</span>

                      <p className={style["description"]}>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* bottom decorative shape */}
            <div className="col-md-4">
              <Bounce1
                element={"div"}
                className={style["about-shape-thumb2"]}
              >
                <Image
                  width={217}
                  height={213}
                  src="/assets/images/logo/icon.png"
                  alt=""
                />
              </Bounce1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
