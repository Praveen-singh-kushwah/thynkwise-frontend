import Image from "next/image";
import Link from "next/link";
import style from "./Section1.module.css";
import { FaPlus } from "react-icons/fa6";
export default function Section1() {
  return (
    <>
      <div className={"d-flex align-items-center " + style["slider-area"]}>
        {/* <Image
          src="/assets/images/bg/1.jpg"
          fill
          style={{
            zIndex: -1,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          quality={90}
          alt="Background image for slider area"
          priority
        /> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className={style["slider-content"]}>
                <h3> Partner with thynkWISE </h3>
                <h1>
                  {" "}
                  Accelerate Your Sales Process
                  <br /> with <span>thynkWISE</span>{" "}
                </h1>

                <p>
                  {" "}
                  We help growth-minded business leaders from tech companies
                  double their revenues without relying on manual systems,
                  unpredictable SEO, or directionless cold calls and email
                  outreach-by building repeatable systems and upgrading their
                  closing skills.
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className={style["banner-buttons"]}>
                <div className={style["slider-button"]}>
                  <Link href={process.env.SITE_URL + "/contact-us"}>
                    <div className="d-flex">
                      Work Together <FaPlus size={20} />
                    </div>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className={style["slider-thumb"]}>
                <Image
                  src="/assets/images/thynkwise/img1.webp"
                  width={451}
                  height={459}
                  quality={90}
                  className="h-auto img-fluid"
                  alt="Illustration: thynkWISE accelerates sales"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
                  priority
                  lazyBoundary="responsive"
                />
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape d-none d-lg-block ">
              <div className={style["slider-shape-thumb"]}>
                <Image
                  width={217}
                  height={213}
                  src="/assets/images/logo/icon.png"
                  alt="shape_1"
                  priority
                />
              </div>
              <div className={style["slider-shape-thumb2"]}>
                <Image
                  width={361}
                  height={376}
                  src="/assets/images/slider/hero-shape2.png"
                  alt="shape_2"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
