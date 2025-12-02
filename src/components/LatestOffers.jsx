import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LatestOffers = ({ addToCart }) => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  const offers = [
    {
      id: 'offer-1',
      name: 'Buy 2 Get 1 Free - Health Combo',
      price: 3500,
      image: '/assets/products/product-8.webp'
    },
    {
      id: 'offer-2',
      name: 'Immunity Booster Bundle',
      price: 4200,
      image: '/assets/products/product-9.webp',
      rating: 4.8,
      reviews: 95,
      originalPrice: 5200,
      discountedPrice: 4200
    },
    {
      id: 'offer-3',
      name: 'Complete Wellness Package',
      price: 3800,
      image: '/assets/products/product-10.webp',
      rating: 4.7,
      reviews: 112,
      originalPrice: 4800,
      discountedPrice: 3800
    },
    {
      id: 'offer-4',
      name: 'Energy & Vitality Combo',
      price: 5500,
      image: '/assets/products/product-1.webp',
      rating: 4.9,
      reviews: 88,
      originalPrice: 6500,
      discountedPrice: 5500
    },
    {
      id: 'offer-5',
      name: 'Daily Health Bundle',
      price: 6200,
      image: '/assets/products/product-2.webp',
      rating: 4.6,
      reviews: 134,
      originalPrice: 7500,
      discountedPrice: 6200
    },
  ];

  // Add missing properties to first offer
  offers[0].rating = 4.5;
  offers[0].reviews = 120;
  offers[0].originalPrice = 4500;
  offers[0].discountedPrice = 3500;

  // Duplicate offers for seamless infinite scroll
  const duplicatedOffers = [...offers, ...offers, ...offers];

  // Infinite scroll auto-play
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth / 3; // One set length
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 1; // Reset smoothly
        } else {
          container.scrollBy({
            left: 1,
            behavior: 'auto'
          });
        }
      }
    }, 20); // Smooth continuous scroll

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Carousel scroll functions
  const scrollLeft = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -360,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 360,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          LATEST OFFERS & DISCOUNTS
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays - Hidden on Mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {duplicatedOffers.map((offer, idx) => (
              <div key={`offer-${idx}`} className="w-[320px] min-w-[320px] max-w-[320px] bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0">
                <div className="h-64 flex items-center justify-center bg-gray-50 relative overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.name} 
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    SALE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 h-12 line-clamp-2">{offer.name}</h3>
                  <p className="text-2xl font-bold text-biomed-teal mb-4">Rs. {offer.discountedPrice}</p>
                  <button 
                    onClick={() => addToCart(offer)}
                    className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-10 transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-10 transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestOffers;

