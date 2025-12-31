import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

const API_BASE_URL = 'https://biomed-phamacy-backend.vercel.app/api';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fallback static slides if no banners from API
  const fallbackSlides = [
    '/assets/hero-section-banner/banner-image-1.jpg',
    '/assets/hero-section-banner/banner-image-2.jpg',
    '/assets/hero-section-banner/banner-image-3.jpg',
    '/assets/hero-section-banner/banner-image-4.jpg',
    '/assets/hero-section-banner/banner-image-5.jpg',
    '/assets/hero-section-banner/banner-image-6.jpg',
  ];

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/banners`);
        const data = await response.json();
        
        if (data.banners && data.banners.length > 0) {
          // Use banners from API, sorted by order_index
          setBanners(data.banners);
        } else {
          // Use fallback static images
          setBanners(fallbackSlides.map((url, index) => ({ id: index, image_url: url })));
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
        // Use fallback on error
        setBanners(fallbackSlides.map((url, index) => ({ id: index, image_url: url })));
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const slides = banners.length > 0 ? banners : fallbackSlides.map((url, index) => ({ id: index, image_url: url }));

  // Auto-play carousel
  useEffect(() => {
    if (slides.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (loading) {
    return (
      <section className="relative h-[250px] md:h-[110vh] overflow-hidden bg-gray-200 flex items-center justify-center">
        <div className="text-gray-500">Loading banners...</div>
      </section>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-[250px] md:h-[110vh] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {slides.map((banner, index) => {
          const imageUrl = typeof banner === 'string' ? banner : banner.image_url;
          const bannerLink = typeof banner === 'object' ? banner.link : null;
          const bannerId = typeof banner === 'object' ? banner.id : index;
          
          const imageElement = (
            <img
              src={getImageUrl(imageUrl)}
              alt={typeof banner === 'object' ? (banner.title || `Banner ${index + 1}`) : `Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          );

          return (
            <div
              key={bannerId}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {bannerLink ? (
                <a href={bannerLink} className="block w-full h-full">
                  {imageElement}
                </a>
              ) : (
                imageElement
              )}
            </div>
          );
        })}
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

