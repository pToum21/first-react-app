import React, { useEffect } from 'react';
import Header from './components/header/Header';
import FirstArea from './components/firstArea/Firstarea';
import Topbar from './components/navbar/Navbar';
import Cars from './components/carDesc/Cars';
import 'bootstrap/dist/css/bootstrap.min.css';

const dotContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: -1, // Ensure dots are behind other content
  animation: 'flow 20s infinite', // Slower animation that lasts longer
};

function App() {
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

  const getRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`; // Random RGBA color with 0.5 opacity
  };

  return (
    <>
      {/* Animated Dots Background */}
      <div style={dotContainerStyle}>
        {Array.from({ length: 200 }, (_, index) => {
          const dotStyle = {
            width: '8px', // Slightly larger width
            height: '8px', // Slightly larger height
            backgroundColor: getRandomColor(), // Random color for each dot with 0.5 opacity
            borderRadius: '50%',
            position: 'absolute',
            animation: 'flow 20s infinite', // Same animation duration as dotContainerStyle
            left: `${Math.random() * 100}vw`, // Random horizontal position
            top: `${Math.random() * 100}vh`, // Random vertical position
            animationDelay: `-${Math.random() * 20}s`, // Random animation delay
          };
          return <div style={dotStyle} key={index}></div>;
        })}
      </div>

      {/* Other Components */}
      <Topbar />
      <Header />
      <FirstArea />
      <Cars />
    </>
  );
}

export default App;
