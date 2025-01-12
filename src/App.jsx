import React from 'react'

import Home from './components/home/Home'
import Header from './components/header/header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import './App.css'
import "./bj.css"
import Project from './components/Project/Project'
import Contact from './contact/Contact'
import ScrollUp from './components/scrollup/ScrollUp'
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home/>
        <About/>
        <Skills />
        <Project/>
        <Contact/>
        
      </main>
      <Footer />
      <ScrollUp />
      </>
  )
}

export default App