"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RotatingComponent = ({ children, className, delay = 0, duration = 20 }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const rotateAnimation = {
    rotate: 360,
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div className={className}>
      {isDesktop ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={rotateAnimation}
        >
          {children}
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default RotatingComponent;
