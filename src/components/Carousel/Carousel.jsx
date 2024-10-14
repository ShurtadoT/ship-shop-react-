import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard"; // El componente de la tarjeta del producto
import styles from "./Carousel.module.css"; // Archivo de estilos

function Carousel({ products }) {
  console.log("Productos recibidos en Carousel: ", products); // Verifica que los productos se reciben correctamente

  const [productos, setProductos] = useState(products || []); // Recibe los productos como prop

  // Actualizamos el estado productos cuando los props cambien
  useEffect(() => {
    setProductos(products); // Actualiza productos cuando cambian los props
  }, [products]);

  // Cambiar entre los productos
  const [productoActual, setProductoActual] = useState(0);
  const productosVisibles = 3; // Mostramos 3 productos a la vez
  const length = productos.length;

  const siguienteProducto = () => {
    setProductoActual((prev) => (prev === length - productosVisibles ? 0 : prev + 1));
  };

  const anteriorProducto = () => {
    setProductoActual((prev) => (prev === 0 ? length - productosVisibles : prev - 1));
  };

  return (
    <div className={styles["product-slider-container"]}>
      <button onClick={anteriorProducto} className={styles["product-slider-button"]}>
        {"<"}
      </button>
      <div className={styles["product-slider-wrapper"]}>
        <div
          className={styles["product-slider"]}
          style={{
            transform: `translateX(-${productoActual * (100 / productosVisibles)}%)`,
            width: `${100 * (length / productosVisibles)}%`, // Ajusta el tamaño del contenedor en función del número total de productos
          }}
        >
          {productos.map((producto) => (
            <div key={producto.id} className={styles["product-slider-item"]}>
              <ProductCard
                id={producto.id}
                title={producto.title}
                imageProduct={producto.imageProduct}
                price={producto.price}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={siguienteProducto} className={styles["product-slider-button"]}>
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
