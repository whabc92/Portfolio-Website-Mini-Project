import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
        <p>I am a frontend developer from california, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
          <div className="hero-connect"><Link to="contact" smooth={true} offset={-50} duration={500}>Connect With Me</Link></div>
          <div className="hero-resume">My Resume</div>
        </div>
    </div> 
  )
}

export default Hero