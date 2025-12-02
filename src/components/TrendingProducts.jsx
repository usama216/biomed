import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const TrendingProducts = ({ addToCart }) => {
  const [activeTab, setActiveTab] = useState('bestselling');
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  const products = [
    {
      id: 'prod-1',
      name: 'Premium Health Supplement',
      rating: 4.5,
      reviews: 120,
      originalPrice: 4500,
      discountedPrice: 3500,
      image: '/assets/products/product-1.webp'
    },
    {
      id: 'prod-2',
      name: 'Biotin Plus Capsules',
      rating: 4.8,
      reviews: 89,
      originalPrice: 2000,
      discountedPrice: 1650,
      image: '/assets/products/product-2.webp'
    },
    {
      id: 'prod-3',
      name: 'Magnesium Complex',
      rating: 4.6,
      reviews: 156,
      originalPrice: 1800,
      discountedPrice: 1500,
      image: '/assets/products/product-3.webp'
    },
    {
      id: 'prod-4',
      name: 'Women Multivitamin',
      rating: 4.7,
      reviews: 203,
      originalPrice: 2200,
      discountedPrice: 1850,
      image: '/assets/products/product-4.webp'
    },
    {
      id: 'prod-5',
      name: 'Collagen Booster',
      rating: 4.9,
      reviews: 178,
      originalPrice: 3500,
      discountedPrice: 2900,
      image: '/assets/products/product-5.webp'
    },
    {
      id: 'prod-6',
      name: 'Immunity Support',
      rating: 4.7,
      reviews: 145,
      originalPrice: 2800,
      discountedPrice: 2300,
      image: '/assets/products/product-6.webp'
    },
    {
      id: 'prod-7',
      name: 'Energy Booster Plus',
      rating: 4.6,
      reviews: 98,
      originalPrice: 2400,
      discountedPrice: 1950,
      image: '/assets/products/product-7.webp'
    },
  ];

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products, ...products];

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
        left: -320,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">TRENDING NOW</h2>
          <div className="flex gap-4">
            {/* <button
              onClick={() => setActiveTab('bestselling')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'bestselling' 
                  ? 'bg-biomed-navy text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              BEST SELLINGS
            </button>
            <button
              onClick={() => setActiveTab('newarrivals')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'newarrivals' 
                  ? 'bg-biomed-navy text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              NEW ARRIVALS
            </button> */}
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {duplicatedProducts.map((product, idx) => (
              <div key={`product-${idx}`} className="min-w-[280px] bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow flex-shrink-0">
                <div className="h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 h-12 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-400 line-through text-sm">Rs. {product.originalPrice}</span>
                  <span className="text-xl font-bold text-biomed-teal">Rs. {product.discountedPrice}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
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

export default TrendingProducts;

