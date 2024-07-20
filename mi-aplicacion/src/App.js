import React from 'react';
import './assets/css/normalize.css';
import './assets/css/estilos.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ColorChanger from './components/ColorChanger';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ColorChanger />
      <Carousel /> {/* Añade el carrusel aquí */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
