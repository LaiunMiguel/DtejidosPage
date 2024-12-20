import React from 'react';
import '../assets/styles/sobreMi.css'; // Asegúrate de que el CSS esté en la carpeta correcta
import SobreMiImage from '../assets/images/SobreMi.jpg';


const SobreMi = () => {
  return (
    <div className="sobreMi-container">
      <h1>Sobre Mí</h1>
      <h2>Hola! Yo soy Daniela.</h2>
      <h1>Cómo todo comenzó</h1>
      <div>
        <p>Todo esto comenzó en la cuarentena, y se materializó con el fin de ella.</p>
        <p>Decidí seguir con esta aventura que es emprender, durante el año tuve algunos altibajos, 
        pero es de mi agrado contarles que fueron más altos que bajos, y ahora mirando hacia atrás lo puedo notar.</p>

        <div className="sobreMi-divConImagenYTexto">
          <div className="sobreMi-imagenDiv">
            <img className="sobreMi-imagen" src={SobreMiImage} alt="Sobre Mi" />
          </div>
          <div className="sobreMi-texto">
            <p>Estoy muy orgullosa de mí, de cómo y dónde empecé y cómo y dónde estoy parada ahora.</p>
            <p>En retrospectiva, fue una montaña rusa de la que en ocasiones pensé en bajarme, debido a algunos asuntos personales, asuntos con respecto al emprendimiento, el manejo de los tiempos y demás.</p>
            <p>Hoy (aunque muchas veces me encuentro un poco estresada) me alegra no haberme bajado.</p>
            <p>Tengo experiencias nuevas, adquirí nuevas herramientas para desenvolverme, conocí muy bellas personas y, he mejorado mucho en varios aspectos, todavía me queda mucho por mejorar, es un largo camino.</p>
            <p>Emprender no es fácil, no es algo que deba tomarse a la ligera, aún así, espero seguir en este lindo y escabroso camino.</p>
            <p>Si vos estás pensando en emprender, hacelo porque es una experiencia muy linda.</p>
            <p>Hacelo y el que no te apoye que te mire crecer desde lejos.</p>
            <p>Vas a tener varios inconvenientes al principio, y ni te digo los que vas a tener en el transcurso, pero... lo vale, si es algo que querés y que te gusta.</p>
            <p>Tengo más cosas para decir, y algunas otras para las que no encuentro las palabras adecuadas que puedan expresar en su totalidad lo que siento.</p>
            <p>Así que lo único que tengo para decirles es que les agradezco mucho a quienes me acompañaron desde un principio, a quienes me acompañaron en el "medio" y a quienes son súper nuevxs.</p>
            <p>Les agradezco la confianza cuando me piden hacer proyectos nuevos, les agradezco cuando les gustan mis cosas y me lo dicen con la mejor, les agradezco los consejos e ideas.</p>
            <p>Me agradezco a mí, les agradezco a cada unx de ustedes.</p>
          </div>       
        </div>
        <h1>Gracias totales.</h1>
      </div>
    </div>
  );
};

export default SobreMi;
