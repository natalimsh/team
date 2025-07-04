import React, { useState, useEffect } from 'react';
import TeamSection from '../components/TeamSection';
import ContactForm from '../components/ContactForm';
import './HomePage.css';

import projectsData from '../data/projectsData.json';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <div className={`font-inter bg-gray-50 min-h-screen p-4 ${fadeIn ? 'page-fade-enter-active' : 'page-fade-enter'}`}>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <h2>Інновації. Професіоналізм. Результат.</h2>
<p style={{ whiteSpace: 'nowrap' }}>
  Ми - команда талановитих розробників, які створюють виняткові веб-рішення.
</p>          <button
            type="button"
            onClick={() => scrollToSection('team-section')}
            className="button primary-button"
          >
            Познайомтеся з командою
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>Коротко про нас</h2>
          <p>
            Ми — група досвідчених розробників, що об'єдналися, аби перетворювати ідеї на
            функціональні та естетичні цифрові продукти. Наш підхід базується на співпраці,
            увазі до деталей та постійному вдосконаленні.
          </p>
          <p>
            Ми спеціалізуємося на розробці веб-додатків, лендінгів, e-commerce рішень та багато
            іншого. Наша мета — забезпечити вашому бізнесу міцну онлайн-присутність.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="team-section">
        <h2 className="text-4xl font-bold text-center mb-12">Наша Команда</h2>
        <TeamSection membersPerPage={1} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Наші Проєкти</h2>
          <p>Тут будуть картки з описом ваших проєктів.</p>

          <div className="project-grid">
            {projectsData.map((proj) => (
              <div key={proj.id} className="project-card">
                <img src={proj.imgSrc} alt={proj.title} />
                <h3>{proj.title}</h3>
                <p>{proj.shortDesc}</p>
                <button onClick={() => openModal(proj)}>Детальніше</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* Модальне вікно */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              maxWidth: '500px',
              width: '90%',
              position: 'relative',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '1.5rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
              aria-label="Закрити модальне вікно"
            >
              &times;
            </button>
            <h2>{activeProject?.title}</h2>
            <p>{activeProject?.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
