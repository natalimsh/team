import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          &times;
        </button>
        <h2 id="modal-title">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
