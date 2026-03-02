import Image from "next/image";
import React from "react";
import style from "./banner.module.css";
export default function Banner() {
  return (
    <>
      <section className={style["service-area"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Image
                width={850}
                height={400}
                src="/assets/images/bg/banner.jpg"
                className="object-cover rounded-3"
                alt="thynkWISE sales transformation banner showcasing business growth strategy"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
