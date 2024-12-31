import React,{useState} from 'react';
import './sidebar.style.css';
import { FaHome, FaUser, FaBriefcase, FaTasks, FaGithub, FaLinkedin, FaCog, FaFilePdf, FaBars, FaTimes  } from 'react-icons/fa'; // Import updated icons


const sidebarTopLinks = [
    { href: "home-section", label: "Home", icon: <FaHome size={24} /> , type:1},
    { href: "aboutme-section", label: "About Me", icon: <FaUser size={24} /> , type:1},  // Added About Me link
    { href: "experince-section", label: "Work", icon: <FaBriefcase size={24} /> , type:1},
    { href: "projects-section", label: "Projects", icon: <FaTasks size={24} /> , type:1},  
    { href: "resume-section", label: "Resume", icon: <FaFilePdf size={24} /> , type:1},  
    { href: "https://github.com/ManojN22", label: "GitHub", icon: <FaGithub size={24} /> , type:2},
    { href: "https://linkedin.com/in/manoj-nandakumar", label: "LinkedIn", icon: <FaLinkedin size={24} /> , type:2},
  ];

  // { href: "#home-section", label: "Home", icon: <FaHome size={24} /> },
  // { href: "#aboutme-section", label: "About Me", icon: <FaUser size={24} /> },  // Added About Me link
  // { href: "#experince-section", label: "Work", icon: <FaBriefcase size={24} /> },
  // { href: "#projects-section", label: "Projects", icon: <FaTasks size={24} /> },  
  // { href: "#resume-section", label: "Resume", icon: <FaFilePdf size={24} /> },  
  // { href: "https://github.com/ManojN22", label: "GitHub", icon: <FaGithub size={24} /> },
  // { href: "https://linkedin.com/in/manoj-nandakumar", label: "LinkedIn", icon: <FaLinkedin size={24} /> },


  

  const sidebarBottomLinks = [
    { href: "/settings", label: "Settings", icon: <FaCog size={24} /> }
  ];
  


const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <>
    
    <div className="sidebar">
      <div className="sidebar-links">
        {sidebarTopLinks.map((link, index) => {
        if(link.type === 1 )
         return (<a key={index} className="link" onClick={() => scrollToSection(link.href)} title={link.label} aria-label={link.label}>
            <span className="icon-wrapper">{link.icon}</span>
          </a>)
         return (<a key={index} className="link" href={link.href} target="_blank" title={link.label} aria-label={link.label}>
            <span className="icon-wrapper">{link.icon}</span>
          </a>)
  })}
        </div>
      
    </div>
    <div className="topbar">
      <div className="topbar-content">
        <div className="logo">Your Logo</div>
        <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div className={`topbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
      {sidebarTopLinks.map((link, index) => {
        if(link.type === 1 )
         return (<a key={index} className="link" onClick={() => scrollToSection(link.href)} title={link.label} aria-label={link.label}>{link.label} </a>)
         return (<a key={index} className="link" href={link.href} target="_blank" title={link.label} aria-label={link.label}>{link.label} </a>)
  })}
        {/* <a href="#home" className="link">Home</a>
        <a href="#aboutme" className="link">About Me</a>
        <a href="#work" className="link">Work</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#contact" className="link">Contact</a> */}
      </div>
    </div>
    </>
  );
};

export default Sidebar;
