// src/components/TeamSection.js
import React, { useState, useMemo } from 'react';
import teamMembersData from '../data/teamMembersData.json';
import PaginationControls from './PaginationControls';

const TeamSection = ({ membersPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentMember = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * membersPerPage;
    return teamMembersData[firstPageIndex];
  }, [currentPage, membersPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!currentMember) {
    return (
      <section id="team" className="team-section">
        <div className="container">
          <p>Наразі команда не визначена.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2>Наша Команда</h2>
        <p>Познайомтесь з нашими талановитими фахівцями, які створюють магію!</p>

        <div className="team-single-view">
          <div key={currentMember.id} className="team-member-card developer-profile-card">
            <img src={currentMember.photo} alt={currentMember.name} className="member-photo developer-photo-large"/>
            <h3 className="member-name">{currentMember.name}</h3>
            <p className="member-role developer-position-large">{currentMember.role}</p>
            <p className="member-bio developer-bio-large">{currentMember.bio}</p>

            <div className="social-links developer-social-links">
              {/* Render LinkedIn icon if the link exists */}
              {currentMember.social && currentMember.social.linkedin && (
                <a href={currentMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <i className="fab fa-linkedin-in"></i> {/* Font Awesome LinkedIn icon */}
                </a>
              )}
              {/* Render GitHub icon if the link exists */}
              {currentMember.social && currentMember.social.github && (
                <a href={currentMember.social.github} target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <i className="fab fa-github"></i> {/* Font Awesome GitHub icon */}
                </a>
              )}
              {/* Додаємо іконку Instagram */}
              {currentMember.social && currentMember.social.instagram && (
                <a href={currentMember.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <i className="fab fa-instagram"></i> {/* Font Awesome Instagram icon */}
                </a>
              )}
              {/* Додаємо іконку Facebook */}
              {currentMember.social && currentMember.social.facebook && (
                <a href={currentMember.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                  <i className="fab fa-facebook-f"></i> {/* Font Awesome Facebook icon (або fa-facebook для старіших версій) */}
                </a>
              )}
            </div>

            {currentMember.skills && currentMember.skills.length > 0 && (
              <div className="developer-skills-large">
                <h4>Навички:</h4>
                <ul>
                  {currentMember.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <PaginationControls
          totalItems={teamMembersData.length}
          itemsPerPage={membersPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default TeamSection;