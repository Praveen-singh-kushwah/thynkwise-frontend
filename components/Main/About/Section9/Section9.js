import Bounce1 from "@/components/Common/Animations/Bounce1";
import style from "./Section1.module.css";
import Image from "next/image";

export default function Section9({ data }) {
  if (!data) return null;

  const imageUrl = data.mainImage?.url
    ? process.env.CMS_URL + data.mainImage.url
    : "/assets/images/thynkwise/img8.png";

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

            {/* Text Column */}
            <div className="col-lg-6 col-md-12">
              <div className={style["consen-section-title"]}>
                <h5>{data.heading}</h5>

                <p className={"text-justify " + style["about-text1"]}>
                  {data.description}
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 col-md-12">
              <div
                className={"mr-lg-4 " + style["dreamit-about-thumb"]}
              >
                <Image
                  width={535}
                  height={400}
                  src={imageUrl}
                  alt={data.mainImage?.alternativeText || data.heading}
                  className="mobile-image h-auto"
                />

                {/* decorative shape */}
                <Bounce1
                  elememt={"Bounce1"}
                  className={
                    "d-none bounce-animate4 " +
                    style["about-shape-thumb3"]
                  }
                >
                  <img
                    src="/assets/images/about/about-shape4.png"
                    alt=""
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
