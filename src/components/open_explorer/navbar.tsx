import React, { useState } from 'react';
import { FaJs, FaUniversity, FaSlidersH, FaSass, FaTimes } from 'react-icons/fa'; // React Icons
import './navbar.style.css';

const Navbar: React.FC = () => {
  const [tabs, setTabs] = useState([
    { href: '/skills', icon: <FaJs size={20} color="#ffca28" />, text: 'skills.js' },
    { href: '/education', icon: <FaUniversity size={20} color="#42a5f5" />, text: '.educationrc' },
    { href: '/projects', icon: <FaSlidersH size={20} color="#98c379" />, text: 'projects.config' },
    { href: '/certificates', icon: <FaSass size={20} color="#e13e76" />, text: 'certificates.sass' },
  ]);

  const handleTabClose = (index: number) => {
    setTabs(tabs.filter((_, i) => i !== index));
  };

  return (
    <header className="navbar">
      <nav className="navbar-navigation">
        <ul className="tabs-list">
          {tabs.map((tab, index) => (
            <li className="tab-item" key={index}>
              <span className="tab-content">
                <a className="tab-link" href={tab.href}>
                  {tab.icon}
                  <span className="tab-text">{tab.text}</span>
                 
                </a>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
