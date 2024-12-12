import React from 'react';
import Card from './comp/Card';


function Producto1() {
  const productos = [
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
          key={`producto1-${index}`}
          img={producto.img}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}

export default Producto1;
