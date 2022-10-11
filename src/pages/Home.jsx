import React from 'react'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Service from '../components/service/Service'
import Experience from '../components/experience/Experience'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Nav />
            <Header />
            <Skills />
            <About />
            <Service />
            <Experience />
            <Contact />
            <Footer />
            <Outlet />
        </div>
    )
}

export default Home