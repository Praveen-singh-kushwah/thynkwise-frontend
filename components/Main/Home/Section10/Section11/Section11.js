import React from "react";
import Accordion1 from "../Accordion1/Accordion1";

const data = [
  {
    question: "C-Suite Executives and Senior Leaders",
    answer:
      "CEOs, Managing Directors, Directors of Sales, Heads of Inside Sales, VPs of Inside Sales, and VPs of Demand Generation.",
  },
  {
    question: "Growth-Oriented Decision-Makers",
    answer:
      "Those focused on transforming their business into a self-sustaining wealth builder.",
  },
  {
    question: "Businesses of All Sizes",
    answer:
      " From small enterprises to large corporations.",
  },
  {
    question: "Technology and CRM Savvy",
    answer:
      "Companies already invested in CRM systems or want to invest in Apollo, Hubspot, Freshsales, Dynamics, or Salesforce.",
  },
  {
    question: "Strategic Implementers",
    answer:
      "Leaders looking for long-term solutions with measurable results rather than mere content creation or training.",
  },
  {
    question: "Efficiency Seekers",
    answer:
      "Those aiming to streamline sales, marketing, automation, relationships, and team processes for optimal performance.",
  },
  {
    question: "Value-Driven Organizations",
    answer:
      "Businesses that prioritize establishing and maintaining core values to ensure team alignment and high performance.",
  },
];

const Section11 = () => {
  return (
    <div>
      <Accordion1 items={data} />
    </div>
  );
};

export default Section11;
