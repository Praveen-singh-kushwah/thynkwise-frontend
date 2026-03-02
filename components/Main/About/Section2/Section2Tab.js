import React from "react";
import style from "./Section2.module.css";
import { FaCheck } from "react-icons/fa";
export default function Section2Tab() {
  return (
    <>
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active discussion-tab-button"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Customized Solutions
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link discussion-tab-button"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            End-to-End Integration
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link discussion-tab-button"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Continuous Improvement
          </button>
        </li>
      </ul>
      <div className="tab-content justify-content-center" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex={0}
        >
          <div className="tabs_item">
            <div className="d-flex justify-content-center">
              <img
                src="/assets/images/resource/img-1.png"
                alt="business image"
                className="d-lg-block d-none"
              />
              <ul
                className={style["tabs-inner-list"]}
                style={{ listStyle: "none" }}
              >
                <li>
                  <FaCheck />
                  <span>
                    We believe that every business is unique, and so are its
                    needs. Our approach starts with understanding your specific
                    challenges and goals. We then craft tailor-made strategies
                    that seamlessly integrate your sales platforms with your
                    sales processes.
                  </span>
                </li>
                {/* <li>
                  <FaCheck />
                  <span>Deliver top-tier consulting services.</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Exceed client expectations consistently..</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Ensure high-quality, impactful solutions.</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex={0}
        >
          <div className="tabs_item">
            <div className="d-flex justify-content-center">
              <img
                src="/assets/images/resource/img-2.png"
                alt="Image"
                className="d-lg-block d-none"
              />
              <ul
                className={style["tabs-inner-list"]}
                style={{ listStyle: "none" }}
              >
                <li>
                  <FaCheck />
                  <span>
                    From initial setup to ongoing support, we provide
                    comprehensive services that cover every aspect of sales
                    platform integration. We ensure that all features and
                    functions are utilized to their fullest potential, creating
                    a cohesive and efficient system that supports your sales
                    team.
                  </span>
                </li>
                {/* <li>
                  <FaCheck />
                  <span>Proven Track Record</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Quality users after Breed Applications.</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Industry Expertise</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Innovative Solutions</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
          <div className="tabs_item">
            <div className="d-flex justify-content-center">
              <img
                src="/assets/images/resource/img-3.png"
                alt="Image"
                className="d-lg-block d-none"
              />
              <ul
                className={style["tabs-inner-list"]}
                style={{ listStyle: "none" }}
              >
                <li>
                  <FaCheck />
                  <span>
                    The market is always evolving, and so are we. We stay ahead
                    of industry trends and continuously refine our strategies to
                    ensure your sales processes are always optimized for
                    success. Our commitment to continuous improvement means you
                    can rely on us to keep your operations at the cutting edge.
                  </span>
                </li>
                {/* <li>
                  <FaCheck />
                  <span>Drive client success through innovation.</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Be a leader in business consultancy.</span>
                </li>
                <li>
                  <FaCheck />
                  <span>Foster sustainable growth for clients.</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
