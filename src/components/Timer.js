import React, { useState, useEffect } from 'react';
import CountdownCard from './CountdownCard';
import '../App.css';




const Timer = () => {
  const [seconds, setSeconds] = useState(14 * 24 * 60 * 60); // 14 days in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
        <h1>We 're Launching Soon!</h1>
      <CountdownCard value={days} label="Days" />
      <CountdownCard value={hours} label="Hours" />
      <CountdownCard value={minutes} label="Minutes" />
      <CountdownCard value={remainingSeconds} label="Seconds" />
    </div>
  );
};

export default Timer;
