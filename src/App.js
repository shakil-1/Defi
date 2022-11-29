import React from 'react';
import About from './components/About';
import Developer from './components/Developer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';

const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Developer></Developer>
     <Subscribe></Subscribe>
     <Footer></Footer>
      
    </div>
  );
};

export default App;