// server.js
// Імпортуємо необхідні модулі
const express = require('express'); // Веб-фреймворк для Node.js
const nodemailer = require('nodemailer'); // Для надсилання електронних листів
const cors = require('cors'); // Для дозволу міждоменних запитів (CORS)
require('dotenv').config(); // Для завантаження змінних середовища з файлу .env

// Створюємо екземпляр Express-додатку
const app = express();
// Визначаємо порт, на якому буде працювати сервер. За замовчуванням 5000.
const port = process.env.PORT || https://team-ivory-zeta.vercel.app/;

// Middleware для дозволу CORS-запитів
// Це дозволяє вашому React-додатку (зазвичай на http://localhost:3000)
// надсилати запити до цього бекенду.
// У продакшені замініть 'http://localhost:3000' на реальний домен вашого фронтенду.
app.use(cors({
    origin: 'https://team-ivory-zeta.vercel.app/' // Або ваш домен, наприклад, 'https://your-react-app.com'
}));
// Middleware для парсингу JSON-тіла запитів
// Це дозволяє серверу розуміти дані, які надсилаються з форми у форматі JSON.
app.use(express.json());

// Налаштування транспортера Nodemailer
// Це об'єкт, який Nodemailer використовуватиме для надсилання листів.
// Використовуємо дані з файлу .env для безпеки.
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ви можете змінити це на 'Outlook', 'Yahoo' або налаштування SMTP для вашого провайдера
    auth: {
        user: process.env.EMAIL_USER, // Ваш email для відправки (з .env)
        pass: process.env.EMAIL_PASS  // Пароль для цього email (з .env)
    }
    // Якщо у вас не Gmail, можливо, знадобиться вказати host та port:
    /*
    host: "smtp.example.com",
    port: 587,
    secure: false, // true для 465 (SSL), false для інших портів (TLS)
    */
});

// Маршрут (endpoint) для обробки POST-запитів від форми зворотного зв'язку
// Цей маршрут буде слухати запити за адресою /api/send-email
app.post('/api/send-email', async (req, res) => {
    // Деструктуруємо дані, отримані з тіла запиту (з вашої React-форми)
    const { name, email, message } = req.body;

    // Ваша цільова електронна пошта, на яку будуть надходити повідомлення
    // Беремо її з файлу .env
    const ownerEmail = process.env.YOUR_TARGET_EMAIL;

    // Базова перевірка вхідних даних
    if (!name || !email || !message) {
        // Якщо якісь обов'язкові поля відсутні, повертаємо помилку 400 (Bad Request)
        return res.status(400).json({ message: 'Будь ласка, заповніть всі обов\'язкові поля: Ім\'я, Email, Повідомлення.' });
    }

    try {
        // Налаштовуємо параметри електронного листа
        const mailOptions = {
            from: process.env.EMAIL_USER, // Від кого надсилається лист (ваш email для відправки)
            to: ownerEmail, // Кому надсилається лист (ваш цільовий email)
            replyTo: email, // Щоб ви могли відповісти безпосередньо відправнику форми
            subject: `Нове повідомлення з сайту від ${name}`, // Тема листа
            html: `
                <p><strong>Ім'я:</strong> ${name}</p>
                <p><strong>Email відправника:</strong> ${email}</p>
                <p><strong>Повідомлення:</strong></p>
                <p>${message}</p>
            ` // HTML-тіло листа
        };

        // Надсилаємо електронний лист за допомогою Nodemailer
        await transporter.sendMail(mailOptions);
        console.log('Email відправлено успішно!');
        // Якщо лист успішно надіслано, повертаємо статус 200 (OK) та повідомлення про успіх.
        res.status(200).json({ message: 'Ваше повідомлення успішно відправлено!' });
    } catch (error) {
        // Якщо виникла помилка під час надсилання листа, логуємо її та повертаємо статус 500 (Internal Server Error)
        console.error('Помилка при відправці email:', error);
        res.status(500).json({ message: 'Не вдалося відправити повідомлення. Будь ласка, спробуйте ще раз пізніше.', error: error.message });
    }
});

// Запускаємо сервер на визначеному порту
app.listen(port, () => {
    console.log(`Бекенд-сервер запущено на https://team-ivory-zeta.vercel.app/`);
});
