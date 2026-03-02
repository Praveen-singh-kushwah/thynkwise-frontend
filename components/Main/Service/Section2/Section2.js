import Bounce1 from "@/components/Common/Animations/Bounce1";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import style from "./Section2.module.css";
import Section2Progress from "./Section2Progress";
export default function Section2() {
  return (
    <>
      <div
        className={
          "   sr-page " +
          style["about-area"] +
          " " +
          style["style-three"] +
          " " +
          style.upper
        }
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={" mr-lg-4 " + style["dreamit-about-thumb"]}>
                <img src="/assets/images/about/about-2.png" alt="img3" />
                {/* about-shape */}
                <Bounce1
                  elememt={"Bounce1"}
                  className={
                    "d-none  bounce-animate4 " + style["about-shape-thumb3"]
                  }
                >
                  <img src="/assets/images/about/about-shape4.png" alt="img2" />
                </Bounce1>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={style["consen-section-title"]}>
                <h5> About thynkWISE </h5>
                <h2> We Are Global Stakeholder </h2>
                <h2>
                  {" "}
                  Over 2000+ <span> Companies </span>
                </h2>
                <p className={style["about-text1"]}>
                  {" "}
                  Enhance principle-centered innovation over high standards, and
                  credibly orchestrate functional solutions for business
                  consultancy.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className={style["dreamit-icon-list"]}>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <FaArrowAltCircleRight />{" "}
                      <span> Orthogonal Process for Business Consultancy</span>
                    </li>
                    <li>
                      <FaArrowAltCircleRight />{" "}
                      <span>
                        {" "}
                        Innovate with advanced strategies for business
                        consultancy{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className={"d-flex " + style["progress-box"]}>
                <div className="d-flex">
                  <Section2Progress percent={80} />
                  <div className={style["circle-progress-title"]}>
                    <h4>
                      {" "}
                      Clients <br /> Satisfactions{" "}
                    </h4>
                  </div>
                </div>
                <div className="d-flex">
                  <Section2Progress percent={50} />
                  <div className={style["circle-progress-title"]}>
                    <h4>
                      {" "}
                      Finance <br /> Consulting{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className={style["about-button"]}>
                <Link href="#">
                  <div className="d-flex align-items-center gap-3">
                    <IoSettingsOutline /> More About
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
