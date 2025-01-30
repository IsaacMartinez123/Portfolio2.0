import React from 'react';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

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
      
      <div >
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