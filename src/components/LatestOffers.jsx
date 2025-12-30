import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestOffers = ({ addToCart }) => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  const offers = [
    {
      id: 'prod-1',
      name: 'Magnesium Glycinate | Magnizen',
      price: 3500,
      image: '/assets/products/main-product.jpeg',
      rating: 4.5,
      reviews: 120,
      originalPrice: 4500,
      discountedPrice: 3500
    },
    {
      id: 'prod-2',
      name: 'Vanur Men',
      price: 1650,
      image: '/assets/products/product-1.jpeg',
      rating: 4.8,
      reviews: 89,
      originalPrice: 2000,
      discountedPrice: 1650
    },
    {
      id: 'prod-3',
      name: 'Vanur Women',
      price: 1500,
      image: '/assets/products/product-2.jpeg',
      rating: 4.6,
      reviews: 156,
      originalPrice: 1800,
      discountedPrice: 1500
    },
    {
      id: 'prod-4',
      name: 'Certeza BM-405 Digital Blood Pressure Monitor',
      price: 5950,
      image: '/assets/products/other-product/Certeza-1.webp',
      rating: 4.7,
      reviews: 245,
      originalPrice: 6500,
      discountedPrice: 5950
    },
    {
      id: 'prod-5',
      name: 'Bookang – B.P Apparatus Aneroid',
      price: 2500,
      image: '/assets/products/other-product/Bookang.jpg',
      rating: 4.6,
      reviews: 189,
      originalPrice: 2800,
      discountedPrice: 2500
    },
    {
      id: 'prod-6',
      name: 'Electric Heating Pad',
      price: 3200,
      image: '/assets/products/other-product/electric-heating-pad.webp',
      rating: 4.8,
      reviews: 312,
      originalPrice: 3500,
      discountedPrice: 3200
    },
    {
      id: 'prod-7',
      name: 'Certeza Nb-607 Nebulizer Machine',
      price: 5300,
      image: '/assets/products/other-product/nebulizer-machne-crtza.webp',
      rating: 4.9,
      reviews: 428,
      originalPrice: 5800,
      discountedPrice: 5300
    },
    {
      id: 'prod-8',
      name: 'Nurose Collagen Capsules',
      price: 1790,
      image: '/assets/products/product-3.jpeg',
      rating: 4.7,
      reviews: 95,
      originalPrice: 1990,
      discountedPrice: 1790
    },
    {
      id: 'prod-9',
      name: "BioMed's Teenur",
      price: 1440,
      image: '/assets/products/product-4.jpeg',
      rating: 4.6,
      reviews: 112,
      originalPrice: 1590,
      discountedPrice: 1440
    },
    {
      id: 'prod-10',
      name: 'Magioo Magnesium Glycinate',
      price: 2030,
      image: '/assets/products/product-5.jpeg',
      rating: 4.8,
      reviews: 178,
      originalPrice: 2250,
      discountedPrice: 2030
    },
    {
      id: 'prod-11',
      name: 'VNUR WOMEN Once a Day Multi',
      price: 2250,
      image: '/assets/products/product-6.jpeg',
      rating: 4.7,
      reviews: 145,
      originalPrice: 2500,
      discountedPrice: 2250
    }
  ];

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
              <Link 
                key={`offer-${idx}`} 
                to={`/product/${offer.id}`}
                className="w-[320px] min-w-[320px] max-w-[320px] bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 block cursor-pointer"
              >
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
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(offer);
                    }}
                    className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
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

