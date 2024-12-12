import React from 'react';
import './Card.css';

function Card({ img, titulo, precio, descripcion }) {
  return (
    <div className="cardv">
      <div className="cardv-image">
        <img src={img} alt={titulo} />
      </div>
      <div className="cardv-content">
        <p className="cardv-description">{descripcion}</p>
        <h2 className="cardv-title">{titulo}</h2>
        <p className="cardv-price">${precio}</p>
      </div>
    </div>
  );
}

export default Card;
