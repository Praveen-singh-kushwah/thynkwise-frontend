// components/ProgressBar.js
"use client";

import React from "react";
import { Circle } from "rc-progress";
import styles from "./Section2.module.css";

const Section2Progress = ({ percent }) => {
  return (
    <div className={styles.progressContainer}>
      <Circle
        percent={percent}
        strokeWidth="4"
        strokeColor="#f6881f"
        trailWidth="4"
        trailColor="#fff"
        strokeLinecap="round"
        className={styles.circle}
      />
      <div className={styles.progressText}>{percent}%</div>
    </div>
  );
};

export default Section2Progress;
