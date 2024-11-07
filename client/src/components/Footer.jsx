import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import Logo from '/logo.png'; // Ensure the path to your logo is correct
import legal from '/legal.svg'; // Ensure the path to your logo is correct
import FacebookIcon from '/facebook.svg';
import TwitterIcon from '/twitter.svg';
import LinkedInIcon from '/linkedin.svg';
import InstagramIcon from '/instagram.svg';

const Footer = () => {
    return (
        <>
            <div className="footer-flex">
                <div className="getin">
                    <h3>Get In Touch</h3>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <p className='peo'>info@corpvalet.com</p>
                    <p>(720) 432-9021</p>
                </div>
                <div className="getin">
                    <h3>Company</h3>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
                <div className="getin">
                    <h3>Connectors</h3>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
                <div className="getin">
                    <h3>Compare</h3>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
            </div>

            {/* First horizontal line */}
            <hr id='dividerone' />

            {/* Social media icons */}
            <div className="social-media-icons">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={TwitterIcon} alt="Twitter" />
                <img src={LinkedInIcon} alt="LinkedIn" />
                <img src={InstagramIcon} alt="Instagram" />
            </div>

            {/* Second horizontal line */}
            <hr id='dividertwo' />

            {/* Logo and legal images */}
            <div className="images">
                <img src={legal} alt="Legal" />
                <img src={Logo} alt="CorpValet Logo" />
            </div>

            <p className='peo2'>Disclaimer: Nothing on this page should be considered tax or legal advice. Information provided on this page is general in nature and is provided without warranty.</p>
            <p className='peo3'>©2024 CorpValet | Privacy Policy | Ethics Policy</p>
        </>
    );
}

export default Footer;
