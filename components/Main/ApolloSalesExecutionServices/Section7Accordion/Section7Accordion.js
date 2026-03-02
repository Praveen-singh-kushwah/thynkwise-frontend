"use client";
import SlideUp from "@/components/Common/Animations/SlideUp";
import { useState } from "react";
import { RiAddLine, RiSubtractFill } from "react-icons/ri";
import styles from "./Accordion.module.css";

const AccordionItem = ({ question, answer, index, isOpen, onClick }) => (
  <div className={styles.accordionItem}>
    <div className={styles.accordionHeader} onClick={() => onClick(index)}>
      <h2 className={styles.accordionQuestion}>{question}</h2>
      <span className={styles.accordionIcon}>
        {isOpen ? <RiSubtractFill /> : <RiAddLine />}
      </span>
    </div>
    <div
      className={styles.accordionContent}
      style={{ maxHeight: isOpen ? "1000px" : "0px" }}
    >
      <p className={styles.accordionAnswer}>{answer}</p>
    </div>
  </div>
);

const Section7Accordion = ({ items, city }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Replace [City] placeholder with actual city name
  const processedItems = items.map((item) => ({
    question: item.question.replace(/\[City\]/g, city),
    answer: item.answer.replace(/\[City\]/g, city),
  }));

  return (
    <div className="container pb-45">
      <div className="row">
        <div
          className={
            "text-center pb-50 " +
            styles["consen-section-title"] +
            " " +
            styles.upper
          }
        >
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div className={styles.accordionWrapper}>
        {processedItems.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Section7Accordion;
