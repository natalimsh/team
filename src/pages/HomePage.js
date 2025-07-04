// src/pages/HomePage.js
import React from 'react';
import TeamSection from '../components/TeamSection'; // Імпорт компонента з командами
// import './HomePage.css'; // Опціонально: для стилів, специфічних для HomePage

/**
 * HomePage component.
 * Contains the main sections of the landing page: Hero, About (brief), Team, Projects, Contact.
 */
const HomePage = () => {
    // Функція для плавного прокручування до секції
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero Section: Перше враження від веб-сайту */}
            <section id="hero" className="hero-section">
                <div className="container">
                    <h2>Інновації. Професіоналізм. Результат.</h2>
                    <p>Ми - команда талановитих розробників, які створюють виняткові веб-рішення.</p>
                    {/* Змінено на кнопку, яка виконує скролл за допомогою JS */}
                    <button type="button" onClick={() => scrollToSection('team')} className="button primary-button">
                        Познайомтеся з командою
                    </button>
                </div>
            </section>

            {/* About Us Section (короткий опис на головній сторінці, повний на /about) */}
            <section id="about" className="about-section">
                <div className="container">
                    <h2>Коротко про нас</h2>
                    <p>Ми — група досвідчених розробників, що об'єдналися, аби перетворювати ідеї на функціональні та естетичні цифрові продукти. Наш підхід базується на співпраці, увазі до деталей та постійному вдосконаленні.</p>
                    <p>Ми спеціалізуємося на розробці веб-додатків, лендінгів, e-commerce рішень та багато іншого. Наша мета — забезпечити вашому бізнесу міцну онлайн-присутність.</p>
                </div>
            </section>

            {/* Team Section: Використання реального компонента з пагінацією */}
            <TeamSection membersPerPage={1} />

            {/* Projects Section: Місце для карток проєктів */}
            <section id="projects" className="projects-section">
                <div className="container">
                    <h2>Наші Проєкти</h2>
                    <p>Тут будуть картки з описом ваших проєктів.</p>
                    <div className="project-grid">
                        {/* Приклад картки проєкту */}
                        <div className="project-card">
                            {/* Зображення-заповнювач для проєкту */}
                            <img src="https://placehold.co/300x200/cccccc/333333?text=Проєкт" alt="Зображення проєкту" className="project-image"/>
                            <h3>Назва Проєкту</h3>
                            <p>Короткий опис цього проєкту. Покажіть, яку проблему він вирішує та які технології використовувались.</p>
                            {/* Це вже було кнопкою, залишаємо так */}
                            <button type="button" className="button secondary-button">Детальніше</button>
                        </div>
                        {/* Ви можете дублювати цей div для додавання інших проєктів */}
                    </div>
                </div>
            </section>

            {/* Contact Section: Місце для контактної форми */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <h2>Зв'яжіться з нами</h2>
                    <p>Маєте ідею? Хочете обговорити співпрацю? Ми готові!</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Ваше Ім'я" required />
                        <input type="email" placeholder="Ваш Email" required />
                        <textarea placeholder="Ваше повідомлення" rows="5" required></textarea>
                        <button type="submit" className="button primary-button">Надіслати</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default HomePage;
