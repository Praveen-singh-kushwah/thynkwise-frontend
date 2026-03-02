"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ endTime }) {
  const getRemainingTime = () => {
    const total = endTime - Date.now();
    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <>
      <div className="text-center">Offer Expires in</div>
      <div className="align-items-center d-flex fs-6 fw-bold gap-1 justify-content-center text-uppercase text-white">
        <div className="countdown-day">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        :
        <div className="countdown-hour">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        :
        <div className="countdown-minute">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        :
        <div className="countdown-second">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        
      </div>
    </>
  );
}
