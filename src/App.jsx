import React from 'react'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Resume from './components/resume/Resume'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Work/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App