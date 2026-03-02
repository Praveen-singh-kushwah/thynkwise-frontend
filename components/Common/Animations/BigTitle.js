"use client";
import React from "react";
import { motion } from "framer-motion";

const BigTitle = ({
  children,
  className,
  delay = 0,
  duration = 5,
}) => {
  const initialPosition = { x: -100, y: 0 };
  const finalPosition = { x: 100, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, ...initialPosition }}
      animate={{ opacity: 1, ...finalPosition }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        fontSize: "250px",
        fontWeight: 800,
        color: "#f7f7f7",
        textTransform: "uppercase",
        // lineHeight: "220px",
        textAlign: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

export default BigTitle;
