// src/pages/HomePage.js
import React from 'react';
import TeamSection from '../components/TeamSection'; // Імпорт компонента з командами
import ContactForm from '../components/ContactForm'; // Імпорт компонента ContactForm
// import './HomePage.css'; // Опціонально: для стилів, специфічних для HomePage

/**
 * Компонент HomePage.
 * Містить основні розділи цільової сторінки: Hero, About (коротко), Team, Projects та форму зворотного зв'язку.
 * Стилізація повернена до початкового вигляду, але функціональність форми збережена.
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
        // Залишаємо базовий фон та шрифт, якщо вони були в App.js або глобально
        <div className="font-inter bg-gray-50 min-h-screen">
            {/* Hero Section: Перше враження від веб-сайту */}
            <section id="hero" className="hero-section"> {/* Повернено до початкового класу */}
                <div className="container">
                    <h2>Інновації. Професіоналізм. Результат.</h2>
                    <p>Ми - команда талановитих розробників, які створюють виняткові веб-рішення.</p>
                    {/* Кнопка, яка виконує скролл до секції команди */}
                    <button
                        type="button"
                        onClick={() => scrollToSection('team-section')} // ID для скролу
                        className="button primary-button" // Повернено до початкового класу
                    >
                        Познайомтеся з командою
                    </button>
                </div>
            </section>

            {/* About Us Section (короткий опис на головній сторінці, повний на /about) */}
            <section id="about" className="about-section"> {/* Повернено до початкового класу */}
                <div className="container">
                    <h2>Коротко про нас</h2>
                    <p>Ми — група досвідчених розробників, що об'єдналися, аби перетворювати ідеї на функціональні та естетичні цифрові продукти. Наш підхід базується на співпраці, увазі до деталей та постійному вдосконаленні.</p>
                    <p>Ми спеціалізуємося на розробці веб-додатків, лендінгів, e-commerce рішень та багато іншого. Наша мета — забезпечити вашому бізнесу міцну онлайн-присутність.</p>
                </div>
            </section>

            {/* Team Section: Використання реального компонента з пагінацією */}
            <section id="team-section" className="team-section"> {/* Повернено до початкового класу */}
                <h2 className="text-4xl font-bold text-center mb-12">Наша Команда</h2> {/* Залишив базовий заголовок */}
                <TeamSection membersPerPage={1} />
            </section>

            {/* Projects Section: Місце для карток проєктів */}
            <section id="projects" className="projects-section"> {/* Повернено до початкового класу */}
                <div className="container">
                    <h2>Наші Проєкти</h2>
                    <p>Тут будуть картки з описом ваших проєктів.</p>
                    <div className="project-grid">
                        {/* Приклад картки проєкту 1 */}
                        <div className="project-card">
                            <img
                                src="https://placehold.co/300x200/cccccc/333333?text=Проєкт+1"
                                alt="Зображення проєкту 1"
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/cccccc/333333?text=Зображення+недоступне"; }}
                            />
                            <h3>Назва Проєкту 1</h3>
                            <p>Короткий опис цього проєкту. Покажіть, яку проблему він вирішує та які технології використовувались.</p>
                            <button type="button" className="button secondary-button">Детальніше</button>
                        </div>
                        {/* Приклад картки проєкту 2 */}
                        <div className="project-card">
                            <img
                                src="https://placehold.co/300x200/99ccff/000000?text=Проєкт+2"
                                alt="Зображення проєкту 2"
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/cccccc/333333?text=Зображення+недоступне"; }}
                            />
                            <div className="p-6">
                                <h3>Назва Проєкту 2</h3>
                                <p>Цей проєкт зосереджений на покращенні користувацького досвіду та оптимізації продуктивності.</p>
                                <button type="button" className="button secondary-button">Детальніше</button>
                            </div>
                        </div>
                        {/* Приклад картки проєкту 3 */}
                        <div className="project-card">
                            <img
                                src="https://placehold.co/300x200/ffcc99/000000?text=Проєкт+3"
                                alt="Зображення проєкту 3"
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/cccccc/333333?text=Зображення+недоступне"; }}
                            />
                            <div className="p-6">
                                <h3>Назва Проєкту 3</h3>
                                <p>Інноваційне рішення для автоматизації бізнес-процесів та підвищення ефективності.</p>
                                <button type="button" className="button secondary-button">Детальніше</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section: Місце для контактної форми, інтегрованої як компонент */}
            <section id="contact" className="contact-section"> {/* Повернено до початкового класу */}
                <div className="container">
                    {/* Рендеримо компонент ContactForm тут */}
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
