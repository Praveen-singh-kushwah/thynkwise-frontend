"use client";
import React, { useState } from "react";
import style from "./Section7.module.css";
import Bounce1 from "@/components/Common/Animations/Bounce1";
import Section1 from "./Section7Progress/Section1";
import Section2 from "./Section7Progress/Section2";
import Section3 from "./Section7Progress/Section3";
export default function Section7() {
  const [percent] = useState(50);
  const [percent1] = useState(60);
  const [percent2] = useState(30);
  return (
    <>
      <div className={style["skill-area"]}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mx-auto">
              <div className="extra-animation-div">
                <div className={"white " + style["consen-section-title"]}>
                  <h2> Join the Community to learn </h2>
                  <h2>
                    {" "}
                    About our <span>Company</span>
                  </h2>
                </div>
                <div className="lines style-three upper pt-30 pb-10">
                  <div className="line" />
                </div>
                <div className={style["dreamit-smart-title"]}>
                  <p className={style["slill-text"]}>
                  Generate client-focused communities and strategic products continuously.
                  </p>
                </div>
              </div>
              <div className={" pt-20 " + style["prossess-ber-plugin"]}>
                <div className="row gy-3">
                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <div className={style.title}>Business Strategy</div>
                      <div className="">
                        <Section1 percent={percent} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <div className={style.title}>Technology Consulting</div>
                      <div className="">
                        <Section2 percent={percent1} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <div className={style.title}>Product Development</div>
                      <div className="">
                        <Section3 percent={percent2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-lg-block">
              <div
                className={
                  " mt-4 mt-lg-0 pl-50 ml-1 " +
                  style["slill-single-thumb"] +
                  " " +
                  style["pl-50"]
                }
              >
                <img src="/assets/images/resource/skill.png" alt="skill-1" />
                {/* thumb content */}
                <div className={style["skill-thumb-content"]}>
                  <div className={style["skill-title"]}>
                    <h3 className="counter"> 17 </h3>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div>
                {/* skill shape */}
                <div
                  className={
                    "d-none d-xl-block " +
                    style["skill-shape"] +
                    " " +
                    style["dance"]
                  }
                >
                  <img
                    src="/assets/images/resource/skill-shape.png"
                    alt="shape-2"
                  />
                </div>
                <Bounce1
                  element={"div"}
                  className={
                    "d-none d-xl-block " +
                    style["skill-shape1"] +
                    " " +
                    style["bounce-animate2"]
                  }
                >
                  <img src="/assets/images/logo/icon.png" alt="shape-3" />
                </Bounce1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
