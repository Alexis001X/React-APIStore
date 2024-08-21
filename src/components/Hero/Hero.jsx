import React from 'react';

import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <img src="/src/images/Heroimg1.jpg" alt="Hero Image" className="hero-image" />
      <div className="hero-text">
        <h1>Bienvenido a este proyecto</h1>
        <p>Esta aplicacion tiene como objetivo demostrar el consumo de una API en React.</p>
        <p>ademas de mostrar la funcionalidad de un menu de filtros para la busqueda.</p>
      </div>
    </div>
  );
}

export default Hero;