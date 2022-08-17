import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/service/Service'
import Experience from './components/experience/Experience'
import DownloadEbook from './components/downloadEbook/DownloadEbook'
import Popup from './components/popup/Popup'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Skills/>
    <About/>
    <Portfolio/>
    <Service/>
    <Experience/>
    <DownloadEbook/>
    <Popup/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App