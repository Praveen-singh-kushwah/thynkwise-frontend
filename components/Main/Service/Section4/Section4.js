import React from "react";
import style from "./Section4.module.css"
import Section4Swiper from "./Section4Swiper";

export default function Section4() {
  const data =[
    {
      id:1,
      image_thumb:"/assets/images/resource/testi1.png",
      title:"Philip Anthorpy",
      sub_title:"UI Designer",
      description:"“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.",
    },
    {
      id:2,
      image_thumb:"/assets/images/resource/testi3.png",
      title:"Shilpa Shethy",
      sub_title:"CEO, Founder",
      description:"“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.",
    },
    {
      id:3,
      image_thumb:"/assets/images/resource/testi2.png",
      title:"David Alexon",
      sub_title:"MH Manager",
      description:"“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.",
    },
    {
      id:4,
      image_thumb:"/assets/images/resource/testi3.png",
      title:"David Alexon",
      sub_title:"MH Manager",
      description:"“Holisticly pursue market-more synerg through innovative paradi. Enthusia productivate media”.",
    },
  ]
  return (
    <>
      <div className={style["testimonial-area"]+" "+ style["style-two"]}>
        <div className="container">
          <div className={"row  align-items-center"+" "+ style["testi-rotate"]}>
            <div className="col-lg-12">
              <div className={style["consen-section-title"]+" "+  "pb-50 text-center upper"}>
                <h5> Testimonials </h5>
                <h2> thynkWISE Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Section4Swiper data={data}/>
            
            {/* testi shape */}
            <div className={"d-none d-lg-block "+style["testi-shape"]}>
              <div className={style["testi-shape-thumb"]}>
                <img src="assets/images/resource/all-shape5.png" alt="img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
