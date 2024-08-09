import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const slides = [
  {
    image: "https://replicate.delivery/yhqm/NxttM0xZ5vLkMVa3sww1dR4ny3CiBEzLv4af6KWeLbFNLnQTA/out-0.png",
    title: "İSTERSEN 50 KİŞİ DOĞRA YİNE DE GEL BANA UĞRA",
    description: "Mahşer Gününde Allah'a karşı bile savunmanı yaparken Av. Can Vergili yanında..",
    cta: "DAHA FAZLASI İÇİN"
  },
  {
    image: "https://replicate.delivery/yhqm/wA2FNei0OG0yQS9ouQPz5st7tXNUft18DahR55u8yZceWOhmA/out-0.png",
    title: "HUKUK BİZİM İŞİMİZ",
    description: "Can Vergili ile hukukun her alanında yanınızdayız.",
    cta: "HİZMETLERİMİZ"
  },
  {
    image: "/images/crowd.png",
    title: "ULUSLARARASI DENEYİM",
    description: "Dünya çapında hukuki çözümler için doğru adres.",
    cta: "HAKKIMIZDA"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 15000);
    return () => clearInterval(timer);
  }, [isDragging]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleDragStart = (e) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setIsDragging(true);
  };

  const handleDragEnd = (e) => {
    if (!startX) return;
    const endX = e.touches ? e.changedTouches[0].clientX : e.clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setStartX(null);
    setIsDragging(false);
  };

  return (
    <div 
      className="relative h-[1000px] overflow-hidden" 
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-20">
            <h1 className="text-white text-5xl font-light mb-4">{slide.title}</h1>
            <p className="text-white text-xl mb-6">{slide.description}</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
      >
        &#10095;
      </button>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <HeroCarousel />
    </React.StrictMode>,
    document.getElementById('hero-carousel-root')
  );
});

export default HeroCarousel;