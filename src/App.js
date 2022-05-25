import './App.css';
import Home from './Home.js';
import About from './About';
import Skills from './Skills';
import {Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
