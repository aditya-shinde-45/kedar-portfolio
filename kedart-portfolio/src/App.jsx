import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-black">
        <div className="backdrop-blur-sm bg-white/5">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
}

export default App;