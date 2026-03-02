import React from "react";
import { CountUp } from "./Section4Counter";
import style from "./Section4.module.css"
export default function Section4() {
  const data = [
    {
      id: 1,
      value: "60",
      title: "Member",
      sub_tittle: "Professional",
    },
    {
      id: 2,
      value: "70",
      title: "Projects",
      sub_tittle: "Completed",
    },
    {
      id: 3,
      value: "90",
      title: "Client",
      sub_tittle: "Satisfactions",
    },
  ];
  return (
    <>
      <div className={" style-33 pt-30 pb-80 "+style['counter-section']}>
        <div className="container">
          <div className="counter-container">
            <div className="row  pt-40">
              {data.length > 0 ? (
                data.map((item, key) => {
                  return (
                    <>
                      <div className="col-md-6 col-lg-4">
                        <div className={" d-flex "+style['counter-single-item-inner']+" "+style['d-flex']}>
                          <div className="counter-content">
                            <div className={style['counter-text']}>
                              <h1>
                                <span className="counter">
                                  <CountUp
                                    className="text-white"
                                    data-speed={3000}
                                    data-stop={34}
                                    end={item.value}
                                    delay={1}
                                    enableScrollSpy
                                  />
                                </span>
                              </h1>
                              <span />
                              <div className={style['counter-title']}>
                                <h4>{item.title}</h4>
                                <h3>{item.sub_tittle}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div>No data found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
