import 'tailwindcss/tailwind.css'
import '~/styles/globals.css';
import Sidebar from '~/components/sidebar_explorer/sidebar';
import Aboutme from '~/sections/aboutme';
import Home from '~/sections/home';

const App: React.FC = () => {
  return (
    <div>
      <div className='flex flex-row h-screen'>
      <Sidebar/>

      <div className='viewport'>
      <Home />
      <Aboutme />
      </div>
      
      </div>
    </div>
  );
};

export default App;
