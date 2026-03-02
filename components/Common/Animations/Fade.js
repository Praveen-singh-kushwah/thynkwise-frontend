"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Fade = ({ children, delay = 0, duration = 0.8,className, }) => {
  return (
    <motion.div
    className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
