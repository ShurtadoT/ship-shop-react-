import React, { useState } from "react";
import "./Products.css";

const ProductCard = ({ id, title, imageProduct, price }) => {
  // Estado para manejar la calificación seleccionada para cada producto
  const [selectedRating, setSelectedRating] = useState(null);

  // Función para manejar el cambio en la selección de estrellas
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value); // Actualiza el estado
    console.log(`Producto: ${id}, Rating seleccionado: ${event.target.value}`); // Depuración
  };

  // Asegúrate de que el precio tenga un valor antes de aplicar toLocaleString
  const formattedPrice = price
    ? price.toLocaleString("en-US", { style: "currency", currency: "USD" })
    : "Precio no disponible";

  return (
    <div className='product-card' key={id}>
      <img src={imageProduct} alt={title} />
      <div className='w-product'>
        <p>Add to cart</p>
      </div>
      <h2>{title}</h2>
      <p>{formattedPrice}</p>

      <div className='rating'>
        <input
          value='5'
          name={`rate-${id}`} // Nombre único por producto
          id={`star5-${id}`} // ID único por producto
          type='radio'
          onChange={handleRatingChange}
          checked={selectedRating === '5'} // Verifica si esta opción está seleccionada
        />
        <label title='5 estrellas' htmlFor={`star5-${id}`}></label>

        <input
          value='4'
          name={`rate-${id}`}
          id={`star4-${id}`}
          type='radio'
          onChange={handleRatingChange}
          checked={selectedRating === '4'}
        />
        <label title='4 estrellas' htmlFor={`star4-${id}`}></label>

        <input
          value='3'
          name={`rate-${id}`}
          id={`star3-${id}`}
          type='radio'
          onChange={handleRatingChange}
          checked={selectedRating === '3'}
        />
        <label title='3 estrellas' htmlFor={`star3-${id}`}></label>

        <input
          value='2'
          name={`rate-${id}`}
          id={`star2-${id}`}
          type='radio'
          onChange={handleRatingChange}
          checked={selectedRating === '2'}
        />
        <label title='2 estrellas' htmlFor={`star2-${id}`}></label>

        <input
          value='1'
          name={`rate-${id}`}
          id={`star1-${id}`}
          type='radio'
          onChange={handleRatingChange}
          checked={selectedRating === '1'}
        />
        <label title='1 estrella' htmlFor={`star1-${id}`}></label>
      </div>
    </div>
  );
};

export default ProductCard;
