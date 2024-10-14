import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

function Slider({ imagenes }) {
  const [imagenActual, setImagenActual] = useState(0);
  const length = imagenes.length;

  // Cambiar a la siguiente imagen automáticamente cada 5 segundos
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setImagenActual((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 10000); // Cambiar cada 5 segundos

    return () => clearInterval(autoSlide); // Limpiar el intervalo al desmontar
  }, [length]);

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // Obtener la imagen actual y su descripción basada en el índice
  const imagenActualData = imagenes[imagenActual];

  return (
    <section id="informacion" className={styles["slider-container"]}>
      <button onClick={anteriorImagen} className={styles["slider-button"]}>
        {"<"}
      </button>
      {imagenes.map((imagen, index) => (
        <div
          key={imagen.id} // Usar el id como key
          className={
            imagenActual === index
              ? `${styles["slider-slide"]} ${styles["slider-active"]}`
              : styles["slider-slide"]
          }
        >
          {imagenActual === index && (
            <>
              <img
                src={imagen.imageInfo} 
                alt={imagen.title} 
                className={styles["slider-img"]}
              />
              
              <div className={styles["slider-text"]}>
                <h3>{imagen.title}</h3>
                <p className="i-description">{imagen.descriptionInfo}</p> 
              </div>
            </>
          )}
        </div>
      ))}
      <button onClick={siguienteImagen} className={styles["slider-button"]}>
        {">"}
      </button>

      {/* Indicadores de progreso */}
      <div className={styles["slider-indicators"]}>
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={
              imagenActual === index
                ? styles["slider-dot-active"]
                : styles["slider-dot"]
            }
            onClick={() => setImagenActual(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Slider;
