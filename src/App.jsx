import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importamos el componente Home
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* Configuración de rutas */}
        <Routes>
          {/* Ruta hacia la página de inicio */}
          <Route path="/" element={<Home />} />

          {/* Otras rutas que puedas agregar en el futuro */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
