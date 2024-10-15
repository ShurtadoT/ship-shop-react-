import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importamos el componente Home
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}


export default App;
