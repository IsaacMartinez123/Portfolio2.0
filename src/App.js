import React from 'react';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-grayMedium">
      <Navbar />
      
      <div className="flex justify-center flex-grow">
        <AboutMe />
      </div>

      <div className="flex justify-center flex-grow">
        <Skills />
      </div>

      <div className="flex justify-center flex-grow">
        <Experience />
      </div>
      
      <div className='flex justify-center flex-grow+'>
        <Projects />
      </div>
      
      <div className='flex justify-center flex-grow'>
        <Contact />
      </div>
    

      <footer className="bg-grayDark text-white p-4 text-center" /> 

    </div>
  );
}

export default App;