import Link from "next/link";
import React from "react";
import style from "./pagebanner.module.css";
export default function Pagebanner({ title }) {
  return (
    <>
      <div className={" d-flex align-items-center " + style["breadcumb-area"]}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <div className={style["breadcumb-content"]}>
                <h1>{title}</h1>
              </div>
            </div>
            <div className={style["britcam-shape"]}>
              <div className={style["breadcumb-content"] + " " + style.upp}>
                <ul className="ps-0">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="fs-14">{title} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
