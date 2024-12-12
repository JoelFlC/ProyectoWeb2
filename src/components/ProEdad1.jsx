import React from 'react';

import Card from './comp/Card'; // Asegúrate de que esta sea la ruta correcta



function ProEdad1() {
  const productos = [
    {
        img: './card39.jpg',
        titulo: 'Nerf Elite 2.0 - Prospect QS-4',    
        precio: 120,
        descripcion: 'Nerf',
    },
    {
        img: './card40.jpg',
        titulo: 'Micro HC-R MicroShots',    
        precio: 120,
        descripcion: 'Nerf',
    },
    {
        img: './card41.jpg',
        titulo: 'Play-Doh Marvel, Captain America Escudo Sello',    
        precio: 30,
        descripcion: 'Play-Doh',
    },
      
    {
        img: './card42.jpg',
        titulo: 'Play-Doh Marvel, Spider-Man Lanza y Atrapa',    
        precio: 40,
        descripcion: 'Play-Doh',
    },
      
    {
        img: './card43.jpg',
        titulo: 'Play-Doh Marvel, Black Panther Garras cortadoras',    
        precio: 35,
        descripcion: 'Play-Doh',
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
    
  ];

  return (
    <div className="cardv-container">
      {productos.map((producto, index) => (
        <Card
            key={`proedad1-${index}`}

          img={producto.img}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}


export default ProEdad1;
