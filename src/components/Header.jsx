import React, { useState } from 'react';
import { ShoppingCart, User, Search, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount = 0, onCartClick }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const productCategories = [
    {
      name: 'Men',
      items: ['Men\'s Multivitamin', 'Testosterone Support', 'Prostate Health', 'Energy Booster', 'Sports Nutrition']
    },
    {
      name: 'Women',
      items: ['Femrose 500', 'Femrose Evening Primrose Oil', 'Vitamax Women', 'Vitamom', 'Lectamor', 'Nuception']
    },
    {
      name: 'Multivitamins',
      items: ['Daily Multivitamin', 'Senior Formula', 'Children\'s Multi', 'Prenatal Vitamins', 'Immune Support']
    },
    {
      name: 'Fertility Support',
      items: ['Male Fertility', 'Female Fertility', 'Prenatal Care', 'Hormone Balance', 'Reproductive Health']
    },
    {
      name: 'Gummies',
      items: ['Vitamin C Gummies', 'Multivitamin Gummies', 'Hair Skin Nails', 'Kids Gummies', 'Immunity Gummies']
    },
    {
      name: 'Softgels',
      items: ['Omega-3 Fish Oil', 'Vitamin E', 'Coenzyme Q10', 'Evening Primrose', 'Vitamin D3']
    },
    {
      name: 'More',
      items: ['Bone & Joint', 'Heart Health', 'Brain Function', 'Digestive Health', 'Weight Management']
    }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-biomed-teal/10 py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm text-biomed-navy mx-4">
            Your Health Care Partner - Free Home Delivery On Orders Above Rs. 2000
          </span>
          <span className="text-sm text-biomed-navy mx-4">
            Your Health Care Partner - Free Home Delivery On Orders Above Rs. 2000
          </span>
          <span className="text-sm text-biomed-navy mx-4">
            Your Health Care Partner - Free Home Delivery On Orders Above Rs. 2000
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/Biomed.png" 
                alt="BIOMED Logo" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search the store"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-biomed-teal"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Cart and Account */}
            <div className="flex items-center gap-6">
              <button 
                onClick={onCartClick}
                className="relative flex items-center gap-2 hover:text-biomed-teal transition-colors"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="flex items-center gap-2 hover:text-biomed-teal">
                <User size={24} />
                <span className="text-sm">My Account</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-white border-t relative">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-8 py-3 text-sm">
              <li><Link to="/" className="hover:text-biomed-teal font-medium">Home</Link></li>
              
              {/* All Products with Mega Menu */}
              <li 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => {
                  setIsProductsOpen(false);
                  setActiveCategory(null);
                }}
              >
                <Link to="/products" className="hover:text-biomed-teal flex items-center gap-1">
                  All Products
                  <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Mega Menu Dropdown */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-0 bg-white border shadow-xl z-50 min-w-[200px]">
                    {productCategories.map((category, idx) => (
                      <div
                        key={idx}
                        className="relative"
                        onMouseEnter={() => setActiveCategory(category.name)}
                      >
                        <Link 
                          to={`/products/${category.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                          className="px-4 py-3 hover:bg-biomed-teal/10 cursor-pointer flex items-center justify-between border-b"
                          onClick={() => {
                            setIsProductsOpen(false);
                            setActiveCategory(null);
                          }}
                        >
                          <span className="font-medium">{category.name}</span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </Link>
                        
                        {/* Second Level Dropdown */}
                        {activeCategory === category.name && (
                          <div className="absolute left-full top-0 bg-white border shadow-xl min-w-[250px] max-h-[400px] overflow-y-auto">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={`/products/${category.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                                className="block px-4 py-3 hover:bg-biomed-teal/10 border-b text-sm"
                                onClick={() => {
                                  setIsProductsOpen(false);
                                  setActiveCategory(null);
                                }}
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
              
              <li><a href="#" className="hover:text-biomed-teal">Offers</a></li>
              <li><Link to="/health-points" className="hover:text-biomed-teal">Health Points</Link></li>
              <li><a href="#" className="hover:text-biomed-teal">International</a></li>
              <li><a href="#" className="hover:text-biomed-teal">Health Blog</a></li>
              <li><Link to="/about" className="hover:text-biomed-teal">About Us</Link></li>
              <li><a href="#" className="hover:text-biomed-teal">Careers</a></li>
              <li><Link to="/contact" className="hover:text-biomed-teal">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

