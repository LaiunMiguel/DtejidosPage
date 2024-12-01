import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link

const Hero = () => {
  return (
    <section className="hero">
      <h1>Bienvenidx a DtejidoSetrata</h1>
      <p>Soy Daniela y te invito a recorrer mi página y ver mis productos.</p>
      <Link to="/productos" className="btn">Ver Productos</Link> 
    </section>
  );
};

export default Hero;
