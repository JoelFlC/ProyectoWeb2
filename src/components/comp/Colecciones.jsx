import React from 'react';
import './Colecciones.css';

export const Colecciones = () => {
  return (
    <div className='container'>
        <div className='titulo'>
            <h1> COLECCIONES </h1>
        </div>
        <div className='contenido'>
            <div className='a'>
                <img className='foto' src="./coleecion1.webp " alt="" />
            </div>
            <div className='b'>
                <img className='foto' src="./coleccion2.jpg " alt="" />
            </div>
            <div className='c'>
                <img className='foto' src="./coleccion3.png" alt="" />
            </div>
            <div className='d'>
                <img className='foto' src="./coleccion4.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}
export default Colecciones;