import React from 'react';
import logo from '../assets/img/concierto.jpg'; // Ajusta el nombre y la ruta de la imagen

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Mi Página</h1>
    </header>
  );
}

export default Header;
