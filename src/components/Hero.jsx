import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';

const Hero = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setRecords(prev => {
        const updated = [time, ...prev];
        return updated.slice(0, 3); // keep only last 3 records
      });
    } else {
      setTime(0);
      setIsRunning(true);
    }
  };

  return (
    <div className="hero">
      <h1>Welcome to My React App</h1>
      <p>This is a hero section with a stopwatch</p>

      <div className="stopwatch">
        <h2>Timer: {time}s</h2>
        <button onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>

      <div className="about">
        <h2>Last 3 Recorded Times</h2>
        <div className="cards-container">
          {records.map((record, index) => (
            <InfoCard
              key={index}
              title={`Recorded Time ${index + 1}`}
              icon="⏱️"
              description={`${record}s`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
