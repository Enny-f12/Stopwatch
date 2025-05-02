import React from 'react';

const InfoCard = ({ title, icon, description }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;
