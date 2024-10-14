import React from 'react';
import './Footer.css'; // Importa el archivo CSS para los estilos

const Footer = () => {
  return (
    <footer id='acerca-de' className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h3>Acerca de Nosotros</h3>
          <p>
            Somos una empresa dedicada a la innovación en tecnología aeroespacial, 
            proporcionando soluciones avanzadas para la exploración espacial y más.
          </p>
        </div>

        <div className="social-media">
          <h3>Síguenos en:</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Space Explorers | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
