import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/assets/Biomed.png" 
                alt="BIOMED Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your Health Care Partner - Innovation in Pharmaceuticals for Better Health!
            </p>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@biomed.com</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="hover:text-biomed-teal">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-biomed-teal">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-biomed-teal">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-biomed-teal">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* BIOMED Links */}
          <div>
            <h4 className="font-bold mb-4">BIOMED</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Health Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Notifications</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">All Products</a></li>
              <li><a href="#" className="hover:text-white">Best Selling</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Offers</a></li>
              <li><a href="#" className="hover:text-white">Track Your Order</a></li>
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="font-bold mb-4">BUSINESS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">International</a></li>
              <li><a href="#" className="hover:text-white">Quality & Safety</a></li>
              <li><a href="#" className="hover:text-white">Become A Distributor</a></li>
              <li><a href="#" className="hover:text-white">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">NEWSLETTER SIGN UP</h4>
            <p className="text-sm text-gray-400 mb-4">
              Receive the latest updates about our products and promotions.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-biomed-teal"
              />
              <button className="bg-biomed-navy hover:bg-biomed-navy/90 text-white px-6 py-2 rounded font-semibold transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Help & Terms */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4">
            <a href="#" className="hover:text-white">Shipping Policy</a>
            <a href="#" className="hover:text-white">Disclaimers</a>
            <a href="#" className="hover:text-white">Return & Refund</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 All Rights Reserved BIOMED Innovation Pharmaceuticals (Pvt) Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

