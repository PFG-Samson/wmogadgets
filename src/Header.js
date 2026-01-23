import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, User, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <div className="flex items-center gap-12">
              <Link to="/" className="flex items-center gap-2 group">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl font-black tracking-tighter text-white">WMO</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase hidden sm:block">Tactical</span>
                </motion.div>
              </Link>

              <nav className="hidden lg:flex gap-10">
                {[
                  { name: 'DEFENSE', to: '/products' },
                  { name: 'SOLUTIONS', to: '/products' },
                  { name: 'CAPABILITIES', to: '/products' },
                  { name: 'COMPANY', to: '/about' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-8">
                {['INVESTORS', 'CONTACT'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <button
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-50 bg-black"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex justify-between items-center h-20 px-4 border-b border-white/10">
                <span className="text-2xl font-black text-white">WMO</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                  <X className="w-8 h-8" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8">
                {[
                  { name: 'DEFENSE', to: '/products' },
                  { name: 'SOLUTIONS', to: '/products' },
                  { name: 'CAPABILITIES', to: '/products' },
                  { name: 'COMPANY', to: '/about' },
                  { name: 'CONTACT', to: '/contact' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-black tracking-widest text-white hover:text-gray-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
