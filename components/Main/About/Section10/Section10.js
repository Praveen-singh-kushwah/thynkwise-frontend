// Section10.js
"use client"
import React, { useState } from 'react';
import style from './Section10.module.css';

const Section10 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={style['faq-area']}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 pl-0">
            <div className={style['tab_container']}>
              <div className={"white pb-40 mb-1 " + style['consen-section-title']}>
                <h5> FAQ </h5>
                <h2>
                  Frequently Asked <span> Questions </span>
                </h2>
              </div>
              <div id="tab1" className="tab_content">
                <ul className={"accordion " + style.accordion}>
                  {accordionData.map((item, index) => (
                    <li key={index}>
                      <a
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span> {item.title} </span>
                      </a>
                      <p style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        {item.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    title: 'What is Finance Consultant?',
    content: 'Continually cultivate inexpensive convergence whereas collaborative communities. Credibly generate team building vortals after professional value. Proactively administrate enabled paradigm.',
  },
  {
    title: 'How to Book a New Consultant?',
    content: 'Continually cultivate inexpensive convergence whereas collaborative communities. Credibly generate team building vortals after professional value. Proactively administrate enabled paradigm.',
  },
  {
    title: 'What is the Benefits of Business?',
    content: 'Continually cultivate inexpensive convergence whereas collaborative communities. Credibly generate team building vortals after professional value. Proactively administrate enabled paradigm.',
  },
  {
    title: 'How to Book a New Consultant?',
    content: 'Continually cultivate inexpensive convergence whereas collaborative communities. Credibly generate team building vortals after professional value. Proactively administrate enabled paradigm.',
  },
];

export default Section10;
