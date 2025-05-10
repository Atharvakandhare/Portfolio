import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Header />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
