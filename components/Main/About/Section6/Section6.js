import Bounce1 from "@/components/Common/Animations/Bounce1";
import style from "./Section.module.css";
import Image from "next/image";

export default function Section6({ data }) {
  if (!data) return null;

  const { heading, description, mainImage } = data;

  const imageUrl = mainImage?.url
    ? process.env.CMS_URL + mainImage.url
    : "/assets/images/thynkwise/img4.png";

  return (
    <>
      <div className={style["ceo-cod-area"]}>
        <div className="container">
          <div className="row align-items-center">
            {/* Text */}
            <div className="col-lg-6 col-md-12 ">
              <div className={style["consen-section-title"]}>
                <h2>{heading}</h2>

                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>

                <p className={"text-justify " + style["about-text2"]}>
                  {description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-md-12">
              <div className={style["dreamit-about-thumb1"]}>
                <Image
                  width={525}
                  height={525}
                  priority
                  src={imageUrl}
                  alt={heading || "Who we are image"}
                  className="mobile-image h-auto"
                />
              </div>

              {/* Animation stays unchanged */}
              <div className={style["about-shape-box"]}>
                <Bounce1
                  element={"div"}
                  className={style["about-shape-thumb"]}
                >
                  <img
                    src="/assets/images/logo/icon.png"
                    alt="thynkWISE logo – business execution platform 1"
                  />
                </Bounce1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
