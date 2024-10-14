// Products.jsx
import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import productsData from '../../data/products.json';
import CaracNasa from '../Caracteristics/CaracNasa';
import CaracSpaceX from '../Caracteristics/CaracSpaceX';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    console.log("Productos cargados: ", productsData); // Verifica que los productos están cargados
  }, []);

  const spaceXProducts = products.filter(product => product.tipoNave === 'SpaceX');
  const nasaProducts = products.filter(product => product.tipoNave === 'NASA');

  console.log("Productos SpaceX: ", spaceXProducts); // Verifica que los productos SpaceX se filtran correctamente
  console.log("Productos NASA: ", nasaProducts);     // Verifica que los productos NASA se filtran correctamente

  return (
    <section id='productos' className='products'>
      <h2 id='product-type' className='products-title'>Naves de SpaceX</h2>
      <Carousel products={spaceXProducts} />
      <CaracNasa/>

      <h2 id='product-type' className='products-title'>Naves de NASA</h2>
      <Carousel products={nasaProducts} />
      <CaracSpaceX/>
    </section>
  );
};

export default Products;
