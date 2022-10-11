import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='social'>
      <a href='https://www.facebook.com/rkgservice/' target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
      <a href='https://www.instagram.com/rohitgupta_delightful/' target='_blank' rel="noreferrer"><FaInstagramSquare /></a>
      <a href='https://www.linkedin.com/in/rohitguptadelightful/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
      <a href='https://twitter.com/rkgflute' target='_blank' rel="noreferrer"><FaTwitterSquare /></a>
      <a href='https://www.youtube.com/channel/UC_7XAkrW5jfWVnay3SsBt_Q' target='_blank' rel="noreferrer"><FaYoutube /></a>
    </div>
  )
}

export default HeaderSocials