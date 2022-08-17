import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='social'>
      <a href='https://www.facebook.com/rkgservice/' target='_blank'><FaFacebookSquare /></a>
      <a href='https://www.instagram.com/rohitgupta_delightful/' target='_blank'><FaInstagramSquare /></a>
      <a href='https://www.linkedin.com/in/rohitguptadelightful/' target='_blank'><FaLinkedin /></a>
      <a href='https://twitter.com/rkgflute' target='_blank'><FaTwitterSquare /></a>
      <a href='https://www.youtube.com/channel/UC_7XAkrW5jfWVnay3SsBt_Q' target='_blank'><FaYoutube /></a>
    </div>
  )
}

export default HeaderSocials