import { useState } from 'react'
import Header from './components/header/Header'
import FirstArea from './components/firstArea/Firstarea'
import Topbar from './components/navbar/Navbar';
import Cars from './components/carDesc/Cars';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Topbar />
      <Header />
      <FirstArea />
      <Cars />
    </>
  )
}

export default App
