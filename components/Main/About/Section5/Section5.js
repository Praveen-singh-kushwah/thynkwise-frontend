import React from "react";
// import style from "./Section5.module.css";
export default function Section5() {
  const data = [
    {
      id: 1,
      image: "/assets/images/resource/team-1.jpg",
      title: "Silvia Garden",
      sub_title: "Designer",
    },
    {
      id: 2,
      image: "/assets/images/resource/team-2.jpg",
      title: "Monalisha Shen",
      sub_title: "IT-Executive",
    },
    {
      id: 3,
      image: "/assets/images/resource/team-3.jpg",
      title: "Bubli Khanam",
      sub_title: "Developer",
    },
  ];
  return (
    <>
      <div className="team_area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={"consen-section-title upper text-center pb-60"}>
                <h5> Team Member </h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.length > 0 ? (
              data.map((item, key) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6" key={key}>
                      <div className="single_team">
                        <div className="single_team_thumb1">
                          <img src={item.image} alt={key+1} />
                        </div>
                        <div className="single_team_content">
                          <div className="team-title">
                            <h4>{item.title}</h4>
                            <span>{item.sub_title}</span>
                          </div>
                          <div className="single_team_icon">
                            <a href="#">
                              {" "}
                              <i className="bi bi-facebook" />{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <i className="bi bi-twitter" />{" "}
                            </a>
                            <a href="#">
                              <i className="bi bi-dribbble" />
                            </a>
                            <a href="#">
                              {" "}
                              <i className="bi bi-instagram"> </i>{" "}
                            </a>
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
    </>
  );
}
