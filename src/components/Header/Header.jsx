import React from 'react';
import './Header.css'; // Asegúrate de crear un archivo CSS si aún no lo tienes.
import Productos from '../../data/products.json'



const Header = () => {
  // Filtramos los productos por tipo de nave
  const tipoNaves = [...new Set(Productos.map((ship) => ship.tipoNave))]; // Para obtener tipos únicos (SpaceX, NASA, etc.)

  return (
    <>

      {/* Barra de navegación */}
      <nav id="navbar">
        <div className="nav-content">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li>
              <a href="#productos">Productos</a>
              <ul className="submenu1">
                {tipoNaves.map((tipo, index) => (
                  <li key={index}>
                    <a href={`#Productos${tipo}`}>Naves de {tipo}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#informacion">Información</a>
              <ul className="submenu2">
                {Productos.map((ship) => (
                  <li key={ship.id}>
                    <a href={`#info-${ship.title.replace(/\s+/g, '').toLowerCase()}`}>
                      {ship.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li><a href="#acerca-de">Acerca de Nosotros</a></li>
          </ul>
          <div className="input-container">
            <input type="text" id="input" required />
            <label htmlFor="input" className="label">Search</label>
            <div className="underline"></div>
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="shopping-cart">
            <button className="cart-container">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </nav>

       {/* Encabezado */}
       <section className="intro">
        <h1>ShipShop</h1>
        <h2>“Viaja Más Allá con Nuestros Modelos de Naves Espaciales”</h2>
      </section>

    
    </>
  );
};

export default Header;
