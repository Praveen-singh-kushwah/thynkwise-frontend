import React from "react";
import style from "./Section2.module.css";
import Section2Tab from "./Section2Tab";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
export default function Section2() {
  return (
    <>
      <div className={style["feature-area"] + " " + style["style-two"]}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-12 text-center">
              <div className={style["consen-section-title"]}>
                <h2> Our Approach </h2>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-12">
              <div className={style["consen-section-title"]}>
                <h5> Our Approach </h5>
              </div>
              <div className={style["dreamit-icon-list"]}>
                <ul>
                  <li>
                   <FaRegArrowAltCircleRight />
                    <span> 
                    Optimize Orthogonal Processes for Business Consultancy </span>
                  </li>
                  <li>
                   <FaRegArrowAltCircleRight />
                    <span> Innovate modern strategies for business consultancy. </span>
                  </li>
                  <li>
                   <FaRegArrowAltCircleRight />
                    <span> Advance Modern Business Practices </span>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12">
              <Section2Tab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
