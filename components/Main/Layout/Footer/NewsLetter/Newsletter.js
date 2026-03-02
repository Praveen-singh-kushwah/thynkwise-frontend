import React from "react";
import NewsLetterForm from "./NewsLetterForm";
import style from "./Newsletter.module.css";
export default function Newsletter() {
  return (
    <>
      <div className={style["subscribe-area"]}>
        <div className="row ">
          <div className="col-lg-6 col-md-6">
            <div className={style["subscribe-title"]}>
              <p>Subscribe to our Newsletter</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <NewsLetterForm />
            <div id="status" />
          </div>
        </div>
      </div>
    </>
  );
}
