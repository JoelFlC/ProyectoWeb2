import React from 'react';
import Banner from './comp/Banner.jsx';
import Espacio from './Espacio.jsx';

import Producto1 from './Producto1.jsx';

function Marca1 () {
  return (
    <div>
        <Banner imgbanner="/banner1.webp" /> 
        <Espacio/>
        <Producto1/>
        <Espacio/>
    </div>
  )
}

export default Marca1;
