import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Section11({ data }) {
  if (!data?.partnerBlock?.length) return null;

  return (
    <div className="why-choose-us-area">
      <div className="container">
        <div className="row">

          {data.partnerBlock.map((block, index) => (
            <div
              key={index}
              className="col-md-6 wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <div className="consen-section-title">
                <h2>{block.heading}</h2>
              </div>

              <div className="dreamit-icon-list pt-4">
                <ul className="list-unstyled">

                  {block.partnerItem?.map((item, i) => (
                    <li key={i} className="icon-title-container">
                      <div className="icon-title">
                        <FaArrowRight />
                        <span className="fw-bold">
                          {item.title}
                        </span>
                      </div>

                      <div className="description">
                        {item.description}
                      </div>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
