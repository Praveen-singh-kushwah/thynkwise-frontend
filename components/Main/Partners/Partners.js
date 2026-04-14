"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import style from "./Partners.module.css";

export default function Partners({ partners }) {
  return (
    <div className="row gy-4">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="col-xl-4 col-lg-6 col-md-6"
        >
          <div className={"h-100 " + style["service-box-items-3"]}>
            <Link
              href={`/partners/${partner.slug}`}
              className="d-block h-100 text-black text-decoration-none"
            >
              <div className={style["service-img"]}>
                <Image
                  width={326}
                  height={91}
                  src={
                    partner.logo ||
                    "https://freefrontend.dev/assets/square-small.png"
                  }
                  alt={partner.name}
                  className="object-fit-contain"
                />
              </div>

              <div className={style["service-content"]}>
                <h3 className="text-center">{partner.name}</h3>

                <h6 className={style["service-subtitle"]}>
                  {partner.subtitle}
                </h6>

                <p className="text-justify">
                  {partner.desc}
                </p>
              </div>
            </Link>

            {partner.websiteUrl && (
              <div className={style["service-content"]}>
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                >
                  Visit Site <FaArrowRight />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
