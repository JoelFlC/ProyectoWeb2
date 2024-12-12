import React from 'react';
import Banner from './comp/Banner.jsx';
import './Edad.css';
import Espacio from './Espacio.jsx';
import ProEdad3 from './ProEdad3.jsx';


function Edad3 () {
  return (
    <div>

        <Banner imgbanner="/banner7.png" /> 
        <h1 className='subtitulo'>Articulos para jovenes</h1>
        <ProEdad3/>

        <Espacio/>
    </div>
  )
}

export default Edad3;
