import React from 'react';
import ReactDOM from 'react-dom';
import HeroCarousel from './carousel'; // HeroCarousel bileşeninin yolunu doğru şekilde belirtin

ReactDOM.render(
  <React.StrictMode>
    <HeroCarousel />
  </React.StrictMode>,
  document.getElementById('hero-carousel-root')
);