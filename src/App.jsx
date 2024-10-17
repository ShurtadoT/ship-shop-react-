import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importamos el componente Home
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/CartModal/CartGlobal'; // Importamos el CartProvider

function App() {
  return (
    <CartProvider> {/* Envuelve toda la aplicación con CartProvider */}
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
