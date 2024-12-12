import React from 'react';

import Card from './comp/Card'; // Asegúrate de que esta sea la ruta correcta



function Producto4() {
  const productos = [
    {
      img: './card45.avif',
      titulo: 'UNO No Mercy',    
      precio: 15,
      descripcion: 'Mattel Games',
    },
    {
        img: './card46.avif',
        titulo: 'UNO',    
        precio: 10,
        descripcion: 'Mattel Games',
    },
    {
      img: './card47.avif',
      titulo: 'UNO Flip',    
      precio: 12,
      descripcion: 'Mattel Games',
    },
    {
        img: './card48.avif',
        titulo: 'UNO Quatro',    
        precio: 30,
        descripcion: 'Mattel Games',
    },
    {
      img: './card49.avif',
      titulo: 'DOS',    
      precio: 15,
      descripcion: 'Mattel Games',
    },
    {
        img: './card50.avif',
        titulo: 'Mega Construx Monster Truck Mega Wrex',    
        precio: 35,
        descripcion: 'Hot Wheels',
    },
    {
        img: './card51.avif',
        titulo: 'Mega Pista De Dentelladas De Tiger Shark Aplastar Y Chocar',    
        precio: 70,
        descripcion: 'Hot Wheels',
    },
    {
        img: './card52.avif',
        titulo: 'City Garaje Definitivo',    
        precio: 53,
        descripcion: 'Hot Wheels',
    },
    {
        img: './card53.avif',
        titulo: 'Megagaraje',    
        precio: 45,
        descripcion: 'Hot Wheels',
    },
    {
        img: './card54.avif',
        titulo: 'City Némesis Surtido',    
        precio: 89,
        descripcion: 'Hot Wheels',
    },
    {
        img: './card55.avif',
        titulo: 'Conjunto De Juego Huye Del Tiburón',    
        precio: 90,
        descripcion: 'Hot Wheels',
    },
    {
        img: './card56.avif',
        titulo: 'Toy Story Buzz Lightyear',    
        precio: 86,
        descripcion: 'Disney Pixar ',
    },
    {
        img: './card57.avif',
        titulo: 'Toy Story Woody grande',    
        precio: 105,
        descripcion: 'Disney Pixar ',
    },
    {
        img: './card58.avif',
        titulo: 'Mega Zurg',    
        precio: 120,
        descripcion: 'Disney Pixar ',
    },
    {
        img: './card59.avif',
        titulo: 'Epic Attack Carnotauro Mandíbula Feroz',    
        precio: 70,
        descripcion: 'Jurassic World ',
    },
    {
        img: './card60.avif',
        titulo: 'Pack dinosaurios',    
        precio: 82,
        descripcion: 'Jurassic World ',
    },

  
      
      


  ];

  return (
    <div className="cardv-container">
      {productos.map((producto, index) => (
        <Card
            key={`producto4-${index}`}

          img={producto.img}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}


export default Producto4;
