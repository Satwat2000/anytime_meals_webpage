import React from 'react';
import './Footer.css';
import fc from './images12/face.png';
import insta from './images12/instagram.png';
import lin from './images12/linkedin.png';
const Footer = () => {
    return (
        <div className="foot">
            <span id="spa">Join us on</span>
            <span id="spa1">Contact Us</span>
            <ul className="change">
            <span id="spa2">About Us</span>
                <li><img src={fc} alt="facebook"></img>Facebook</li><br/>
                <li><img src={insta} alt="insta"></img>Instagram</li><br/>
                <li><img src={lin} alt="lin"></img>LinkedIn</li>
            </ul>
        </div>
    )
}

export default Footer
