import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de estar usando 'react-dom/client' si usas React 18
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './assets/styles/base.css';  // O tu archivo CSS general
import './assets/styles/index.css';  // O tu archivo CSS general

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
