import React, { useState } from "react";
import "./Products.css";

const ProductCard = ({ id, title, imageProduct, price }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  // Función para manejar el cambio en la selección de estrellas
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
    console.log(`Producto: ${id}, Rating seleccionado: ${event.target.value}`);
  };

  // Asegúrate de que el precio tenga un valor antes de aplicar toLocaleString
  const formattedPrice = price
    ? price.toLocaleString("en-US", { style: "currency", currency: "USD" })
    : "Precio no disponible";

  return (
    <div className="product-card">
      <img src={imageProduct} alt={title} />
      <div className="w-product">
        <p>Add to cart</p>
      </div>
      <h2>{title}</h2>
      <p>{formattedPrice}</p>

      {/* Renderización dinámica de las estrellas de calificación */}
      <div className="rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              value={star}
              name={`rate-${id}`}
              id={`star${star}-${id}`}
              type="radio"
              onChange={handleRatingChange}
              checked={selectedRating === `${star}`}
            />
            <label title={`${star} estrellas`} htmlFor={`star${star}-${id}`}></label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
