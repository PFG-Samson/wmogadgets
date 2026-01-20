import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+234 902 441 9637</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Mail className="w-3 h-3" />
              info@wmogadgets.com
            </span>
          </div>
          <span className="text-amber-600 font-semibold">🎖️ Trusted by Defense Forces Nationwide</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 bg-white z-50 transition-shadow ${scrolled ? 'shadow-md' : 'border-b'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-4 sm:gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <motion.img 
                  src="/images/wmo-logo.jpg" 
                  alt="WMO Gadgets Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <nav className="hidden lg:flex gap-6 xl:gap-8">
                <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition">Home</Link>
                <a href="#products" className="text-gray-700 hover:text-gray-900 font-medium transition">Products</a>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium transition">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition hidden sm:block" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition hidden sm:block" />
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="px-4 py-4 space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Home</Link>
              <a href="#products" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Products</a>
              <Link to="/about" className="block text-gray-700 hover:text-gray-900 font-medium py-2">About</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Contact</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
