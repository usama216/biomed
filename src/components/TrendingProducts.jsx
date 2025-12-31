import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/imageUtils';

const API_BASE_URL = 'https://biomed-phamacy-backend.vercel.app/api';

const TrendingProducts = ({ addToCart }) => {
  const [activeTab, setActiveTab] = useState('bestselling');
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = products.length > 0 
    ? [...products, ...products, ...products]
    : [];

  // Infinite scroll auto-play
  useEffect(() => {
    if (!isAutoScrolling || duplicatedProducts.length === 0) return;
    
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
  }, [isAutoScrolling, duplicatedProducts.length]);

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
    if (addToCart) addToCart(product);
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
          {/* Gradient Overlays - Hidden on Mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : duplicatedProducts.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-500">No products available</p>
            </div>
          ) : (
            <>
              {/* Left Scroll Button */}
              <button
                onClick={scrollLeft}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>

              {/* Right Scroll Button */}
              <button
                onClick={scrollRight}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
              >
                {duplicatedProducts.map((product, idx) => (
                  <Link 
                    key={`product-${product.id}-${idx}`} 
                    to={`/product/${product.id}`}
                    className="w-[280px] min-w-[280px] max-w-[280px] bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow flex-shrink-0 block cursor-pointer"
                  >
                    <div className="h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-50 overflow-hidden">
                      <img 
                        src={getImageUrl(product.image || (product.images && product.images.length > 0 ? product.images[0] : ''))} 
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
                            className={i < Math.floor(product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews || 0})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 line-through text-sm">Rs. {product.originalPrice}</span>
                      <span className="text-xl font-bold text-biomed-teal">Rs. {product.discountedPrice}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
