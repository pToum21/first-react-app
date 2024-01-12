import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Topbar from './components/navbar/Navbar';
import Cars from './components/carDesc/Cars';
import CarOfTheDay from './components/caroftheday/CarOfTheDay';
import Footer from './components/footer/Footer';

import About from './pages/AboutUs';

import 'bootstrap/dist/css/bootstrap.min.css';


import './styles.css';

function App() {
  // this is for animation behind components
  useEffect(() => {
    const keyframes = `
      @keyframes flow {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        100% {
          transform: translateY(100vh) translateX(100vw) rotate(720deg);
        }
      }
    `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // random color generator for the animation
  const getRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`; // Random RGBA color with 0.5 opacity
  };

  // where all the compnets are rendered
  return (
    <>
      <div className="dot-container">
        {Array.from({ length: 200 }, (_, index) => {
          const dotStyle = {
            backgroundColor: getRandomColor(),
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `-${Math.random() * 20}s`,
          };
          return <div className="dot" style={dotStyle} key={index}></div>;
        })}
      </div>
      {/* components */}
      {/* all components here are their own pages */}
        <About />

      {/* all components here are on the homepage */}
      <Topbar />
      <Header />
      <CarOfTheDay />
      <Cars />
      <Footer />
    </>
  );
}

export default App;