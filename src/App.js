import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Award, Phone, Mail, MapPin, ChevronRight, Star, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Header from './Header';
import { MotionProvider } from './ui/MotionProvider';
import { PageTransition } from './ui/PageTransition';
import { ScrollProgress } from './ui/ScrollProgress';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';
import { CartProvider } from './CartContext';

export default function WMOApp() {
  return (
    <MotionProvider>
      <CartProvider>
        <Router>
          <ScrollProgress />
          <AnimatedRoutes />
        </Router>
      </CartProvider>
    </MotionProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><WMOLandingPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function WMOLandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const slideShowImages = [
    { src: '/images/ach.jpg', alt: 'Advanced Combat Helmet' },
    { src: '/images/LWH.png', alt: 'Lightweight Helmet' },
    { src: '/images/MICH.png', alt: 'MICH Helmet' },
    { src: '/images/Hptplate-Carrier-150x150.png', alt: 'Tactical Plate Carrier' },
    { src: '/images/Patrol-Vest-150x150.png', alt: 'Patrol Vest' },
    { src: '/images/Flexible-Armour-Plates-150x150.png', alt: 'Flexible Armor Plates' }
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideShowImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideTimer);
  }, [slideShowImages.length]);

  const products = [
    {
      name: 'Advanced Combat Helmet (ACH)',
      price: 'Request Quote',
      image: '/images/ach.jpg',
      imageAlt: 'Advanced Combat Helmet',
      category: 'Helmets',
      level: 'NIJ Level IIIA',
      description: 'Based on the MICH design, the ACH provides an improved helmet to soldiers, replacing the older PASGT. It provides increased 9mm bullet protection. Comes with pad suspension system and four-point chinstrap.',
      features: ['9mm Protection', 'Pad Suspension', '4-Point Chinstrap', 'Improved Design']
    },
    {
      name: 'Lightweight Helmet (LWH)',
      price: 'Request Quote',
      image: '/images/LWH.png',
      imageAlt: 'Lightweight Helmet',
      category: 'Helmets',
      level: 'NIJ Level IIIA',
      description: 'A modern lightweight ballistic helmet offering enhanced protection with reduced weight for extended wear comfort. Features improved 9mm bullet protection with pad suspension system and four-point chinstrap for secure fit.',
      features: ['Lightweight', '9mm Protection', 'Pad Suspension', '4-Point Chinstrap']
    },
    {
      name: 'Modular Integrated Communications Helmet (MICH)',
      price: 'Request Quote',
      image: '/images/MICH.png',
      imageAlt: 'MICH Helmet',
      category: 'Helmets',
      level: 'NIJ Level IIIA',
      description: 'A special operations lightweight ballistic helmet that incorporates excellent ballistic and non-ballistic protection with the ability to integrate most tactical communication gadgets used by SOF. Comes with standard pad suspension and four-point chinstrap.',
      features: ['SOF Rated', 'Communications Ready', 'Ballistic Protection', 'Light Weight']
    },
    {
      name: 'Personal Armor System for Ground Troops (PASGT)',
      price: 'Request Quote',
      image: '/images/ach.jpg',
      imageAlt: 'PASGT Helmet',
      category: 'Helmets',
      level: 'NIJ Level IIIA',
      description: 'The foundational battle helmet design that set the standard for modern combat protection. Provides proven ballistic protection with reliable pad suspension and four-point chinstrap. Widely deployed by military and law enforcement worldwide.',
      features: ['Battle Proven', 'Standard Suspension', '4-Point Chinstrap', 'Durable Construction']
    }
  ];

  const categories = [
    { name: 'Combat Helmets', icon: '🪖', count: '12+' },
    { name: 'Ballistic Vests', icon: '🦺', count: '15+' },
    { name: 'Armor Plates', icon: '🛡️', count: '8+' },
    { name: 'Accessories', icon: '⚙️', count: '20+' },
    { name: 'Tactical Gear', icon: '🎒', count: '25+' },
    { name: 'Communication', icon: '📡', count: '10+' }
  ];

  const testimonials = [
    { name: 'Nigerian Army', role: 'Defense Force', text: 'Exceptional quality and reliability in the field.', rating: 5 },
    { name: 'Police Special Forces', role: 'Law Enforcement', text: 'Trusted protection for our tactical operations.', rating: 5 },
    { name: 'Private Security', role: 'Security Services', text: 'Outstanding service and premium equipment.', rating: 5 }
  ];

  const features = [
    { icon: '✅', title: 'NIJ Certified', text: 'All products meet international ballistic standards' },
    { icon: '🚚', title: 'Fast Delivery', text: 'Quick shipping across Nigeria and West Africa' },
    { icon: '🛡️', title: 'Quality Assured', text: 'Rigorous testing and quality control' },
    { icon: '💼', title: 'Bulk Orders', text: 'Special pricing for organizations and agencies' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Immersive with Animations */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 relative w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Company badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <ShieldCheck className="w-4 h-4 text-green-400" />
                WMO Gadgets • Ballistic Protection & Tactical Gear
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="block">Ballistic Protection</span>
                <span className="block text-green-400">For Those Who Serve</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 w-full lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                WMO Gadgets supplies NIJ-certified combat helmets, ballistic vests, armor plates and tactical accessories
                for military, law enforcement and private security teams across Nigeria and West Africa.
              </motion.p>

              {/* Feature Tags */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                {[
                  { icon: ShieldCheck, label: 'Military Grade' },
                  { icon: Award, label: 'NIJ Certified' },
                  { icon: Check, label: 'Battle Tested' }
                ].map((tag, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 px-6 py-3 bg-green-700/20 border border-green-700/50 rounded-full text-base sm:text-lg font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + (idx * 0.1), duration: 0.5, type: "spring", stiffness: 120 }}
                  >
                    <tag.icon className="w-5 h-5 text-green-400" />
                    <span>{tag.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <button
                  onClick={() => navigate('/products')}
                  className="bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-green-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  View Products
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-white/20 transition border border-white-20 transform hover:-translate-y-1"
                >
                  Request Quote
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '50K+', label: 'Units Delivered' },
                  { number: '100%', label: 'NIJ Certified' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (idx * 0.1), duration: 0.6 }}
                  >
                    <motion.div
                      className="text-3xl sm:text-4xl md:text-5xl font-black text-green-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.9 + (idx * 0.1), duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm sm:text-base md:text-lg text-gray-400 mt-2 font-medium tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Product imagery collage */}
            <motion.div
              className="relative mt-12 lg:mt-0 h-[450px] sm:h-[550px] lg:h-[650px] w-full"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 80 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-green-900/40 rounded-3xl" />

              <div className="relative h-full grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  <img
                    src="/images/ach.jpg"
                    alt="WMO ballistic combat helmet"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/40"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src="/images/Patrol-Vest-150x150.png"
                    alt="WMO patrol ballistic vest"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/40"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src="/images/Flexible-Armour-Plates-150x150.png"
                    alt="WMO flexible armour plates"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Top-right label */}
              <motion.div
                className="absolute -top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <ShieldCheck className="w-4 h-4" />
                NIJ Certified Gear
              </motion.div>

              {/* Bottom-left caption */}
              <motion.div
                className="absolute -bottom-4 left-4 bg-white/95 text-gray-900 px-4 py-3 rounded-2xl shadow-xl text-xs sm:text-sm max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="font-semibold">Helmets • Vests • Plates</div>
                <div className="text-[11px] text-gray-600">
                  Complete ballistic protection systems engineered for frontline professionals.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-50 py-6 sm:py-8 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">{feature.title}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{feature.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Slideshow Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
            Our Product Range
          </h2>
          <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Slideshow Container */}
            <div className="relative w-full aspect-video flex items-center justify-center bg-gray-100">
              {/* Images */}
              <div className="relative w-full h-full">
                {slideShowImages.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${activeSlide === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + slideShowImages.length) % slideShowImages.length)}
                className="absolute left-4 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 transform rotate-180" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slideShowImages.length)}
                className="absolute right-4 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slideShowImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-3 h-3 rounded-full transition ${activeSlide === idx
                      ? 'bg-green-700 w-8'
                      : 'bg-white/60 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Caption */}
            <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {slideShowImages[activeSlide]?.alt}
              </h3>
              <p className="text-sm sm:text-base text-green-100">
                Premium ballistic protection equipment designed for demanding environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 sm:py-16 lg:py-20" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">Shop by Category</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive range of certified ballistic protection equipment
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((cat, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <Link
                  to={cat.name === 'Combat Helmets' || cat.name === 'Ballistic Vests'
                    ? `/products?category=${encodeURIComponent(cat.name)}`
                    : '/products'}
                  className="block"
                >
                  <TiltCard className="group bg-white p-4 sm:p-6 rounded-xl text-center hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-yellow-400">
                    <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">{cat.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{cat.count} Products</div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Improved */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 sm:mb-14">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">Featured Products</h2>
              <p className="text-lg sm:text-xl text-gray-600">Our most popular protection solutions</p>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="text-yellow-600 hover:text-yellow-700 font-bold flex items-center gap-2 group"
            >
              View All Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <TiltCard className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer">
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square overflow-hidden flex items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.18),transparent_45%)]" />
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.level}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">{product.category}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2 group-hover:text-green-700 transition">{product.name}</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="space-y-1 mb-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-700 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <p className="text-gray-900 font-bold text-sm sm:text-base">{product.price}</p>
                      <button className="bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-green-800 transition text-xs sm:text-sm">
                        Inquire
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Main Promo */}
            <div className="relative bg-gradient-to-br from-green-700 to-green-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="font-bold text-base sm:text-lg">WMO GADGETS</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                  Your Safety,
                  <br />
                  Our Priority
                </h3>
                <p className="mb-6 sm:mb-8 text-green-100 text-sm sm:text-base">
                  Premium ballistic protection equipment trusted by defense forces, law enforcement, and security professionals worldwide. Every product meets or exceeds international standards.
                </p>
                <button className="bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                  Download Catalog
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Side Promos */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-6 sm:p-8 text-white flex items-center gap-4 sm:gap-6 hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
                <div className="bg-green-700 rounded-xl sm:rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-4xl sm:text-5xl flex-shrink-0 shadow-lg">
                  🎖️
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1 sm:mb-2">Certified Excellence</p>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Combat Helmet Collection</h4>
                  <button className="text-green-400 text-sm font-bold hover:text-green-300 transition flex items-center gap-1">
                    Explore Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 sm:p-8 text-white flex items-center gap-4 sm:gap-6 hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
                <div className="bg-white rounded-xl sm:rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-4xl sm:text-5xl flex-shrink-0 shadow-lg">
                  🦺
                </div>
                <div className="flex-1">
                  <p className="text-xs text-yellow-900 mb-1 sm:mb-2">Maximum Protection</p>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-gray-900">Ballistic Vest Systems</h4>
                  <button className="text-gray-900 text-sm font-bold hover:text-gray-800 transition flex items-center gap-1">
                    Shop Vests
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">Trusted by Professionals</h2>
            <p className="text-lg sm:text-xl text-gray-400">See what our clients say about our products</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b pb-16 sm:pb-24">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8">
                Why Choose WMO Gadgets?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                With over 15 years of experience, we've become Nigeria's leading supplier of ballistic protection equipment. Our commitment to quality and safety has made us the trusted choice for defense and security organizations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-green-700 p-2 rounded-lg flex-shrink-0">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">NIJ Certified Products</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All our products meet or exceed NIJ 0101.06 standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-green-700 p-2 rounded-lg flex-shrink-0">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Experienced Team</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Expert consultation and support from our technical team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8">Ready to Protect What Matters?</h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed">
            Contact our team for a consultation and find the right protection solution for your needs
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-green-800 transition text-sm sm:text-base"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-bold text-white">WMO Gadgets</span>
              </div>
              <p className="text-xs sm:text-sm">Your trusted partner in ballistic protection and tactical equipment.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link to="/products" className="hover:text-white transition">Products</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><button className="hover:text-white transition text-left">Documentation</button></li>
                <li><button className="hover:text-white transition text-left">FAQ</button></li>
                <li><button className="hover:text-white transition text-left">Support</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +234 902 441 9637</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@wmogadgets.com</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            <p>&copy; 2025 WMO Gadgets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}