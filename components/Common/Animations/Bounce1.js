"use client";
import React from "react";
import { motion } from "framer-motion";

const Bounce1 = ({ children, className, delay = 0, duration = 5 }) => {
  const bounceAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 3 }}
      animate={bounceAnimation}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Bounce1;
