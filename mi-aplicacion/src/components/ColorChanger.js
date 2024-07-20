import React, { useState, useEffect } from 'react';
import '../assets/css/estilos.css';

function ColorChanger() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log('ColorChanger component mounted');
  }, []);

  const toggleTheme = () => {
    console.log('Button clicked');
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  );
}

export default ColorChanger;
