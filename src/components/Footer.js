import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content container">
                <div className="footer-section about-us">
                    <h3>Про нас</h3>
                    <p>Ми - команда талановитих розробників, що спеціалізується на створенні високоякісних веб-рішень для бізнесу будь-якого масштабу.</p>
                </div>

                <div className="footer-section quick-links">
                    <h3>Швидкі посилання</h3>
                    <ul>
                        <li><Link to="/about">Про нас</Link></li>
                        <li><Link to="/home#team">Команда</Link></li>
                        <li><Link to="/home#projects">Наші проєкти</Link></li>
                        <li><Link to="/home#contact">Зв'яжіться з нами</Link></li>
                    </ul>
                </div>

                <div className="footer-section social-media-footer">
                    <h3>Ми в соцмережах</h3>
                    <div className="social-icons-footer">
                        <a href="https://linkedin.com/yourteam" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FaLinkedinIn size={30} />
                        </a>
                        <a href="https://github.com/yourteam" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://twitter.com/yourteam" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FaTwitter size={30} />
                        </a>
                    </div>
                </div>

                <div className="footer-section contact-info">
                    <h3>Контакти</h3>
                    <p>Email: <a href="mailto:info@yourteam.com">info@yourteam.com</a></p>
                    <p>Телефон: <a href="tel:+380XXXXXXXXX">+380 XXX XX XX XXX</a></p>
                    <p>Адреса: Київ, Україна</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2025 Наша Команда. Всі права захищені.</p>
                    <p>
                        <Link to="/privacy">Політика конфіденційності</Link> |
                        <Link to="/terms">Умови використання</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
