"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeLeft = ({
  children,
  className,
  element = "div",
  delay = 0,
  duration = 0.8,
  direction = "up",
}) => {
  const Element = motion[element];

  const initialPosition = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  const finalPosition = { y: 0, x: 0 };

  return (
    <Element
      className={className}
      initial={{ opacity: 0, ...initialPosition[direction] }}
      whileInView={{ opacity: 1, ...finalPosition }}
      transition={{ duration, delay }}
    >
      {children}
    </Element>
  );
};

export default FadeLeft;
