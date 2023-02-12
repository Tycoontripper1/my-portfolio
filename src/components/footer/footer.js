import React from "react";
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

export const Footer = () =>{
    return(
        <footer id="footer">
            <a href="#" className="footer_logo">TTripper</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Expericence</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
            <a href='https:://linkdin.com' target="_blank"><BsLinkedin /></a>
            <a href='https://web.facebook.com/oladeji.ayodeji.31' target="_blank"><BsFacebook /></a>
            <a href='https://twitter.com/oladejiolayin13' target="_blank"><FaTwitterSquare /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; TTripper All rights reserved.</small>
            </div>

        </footer>
    )
   
}