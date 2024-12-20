import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { workExperience, WorkExperience } from './work_content'; // Import data and type
import "./work_timeline.style.css";

const WorkTimeline: React.FC = () => {
  return (
    <div className="timeline-container">
      
      <VerticalTimeline>
        <div className="vertical-timeline-element-title">Work Experience</div>
        {workExperience.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={experience.date}
            iconStyle={{ background: experience.iconBg, color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.subtitle}</h4>
            {experience.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkTimeline;
