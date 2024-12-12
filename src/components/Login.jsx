import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src="./logov1.png" alt="Background" />
      </div>
      <div className="login-form">
        <h2>Ingresar</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Correo electrónico" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
          </div>
          <button type="submit" className="login-button">ENTRAR</button>
        </form>
        <div className="login-footer">
          <a href="/create-account">Crear cuenta</a>
          <a href="/forgot-password">¿Olvidó su contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
