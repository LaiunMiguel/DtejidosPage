import React from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link de React Router

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo.jpg" alt="Logo" className="logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/sobreMi">Sobre mí</Link></li>
          <li><Link to="/contacto">Contáctame</Link></li>
          <li><a href="https://www.instagram.com/dtejidosetrata/?hl=es-es" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
      </nav>
    </header>
  );
};


export default Navbar;
