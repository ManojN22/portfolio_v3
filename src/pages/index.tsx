import 'tailwindcss/tailwind.css'
import '~/styles/globals.css';
import Sidebar from '~/components/sidebar_explorer/sidebar';
import Aboutme from '~/sections/aboutme';
import Home from '~/sections/home';
import Experince from '~/sections/experince';
import Project from '~/sections/project';
import Head from 'next/head';
import Resume from '~/sections/resume';
const App: React.FC = () => {
  return (
    <div>
      <Head>
      <title>Manoj Nandakumar</title>
      <meta name="description" content="Welcome to the portfolio of Manoj Nandakumar, a software developer with experience in web development, cloud infrastructure, and machine learning." />
      <meta name="keywords" content="Manoj Nandakumar, software developer, web development, cloud infrastructure, machine learning, portfolio" />
      <meta property="og:title" content="Manoj Nandakumar" />
      <meta property="og:description" content="Explore the portfolio of Manoj Nandakumar, showcasing projects in web development, cloud technologies, and machine learning." />
      </Head>
      <div>
      <Sidebar/>

      <div className='viewport scroll-container '>
      <Home />
      <Aboutme />
      <Experince />
      <Project />
      <Resume />
      </div>
      
      </div>
    </div>
  );
};

export default App;
