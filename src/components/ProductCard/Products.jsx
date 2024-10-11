// Products.jsx
import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import productsData from '../../data/products.json';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Filtrar productos por tipo de nave
  const spaceXProducts = products.filter(product => product.tipoNave === 'SpaceX');
  const nasaProducts = products.filter(product => product.tipoNave === 'NASA');

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='products'>
      <h2 className='products-title'>Naves de SpaceX</h2>
      <Carousel products={spaceXProducts} settings={settings} />

      <h2 className='products-title'>Naves de NASA</h2>
      <Carousel products={nasaProducts} settings={settings} />
    </section>
  );
};

export default Products;