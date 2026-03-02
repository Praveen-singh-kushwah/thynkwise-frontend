"use client"
import { useState, useEffect } from 'react';

const useScrollUp = (options) => {
    const [isVisible, setIsVisible] = useState(false);

    const settings = {
        scrollDistance: 300,
        scrollFrom: 'top',
        scrollSpeed: 300,
        easingType: 'linear',
        scrollTarget: 0,
        ...options
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollDis = settings.scrollFrom === 'top' ? settings.scrollDistance : document.documentElement.scrollHeight - window.innerHeight - settings.scrollDistance;
            if (window.scrollY > scrollDis) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [settings.scrollDistance, settings.scrollFrom]);

    const scrollToTop = () => {
        const scrollTarget = typeof settings.scrollTarget === 'number' ? settings.scrollTarget : document.querySelector(settings.scrollTarget)?.offsetTop || 0;
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    };

    return { isVisible, scrollToTop };
};

export default useScrollUp;
