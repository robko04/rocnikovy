import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>CESTUJ S NAMI</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>O nás</li>
                            <li>Spolupráce</li>
                            <li>História</li>
                            <li>Novinky</li>
                            <li>Reklamy</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Kontakt</li>
                            <li>Podmienky</li>
                            <li>Poistenie</li>
                            <li>Zľavy</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
