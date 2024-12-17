import React, { useEffect, useState } from 'react';
import './animated_name.style.css'; // Import CSS for animation
import ScrollDown from '../scroll_down/scroll_down';
import Shimmer3DScene from '../home_background/shimmer_background';

const NameAnimation: React.FC = () => {
    const titles = [
        "Software Engineer",
        "Cloud Infrastructure",
        "Full Stack Developer",
        "Scroll Down For More",
        "Still here? I am not a robot so... I am a",
        "Music Lover",
        "Biggest Office Fan",
        "Avid Gamer",
        "lets loop back to the top"
      ];
    
      const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    
        }, 2500); 

        // Switch every 3 seconds
    
        return () => clearInterval(interval);

      }, [titles.length]);
    
  return (
    <div className="name-container">
    <Shimmer3DScene />
    <div className="middle-container">
    Hi, I am 
    <span className="typing-animation highlight"> Manoj Nandakumar</span>
    <div>{titles[currentTitleIndex]}</div>
    </div>
    <ScrollDown />
    </div>
  );
};

export default NameAnimation;
