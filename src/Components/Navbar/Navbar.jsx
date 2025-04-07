import { React, useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/logo.png'
import download from '../../assets/download.png'
import menu_open from '../../assets/hamburger.png'
import menu_close from '../../assets/closeicon.png'
import aboutme_icon from '../../assets/ab.png'
import skills_icon from '../../assets/skillsicon.png'
import projects_icon from '../../assets/projecticon.png'
import testimonial_icon from '../../assets/testimonialicon.png'
import contact_icon from '../../assets/contacticon.png'

const Navbar = () => {
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-360px";
    }
    return (
        <div>
            <div className='navbar'>
                <div className="nav-container">
                    <img onClick={openMenu} className='nav-mob-open' src={menu_open} alt="" />
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h5>Aiso</h5>
                    </div>
                    <ul ref={menuRef} className='nav-menu'>
                        <img onClick={closeMenu} src={menu_close} className='nav-mob-close' alt="" />
                        <li><AnchorLink className='anchor-link' offset={50} href='#aboutme'><img src={aboutme_icon} alt="" />About Me</AnchorLink></li>
                        <li><AnchorLink className='anchor-link' href='#skills'><img src={skills_icon} alt="" />Skills</AnchorLink></li>
                        <li><AnchorLink className='anchor-link' href='#projects'><img src={projects_icon} alt="" />Projects</AnchorLink></li>
                        <li><AnchorLink className='anchor-link' href='#testimonial'><img src={testimonial_icon} alt="" />Testimonial</AnchorLink></li>
                        <li> <AnchorLink className='anchor-link' href='#contactme'><img src={contact_icon} alt="" />Contact Me</AnchorLink> </li>
                    </ul>
                    <div className='nav-resume'><p>Resume</p><img src={download} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
