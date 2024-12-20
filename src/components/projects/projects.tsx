import React from "react";
import { projects } from './project_content'; // Import the project data
import './projects.style.css'; // Import the CSS for styling

const Projects: React.FC = () => {

const cardStyles = [
    { background: "linear-gradient(45deg, #2e2e2e, #4e2a84)" }, // Dark purple gradient
    { background: "linear-gradient(45deg, #1e3c4c, #2d6a72)" }, // Dark teal to dark blue
    { background: "linear-gradient(45deg, #2a2a2a, #141414)" }, // Dark charcoal to black
    { background: "linear-gradient(45deg, #1e2a47, #3a4d72)" }, // Dark blue to charcoal
    { background: "linear-gradient(45deg, #1d2b2a, #344c3d)" }, // Dark green to olive
    { background: "linear-gradient(45deg, #3b0a45, #7a2b62)" }, // Burgundy to deep red
    ];

  return (
    <div className="projects-container">

    <div className="title-container"> 
        <div className="title-text">My Projects</div>
    </div>



      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" >
            <div className="project-title-container" style={cardStyles[index]} >  
            <div className="project-title">{project.title}</div>
            </div>
            <div className="project-description-container">
            <p className="project-description">{project.description}</p>
            <p className="project-skills">{project.skills}</p>
            <a href={project.link} className="project-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
