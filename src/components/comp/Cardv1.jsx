import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import './Cardv1.css';

const Cardv1 = ({ logo, mainImage, title, description, buttonText, bgColor = '#1F2229', navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-grid">
        <div className="card-content">
          <div className="card-logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <button
            className="card-button"
            onClick={() => navigate(navigateTo)} 
          >
            {buttonText}
          </button>
        </div>
        <div className="card-image">
          <img src={mainImage} alt="Main" />
        </div>
      </div>
    </div>
  );
};

export default Cardv1;
