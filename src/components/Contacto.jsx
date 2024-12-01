import React from 'react';
import '../assets/styles/contacto.css';  // Asegúrate de importar tu archivo CSS

const Contacto = () => {
  return (
    <section id="contacto" className="section">
      <h2>Contacto</h2>
      <p>No dudes en consultarme mandando un correo a <a href="mailto:Dtejidosetrata@gmail.com">Dtejidosetrata@gmail.com</a></p>
      <p>También puedes escribirme por:</p>
      <ul>
        <li><a href="https://www.instagram.com/dtejidosetrata/?hl=es-es" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul>
    </section>
  );
};

export default Contacto;
