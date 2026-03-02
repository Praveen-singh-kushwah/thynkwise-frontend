"use client";
// SlideUp.js
import React from "react";
import { motion } from "framer-motion";

const SlideUp = ({
  children,
  className,
  element = "div",
  delay = 0,
  duration = 0.8,
}) => {
  const Element = motion[element];
  return (
    <Element
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </Element>
  );
};

export default SlideUp;
