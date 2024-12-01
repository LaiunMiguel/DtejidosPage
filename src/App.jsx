import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';
import Footer from './components/Footer'; 
import Hero from './components/Hero'; 
import Navbar from './components/Navbar'; 
import ProductoPage from './components/ProductoPage'; 
import Contacto from './components/Contacto'; 
import SobreMi from './components/SobreMi'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoPage />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
