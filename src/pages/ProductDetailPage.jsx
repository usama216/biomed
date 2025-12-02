import React, { useState, useRef, useEffect } from 'react';
import { Star, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    details: true,
    directions: true,
    ingredients: true,
    faqs: false,
    reviews: false,
    quality: false
  });
  const relatedScrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollRelatedLeft = () => {
    if (relatedScrollRef.current) {
      relatedScrollRef.current.scrollBy({
        left: -220,
        behavior: 'smooth'
      });
    }
  };

  const scrollRelatedRight = () => {
    if (relatedScrollRef.current) {
      relatedScrollRef.current.scrollBy({
        left: 220,
        behavior: 'smooth'
      });
    }
  };

  // Complete product database
  const productsDatabase = {
    'prod-1': {
      id: 'prod-1',
      name: 'Premium Health Supplement',
      rating: 4.5,
      reviews: 132,
      questions: 5,
      originalPrice: 4500,
      discountedPrice: 3500,
      images: [
        '/assets/products/product-1.webp',
        '/assets/products/product-2.webp',
        '/assets/products/product-3.webp'
      ],
      packSize: '60 Tablets',
      wellnessCoins: 3500,
      inStock: true,
      helps: [
        'Provide comprehensive daily nutritional support',
        'Boost energy levels and reduce fatigue',
        'Support immune system and overall wellness'
      ],
      details: 'This premium health supplement is formulated with scientifically-backed ingredients to support your overall wellness. It provides comprehensive nutritional support for energy, immunity, and daily performance. Each tablet is carefully crafted to deliver optimal bioavailability and absorption.',
      directions: 'Take 1 tablet daily with meal or as directed by a healthcare professional. Do not exceed the recommended daily dose.',
      ingredients: [
        { name: 'Multivitamin Complex', amount: '1000 mg' },
        { name: 'Vitamin C', amount: '100 mg' },
        { name: 'Vitamin E', amount: '50 IU' }
      ]
    },
    'prod-2': {
      id: 'prod-2',
      name: 'Biotin Plus Capsules',
      rating: 4.8,
      reviews: 89,
      questions: 3,
      originalPrice: 2000,
      discountedPrice: 1650,
      images: [
        '/assets/products/product-2.webp',
        '/assets/products/product-4.webp'
      ],
      packSize: '30 Capsules',
      wellnessCoins: 1650,
      inStock: true,
      helps: [
        'Support healthy hair growth and prevent hair loss',
        'Strengthen nails and improve skin health',
        'Promote keratin production for hair and nails'
      ],
      details: 'Biotin Plus is a high-potency biotin supplement designed to support healthy hair, skin, and nails. With 10,000 mcg of biotin per capsule, it helps strengthen hair follicles, improve nail structure, and promote radiant skin.',
      directions: 'Take 1 capsule daily with water, preferably with a meal. Consistent use for 2-3 months recommended for best results.',
      ingredients: [
        { name: 'Biotin (Vitamin B7)', amount: '10,000 mcg' },
        { name: 'Vitamin E', amount: '30 IU' },
        { name: 'Zinc', amount: '15 mg' }
      ]
    },
    'prod-3': {
      id: 'prod-3',
      name: 'Magnesium Complex',
      rating: 4.6,
      reviews: 156,
      questions: 8,
      originalPrice: 1800,
      discountedPrice: 1500,
      images: [
        '/assets/products/product-3.webp'
      ],
      packSize: '90 Tablets',
      wellnessCoins: 1500,
      inStock: true,
      helps: [
        'Support muscle relaxation and reduce cramps',
        'Promote better sleep quality and relaxation',
        'Maintain healthy nerve function and bone density'
      ],
      details: 'Magnesium Complex provides a highly absorbable form of magnesium to support over 300 biochemical reactions in your body. Essential for muscle function, nerve transmission, and energy production.',
      directions: 'Take 2 tablets daily, preferably one in the morning and one in the evening with meals.',
      ingredients: [
        { name: 'Magnesium Glycinate', amount: '400 mg' },
        { name: 'Magnesium Citrate', amount: '200 mg' },
        { name: 'Vitamin B6', amount: '10 mg' }
      ]
    },
    'prod-4': {
      id: 'prod-4',
      name: 'Women Multivitamin',
      rating: 4.7,
      reviews: 203,
      questions: 6,
      originalPrice: 2200,
      discountedPrice: 1850,
      images: [
        '/assets/products/product-4.webp',
        '/assets/products/product-5.webp',
        '/assets/products/product-6.webp'
      ],
      packSize: '60 Tablets',
      wellnessCoins: 1850,
      inStock: true,
      helps: [
        'Support women\'s hormonal balance and energy',
        'Provide essential nutrients for reproductive health',
        'Strengthen bones and support immune function'
      ],
      details: 'Specially formulated for women, this comprehensive multivitamin provides essential nutrients to support hormonal balance, energy levels, and overall wellness. Contains iron, calcium, and folic acid tailored for women\'s needs.',
      directions: 'Take 1 tablet daily with breakfast or as directed by your healthcare provider.',
      ingredients: [
        { name: 'Women\'s Multi Blend', amount: '800 mg' },
        { name: 'Iron', amount: '18 mg' },
        { name: 'Folic Acid', amount: '400 mcg' },
        { name: 'Calcium', amount: '200 mg' }
      ]
    },
    'prod-5': {
      id: 'prod-5',
      name: 'Collagen Booster',
      rating: 4.9,
      reviews: 178,
      questions: 4,
      originalPrice: 3500,
      discountedPrice: 2900,
      images: [
        '/assets/products/product-5.webp',
        '/assets/products/product-7.webp'
      ],
      packSize: '30 Sachets',
      wellnessCoins: 2900,
      inStock: true,
      helps: [
        'Improve skin elasticity and reduce wrinkles',
        'Support joint health and flexibility',
        'Promote healthy hair and nail growth'
      ],
      details: 'Our Collagen Booster contains hydrolyzed collagen peptides for maximum absorption. Supports skin hydration, joint mobility, and overall structural health. Enhanced with Vitamin C for collagen synthesis.',
      directions: 'Mix 1 sachet with water or juice daily. Best taken on an empty stomach in the morning.',
      ingredients: [
        { name: 'Hydrolyzed Collagen', amount: '5000 mg' },
        { name: 'Vitamin C', amount: '120 mg' },
        { name: 'Hyaluronic Acid', amount: '50 mg' }
      ]
    },
    'prod-6': {
      id: 'prod-6',
      name: 'Immunity Support',
      rating: 4.7,
      reviews: 145,
      questions: 7,
      originalPrice: 2800,
      discountedPrice: 2300,
      images: [
        '/assets/products/product-6.webp'
      ],
      packSize: '60 Capsules',
      wellnessCoins: 2300,
      inStock: false,
      helps: [
        'Strengthen immune system response',
        'Provide powerful antioxidant protection',
        'Support respiratory health and vitality'
      ],
      details: 'A powerful blend of immune-supporting nutrients including Vitamin C, D, Zinc, and Elderberry. Designed to enhance your body\'s natural defense mechanisms and promote year-round wellness.',
      directions: 'Take 2 capsules daily with meals or as recommended by healthcare professional.',
      ingredients: [
        { name: 'Vitamin C', amount: '1000 mg' },
        { name: 'Vitamin D3', amount: '2000 IU' },
        { name: 'Zinc', amount: '25 mg' },
        { name: 'Elderberry Extract', amount: '150 mg' }
      ]
    },
    'prod-7': {
      id: 'prod-7',
      name: 'Energy Booster Plus',
      rating: 4.6,
      reviews: 98,
      questions: 5,
      originalPrice: 2400,
      discountedPrice: 1950,
      images: [
        '/assets/products/product-7.webp',
        '/assets/products/product-8.webp'
      ],
      packSize: '45 Capsules',
      wellnessCoins: 1950,
      inStock: true,
      helps: [
        'Boost energy levels naturally without jitters',
        'Enhance mental clarity and focus',
        'Support metabolic function and stamina'
      ],
      details: 'Energy Booster Plus combines B-vitamins, CoQ10, and natural adaptogens to provide sustained energy throughout the day. Perfect for active lifestyles and mental performance.',
      directions: 'Take 1 capsule in the morning with breakfast. May take an additional capsule in early afternoon if needed.',
      ingredients: [
        { name: 'B-Complex Vitamins', amount: '100 mg' },
        { name: 'CoQ10', amount: '100 mg' },
        { name: 'Ginseng Extract', amount: '200 mg' }
      ]
    },
    'prod-8': {
      id: 'prod-8',
      name: 'Omega-3 Fish Oil',
      rating: 4.8,
      reviews: 234,
      questions: 9,
      originalPrice: 3200,
      discountedPrice: 2650,
      images: [
        '/assets/products/product-8.webp',
        '/assets/products/product-9.webp',
        '/assets/products/product-10.webp'
      ],
      packSize: '120 Softgels',
      wellnessCoins: 2650,
      inStock: true,
      helps: [
        'Support cardiovascular and heart health',
        'Promote brain function and cognitive health',
        'Reduce inflammation and joint stiffness'
      ],
      details: 'Premium Omega-3 Fish Oil with high EPA and DHA content. Sourced from deep-sea fish and molecularly distilled for purity. Supports heart, brain, and joint health.',
      directions: 'Take 2 softgels daily with meals. Can be taken all at once or split between meals.',
      ingredients: [
        { name: 'Omega-3 Fatty Acids', amount: '1000 mg' },
        { name: 'EPA', amount: '600 mg' },
        { name: 'DHA', amount: '400 mg' }
      ]
    },
    'prod-9': {
      id: 'prod-9',
      name: 'Vitamin D3 Complex',
      rating: 4.5,
      reviews: 167,
      questions: 4,
      originalPrice: 1900,
      discountedPrice: 1550,
      images: [
        '/assets/products/product-9.webp'
      ],
      packSize: '90 Capsules',
      wellnessCoins: 1550,
      inStock: true,
      helps: [
        'Support bone health and calcium absorption',
        'Boost immune system function',
        'Improve mood and reduce seasonal blues'
      ],
      details: 'High-potency Vitamin D3 (cholecalciferol) supplement for optimal absorption. Essential for bone health, immune function, and mood regulation. Especially important for those with limited sun exposure.',
      directions: 'Take 1 capsule daily with a fat-containing meal for best absorption.',
      ingredients: [
        { name: 'Vitamin D3', amount: '5000 IU' },
        { name: 'Vitamin K2', amount: '100 mcg' },
        { name: 'Calcium', amount: '50 mg' }
      ]
    },
    'prod-10': {
      id: 'prod-10',
      name: 'Probiotics Formula',
      rating: 4.7,
      reviews: 192,
      questions: 6,
      originalPrice: 2600,
      discountedPrice: 2100,
      images: [
        '/assets/products/product-10.webp',
        '/assets/products/product-1.webp'
      ],
      packSize: '30 Capsules',
      wellnessCoins: 2100,
      inStock: false,
      helps: [
        'Support digestive health and gut balance',
        'Enhance nutrient absorption and digestion',
        'Boost immune system from the gut'
      ],
      details: 'Advanced multi-strain probiotic formula with 50 billion CFU. Contains 10 beneficial bacterial strains to support digestive health, immune function, and overall gut wellness. Shelf-stable and delayed-release capsules.',
      directions: 'Take 1 capsule daily on an empty stomach, 30 minutes before meals or as directed by healthcare professional.',
      ingredients: [
        { name: 'Probiotic Blend (10 strains)', amount: '50 Billion CFU' },
        { name: 'Prebiotic Fiber', amount: '100 mg' },
        { name: 'Digestive Enzymes', amount: '50 mg' }
      ]
    }
  };

  // Get current product based on URL parameter
  const product = productsDatabase[id] || productsDatabase['prod-1'];

  // All products from landing page
  const allProducts = [
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
    {
      id: 'prod-8',
      name: 'Omega-3 Fish Oil',
      rating: 4.8,
      reviews: 234,
      originalPrice: 3200,
      discountedPrice: 2650,
      image: '/assets/products/product-8.webp'
    },
    {
      id: 'prod-9',
      name: 'Vitamin D3 Complex',
      rating: 4.5,
      reviews: 167,
      originalPrice: 1900,
      discountedPrice: 1550,
      image: '/assets/products/product-9.webp'
    },
    {
      id: 'prod-10',
      name: 'Probiotics Formula',
      rating: 4.7,
      reviews: 192,
      originalPrice: 2600,
      discountedPrice: 2100,
      image: '/assets/products/product-10.webp'
    }
  ];

  // Filter out current product and get related products
  const relatedProducts = allProducts.filter(p => p.id !== id);

  const certifications = ['ISO', 'GMP', 'DRAP', 'HACCP', 'HALAL', 'NON GMO', 'VEGAN'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6 mb-6">
          {/* Left Side - Images */}
          <div>
            {/* Main Image - Sticky */}
            <div className="sticky top-4">
              <div className="bg-gray-50 rounded-lg p-8 mb-3 flex items-center justify-center h-[500px]">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Thumbnail Images - Only show if more than 1 image */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-1 bg-gray-50 rounded-lg p-2 border-2 transition-colors ${
                        selectedImage === idx ? 'border-biomed-teal' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-16 object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>
            
            {/* Stock Status */}
            <div className="mb-3">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Out of Stock
                </span>
              )}
            </div>
            
            {/* Reviews */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600 ml-1">{product.reviews} reviews</span>
              </div>
              <span className="text-xs text-gray-600">{product.questions} questions</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-biomed-teal">Rs. {product.discountedPrice}</span>
                {product.originalPrice > product.discountedPrice && (
                  <span className="text-base text-gray-400 line-through">Rs. {product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Helps Section */}
            <div className="mb-4 bg-blue-50 p-3 rounded-lg">
              <h3 className="font-semibold text-sm mb-2">Helps to:</h3>
              <ul className="space-y-1">
                {product.helps.map((help, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-biomed-teal text-xs mt-0.5">•</span>
                    <span className="text-xs text-gray-700">{help}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pack Size */}
            <div className="mb-3">
              <label className="block text-xs font-semibold mb-1">Pack Size:</label>
              <button className="px-4 py-1.5 bg-biomed-navy text-white rounded text-sm font-semibold">
                {product.packSize}
              </button>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="block text-xs font-semibold mb-1">Quantity:</label>
              <div className="flex items-center border rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-1 text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Wellness Coins */}
            <div className="mb-4 bg-purple-50 p-3 rounded-lg">
              <p className="text-sm font-semibold text-purple-700">{product.wellnessCoins} Wellness Coins</p>
              <a href="#" className="text-xs text-purple-600 underline">How it works?</a>
            </div>

            {/* Subtotal */}
            <div className="mb-4">
              <p className="text-base font-semibold">Subtotal: <span className="text-biomed-teal">Rs. {product.discountedPrice * quantity}</span></p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4">
              <button 
                onClick={() => addToCart({...product, quantity})}
                disabled={!product.inStock}
                className={`flex-1 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 ${
                  product.inStock
                    ? 'bg-gray-800 hover:bg-gray-900 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={16} />
                {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
              </button>
              <button 
                disabled={!product.inStock}
                className={`flex-1 py-2.5 rounded-lg font-semibold text-sm ${
                  product.inStock
                    ? 'bg-white border-2 border-gray-800 hover:bg-gray-50 text-gray-800'
                    : 'bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                }`}
              >
                BUY IT NOW
              </button>
            </div>

            {/* Product Information Accordion */}
            <div className="my-4 border rounded-lg overflow-hidden">
              {/* Product Details */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('details')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Product Details</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.details ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.details ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-xs text-gray-700 leading-relaxed">{product.details}</p>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('directions')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Directions</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.directions ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.directions ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-xs text-gray-700">{product.directions}</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('ingredients')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Ingredients</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.ingredients ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedSections.ingredients ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-[10px] font-semibold mb-1">Serving Size: One (1) Tablet</p>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1 text-[10px]">Each Tablet Contains:</th>
                          <th className="text-left py-1 text-[10px]">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.ingredients.map((ingredient, idx) => (
                          <tr key={idx} className="border-b">
                            <td className="py-1 text-[10px]">{ingredient.name}</td>
                            <td className="py-1 text-[10px]">{ingredient.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('faqs')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">FAQs</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.faqs ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.faqs ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-xs text-gray-700">Frequently asked questions content goes here...</p>
                  </div>
                </div>
              </div>

              {/* Customer Reviews */}
              <div>
                <button
                  onClick={() => toggleSection('reviews')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Customer Reviews</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.reviews ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.reviews ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-xs text-gray-700">Customer reviews will appear here...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
        
          </div>
        </div>


        {/* You May Also Like */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">YOU MAY ALSO LIKE</h2>
          <div className="relative">
            <div 
              ref={relatedScrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            >
              {relatedProducts.map((prod) => (
                <Link 
                  key={prod.id} 
                  to={`/product/${prod.id}`}
                  className="min-w-[200px] bg-gray-50 rounded-lg p-3 hover:shadow-lg transition-shadow flex-shrink-0 block"
                >
                  <div className="h-40 flex items-center justify-center mb-3 relative">
                    <img src={prod.image} alt={prod.name} className="max-h-full object-contain" />
                    {prod.originalPrice && prod.discountedPrice && prod.originalPrice > prod.discountedPrice && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
                        {Math.round(((prod.originalPrice - prod.discountedPrice) / prod.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold mb-2 line-clamp-2">{prod.name}</h3>
                  <div className="flex items-center gap-1.5 mb-2">
                    {prod.originalPrice && (
                      <span className="text-gray-400 line-through text-xs">Rs. {prod.originalPrice}</span>
                    )}
                    <span className="text-base font-bold text-biomed-teal">Rs. {prod.discountedPrice}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(prod);
                    }}
                    className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-1.5 rounded text-xs font-semibold"
                  >
                    Add to Cart
                  </button>
                </Link>
              ))}
            </div>
            <button 
              onClick={scrollRelatedLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-1.5 hover:bg-gray-100 transition-colors z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={scrollRelatedRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-1.5 hover:bg-gray-100 transition-colors z-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

