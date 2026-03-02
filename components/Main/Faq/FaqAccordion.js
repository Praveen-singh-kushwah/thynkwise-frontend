'use client';
import { useState } from 'react';
import Faqs from './Faqs';

function renderStyledText(text) {
  const parts = text.split(/(thynkWISE)/g);
  return parts.map((part, index) => {
    if (part === 'thynkWISE') {
      return (
        <span key={index} className='px-1'>
          <span style={{ color: '#3959a7' }}>th</span>
          <span style={{ color: '#f6881f' }}>y</span>
          <span style={{ color: '#3959a7' }}>nk</span>
          <span style={{ color: '#f6881f' }}>WISE</span>
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion" id="faqAccordion">
      {Faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
              type="button"
              aria-expanded={openIndex === index}
              aria-controls={`collapse-${index}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {renderStyledText(faq.question)}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              {renderStyledText(faq.answer)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}