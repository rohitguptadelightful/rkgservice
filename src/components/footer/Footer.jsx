import React from 'react'
import './footer.css'
import LogoDark from '../../assets/logo_dark.png'

const Footer = () => {
    return (
        <footer>
            <div class="first">
                <a href="/" className="logo"><img src={LogoDark} width="130px" height="auto" /></a>
            </div>
            <div class="middle">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="disclaimer.html">Disclaimer</a></li>
                    <li class="list-inline-item"><a href="termsandconditions.html">Terms & Conditions</a></li>
                    <li class="list-inline-item"><a href="privacypolicy.html">Privacy Policy</a></li>
                </ul>
                <p class="copyright">Made with love by Rohit Kumar Gupta ©️ 2022</p>
            </div>
            <div class="third">
                <a href="#"><i class='bx bxs-up-arrow-circle up-arrow'></i></a>
            </div>
        </footer>
    )
}

export default Footer