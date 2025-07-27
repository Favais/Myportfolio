import React from 'react'
import './Hero.css'
import Banner from '../../assets/Banner.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-top">
                <div className='hero-top-intro'>
                    <div className='hero-top-intro-cont'>
                        <h1 className='hero-top-intro-title'>
                            <span><span className='lineoneleft'>Hello I'm</span> <span>Aiso.</span></span>
                            <span className='full'>FullStack<span className='linetworight'>Developer</span></span>
                            <span><span className='lineoneleft'>Based in</span><span> Nigeria</span></span>
                        </h1>
                        <p>I'm Aisosa Favour, I’m a self-taught and passionate full-stack developer with a focus on building robust, user-friendly web applications using React.js and Node.js. I care deeply about crafting clean, readable, and high-performance code, and I love bringing both the technical and visual sides of digital products to life.</p>
                    </div>
                </div>
                <img className='bannerimg' src={Banner} alt="hero image" />
            </div>
            <div className="hero-bottom">
                <Link><FaLinkedin size={30} /></Link>
                <Link><FaSquareXTwitter size={30} /></Link>
                <Link><FaGithub size={30} /></Link>
            </div>

        </div>
    )
}

export default Hero
