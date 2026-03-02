import React from "react";
import Accordion from "../Accordion/Accordion";

const data = [
  {
    question: "Junior and Mid-Level Employees",
    answer:
      "thynkWISE’s services are tailored for high-level decision-makers and senior leaders.",
  },
  {
    question: "Short-Term Solution Seekers",
    answer:
      "Those looking for quick fixes or temporary measures rather than strategic, long-term implementations.",
  },
  {
    question: "Technology-Adverse Companies",
    answer:
      " Businesses not willing to invest in or adapt to CRM systems and automation tools.",
  },
  {
    question: "Content Creation and Training Focused",
    answer:
      "Organizations seeking primarily content creation, coaching, or resource training instead of strategic implementation and asset optimization.",
  },
  {
    question: "Non-Growth Focused",
    answer:
      "Companies that are not focused on growth, efficiency, or transforming into self-sustaining wealth builders.",
  },
];

const Section10 = () => {
  return (
    <div>
      <Accordion items={data} />
    </div>
  );
};

export default Section10;
