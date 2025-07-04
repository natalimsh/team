import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Надсилання повідомлення...');

        try {
            const backendApiUrl = 'http://localhost:5000/api/send-email';
            const response = await fetch(backendApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus('✅ Повідомлення успішно надіслано!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(`❌ Помилка: ${data.message || 'Щось пішло не так.'}`);
            }
        } catch (error) {
            console.error('Помилка відправки форми:', error);
            setStatus('❌ Помилка мережі. Спробуйте пізніше.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-form-section" className="p-8 max-w-xl w-full mx-auto bg-gradient-to-br from-white via-blue-50 to-white shadow-2xl rounded-3xl animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-blue-800 mb-2">📬 Зв'язок з нами</h2>
                <p className="text-gray-600">Маєте ідею чи запит? Напишіть нам прямо зараз!</p>
            </div>

            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="👤 Ваше Ім'я"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="✉️ Ваш Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                />
                <textarea
                    name="message"
                    placeholder="💬 Ваше повідомлення"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    disabled={isSubmitting}
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '⏳ Надсилання...' : '📨 Надіслати'}
                </button>

                {status && (
                    <p className="mt-4 text-center text-sm font-medium text-gray-700">{status}</p>
                )}
            </form>
        </section>
    );
}

export default ContactForm;
