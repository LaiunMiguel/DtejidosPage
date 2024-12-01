import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiar la importación a 'react-dom/client'
import App from './App.jsx';
import './assets/styles/base.css';  // O tu archivo CSS general
import './assets/styles/index.css';  // O tu archivo CSS general

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
