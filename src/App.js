import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Project from './components/projects/Project';
import Service from './components/services/Service';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <Experience />
      <Project />
      <Contact />
      {/* <Logo/> */}
    </div>
  );
}

export default App;
