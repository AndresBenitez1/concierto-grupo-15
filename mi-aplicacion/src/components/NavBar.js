// src/components/NavBar.js
import React, { useEffect } from 'react';
import '../assets/css/estilos.css'; // Asegúrate de importar tus estilos si es necesario

function NavBar() {
  useEffect(() => {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    const openMenu = () => menu.classList.add('nav__link--show');
    const closeMenuHandler = () => menu.classList.remove('nav__link--show');

    openButton.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuHandler);

    // Cleanup function to remove event listeners
    return () => {
      openButton.removeEventListener('click', openMenu);
      closeMenu.removeEventListener('click', closeMenuHandler);
    };
  }, []);

  return (
    <nav>
      <button className="nav__menu">Open Menu</button>
      <div className="nav__link">
        <button className="nav__close">Close Menu</button>
        {/* Agrega aquí tus enlaces de navegación */}
      </div>
    </nav>
  );
}

export default NavBar;
