// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Поле email вже є
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('Надсилання...');

        try {
            const response = await fetch('http://localhost:5000/api/send-email', { // або '/api/send-email' якщо є proxy
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // formData містить email користувача
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Повідомлення успішно надіслано!');
                setFormData({ name: '', email: '', message: '' }); // Очистити форму
            } else {
                setStatus(`Помилка: ${data.message || 'Щось пішло не так.'}`);
            }
        } catch (error) {
            console.error('Помилка відправки форми:', error);
            setStatus('Помилка мережі. Перевірте підключення або спробуйте ще раз.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Зв'яжіться з нами</h2>
                <p>Маєте ідею? Хочете обговорити співпрацю? Ми готові!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше Ім'я"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email" // Тут важливо мати name="email"
                        placeholder="Ваш Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Ваше повідомлення"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="button primary-button">Надіслати</button>
                    {status && <p className="form-status-message">{status}</p>}
                </form>
            </div>
        </section>
    );
}

export default ContactForm;