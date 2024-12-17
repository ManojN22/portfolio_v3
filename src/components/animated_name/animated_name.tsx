import React, { useEffect, useState } from 'react';
import './animated_name.style.css'; // Import CSS for animation

const NameAnimation: React.FC = () => {
    const titles = [
        "Software Engineer",
        "Cloud Infrastructure",
        "Full Stack Developer",
        "Scroll Down For More",
        "Still here? I am not a robot so... I am a",
        "Music Lover",
        "Biggest Office Fan",
        "Avid Gamer"
      ];
    
      const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    
        }, 2000); // Switch every 3 seconds
    
        return () => clearInterval(interval);
      }, [titles.length]);
    
  return (
    <div className="name-container">

    <span className="typing-animation">I'm Manoj Nandakumar</span>
    <div>{titles[currentTitleIndex]}</div>
    </div>
  );
};

export default NameAnimation;
