import React from 'react';
import './sidebar.style.css';
import { FaHome, FaUser, FaBriefcase, FaTasks, FaGithub, FaLinkedin, FaCog, FaFilePdf } from 'react-icons/fa'; // Import updated icons


const sidebarTopLinks = [
    { href: "/", label: "Home", icon: <FaHome size={24} /> },
    { href: "/about", label: "About Me", icon: <FaUser size={24} /> },  // Added About Me link
    { href: "/work", label: "Work", icon: <FaBriefcase size={24} /> },
    { href: "/projects", label: "Projects", icon: <FaTasks size={24} /> },  
    { href: "https://github.com/caglarturali", label: "GitHub", icon: <FaGithub size={24} /> },
    { href: "https://linkedin.com/in/caglarturali", label: "LinkedIn", icon: <FaLinkedin size={24} /> },
    { href: "/resume", label: "Resume", icon: <FaFilePdf size={24} /> },  
    
  ];

  const sidebarBottomLinks = [
    { href: "/settings", label: "Settings", icon: <FaCog size={24} /> }
  ];
  


const Sidebar: React.FC = () => {

  return (
    <div className="sidebar">
      <div className="sidebar-links">
        {sidebarTopLinks.map((link, index) => (
          <a key={index} className="link" href={link.href} title={link.label} aria-label={link.label}>
            <span className="icon-wrapper">{link.icon}</span>
          </a>
        ))}
        </div>
        <div className="sidebar-links">
        {sidebarBottomLinks.map((link, index) => (
          <a key={index} className="link" href={link.href} title={link.label} aria-label={link.label}>
            <span className="icon-wrapper">{link.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
