// components/ProgressBar.js
"use client";

import React from "react";
import { Line } from "rc-progress";
import styles from "./Section7Progress.module.css";

const Section1 = ({ percent }) => {
  return (
    <div className={styles.barfiller}>
      <Line
        percent={percent}
        strokeWidth="2"
        strokeColor="#f6881f"
        trailWidth="2"
        trailColor="#fff"
        strokeLinecap="round"
        className={styles.fill}
      />
    </div>
  );
};

export default Section1;
