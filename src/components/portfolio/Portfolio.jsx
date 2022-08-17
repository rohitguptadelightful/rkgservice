import React from 'react'
import './portfolio.css'
import Work1 from '../../assets/work1.jpg'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'
import Work6 from '../../assets/work6.jpg'

const Portfolio = () => {
  return (
    <section class="portflio" id="portfolio">
    <div class="heading">
      <h3>Portfolio</h3>
      <h2>My Amazing Work</h2>
      <p>The best way of advertising can boost your sales and business. <br/> A responsive website can bind the audience.</p>
    </div>

    <div class="portfolio-content">
      <div class="col">
        <img src={Work1} alt="work1.jpg"/>
        <div class="layer">
          <h3>Web Design</h3>
          <h5>Popup</h5>
        </div>
      </div>

      <div class="col">
        <img src={Work2} alt="work2.jpg"/>
        <div class="layer">
          <h3>Web Design</h3>
          <h5>Popup</h5>
        </div>
      </div>

      <div class="col">
        <img src={Work3} alt="work3.jpg"/>
        <div class="layer">
          <h3>Web Design</h3>
          <h5>Popup</h5>
        </div>
      </div>

      <div class="col">
        <img src={Work4} alt="work4.jpg"/>
        <div class="layer">
          <h3>Web Design</h3>
          <h5>Popup</h5>
        </div>
      </div>

      <div class="col">
        <img src={Work5} alt="work5.jpg"/>
        <div class="layer">
          <h3>Web Design</h3>
          <h5>Popup</h5>
        </div>
      </div>

      <div class="col">
        <img src={Work6} alt="work6.jpg"/>
        <div class="layer">
          <h3>Web Design</h3>
          <h5>Popup</h5>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio