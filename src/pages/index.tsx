import 'tailwindcss/tailwind.css'
import '~/styles/globals.css';
import Sidebar from '~/components/sidebar_explorer/sidebar';
import Aboutme from '~/sections/aboutme';
import Home from '~/sections/home';
import Experince from '~/sections/experince';
import Projects from '~/sections/project';

const App: React.FC = () => {
  return (
    <div>
      <div className='flex flex-row h-screen'>
      <Sidebar/>

      <div className='viewport scroll-container '>
      <Home />
      <Aboutme />
      <Experince />
      <Projects />
      </div>
      
      </div>
    </div>
  );
};

export default App;
