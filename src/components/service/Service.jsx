import React from 'react'
import './service.css'
import OnlineAdvertising from '../../assets/online-advertising.png'
import WebDevelopment from '../../assets/web-development.webp'
import SocialMediaAdvertising from '../../assets/social-media-advertising.webp'
import Customised from '../../assets/customised.webp'
import {MdOutlineOpenInNew} from "react-icons/md"

const Service = () => {
  return (
    <section className="service" id="service">
      <div className='service-container'>
        <div className="heading">
          <h3>Service</h3>
          <h2>What I Do For Clients</h2>
          <p>Social Media Advertising | Web Development</p>
        </div>

        <div className="service-content">
          <div className="row">
            <div className="s s-one">
              <img src={OnlineAdvertising} alt="online-advertising.png" />
              <h3>Facebook Ads</h3>
              <h5>Starts From <span>$100</span></h5>
              <p>Complete Facebook Ads Campign Setup and Management for 15 Days</p>
              <a className="btn order" href='https://www.fiverr.com/share/mXqDGZ'>Order on Fiverr<span><MdOutlineOpenInNew /></span></a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>

          <div className="row">
            <div className="s s-tow">
              <img src={WebDevelopment} alt="web-development" />
              <h3>Front-End Development</h3>
              <h5>Starts From <span>$50</span></h5>
              <p>Responsive and Attractive Website Development</p>
              <a className="btn order" href='https://www.fiverr.com/rkgflute'>Order on Fiverr<span><MdOutlineOpenInNew /></span></a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>

          <div className="row">
            <div className="s s-three">
              <img src={SocialMediaAdvertising} alt="social-media-advertising" />
              <h3>Social Media Advertising</h3>
              <h5>Starts From <span>$1000</span></h5>
              <p>All Social Media Ads Campaign Setup and Management for 30 Days</p>
              <a className="btn order" href='https://www.fiverr.com/share/mXqDGZ'>Order on Fiverr<span><MdOutlineOpenInNew /></span></a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>

          <div className="row">
            <div className="s s-four">
              <img src={Customised} alt="customised" />
              <h3>Customised Service</h3>
              <h5>Feel Free to talk to Me</h5>
              <p>For Any Type of Small or Big Projects Related to Social Media Advertising and Web Development</p>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service