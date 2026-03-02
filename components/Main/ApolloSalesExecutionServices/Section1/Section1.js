import Bounce1 from "@/components/Common/Animations/Bounce1";
import Image from "next/image";
import style from "./Section1.module.css";

export default function Section1({ data }) {
  // Replace [City] with the provided city value
  const heading = data.heading.replace(/\[City\]/g, data.city);
  const description =
    data?.description
      ?.replace(/\[City\]/g, data?.city || "")
      .split("\n\n")
      .filter((para) => para.trim() !== "")
      .map((para) => `<p>${para}</p>`)
      .join("") || "";

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
            {/* Image Column - Order first on desktop, second on mobile */}
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
                  src={data.image.src}
                  alt={data.image.alt}
                  className="mobile-image h-auto"
                />
                {/* about-shape */}
                <Bounce1
                  elememt={"Bounce1"}
                  className={
                    "d-none bounce-animate4 " + style["about-shape-thumb3"]
                  }
                >
                  <img src="/assets/images/about/about-shape4.png" alt="img2" />
                </Bounce1>
              </div>
            </div>

            {/* Text Column - Order second on desktop, first on mobile */}
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <div className={style["consen-section-title"]}>
                <h2>{heading}</h2>
                <h3>{data.subheading}</h3>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <div
                  className={"text-justify " + style["about-text1"]}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
