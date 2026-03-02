import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import style from "./Section8.module.css";
export default function Section8() {
  const data = [
    {
      id: 1,
      image_thumb: "/assets/images/resource/blog1.png",
      top_btn: "GRAPHIC",
      date: "August 25, 2023",
      description: "Popular Consultants are big Meetup 2023",
      title: "Alex Collins",
      icon: "/assets/images/resource/blog-icon.png",
    },
    {
      id: 2,
      image_thumb: "/assets/images/resource/blog3.png",
      top_btn: "DESIGN",
      date: "August 21, 2023",
      description: "How to Increase Business Products Sales",
      title: "Julia Moris",
      icon: "/assets/images/resource/blog-icon.png",
    },
    {
      id: 2,
      image_thumb: "/assets/images/resource/blog2.png",
      top_btn: "DEVELOPMENT",
      date: "August 20, 2023",
      description: "Top 10 Most Popular Google Chrome app",
      title: "Amantha",
      icon: "/assets/images/resource/blog-icon.png",
    },
  ];
  return (
    <>
      <div className={" blog-new " + style["blog-area"]}>
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div
                className={
                  style["consen-section-title"] + " " + style["mobile-center"]
                }
              >
                <h2> We’re here to share story </h2>
                <h2>
                  {" "}
                  from Latest <span> News </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div
                className={
                  " text-end " +
                  style["consen-button"] +
                  " " +
                  style["text-right"]
                }
              >
                <Link href="#">
                  <div className="d-flex align-items-center">
                    View all Blog <FaPlus />{" "}
                  </div>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {data.length > 0 ? (
              data.map((item, key) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6" key={key}>
                      <div className={style["single-blog-box"]}>
                        <div className={style["single-blog-thumb"]}>
                          <img src={item.image_thumb} alt={key + 1} />
                          <div className={style["blog-top-button"]}>
                            <a href="#"> {item.top_btn} </a>
                          </div>
                        </div>
                        <div className={style["em-blog-content"]}>
                          <div className={style["meta-blog-text"]}>
                            <p> {item.date} </p>
                          </div>
                          <div className={style["em-blog-title"]}>
                            <h2>
                              {" "}
                              <Link href="#"> {item.description} </Link>{" "}
                            </h2>
                          </div>
                          <div className={style["em-blog-icon"]}>
                            <img src={item.icon} alt={item.title} />
                            <div className={style["em-blog-icon-title"]}>
                              <h6> {item.title} </h6>
                            </div>
                          </div>
                          <div className={style["blog-button"]}>
                            <a href="#">
                              {" "}
                              <div className="d-flex align-items-center gap-2">
                              Learn More <FaPlus />{" "}
                              </div>
                              
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
