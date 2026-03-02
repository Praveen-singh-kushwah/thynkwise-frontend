import Image from "next/image";
import style from "./Section1.module.css";

export default function Section1({ data }) {
  if (!data) return null;

  const { heading, description, image } = data;

  const imageUrl = image?.url
    ? process.env.CMS_URL + image.url
    : "/assets/images/thynkwise/img5.png";

  return (
    <>
      <div
        className={
          "sr-page " +
          style["about-area"] +
          " " +
          style["style-three"] +
          " " +
          style.upper
        }
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div
                className={
                  "mr-lg-4 mobile-image " + style["dreamit-about-thumb"]
                }
              >
                <Image
                  width={525}
                  height={525}
                  priority
                  src={imageUrl}
                  alt={heading || "About us image"}
                  className="mobile-image h-auto"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <div className={style["consen-section-title"]}>
                <h2>{heading}</h2>

                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>

                <p className={"text-justify " + style["about-text1"]}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
