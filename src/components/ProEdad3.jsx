import React from 'react';

import Card from './comp/Card'; // Asegúrate de que esta sea la ruta correcta



function ProEdad3() {
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
        img: './card31.webp',
        titulo: 'Caza Estelar Ala-X',
        precio: 123,
        descripcion: 'Star Wars',
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
        img: './card32.webp',
        titulo: 'Dungeons & Dragons: Aventura del Dragón Rojo',
        precio: 180,
        descripcion: 'Ideas',
    },
    {
        img: './card44.jpg',
        titulo: 'Monopoly Game',    
        precio: 100,
        descripcion: 'Monopoly',
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
        img: './card1.avif',
        titulo: 'Iron Man Mark LXXXV',
        precio: 338,
        descripcion: 'Sixth Scale FigureP',
      },
      {
        img: './card2.avif',
        titulo: 'Peter Parker (Anti-Venom Suit)',
        precio: 290,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card3.avif',
        titulo: 'Wolverine (Deluxe Version)',
        precio: 340,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card4.avif',
        titulo: 'Jinx',
        precio: 275,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card5.avif',
        titulo: 'Captain America (2012 Version)',
        precio: 184.80,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card6.avif',
        titulo: 'Darth Maul',
        precio: 212,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card7.avif',
        titulo: 'BATGIRL',
        precio: 710,
        descripcion: 'Premium Format™ Figure',
      },
      {
        img: './card8.avif',
        titulo: 'Carnage (Deluxe Version)',
        precio: 412,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card9.avif',
        titulo: 'JIron Man Mark I (Special Edition)',
        precio: 412,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card10.avif',
        titulo: 'Nemesis Prime DLX',
        precio: 480,
        descripcion: 'ActionFigure',
      },
      {
        img: './card11.avif',
        titulo: 'BATMAN',
        precio: 450,
        descripcion: 'Quarter Scale Figure',
      },
      {
        img: './card12.avif',
        titulo: 'The Mandalorian™ and Grogu™',
        precio: 335,
        descripcion: 'Sixth Scale Figure',
      },
      {
        img: './card13.avif',
        titulo: 'Darth Vader Mythos',
        precio: 985,
        descripcion: 'Premium Format™ Figure',
      },
      {
        img: './card14.avif',
        titulo: 'INFINITY ULTRON',
        precio: 322,
        descripcion: 'Sixth Scale Figure Set',
      },
      {
        img: './card15.avif',
        titulo: 'SUPERMAN',
        precio: 725,
        descripcion: 'Premium Format™ Figure',
      },
      {
        img: './card16.avif',
        titulo: 'Gambit Deluxe',
        precio: 285,
        descripcion: 'Sixth Scale Figure Set',
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


export default ProEdad3;
