// src/components/Education.tsx

import React from 'react';
import { educationData } from './education.content';
import './education.style.css';

const Education: React.FC = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      {educationData.map((item, index) => (
        <div key={index} className="education-item">
          <h3 className="degree">{item.degree}</h3>
          <p className="institution">{item.institution}</p>
          <p className="duration">{item.duration}</p>
          <ul className="details">
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
