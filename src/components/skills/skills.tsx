// components/TechnicalProfile.tsx
import React from 'react';
import { technicalSkills, programmingLanguages, preferences, specialInterests } from './content'; // Import content data
import './skills.style.css'; // Import the CSS for styling

const Skills: React.FC = () => {
  return (
    <div className="technical-profile">
      <div className="content">
        {/* Technical Skills Section */}
        <section>
          <h3 className="section-title">Technical skills</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index} className="content-item">{skill.name}</li>
            ))}
          </ul>
        </section>

        {/* Programming Languages / Tech Stacks Section */}
        <section>
          <h3 className="section-title">Programming languages / tech stacks</h3>
          <h4 className="subsection-title">In modern times:</h4>
          <ul>
            {programmingLanguages.modern.map((lang, index) => (
              <li key={index} className="content-item">{lang}</li>
            ))}
          </ul>

          <h4 className="subsection-title">In ancient times:</h4>
          <ul>
            {programmingLanguages.ancient.map((lang, index) => (
              <li key={index} className="content-item">{lang}</li>
            ))}
          </ul>
        </section>

        {/* Preferences Section */}
        <section>
          <h3 className="section-title">Preferences 🙏</h3>
          <ul>
            {preferences.map((pref, index) => (
              <li key={index} className="content-item">
                <a href={pref.link}>{pref.name}</a>
                {pref.additionalLink && (
                  <>
                    {' '}| <a href={pref.additionalLink}>{pref.name}</a>
                  </>
                )}
                {pref.emoji && <span className='emoji'>{pref.emoji}</span>}
              </li>
            ))}
          </ul>
        </section>

        {/* Special Interests Section */}
        <section>
          <h3 className="section-title">Special interests 👌</h3>
          <ul>
            {specialInterests.map((interest, index) => (
              <li key={index} className="content-item">{interest.name} {interest.emoji}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
