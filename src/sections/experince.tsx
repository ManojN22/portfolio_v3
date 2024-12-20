import dynamic from "next/dynamic";


import './styles.css';
import WorkTimeline from "~/components/work_timeline/work_timeline";

const Experince: React.FC = () => {
  return (
    <div className='experince section' id='experince-section'>
        <WorkTimeline />
    </div>
  );
};

export default Experince;
