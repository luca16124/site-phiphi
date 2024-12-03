import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.scss'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>

      
    </div>
  )
}

export default App

