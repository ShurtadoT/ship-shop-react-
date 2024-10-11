import React from "react";
import './Products.css';

const ProductCard = ({ id, title, imageProduct, price }) => {
  // Asegúrate de que precio tenga un valor antes de aplicar toLocaleString
  const formattedPrice = price
    ? price.toLocaleString("en-US", { style: "currency", currency: "USD" })
    : "Precio no disponible";

  console.log(title,imageProduct,price,id)

  return (
    <div className='product-card' key={id}>
      <img src={imageProduct} alt={title} />
      <div className="w-product">
        <p>
          Add to cart
        </p>
      </div>
      <h2>{title}</h2>
      <p>$ {formattedPrice}</p>
      
      <div className='rating'>
        <input value='5' name='rate' id='star5' type='radio' />
        <label title='text' for='star5'></label>
        <input value='4' name='rate' id='star4' type='radio' />
        <label title='text' for='star4'></label>
        <input value='3' name='rate' id='star3' type='radio' checked='' />
        <label title='text' for='star3'></label>
        <input value='2' name='rate' id='star2' type='radio' />
        <label title='text' for='star2'></label>
        <input value='1' name='rate' id='star1' type='radio' />
        <label title='text' for='star1'></label>
      </div>
    </div>


  );
};

export default ProductCard;
