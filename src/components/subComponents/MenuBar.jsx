import { useState } from 'react';
import './MenuBar.css';

export const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-bar">
            <div className="menu-bar-content">
                <div className="brand">oRight</div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {isOpen && (
                <nav className="menu-items">
                    <a href="#appointment">Appointment</a>
                    <a href="#about">About</a>
                    <a href="#careers">Careers</a>
                    <a href="#contact">Contact</a>
                </nav>
            )}
        </div>
    );
};
