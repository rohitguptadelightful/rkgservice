import React from 'react'
import CV from '../../assets/RohitCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn blue'>Download CV</a>
      <a href='#contact' className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA