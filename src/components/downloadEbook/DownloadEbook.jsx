import React from 'react'
import './downloadEbook.css'
import Ebook from '../../assets/the-power-of-social-media.webp'

function DownloadEbook() {
    return (
        <section class="download-ebook" id="download-ebook">
            <div class="heading">
                <h3>Download Free e-Book</h3>
                <h2>The Power Of Social Media</h2>
                <p>Are You Curious About Social Media And Want To Know How It Can Benefit You?</p>
            </div>
            <div class="ebook-box">
                <div class="ebook-features">
                    <h3>Here’s what you’ll discover inside:</h3>
                    <ul>
                        <li>How You Can Use Social Media To Promote Your Online Business</li>
                        <li>Find Out Why Social Media Marketing Is A Powerful Way To Promote Your Business Online</li>
                        <li>Learn About The Different Types Of Social Media And How You Can Use Them To Your Benefit</li>
                        <li>How You Can Improve Your Website So As To Attract People To It</li>
                        <li>What You Need To Do Before Introducing Your Business To People Online</li>
                    </ul>
                </div>
                <div class="download-content">
                    <div class="download-img">
                        <img src={Ebook} alt="the-power-of-social-media"/>
                    </div>
                    <div class="download-btn">
                        <input type="submit" onclick="openPopup()" value="Get Free eBook"/>
                            {/* <button onclick="openPopup()">Download Free eBook</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadEbook