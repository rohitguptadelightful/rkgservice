import React, { useState } from 'react'
import './nav.css'
import Logo from '../../assets/logo.png'
import { IoIosMenu } from 'react-icons/io'
import { MdOutlineOpenInNew, MdClose } from 'react-icons/md'

const Nav = () => {

    const [scroll, setScroll] = useState();
    let [menuIcon, setMenuIcon] = useState("true");

    function changeScroll() {
        if (window.scrollY >= 80) {
            setScroll("color");
        }
        else {
            setScroll("");
        }
    }

    window.addEventListener('scroll', changeScroll);

    function handleClick() {
        if (menuIcon === "true") {
            setMenuIcon("false");
        } else {
            setMenuIcon("true")
        }
    }

    return (
        <nav className={scroll}>
            <div className='container'>
                <a href='/' className='logo'><img src={Logo} alt='logo' /></a>
                {menuIcon === "true" ? <IoIosMenu className='menu-icon' onClick={handleClick} /> : <MdClose className='menu-icon' onClick={handleClick} />}
                <ul className= {menuIcon === "false" ? "navlist": "navlist hide"}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#service'>Service</a></li>
                    <li><a href='https://blog.rkgservice.com' target="_blank" rel="noreferrer">Blog<span><MdOutlineOpenInNew /></span></a></li>
                    <li><a href='https://toolsforease.com' target="_blank" rel="noreferrer">Tools<span><MdOutlineOpenInNew /></span></a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav