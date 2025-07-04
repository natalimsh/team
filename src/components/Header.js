import React, { useState } from 'react';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="main-header">
            <div className="header-content container">
                <h1 className="site-title">
                    <a href="#project-team" onClick={closeMenu}>Project Team</a>
                </h1>

                <button className="burger-menu-button" onClick={toggleMenu} aria-label="Відкрити/Закрити меню">
                    <span className="burger-icon-line"></span>
                    <span className="burger-icon-line"></span>
                    <span className="burger-icon-line"></span>
                </button>

                <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
                    <ul>
                        <li><a href="#about" onClick={closeMenu}>Про нас</a></li>
                        <li><a href="#team" onClick={closeMenu}>Команда</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Проєкти</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Контакти</a></li>
                    </ul>
                </nav>

                <button onClick={toggleTheme} className="theme-toggle-button">
                    <span className={`icon ${theme === 'light-theme' ? 'light-icon' : 'dark-icon'}`}>
                        {theme === 'light-theme' ? '☀️' : '🌙'}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
