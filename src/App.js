// src/App.js
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  // Збереження теми в локальному сховищі
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light-theme');

  // Застосування теми до body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Функція для перемикання теми
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
