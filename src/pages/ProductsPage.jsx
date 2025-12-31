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
      name: 'Magnesium Glycinate | Magnizen',
      rating: 4.5,
      reviews: 120,
      originalPrice: 4500,
      discountedPrice: 3500,
      image: '/assets/products/main-product.jpeg',
      description: 'Calm the mind by supporting the nervous system. Relax muscles and nerves to promote restful sleep. Provide optimal support with its highly absorbable and gentle form.',
      inStock: true
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
      inStock: true
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
      inStock: true
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
      inStock: true
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
      inStock: true
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
      inStock: true
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
      inStock: true
    },
    {
      id: 'prod-8',
      name: 'Nurose Collagen Capsules',
      rating: 4.7,
      reviews: 95,
      originalPrice: 1990,
      discountedPrice: 1790,
      image: '/assets/products/product-3.jpeg',
      description: 'Dietary supplement with Vitamin C (20 mg), Biotin (2500 mcg), and Collagen (1000 mg) to boost beauty and wellness from the inside out. Promotes healthier hair, youthful skin, and stronger nails.',
      inStock: true
    },
    {
      id: 'prod-9',
      name: "BioMed's Teenur",
      rating: 4.6,
      reviews: 112,
      originalPrice: 1590,
      discountedPrice: 1440,
      image: '/assets/products/product-4.jpeg',
      description: 'Biotin + Keratin dietary supplement tablet containing Biotin 2500mcg and Hydrolyzed Keratin 250mg. Designed for adult men to support hair growth, nail health, skin health, and overall wellness.',
      inStock: true
    },
    {
      id: 'prod-10',
      name: 'Magioo Magnesium Glycinate',
      rating: 4.8,
      reviews: 178,
      originalPrice: 2250,
      discountedPrice: 2030,
      image: '/assets/products/product-5.jpeg',
      description: 'Dietary supplement tablet containing 1000 mg of Magnesium Glycinate (USP) per serving. Supports sleep, helps nerve and muscle function, promotes bone & heart health, and enhances nutrient absorption.',
      inStock: true
    },
    {
      id: 'prod-11',
      name: 'VNUR WOMEN Once a Day Multi',
      rating: 4.7,
      reviews: 145,
      originalPrice: 2500,
      discountedPrice: 2250,
      image: '/assets/products/product-6.jpeg',
      description: 'Once-daily multivitamin tablet specially formulated for adult women, enriched with Inositol, Alpha Lipoic Acid & Biotin 2500 mcg. Provides nutritional support, energy metabolism boost, healthy hair, skin & nails, and immunity enhancement.',
      inStock: true
    },
    {
      id: 'prod-12',
      name: 'DeAll Vitamin D3 200,000 IU & Vitamin K2 Softgel',
      rating: 4.8,
      reviews: 98,
      originalPrice: 500,
      discountedPrice: 435,
      image: '/assets/products/product-7-A1.jpeg',
      description: 'DeAll is a premium softgel supplement that combines Vitamin D3 (200,000 IU) with Vitamin K2, formulated by BioMed Innovation Pharmaceuticals Pvt Ltd. This powerful blend supports multiple aspects of health, including immune function, energy & vitality, muscle strength, and bone health.',
      inStock: true
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
                  <span className="text-sm">In Stock (11)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Out Of Stock (0)</span>
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
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden block cursor-pointer"
                >
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
                      <div className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded text-sm font-semibold text-center">
                        VIEW PRODUCT
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

