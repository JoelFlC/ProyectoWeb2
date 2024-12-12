import React from 'react';

import Card from './comp/Card'; // Asegúrate de que esta sea la ruta correcta



function Producto2() {
  const productos = [
    {
      img: './card17.webp',
      titulo: 'Crucero de Ataque Clase',    
      precio: 180,
      descripcion: 'Venator de la República',
    },
    {
      img: './card18.webp',
      titulo: 'Ford GT 2022',
      precio: 220,
      descripcion: 'Techinic',
    },
    {
      img: './card19.webp',
      titulo: 'The Razor Crest',
      precio: 150,
      descripcion: 'Star Wars',
    },
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
        img: './card23.webp',
        titulo: 'Casco de Star-Lord',
        precio: 160,
        descripcion: 'Marvel',
    },
    {
        img: './card24.webp',
        titulo: 'Torre de los Vengadores',
        precio: 200,
        descripcion: 'Marvel',
    },

    {
        img: './card25.webp',
        titulo: 'Bumblebee',
        precio: 90,
        descripcion: 'Icons',
    },
    {
        img: './card26.webp',
        titulo: 'Helitransporte de los Vengadores',
        precio: 250,
        descripcion: 'Marvel',
    },
    {
        img: './card27.webp',
        titulo: 'Black Panther',
        precio: 110,
        descripcion: 'Marvel',
    },
    {
        img: './card28.webp',
        titulo: 'Batcueva: Caja Sombría',
        precio: 180,
        descripcion: 'DC',
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
        img: './card31.webp',
        titulo: 'Caza Estelar Ala-X',
        precio: 123,
        descripcion: 'Star Wars',
    },
    {
        img: './card32.webp',
        titulo: 'Dungeons & Dragons: Aventura del Dragón Rojo',
        precio: 180,
        descripcion: 'Ideas',
    },
  ];

  return (
    <div className="cardv-container">
      {productos.map((producto, index) => (
        <Card
            key={`producto2-${index}`}

          img={producto.img}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}


export default Producto2;
