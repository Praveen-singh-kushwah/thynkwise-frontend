import React from "react";
import Accordion from "../Accordion/Accordion";
import style from "./Section1.module.css";
const data = [
  {
    question: "Sales Assets",
    answer:
      "We implement comprehensive deal pipelines and advanced CRM systems to maximize client value and streamline sales processes.",
  },
  {
    question: "DemandGen Assets",
    answer:
      "We create lead magnets, self-liquidating offers, and multichannel strategies to convert leads into loyal buyers.",
  },
  {
    question: "Automation Assets",
    answer:
      " We centralize data, integrate tools, and provide business insights to streamline workflows and enhance decision-making.",
  },
  {
    question: "Relationship Assets",
    answer:
      "We build strong relationships with suppliers, advocates, distributors, and affiliates to ensure product quality and expand market reach.",
  },
  {
    question: "Team Assets",
    answer:
      "We develop core values, conduct psychological evaluations, and design compensation structures to foster team alignment and performance.",
  },
];

const Section10 = () => {
  return (
    <div className={"pb-40 " + style["accordion-bg"]}>
      <Accordion items={data} />
    </div>
  );
};

export default Section10;
