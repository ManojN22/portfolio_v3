import Projects from '~/components/projects/projects';
import './styles.css';
const Project: React.FC = () => {
  return (
    <div className='projects section-without-height' id='projects-section'>
      <Projects />
    </div>
  );
};

export default Project;
