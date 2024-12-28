import ResumeViewer from '~/components/resume/resume';
import './styles.css';
const Resume: React.FC = () => {
  return (
    <div className='resume section' id='resume-section'>
        <ResumeViewer />
    </div>
  );
};

export default Resume;
