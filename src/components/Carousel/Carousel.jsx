// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard';
import './Carousel.css'; // Crear un archivo CSS específico para los estilos del carrusel



const Carousel = ({ products, settings }) => {
  return (
    <Slider {...settings} className='slider-container'>
      {products.map(product => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.descriptionProduct}
            imageProduct={product.imageProduct}
            price={product.price}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
