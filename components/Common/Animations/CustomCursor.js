"use client"
// components/CustomCursor.js
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isDotVisible, setIsDotVisible] = useState(true);

  const springConfig = { stiffness: 800, damping: 50 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20); // Centering the cursor
      cursorY.set(e.clientY - 20); // Centering the cursor
    };

    const handleMouseEnter = () => setIsDotVisible(false);
    const handleMouseLeave = () => setIsDotVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, p, h1, h2, h3, h4, h5, h6, input, textarea')
      .forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, p, h1, h2, h3, h4, h5, h6, input, textarea')
        .forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div className={isDotVisible ? styles.dot : styles.dotHidden} />
    </motion.div>
  );
};

export default CustomCursor;
