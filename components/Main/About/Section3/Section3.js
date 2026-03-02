import React from "react";
import style from "./Section3.module.css";
import Section3Swiper from "./Section3Swiper";
import RotatingComponent from "@/components/Common/Animations/Rotate";

export default function Section3() {
  const data = [
    {
      id: 1,
      title: "Customized Solutions",
      description:
        "We believe that every business is unique,and so are its needs. Our approach starts with understanding yourspecific challenges and goals. We then craft tailor-made strategiesthat seamlessly integrate your sales platforms with your salesprocesses.",
    },
    {
      id: 2,
      title: "Continuous Improvement",
      description:
        "We work closely with our clients, fostering a partnership that ensures our solutions are perfectly aligned with their needs.",
    },
    {
      id: 3,
      title: "End-to-End Integration",
      description:
        "From initial setup to ongoing support, we provide comprehensive services that cover every aspect of sales platform integration. We ensure that all features and functions are utilized to their fullest potential, creating a cohesive and efficient system that supports your sales team.",
    },
   
  ];

  return (
    <>
      <div className={style["testimonial-area"]}>
        <div className="container">
          <div className={"row align-items-center " + style["testi-rotate"]}>
            <div className="col-lg-7 col-md-6">
              <div className={"white pb-50 " + style["consen-section-title"]}>
                <h5>Our Approach</h5>
              </div>
            </div>
            <RotatingComponent
              element={"div"}
              className={"d-lg-block d-none " + style["testi-shape-thumb1"]}
            >
              <img
                src="/assets/images/resource/testimonial-map.png"
                alt="map1"
              />
            </RotatingComponent>
          </div>
          <div className="row">
            {data?.length > 0 ? (
              data?.map((item, key) => (
                <div className="col-md-4" key={key}>
                  <div className="card bg-transparent">
                    <div className="card-body">
                      <div className={style["testimonial-single-box"]}>
                        <div className={style["testimonial-content1"]}>
                          <div className={style["single-quote-icon"]}>
                            <div className={style["quote-thumb"]}></div>
                            <div className={style["quote-title"]}>
                              <h4>{item.title}</h4>
                            </div>
                          </div>
                          <div className={style["em-testimonial-text"]}>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>not found</div>
            )}
          </div>
          <div className={style["testi-shape"]}>
            <div className={style["testi-shape-thumb"]}>
              <img src="/assets/images/resource/all-shape5.png" alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
