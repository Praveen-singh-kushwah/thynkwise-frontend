import React from "react";
import style from "./Section.module.css";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Section4({ data }) {
  if (!data) return null;

  const imageUrl =
    data?.image?.url
      ? process.env.CMS_URL + data.image.url
      : "/assets/images/logo/about3.png";

  return (
    <div className={style["ceo-cod-area"]}>
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className={style["consen-section-title"]}>

              <h2>{data.heading}</h2>

              <div className="lines style-three pt-20 pb-10">
                <div className="line" />
              </div>

              <div
                className={"text-justify " + style["about-text2"]}
                dangerouslySetInnerHTML={{
                  __html: data.description || "",
                }}
              />
            </div>

            {/* FEATURES */}
            <div className={style["consen-section-title"]}>
              <div className={style["dreamit-icon-list"]}>
                <ul className="p-0 d-flex flex-column">

                  {data.whyThynkwiseItem?.map((item, i) => (
                    <li key={i}>
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
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12">
            <div className={style["dreamit-about-thumb1"]}>
              <Image
                width={450}
                height={450}
                priority
                quality={100}
                src={imageUrl}
                alt="Why thynkWISE"
                className="mobile-image"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
