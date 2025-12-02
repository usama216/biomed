import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Grid, List } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const ProductsPage = ({ addToCart }) => {
  const { category } = useParams();
  const [priceRange, setPriceRange] = useState([0, 4500]);
  const [viewMode, setViewMode] = useState('grid');
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState('bestselling');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All Products', 'B Vitamins', 'Beauty', 'Best Selling', 'Blood Sugar Support',
    'Bones & Joints', "Children's Health", 'Digestive Health', 'Essential Oils',
    'Fertility Support', 'Fish Oil', 'Glutathione', 'Gummies', 'Hair Care',
    'Heart Health', 'Herbal Support', 'Immune Support', 'Memory & Brain Support',
    "Men's Health", 'Multivitamins', "Women's Health"
  ];

  const products = [
    {
      id: 'prod-1',
      name: 'Premium Health Supplement',
      rating: 4.5,
      reviews: 120,
      originalPrice: 4500,
      discountedPrice: 3500,
      image: '/assets/products/product-1.webp',
      description: 'Complete daily health support formula',
      inStock: true
    },
    {
      id: 'prod-2',
      name: 'Biotin Plus Capsules',
      rating: 4.8,
      reviews: 89,
      originalPrice: 2000,
      discountedPrice: 1650,
      image: '/assets/products/product-2.webp',
      description: 'Hair, skin and nails support',
      inStock: true
    },
    {
      id: 'prod-3',
      name: 'Magnesium Complex',
      rating: 4.6,
      reviews: 156,
      originalPrice: 1800,
      discountedPrice: 1500,
      image: '/assets/products/product-3.webp',
      description: 'Muscle and nerve function support',
      inStock: true
    },
    {
      id: 'prod-4',
      name: 'Women Multivitamin',
      rating: 4.7,
      reviews: 203,
      originalPrice: 2200,
      discountedPrice: 1850,
      image: '/assets/products/product-4.webp',
      description: 'Comprehensive women\'s health formula',
      inStock: true
    },
    {
      id: 'prod-5',
      name: 'Collagen Booster',
      rating: 4.9,
      reviews: 178,
      originalPrice: 3500,
      discountedPrice: 2900,
      image: '/assets/products/product-5.webp',
      description: 'Skin elasticity and joint support',
      inStock: true
    },
    {
      id: 'prod-6',
      name: 'Immunity Support',
      rating: 4.7,
      reviews: 145,
      originalPrice: 2800,
      discountedPrice: 2300,
      image: '/assets/products/product-6.webp',
      description: 'Boost your immune system naturally',
      inStock: false
    },
    {
      id: 'prod-7',
      name: 'Energy Booster Plus',
      rating: 4.6,
      reviews: 98,
      originalPrice: 2400,
      discountedPrice: 1950,
      image: '/assets/products/product-7.webp',
      description: 'All-day energy and vitality',
      inStock: true
    },
    {
      id: 'prod-8',
      name: 'Omega-3 Fish Oil',
      rating: 4.8,
      reviews: 234,
      originalPrice: 3200,
      discountedPrice: 2650,
      image: '/assets/products/product-8.webp',
      description: 'Heart and brain health support',
      inStock: true
    },
    {
      id: 'prod-9',
      name: 'Vitamin D3 Complex',
      rating: 4.5,
      reviews: 167,
      originalPrice: 1900,
      discountedPrice: 1550,
      image: '/assets/products/product-9.webp',
      description: 'Bone and immune system support',
      inStock: true
    },
    {
      id: 'prod-10',
      name: 'Probiotics Formula',
      rating: 4.7,
      reviews: 192,
      originalPrice: 2600,
      discountedPrice: 2100,
      image: '/assets/products/product-10.webp',
      description: 'Digestive health optimization',
      inStock: false
    }
  ];

  const getCategoryTitle = () => {
    if (!category) return 'All Products';
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{getCategoryTitle()}</h1>
          <p className="text-xl text-gray-700">
            Every day is a new challenge & to keep up you need your daily dose of energy. 
            BIOMED's health care products help you keep energetic, active & ready for any stage of life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {categories.map((cat, idx) => (
                    <a
                      key={idx}
                      href={`/products/${cat.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                      className={`block py-2 px-3 rounded hover:bg-biomed-teal/10 transition-colors ${
                        category === cat.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-') 
                          ? 'bg-biomed-teal/20 font-semibold' 
                          : ''
                      }`}
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6 border-t pt-6">
                <h3 className="font-bold text-lg mb-4">AVAILABILITY</h3>
                <label className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span className="text-sm">In Stock (8)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Out Of Stock (2)</span>
                </label>
              </div>

              {/* Price Range */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">PRICE</h3>
                <div className="mb-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="4500" 
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Rs. {priceRange[0]}</span>
                    <span>Rs. {priceRange[1]}</span>
                  </div>
                </div>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded font-semibold">
                  APPLY
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Products Grid */}
          <div className="md:col-span-3">
            {/* Controls Bar */}
            <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold">VIEW AS</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-biomed-navy text-white' : 'bg-gray-100'}`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-biomed-navy text-white' : 'bg-gray-100'}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold">ITEMS PER PAGE</label>
                  <select 
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                    className="border rounded px-3 py-1"
                  >
                    <option value="12">12</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold">SORT BY</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded px-3 py-1"
                  >
                    <option value="bestselling">Best Selling</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <div className="h-64 bg-gray-50 flex items-center justify-center p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {!product.inStock && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Sold Out
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 h-12 line-clamp-2">{product.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 line-through text-sm">Rs. {product.originalPrice}</span>
                      <span className="text-xl font-bold text-biomed-teal">Rs. {product.discountedPrice}</span>
                    </div>

                    <div className="flex gap-2">
                      <Link 
                        to={`/product/${product.id}`}
                        className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded text-sm font-semibold text-center"
                      >
                        VIEW PRODUCT
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className={`p-2 rounded ${
                          product.inStock 
                            ? 'bg-biomed-navy hover:bg-biomed-navy/90 text-white' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

