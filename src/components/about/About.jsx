import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.webp'

const About = () => {
  return (
    <section className="about" id="about">
      <div className='about-container'>
        <div className="about-img">
          <img src={AboutImg} alt="about" />
        </div>

        <div className="about-text">
          <h3>I'm a Social Media Advertiser</h3>
          <h2>I can advertise as you want</h2>
          <p>Hello there! I'm a Social Media Advertiser and I'm very passionate and dedicated to my work. With 2 years of experience as a professional Advertiser, I have acquired the skills and knowledge necessary to make your projects a success. I enjoy
            every step of the advertising process, from discussion and collaboration</p>
          <a href="#service" className="btn">Hire Me</a>
        </div>

        <div className="about-text">
          <h3>I'm a Web Developer</h3>
          <h2>I can develop website as you want</h2>
          <p>Hello there! I'm a Web Developer, and I'm very passionate and dedicated to my work. With 2 years of experience as a professional Web Developer, I have acquired the skills and knowledge necessary to make your projects a success. I enjoy every
            step of the development process, from discussion and collaboration</p>
          <a href="#service" className="btn">Hire Me</a>
        </div>
      </div>
    </section>
  )
}

export default About