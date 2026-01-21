import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from './CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

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
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md border-b border-white/30' : 'bg-white border-b'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-4 sm:gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <motion.img
                  src="/images/wmo-logo.jpg"
                  alt="WMO Gadgets Logo"
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain rounded-xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <nav className="hidden lg:flex gap-6 xl:gap-8">
                <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-gray-900 font-medium transition">Products</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium transition">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition hidden sm:block" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                  {itemCount}
                </span>
              </div>
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition hidden sm:block" />
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.button
                aria-label="Close menu backdrop"
                className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                className="lg:hidden fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm bg-white shadow-2xl border-l"
                initial={{ x: 24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 24, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 240, damping: 26 }}
              >
                <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b">
                  <div className="font-bold text-gray-900">Menu</div>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="px-4 py-4 space-y-1">
                  {[
                    { to: '/', label: 'Home', kind: 'link' },
                    { to: '/products', label: 'Products', kind: 'link' },
                    { to: '/about', label: 'About', kind: 'link' },
                    { to: '/contact', label: 'Contact', kind: 'link' },
                  ].map((item) => (
                    <motion.div key={item.label} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                      {item.kind === 'anchor' ? (
                        <a
                          href={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold transition"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold transition"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto px-4 pb-5">
                  <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 p-4 text-white">
                    <div className="text-sm font-bold">Need a quote fast?</div>
                    <div className="mt-1 text-xs text-white/80">We respond quickly for bulk orders.</div>
                    <a
                      href="mailto:info@wmogadgets.com"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur hover:bg-white/15 transition"
                    >
                      Email us
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
