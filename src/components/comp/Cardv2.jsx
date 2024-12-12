import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import './Cardv2.css';

const Cardv2 = ({ logo, mainImage, title, description, buttonText, bgColor = '#1F2229', navigateTo }) => {
  const navigate = useNavigate(); // Define el hook useNavigate

  return (
    <div className="cardd" style={{ backgroundColor: bgColor }}>
      <div className="cardd-grid">
        <div className="cardd-content">
          <div className="cardd-logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2 className="cardd-title">{title}</h2>
          <p className="cardd-description">{description}</p>
          <button
            className="cardd-button" // Cambié la clase para que coincida con tu estilo
            onClick={() => navigate(navigateTo)} // Usa navigate para redirigir
          >
            {buttonText}
          </button>
        </div>
        <div className="cardd-image">
          <img src={mainImage} alt="Main" />
        </div>
      </div>
    </div>
  );
};

export default Cardv2;
