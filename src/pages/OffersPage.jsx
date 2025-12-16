import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Grid, List, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const OffersPage = ({ addToCart }) => {
  const [priceRange, setPriceRange] = useState([0, 4500]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4500);
  const [viewMode, setViewMode] = useState('grid');
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState('bestselling');
  const [expandedCategories, setExpandedCategories] = useState(true);
  const [inStock, setInStock] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All products', 'B Vitamins', 'Beauty', 'Best Selling', 'Blood Sugar Support',
    'Bones & Joints', "Children's Health", 'Digestive Health', 'Essential Oils',
    'Fertility Support', 'Fish Oil', 'Glutathione', 'Gummies', 'Hair Care',
    'Heart Health', 'Herbal Support', 'Immune Support', 'Memory & Brain Support',
    "Men's Health", 'Multivitamins'
  ];

  // Combo/Offer Products - Based on 3 Major Products
  const offerProducts = [
    {
      id: 'prod-1',
      name: 'Magnesium Glycinate | Magnizen',
      rating: 4.5,
      reviews: 120,
      originalPrice: 4500,
      discountedPrice: 3500,
      image: '/assets/products/main-product.jpeg',
      description: 'Calm the mind by supporting the nervous system. Relax muscles and nerves to promote restful sleep. Provide optimal support with its highly absorbable and gentle form.',
      inStock: true,
      isFree: false,
      salePercentage: 22
    },
    {
      id: 'prod-2',
      name: 'Vanur Men',
      rating: 4.8,
      reviews: 89,
      originalPrice: 2000,
      discountedPrice: 1650,
      image: '/assets/products/product-1.jpeg',
      description: 'Calm the mind by supporting the nervous system. Relax muscles and nerves to promote restful sleep. Provide optimal support with its highly absorbable and gentle form.',
      inStock: true,
      isFree: false,
      salePercentage: 18
    },
    {
      id: 'prod-3',
      name: 'Vanur Women',
      rating: 4.6,
      reviews: 156,
      originalPrice: 1800,
      discountedPrice: 1500,
      image: '/assets/products/product-2.jpeg',
      description: 'Calm the mind by supporting the nervous system. Relax muscles and nerves to promote restful sleep. Provide optimal support with its highly absorbable and gentle form.',
      inStock: true,
      isFree: false,
      salePercentage: 17
    },
    {
      id: 'prod-4',
      name: 'Certeza BM-405 Digital Blood Pressure Monitor',
      rating: 4.7,
      reviews: 245,
      originalPrice: 6500,
      discountedPrice: 5950,
      image: '/assets/products/other-product/Certeza-1.webp',
      description: 'Accurately measures blood pressure and pulse on the arm. Features a soft cuff material for added comfort. Includes a hypertension indicator and an irregular heartbeat detector.',
      inStock: true,
      isFree: false,
      salePercentage: 8
    },
    {
      id: 'prod-5',
      name: 'Bookang – B.P Apparatus Aneroid',
      rating: 4.6,
      reviews: 189,
      originalPrice: 2800,
      discountedPrice: 2500,
      image: '/assets/products/other-product/Bookang.jpg',
      description: 'Accurate blood pressure measurement with aneroid manometer. Comfortable NYLON cuff and durable LATEX components. Measures 0-300mmHg with +/-3mmHg accuracy.',
      inStock: true,
      isFree: false,
      salePercentage: 11
    },
    {
      id: 'prod-6',
      name: 'Electric Heating Pad',
      rating: 4.8,
      reviews: 312,
      originalPrice: 3500,
      discountedPrice: 3200,
      image: '/assets/products/other-product/electric-heating-pad.webp',
      description: 'Extra soft surface, breathable and kind to skin. 6 temperature settings with overheating protection. Automatic switch-off after 90 minutes. Machine-washable.',
      inStock: true,
      isFree: false,
      salePercentage: 9
    },
    {
      id: 'prod-7',
      name: 'Certeza Nb-607 Nebulizer Machine',
      rating: 4.9,
      reviews: 428,
      originalPrice: 5800,
      discountedPrice: 5300,
      image: '/assets/products/other-product/nebulizer-machne-crtza.webp',
      description: 'Compact medical device for efficient medication delivery to bronchial lung passages. Helps treat asthma, allergies and respiratory disorders. 3 Year Warranty included.',
      inStock: true,
      isFree: false,
      salePercentage: 9
    }
  ];

  const handleApplyPriceFilter = () => {
    setPriceRange([minPrice, maxPrice]);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={14}
        className={index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src="/assets/offers-hero-section-image.webp" 
          alt="Offers & Discounts"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Description Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-14">
          <h2 className="text-3xl font-bold text-biomed-navy mb-4">OFFERS & DISCOUNTS</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Looking for an amazing discount offer? We bring to you some of the most exciting offers & discounts on your favorite products. Grab your favorite deal today and kick-start your journey of fitness & wellness.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <button
                  onClick={() => setExpandedCategories(!expandedCategories)}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-lg font-bold text-gray-900">CATEGORIES</h3>
                  {expandedCategories ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedCategories && (
                  <ul className="space-y-2 max-h-96 overflow-y-auto">
                    {categories.map((category, idx) => (
                      <li key={idx}>
                        <a 
                          href="#" 
                          className="text-gray-600 hover:text-biomed-teal transition-colors text-sm"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Availability */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">AVAILABILITY</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStock}
                      onChange={() => setInStock(!inStock)}
                      className="w-4 h-4 text-biomed-teal rounded focus:ring-biomed-teal"
                    />
                    <span className="text-sm text-gray-700">In Stock (7)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={outOfStock}
                      onChange={() => setOutOfStock(!outOfStock)}
                      className="w-4 h-4 text-biomed-teal rounded focus:ring-biomed-teal"
                    />
                    <span className="text-sm text-gray-700">Out Of Stock (0)</span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">PRICE</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-biomed-teal text-sm"
                      placeholder="Rs 0"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-biomed-teal text-sm"
                      placeholder="Rs 4500"
                    />
                  </div>
                  <button
                    onClick={handleApplyPriceFilter}
                    className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-2 rounded font-semibold text-sm transition-colors"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls Bar */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-700">VIEW AS:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-biomed-teal text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-biomed-teal text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">ITEMS PER PAGE:</span>
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-biomed-teal text-sm"
                    >
                      <option value={20}>20</option>
                      <option value={40}>40</option>
                      <option value={60}>60</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">SORT BY:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-biomed-teal text-sm"
                    >
                      <option value="bestselling">Best selling</option>
                      <option value="priceLowHigh">Price: Low to High</option>
                      <option value="priceHighLow">Price: High to Low</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                {offerProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group block cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Badges */}
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Sale
                      </div>
                      {product.isFree && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          FREE
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 hover:text-biomed-teal transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">{renderStars(product.rating)}</div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-biomed-navy">
                          Rs.{product.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          Rs.{product.originalPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-biomed-navy hover:bg-biomed-navy/90 text-white py-2 rounded font-semibold text-sm text-center transition-colors">
                          VIEW PRODUCT
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart && addToCart(product);
                          }}
                          className="w-10 h-10 bg-biomed-teal hover:bg-biomed-teal/90 text-white rounded flex items-center justify-center transition-colors"
                        >
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffersPage;

