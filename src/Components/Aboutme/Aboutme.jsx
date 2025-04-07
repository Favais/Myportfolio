import React from 'react'
import './Aboutme.css'
import aboumeimg from '../../assets/aboutme.png'

const Aboutme = () => {
    return (
        <div id='aboutme' className='aboutme'>
            <div className="aboutme-container">
                <div className="aboutme-img">
                    <img src={aboumeimg} alt="" />
                </div>
                <div className="aboutme-sec">
                    <div className="aboutme-heading">
                        <p className='about'>About</p>
                        <p className='me'>Me</p>
                    </div>
                    <div className="aboutme-body">
                        <p>I’m a self-taught and passionate full-stack developer with a focus on building robust, user-friendly web applications using React.js and Node.js. I care deeply about crafting clean, readable, and high-performance code, and I love bringing both the technical and visual sides of digital products to life by critically analyzing the product and its consumer. Pixel-perfect design, seamless user experiences, and staying up-to-date with modern development trends are at the heart of my work.</p>
                        <p>My journey into web development began in 2024, and over time, I’ve steadily grown learning new technologies, embracing challenges, and fine tuneing my craft. Now with two years of solid experience, I specialize in building modern web applications using tools like Next.js, TypeScript, Express.js, Tailwind CSS, and more. I’m constantly looking out for new ways to push the boundaries of what I can build. I LOVE A CHALLENGE</p>
                        <p>When I’m not coding, you’ll probably find me scrolling through tech Twitter to get updated on current world happenings or reading books to broaden my knowledge.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aboutme
