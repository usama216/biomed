import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount = 0, onCartClick }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Handle smooth mobile menu close
  const handleMobileMenuClose = () => {
    setIsMobileMenuClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileMenuClosing(false);
      setIsProductsOpen(false);
      setActiveCategory(null);
    }, 300); // Match animation duration
  };

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      handleMobileMenuClose();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileMenuClosing(false);
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/Biomed.png" 
                alt="BIOMED Logo" 
                className="h-20 sm:h-20 md:h-20 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search the store"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-biomed-teal"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
              {/* Mobile Search Button */}
              <button 
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>

              {/* Cart */}
              <button 
                onClick={onCartClick}
                className="relative p-2 hover:text-biomed-teal transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} sm:size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Account */}
              <button className="hidden sm:flex items-center gap-2 hover:text-biomed-teal">
                <User size={24} />
                <span className="hidden md:inline text-sm">My Account</span>
              </button>
              <button className="sm:hidden p-2 hover:text-biomed-teal">
                <User size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isMobileSearchOpen && (
            <div className="lg:hidden mt-4 animate-fadeIn">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search the store"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-biomed-teal transition-all"
                  autoFocus
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:block bg-white border-t relative">
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
              
              <li><Link to="/offers" className="hover:text-biomed-teal">Offers</Link></li>
              {/* <li><Link to="/health-points" className="hover:text-biomed-teal">Health Points</Link></li> */}
              {/* <li><a href="#" className="hover:text-biomed-teal">International</a></li> */}
              {/* <li><a href="#" className="hover:text-biomed-teal">Health Blog</a></li> */}
              <li><Link to="/about" className="hover:text-biomed-teal">About Us</Link></li>
              {/* <li><a href="#" className="hover:text-biomed-teal">Careers</a></li> */}
              <li><Link to="/contact" className="hover:text-biomed-teal">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={`lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
              isMobileMenuClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleMobileMenuClose}
          />
          
          {/* Mobile Menu */}
          <div className={`lg:hidden fixed inset-y-0 left-0 top-0 bg-white z-[60] w-[85%] max-w-sm overflow-y-auto shadow-2xl ${
            isMobileMenuClosing ? 'animate-slideOutLeft' : 'animate-slideInLeft'
          }`}>
            <nav className="px-4 py-6">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="block py-2 text-base font-medium hover:text-biomed-teal transition-colors"
                    onClick={handleMobileMenuClose}
                  >
                    Home
                  </Link>
                </li>
              
              {/* Mobile Products Menu */}
              <li>
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between py-2 text-base font-medium hover:text-biomed-teal transition-colors"
                >
                  All Products
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
                    {productCategories.map((category, idx) => (
                      <div key={idx}>
                        <button
                          onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                          className="w-full flex items-center justify-between py-2 text-sm hover:text-biomed-teal transition-colors"
                        >
                          {category.name}
                          <ChevronDown size={14} className={`transition-transform duration-300 ${activeCategory === category.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {activeCategory === category.name && (
                          <div className="ml-4 mt-1 space-y-1 animate-fadeIn">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={`/products/${category.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                                className="block py-2 text-sm text-gray-600 hover:text-biomed-teal transition-colors"
                                onClick={handleMobileMenuClose}
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
              
              <li>
                <Link 
                  to="/offers" 
                  className="block py-2 text-base font-medium hover:text-biomed-teal transition-colors"
                  onClick={handleMobileMenuClose}
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 text-base font-medium hover:text-biomed-teal transition-colors"
                  onClick={handleMobileMenuClose}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 text-base font-medium hover:text-biomed-teal transition-colors"
                  onClick={handleMobileMenuClose}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        </>
      )}
    </header>
  );
};

export default Header;

