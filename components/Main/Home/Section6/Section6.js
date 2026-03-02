import Link from "next/link";
import style from "./Section6.module.css";
import Image from "next/image";

export default function Section6({ data }) {
  if (!data) return null;

  const steps = data.processStep || [];

  return (
    <div className={style["process-area"]}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 col-md-12">
            <div className={"row " + style["process-bg"]}>

              {steps.map((step, i) => (
                <div className="col-sm-6 pl-10 pr-10" key={i}>
                  <div
                    className={
                      style["process-single-box"] +
                      " " +
                      (i === 1 ? style["upper"] : "") +
                      " " +
                      (i === 2 ? style["upper1"] : "") +
                      " " +
                      (i === 3 ? style["upper2"] : "")
                    }
                  >
                    <div className={style["process-number"]}>
                      <span>{step.stepNumber}</span>
                    </div>

                    <div className={style["process-title"]}>
                      <h3>
                        {step.title}{" "}
                        <span>{step.highlight}</span>
                      </h3>

                      <p>{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Shapes unchanged */}
              <div className="process-shape d-none d-lg-block">
                <div className={style["process-thumb"]}>
                  <Image
                    width={278}
                    height={278}
                    src="/assets/images/resource/process-shape.png"
                    alt="shape"
                  />
                </div>

                <div className={style["process-thumb1"]}>
                  <Image
                    width={158}
                    height={159}
                    src="/assets/images/resource/dreamit-shape.png"
                    alt="shape"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 col-md-12 pl-lg-50">

            <div className={"mt-4 mt-lg-0 " + style["consen-section-title"]}>
              <h2>{data.rightTitleLine1}</h2>
              <h2>
                <span>{data.rightTitleLine2}</span>
              </h2>
            </div>

            <div className="lines style-three pt-30 pb-10">
              <div className="line" />
            </div>

            <div className={style["dreamit-smart-title"]}>
              <p>{data.rightDescription}</p>
            </div>

            <div className={style["about-button"]}>
              <Link href="/contact-us">
                Let's get Started
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
