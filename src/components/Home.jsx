import React from 'react';
import Cardv1 from './comp/Cardv1';
import Cardv2 from './comp/Cardv2';
import Carrusel from './comp/Carrusel.jsx';
import Colecciones from './comp/Colecciones.jsx';
import Espacio from './Espacio.jsx';


function Home() {
  return (
    <div>
      <Carrusel/>
      <Colecciones/>
      <Espacio/>
      <Cardv1
        logo="./logo1.png"
        mainImage="./mainimg1.png"
        title="FIGURAS DE ACCIÓN DE TRANSFORMERS"
        description="Encuentra tus juguetes favoritos de Transformers para sumar a tu colección."
        buttonText="VER AHORA"
        bgColor="#1F2229"
        navigateTo="/marca3"
      />
      <Cardv2
        logo="./logo2.png"
        mainImage="./mainimg2.png"
        title="ES NERF O NADA"
        description="Experimenta la última línea de lanzadores Nerf."
        buttonText="VER AHORA"
        bgColor="#314777" 
        navigateTo="/marca3" // Ruta para Hot Toys
      />
      <Cardv1
        logo="./logo3.png"
        mainImage="./mainimg3.png"
        title="El emocionante juego de las propiedades inmobiliarias"
        description=""
        buttonText="VER AHORA"
        bgColor="#000000"
        navigateTo="/marca3"
      />
      <Cardv2
        logo="./logo4.png"
        mainImage="./mainimg4.avif"
        title="HOT TOYS"
        description="Encuentra tu figura ideal"
        buttonText="VER AHORA"
        bgColor="#500000" 
        navigateTo="/marca1" // Ruta para Hot Toys
      />
      <Cardv1
        logo="./logo5.png"
        mainImage="./mainimg5.png"
        title="lego"
        description="Emprende una aventura constructora histórica"
        buttonText="VER AHORA"
        bgColor="#000000"
        navigateTo="/marca2" // Ruta para Lego
      />
      <Espacio/>
    </div>
  );
}

export default Home;
