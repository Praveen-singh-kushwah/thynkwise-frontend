"use client";
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollTop.module.css';
import useScrollUp from '@/context/useScrollUp';

const ScrollUp = (props) => {
    const { isVisible, scrollToTop } = useScrollUp(props);

    return (
        <div className={styles['scroll-area']}>
            <div className={styles['top-wrap']}>
                <div className={styles['go-top-btn-wraper']}>
                    <div
                        className={`${styles['go-top']} ${styles['go-top-button']} ${isVisible ? styles.active : ''}`}
                        onClick={scrollToTop}
                    >
                        <FaArrowUp />
                        <FaArrowUp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollUp;
