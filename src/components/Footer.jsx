import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>MZmotors</h2>
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} MZmotors. All rights reserved.</p>
                    <p>Contact: info@mzmotors.com</p>
                    <div className="social-links">
                        <span>Instagram</span>
                        <span>Twitter</span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
