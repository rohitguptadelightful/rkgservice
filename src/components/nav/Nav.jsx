import React from 'react'
import './nav.css'
import Logo from '../../assets/logo.png'
import LogoDark from '../../assets/logo_dark.png'
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
    return (
        <nav>
            <a href='/' className='logo'><img src={Logo} alt='logo' /></a>
            <AiOutlineMenu className='menu-icon'/>
            <ul className='navlist'>
                <li><a href='/'>Home</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#service'>Service</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <a className='top-btn' href='' target="_blank">Blog</a>
        </nav>
    )
}

export default Nav