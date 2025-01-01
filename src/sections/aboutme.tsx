import Navigation from '~/components/open_explorer/navbar'; 
import Skills from '~/components/skills/skills';
import './styles.css';
import Education from '~/components/education/education';
import { useState } from 'react';
import AboutMe from '~/components/about_me/about_me';
const Aboutme: React.FC = () => {

  const [navbar, setNavbar] = useState("skills");

  return (
    <div className='aboutme section' id='aboutme-section'>
      <Navigation  setNavbar={setNavbar}/>
      <div className='scroll-y-vs-code'>
      {navbar==="skills" && <Skills/>}
      {navbar==="education" && <Education />}
      {navbar==="about_me" && <AboutMe/>}
      </div>
      
      
    </div>
  );
};

export default Aboutme;
