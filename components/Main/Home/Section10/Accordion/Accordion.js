"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { RiAddLine, RiSubtractFill } from "react-icons/ri";
import SlideUp from "@/components/Common/Animations/SlideUp";

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

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container pb-45">
      <SlideUp delay={0.15} duration={0.8} element="div" className="row">
        <div
          className={
            "col-md-12 text-center py-5 " +
            styles["abt-title"] +
            " " +
            styles["text-center"]
          }
        >
          <h2 className="">Who Should Not Partner with thynkWISE ?</h2>
          
        </div>
      </SlideUp>
      <SlideUp
        delay={0.15}
        duration={0.8}
        element="div"
        className={styles.accordionWrapper}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={handleToggle}
          />
        ))}
      </SlideUp>
    </div>
  );
};

export default Accordion;
