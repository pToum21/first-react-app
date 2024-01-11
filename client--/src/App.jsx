import { useState } from 'react'
import Header from './components/header/Header'
import FirstArea from './components/firstArea/Firstarea'
import Topbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <>
    <Topbar />
    <Header />
    <FirstArea />
    </>    
  )
}

export default App
