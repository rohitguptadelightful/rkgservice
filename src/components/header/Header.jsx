import React from 'react'
import './header.css'
import HeaderSocial from './HeaderSocials'
import CTA from './CTA'
import MainImg from '../../assets/main.webp'

const Header = () => {
    return (
        <section className="home" id="home">
            <div className="home-text">
                <h3>Hello, I'm</h3>
                <h1>Rohit Kumar Gupta</h1>
                <h5>A Web Developer, Social Media Advertiser & Flutiest<span>From Azamgarh</span></h5>
                <p>I'm a Specially Expert in Facebook Ads & Front-End Development, and I'm Very Passionate and Dedicated to My Work.</p>
                <HeaderSocial />
                <CTA />
            </div>
            <div className='home-img'>
                <img src={MainImg} alt="RKG's Pic" />
            </div>
        </section>
    )
}

export default Header