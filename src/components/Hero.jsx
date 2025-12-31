import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/assets/hero-section-banner/banner-image-1.jpg',
    '/assets/hero-section-banner/banner-image-2.jpg',
    '/assets/hero-section-banner/banner-image-3.jpg',
    '/assets/hero-section-banner/banner-image-4.jpg',
    '/assets/hero-section-banner/banner-image-5.jpg',
    '/assets/hero-section-banner/banner-image-6.jpg',
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[250px] md:h-[110vh] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-3 bg-biomed-teal'
                : 'w-3 h-3 bg-white/60 hover:bg-white/90'
            } rounded-full shadow-lg`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

