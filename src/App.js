import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>

<Router>
      <div>
        <img src={require('./images/nvlogo.png')} alt="WaveImage" id="nvLogo" />
        <Link to="/contact" className="navLinks">Contact</Link>
        <Link to="/projects" className="navLinks">Projects</Link>
        <Link to="/about" className="navLinks">About</Link>
        <Link to="/nv-portfolio" className="navLinks">Home</Link>
      </div>
      <Routes>
        <Route exact path="/nv-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
