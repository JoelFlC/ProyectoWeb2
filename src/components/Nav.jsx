import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="./logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <Link to="/">Inicio</Link>

        {/* Dropdown Ver por Marcas */}
        <div className="dropdown">
          <span className="dropdown-trigger">Ver por Marcas</span>
          <div className="dropdown-menu">
            <Link to="/marca1">Hot Toys</Link>
            <Link to="/marca2">Lego</Link>
            <Link to="/marca3">Hasbro</Link>
            <Link to="/marca4">Mattel</Link>
          </div>
        </div>

        {/* Dropdown Ver por Edades */}
        <div className="dropdown">
          <span className="dropdown-trigger">Ver por Edades</span>
          <div className="dropdown-menu">
            <Link to="/edad1">0-6 años</Link>
            <Link to="/edad2">7-15 años</Link>
            <Link to="/edad3">16+ años</Link>
          </div>
        </div>

        <Link to="/cuenta">Mi cuenta</Link>
      </div>
    </div>
  );
};

export default Nav;
