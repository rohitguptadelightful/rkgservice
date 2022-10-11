import React from 'react'
import './footer.css'
import LogoDark from '../../assets/logo_dark.png'
import { FaLongArrowAltUp } from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='footer-container'>
                <div className="first">
                    <a href="/" className="logo"><img src={LogoDark} alt="RKGservice Logo" /></a>
                </div>
                <div className="middle">
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/disclaimer" target="_blank" >Disclaimer</Link></li>
                        <li className="list-inline-item"><Link to="/termsandconditions" target="_blank">Terms & Conditions</Link></li>
                        <li className="list-inline-item"><Link to="/privacypolicy" target="_blank">Privacy Policy</Link></li>
                    </ul>
                    <p className="copyright">Rohit Kumar Gupta ©️ {currentYear}</p>
                </div>
                <div className="social arrow">
                    <a href="#home"><FaLongArrowAltUp /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer