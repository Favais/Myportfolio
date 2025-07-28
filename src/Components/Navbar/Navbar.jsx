import { React, useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/logo.png'
import download from '../../assets/download.png'
import menu_open from '../../assets/hamburger.png'
import menu_close from '../../assets/closeicon.png'
import { IoIosContact, IoIosCall } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { BsChatRightQuoteFill } from "react-icons/bs";



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
                        <li><AnchorLink className='anchor-link' offset={50} href='#aboutme'><IoIosContact />About Me</AnchorLink></li>
                        <li><AnchorLink className='anchor-link' href='#skills'><GiSkills />Skills</AnchorLink></li>
                        <li><AnchorLink className='anchor-link' href='#projects'><GoProjectSymlink />Projects</AnchorLink></li>
                        <li><AnchorLink className='anchor-link' href='#testimonial'><BsChatRightQuoteFill />Testimonial</AnchorLink></li>
                        <li> <AnchorLink className='anchor-link' href='#contactme'><IoIosCall />Contact Me</AnchorLink> </li>
                    </ul>
                    <div className='nav-resume'><p>Resume</p><img src={download} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
