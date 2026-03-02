import React from "react";
import style from "./Section3.module.css";
import Bounce1 from "@/components/Common/Animations/Bounce1";
import { FaCheck, FaLink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Section3({ data }) {
  if (!data) return null;

  const aboutImage =
    data?.image?.url
      ? process.env.CMS_URL + data.image.url
      : "/assets/images/thynkwise/img7.webp";

  return (
    <div className={style["about-area"]}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12">
            <div className={style["dreamit-about-thumb"]}>
              <Image
                width={546}
                height={535}
                priority
                src={aboutImage}
                alt="About thynkWISE"
                className={"mobile-image h-auto " + style["mobile-image"]}
              />

              <Bounce1
                element={"div"}
                className={"d-none d-lg-block " + style["about-shape-thumb1"]}
              >
                <Image
                  width={222}
                  height={232}
                  src="/assets/images/logo/fastest-way-to.png"
                  alt="Methodology graphic"
                />
              </Bounce1>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className={"white pb-10 " + style["consen-section-title"]}>
              <h2>{data.heading}</h2>

              {data.description?.split("\n\n").map((p, i) => (
                <p key={i} className="text-justify text-black">
                  {p}
                </p>
              ))}
            </div>

            <div className="lines pb-15">
              <div className="line" />
            </div>

            {/* FEATURE ITEMS */}
            <div className={style["dreamit-icon-list"]}>
              <ul className="d-flex flex-column">

                {data.about_feature_item?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link || "#"}
                    aria-label={item.title}
                  >
                    <li>
                      <FaCheck />

                      <span className="fw-bold">
                        {item.title}
                        <span className={style["link-icon"]}>
                          <FaLink />
                        </span>
                      </span>

                      <p className={style["description"]}>
                        {item.description}
                      </p>
                    </li>
                  </Link>
                ))}

              </ul>
            </div>

          </div>

          {/* DECORATION */}
          <div className="col-md-4">
            <Bounce1
              element={"div"}
              className={"d-none d-lg-block " + style["about-shape-thumb2"]}
            >
              <Image
                width={217}
                height={213}
                src="/assets/images/logo/icon.png"
                alt="thynkWISE logo"
              />
            </Bounce1>
          </div>

        </div>
      </div>
    </div>
  );
}
