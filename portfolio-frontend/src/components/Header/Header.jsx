// src/components/Header.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'; // Importing LinkedIn, GitHub, and Code icons
import "../../Styles/Header.css"

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-left">
                    <a href="/" className="nav-item">Home</a>
                    <a href="/work" className="nav-item">Work</a>
                    <a href="/contact" className="nav-item">Contact</a>
                </div>
                <div className="nav-right">
                    <a href="https://www.linkedin.com/in/anuj-verdhan-963b311a4/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/anujverdhan04" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href="https://leetcode.com/u/Anuj2002/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaCode /> {/* You can use a relevant icon for LeetCode */}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
