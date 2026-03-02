import React from "react";
import Section5Swiper from "./Section5Swiper";
import style from "./Section5.module.css"
export default function Section5() {
  const data = [
    {
      id: 1,
      image: "/assets/images/resource/allian.png",
    },
    {
      id: 2,
      image: "/assets/images/resource/figma.png",
    },
    {
      id: 3,
      image: "/assets/images/resource/google.png",
    },
    {
      id: 4,
      image: "/assets/images/resource/redit.png",
    },
  ];
  return (
    <>
      <div className={style['brand-section']+" "+style['srv-page']}>
        <div className="container">
          <div className="row">
            <div className="brand-list owl-carousel">
              <Section5Swiper data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
