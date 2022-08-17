import React from 'react'
import './skills.css'
import SocialMediaAdverstising from '../../assets/social-media-advertising.webp'
import WebDevelopment from '../../assets/web-development.webp'
import Flute from '../../assets/flute.webp'

const Skills = () => {
    return (
        <section class="skills" id="skills">
            <div class="heading">
                <h3>Skills</h3>
                <h2>I Love to Do</h2>
                <p>I love to sit in front of the computer, do coding & playing the flute</p>
            </div>

            <div class="items">
                <div class="sub-box">
                    <div class="sub-img">
                        <img src={SocialMediaAdverstising} alt="social-media-advertising"/>
                    </div>
                    <h3>Social Media Advertising</h3>
                    <p>Social Media Advertising is best for finding new customers, generating leads, product or service awareness, increasing sales, drive traffic to the store</p>
                </div>

                <div class="sub-box">
                    <div class="sub-img">
                        <img src={WebDevelopment} alt="web-development"/>
                    </div>
                    <h3>Web Development</h3>
                    <p>Web development is at the center of the Internet as we know it. Any options available on web pages are the result of the work of web developers</p>
                </div>

                <div class="sub-box">
                    <div class="sub-img">
                        <img src={Flute} alt="flute"/>
                    </div>
                    <h3>Flute</h3>
                    <p>The popular Flute of India has been a special musical instrument of Lord Krishna which has been a source of healing for many. The beautiful melody of sounds created by the bansuri takes you to land unexplored</p>
                </div>
            </div>
        </section>
    )
}

export default Skills