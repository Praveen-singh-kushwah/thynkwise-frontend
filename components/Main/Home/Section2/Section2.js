import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import style from "./Section2.module.css";

export default function Section2() {
  return (
    <>
      <div className={style["service-area"]}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 pl-0">
              <div
                className={
                  "text-center " +
                  style["consen-section-title"] +
                  " " +
                  style["mobile-center"]
                }
              >
                <h2 className={style["quote-text"]}>
                  "With <span className={style["highlight"]}><span style={{color:"#3959a7"}}>th</span><span >y<span style={{color:"#3959a7"}}>nk</span>WISE</span></span>,
                  transform your sales platforms from just being a workflow or a
                  reporting tool to a powerful engine for growth
                  and productivity"
                </h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
