import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (category) => {
        setIsOpen(false);
        if (category === 'all') {
            navigate('/catalog');
        } else {
            navigate(`/catalog/${category}`);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                </button>

                <div className="logo-container">
                    <Link to="/" className="navbar-logo">MZmotors</Link>
                </div>

                {/* Placeholder for right side balance or actions */}
                <div className="navbar-actions"></div>
            </div>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                {/* <button className="close-btn" onClick={toggleMenu}>&times;</button> */}
                <ul className="nav-links">
                    <li onClick={() => handleNavigation('all')}>All</li>
                    <li onClick={() => handleNavigation('sedan')}>Sedans</li>
                    <li onClick={() => handleNavigation('coupe')}>Coupes</li>
                    <li onClick={() => handleNavigation('suv')}>SUVs</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
