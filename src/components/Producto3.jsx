import React from 'react';

import Card from './comp/Card'; // Asegúrate de que esta sea la ruta correcta



function Producto3() {
  const productos = [
    {
      img: './card33.jpg',
      titulo: 'Galvatron',    
      precio: 187,
      descripcion: 'Transformers',
    },
    {
        img: './card34.jpg',
        titulo: 'Dark of the Moon Bumblebee',    
        precio: 165,
        descripcion: 'Transformers',
    },
    {
        img: './card35.jpg',
        titulo: 'Thundercracker',    
        precio: 170,
        descripcion: 'Transformers',
    },
    {
        img: './card36.jpg',
        titulo: 'Optimus Primer Legacy',    
        precio: 193,
        descripcion: 'Transformers',
    },
      
    {
        img: './card37.jpg',
        titulo: 'Nerf Elite 2.0 Motoblitz',    
        precio: 120,
        descripcion: 'Nerf',
    },
    {
        img: './card38.jpg',
        titulo: 'Nerf Elite 2.0 Ranger PD-5',    
        precio: 135,
        descripcion: 'Nerf',
    },
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
        img: './card44.jpg',
        titulo: 'Monopoly Game',    
        precio: 100,
        descripcion: 'Monopoly',
    },
      
      


  ];

  return (
    <div className="cardv-container">
      {productos.map((producto, index) => (
        <Card
            key={`producto3-${index}`}

          img={producto.img}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}


export default Producto3;
