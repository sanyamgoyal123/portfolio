import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/content/AboutMe';
import Projects from './components/content/Projects';
import HeaderContent from './components/header/HeaderContent';
import ContactMe from './components/content/ContactMe';
import ParticleBackground from './components/particle/Particle';

function App() {

  return (
    <>
      <ParticleBackground />
      <div className='header-wrapper'><Header /></div>
      <div><HeaderContent /></div>
      <div><AboutMe /></div>
      <div><Projects /></div>
      <div><ContactMe /></div>
    </>
  );
}

export default App;
