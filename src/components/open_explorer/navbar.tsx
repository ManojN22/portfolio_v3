import React from 'react';
import { FaJs, FaUniversity,  FaInfoCircle } from 'react-icons/fa'; // React Icons
import './navbar.style.css';

const Navbar: React.FC<{ setNavbar: (value: string) => void }> = ({ setNavbar}) => {
  const tabs = [
    { icon: <FaJs size={20} color="#ffca28" />, text: 'skills.js' , name: "skills"},
    { icon: <FaUniversity size={20} color="#42a5f5" />, text: '.educationrc' , name: "education" },
    { icon: <FaInfoCircle size={20} color="#42a5f5" />, text: 'read_about_me.md' , name: "about_me" }
  ];



  return (
    <header className="navbar">
      <nav className="navbar-navigation">
        <ul className="tabs-list">
          {tabs.map((tab, index) => (
            <li className="tab-item" key={index}>
              <span className="tab-content">
                <a className="tab-link" onClick={() => setNavbar( tab.name)}>
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
