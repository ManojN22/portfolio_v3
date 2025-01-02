import NameAnimation from '~/components/animated_name/animated_name';
import './styles.css';
const Home: React.FC = () => {


  return (
    <div className="home section-name " id='home-section'>
    <NameAnimation />
    </div>
  );
};

export default Home;
