import React from 'react';

import Card from './comp/Card'; // Asegúrate de que esta sea la ruta correcta



function ProEdad2() {
  const productos = [
    {
        img: './card20.webp',
        titulo: 'Banano pelado',
        precio: 80,
        descripcion: 'Fortnite',
    },
    {
        img: './card21.webp',
        titulo: 'Nanoguantelete',
        precio: 120,
        descripcion: 'Marvel',
    },
    {
        img: './card22.webp',
        titulo: 'Garras de Adamantium de Wolverine',
        precio: 150,
        descripcion: 'Marvel',
    },
    {
        img: './card25.webp',
        titulo: 'Bumblebee',
        precio: 90,
        descripcion: 'Icons',
    },
    {
        img: './card29.webp',
        titulo: 'El Poderoso Bowser',
        precio: 175,
        descripcion: 'Super Mario',
    },
    {
        img: './card30.webp',
        titulo: 'Planta Piraña',
        precio: 165,
        descripcion: 'Super MArio',
    },
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
    
    
  ];

  return (
    <div className="cardv-container">
      {productos.map((producto, index) => (
        <Card
            key={`proedad2-${index}`}

          img={producto.img}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}


export default ProEdad2;
