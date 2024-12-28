// src/components/AboutMe.tsx

import React from 'react';
import { aboutMeData } from './about_me.content';
import './about_me.style.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <h2 className="section-title">About Me</h2>
      <p className="bio">
        Hi, I am <span className="highlight">{aboutMeData.name}</span>
      </p>
      <p className="bio">{aboutMeData.bio}</p>
      <p className='subsection-title'>My Experince</p>
      <p className="bio">{aboutMeData.bio2}</p>
      <p className='subsection-title'>what i look for</p>
      <p className="bio">{aboutMeData.bio3}</p>
      {/* <h3 className="subsection-title">Skills</h3> */}
      {/* <ul className="skills-list">
        {aboutMeData.skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default AboutMe;
