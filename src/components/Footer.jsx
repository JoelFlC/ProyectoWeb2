import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="link">
          <h3>SOBRE NOSOTROS</h3>
          <ul>
            <li><a href="#">Nuestra historia</a></li>
            <li><a href="#">Programa de afiliados</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Carreras</a></li>
          </ul>
        </div>
        <div className="link">
          <h3>ATENCIÓN AL CLIENTE</h3>
          <ul>
            <li><a href="#">Devoluciones y cambios</a></li>
            <li><a href="#">Información de envío</a></li>
            <li><a href="#">Seguimiento de tu pedido</a></li>
            <li><a href="#">Tarjetas de regalo</a></li>
          </ul>
        </div>
        <div className="link">
          <h3>CONECTA CON NOSOTROS</h3>
          <div className="social-icons">
            <a href="#" className="icon facebook"></a>
            <a href="#" className="icon twitter"></a>
            <a href="#" className="icon instagram"></a>
            <a href="#" className="icon tiktok"></a>
          </div>
          <p>Catalogos Bread Toys.</p>
          <button className="subscribe-button">¡Latinoamerica!</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 BreadCenter. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de privacidad</a> | <a href="#">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
