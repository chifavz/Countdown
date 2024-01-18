import React, { useState, useEffect } from 'react';

const CountdownCard = ({ value, label }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(true);
    const timeout = setTimeout(() => setFlipped(false), 500);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className={`countdown-card ${flipped ? 'flipped' : ''}`}>
      <div className="front">{value}</div>
      <div className="back">{label}</div>
    </div>
  );
};

export default CountdownCard;
