import React from 'react';
import Slider from 'react-slick';

import '../assets/css/estilos.css'; // Importa tus estilos

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
