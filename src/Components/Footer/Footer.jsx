import React from 'react'
import './Footer.css'
import logo from '../../assets/logowhite.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="" />
                    <h5>Aiso Dev</h5>
                </div>
                <div className="footer-right">
                    <h6>©️ 2025 Aiso dev</h6>
                    <h6>Made by Me</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
