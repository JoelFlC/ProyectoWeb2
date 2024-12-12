import React from 'react';
import Banner from './comp/Banner.jsx';
import './Edad.css';
import Espacio from './Espacio.jsx';
import ProEdad2 from './ProEdad2.jsx';


function Edad2 () {
  return (
    <div>

        <Banner imgbanner="/banner6.png" /> 
        <h1 className='subtitulo'>Articulos para adolescentes</h1>
        <ProEdad2/>

        <Espacio/>
    </div>
  )
}

export default Edad2;
