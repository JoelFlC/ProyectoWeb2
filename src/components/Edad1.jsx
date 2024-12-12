import React from 'react';
import Banner from './comp/Banner.jsx';
import './Edad.css';
import Espacio from './Espacio.jsx';
import ProEdad1 from './ProEdad1.jsx';


function Edad1 () {
  return (
    <div>

        <Banner imgbanner="/banner5.png" /> 
        <h1 className='subtitulo'>Articulos para niños</h1>
        <ProEdad1/>

        <Espacio/>
    </div>
  )
}

export default Edad1;
