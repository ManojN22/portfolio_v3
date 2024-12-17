import React, { useState, useEffect } from "react";
import  "./scroll_down.style.css";
const ScrollDown: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY === 0); // Show only when at top of the page
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <div className="scroll-down-container">
        <div className="arrow"></div>
        <p className="text">Scroll Down</p>
      </div>
    )
  );
};

export default ScrollDown;
