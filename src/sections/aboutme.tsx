import Navigation from '~/components/open_explorer/navbar'; 
import Skills from '~/components/skills/skills';
import './styles.css';
const Aboutme: React.FC = () => {
  return (
    <div className='aboutme'>
      <Navigation />
      <Skills/>
    </div>
  );
};

export default Aboutme;
