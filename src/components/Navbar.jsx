import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
            <div className="logo">
                {/* Keep logo styled as it is while making it a clickable link */}
                <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}>Nitin Patil</Link>
            </div>
            <ul className={`nav-links ${isOpen ? 'mobile' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/work-experience" onClick={() => setIsOpen(false)}>Work Experience</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
