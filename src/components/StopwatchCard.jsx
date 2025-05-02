import React from 'react';

const StopwatchCard = ({ lastTime }) => {
  return (
    <div className="card">
      <h3>Last Recorded Time</h3>
      <p>{lastTime}s</p>
    </div>
  );
};

export default StopwatchCard;
