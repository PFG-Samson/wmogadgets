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
export default function WMOApp() {
  return (
    <MotionProvider>
      <Router>
        <ScrollProgress />
        <AnimatedRoutes />
      </Router>
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

  const slides = [
    {
      title: 'DEFENSE SOLUTIONS',
      subtitle: 'From advanced ballistic protection to tactical communication, enabling safety for those who serve.',
      image: 'https://images.pexels.com/photos/7988740/pexels-photo-7988740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'TACTICAL GEAR',
      subtitle: 'Specialized equipment designed for law enforcement and private security professionals.',
      image: 'https://images.pexels.com/photos/9988769/pexels-photo-9988769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'BALLISTIC SYSTEMS',
      subtitle: 'NIJ-certified armor plates and helmets engineered for maximum protection.',
      image: 'https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Header />

      {/* Hero Slideshow */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-24">
          <motion.div
            key={`content-${activeSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
              {slides[activeSlide].title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-12 font-medium leading-relaxed">
              {slides[activeSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => navigate('/products')}
                className="px-10 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-gray-200 transition-colors"
              >
                Learn More
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 border border-white/30 text-white font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Inquire
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-4 sm:left-6 lg:left-24 z-30 flex items-center gap-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className="flex items-center gap-2 group"
            >
              <span className={`text-[10px] font-bold tracking-widest transition-colors ${activeSlide === i ? 'text-white' : 'text-gray-500'}`}>
                0{i + 1}
              </span>
              <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
                {activeSlide === i && (
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
          <Reveal>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none">
              PUSHING THE <br /> LIMITS OF <br /> <span className="text-gray-500">SURVIVABILITY</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-6">
              WMO Tactical provides unified ballistic protection systems for modern warfare and urban security. Our equipment is battle-tested and NIJ-certified.
            </p>
            <div className="h-px w-32 bg-white/20" />
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10">
          {[
            { title: 'BALLISTIC PROTECTION', desc: 'SAPI/ESAPI plates and tactical vests.' },
            { title: 'HEAD PROTECTION', desc: 'ACH, MICH and High-Cut combat helmets.' },
            { title: 'OPTICS & COMMS', desc: 'Night vision and encrypted communications.' }
          ].map((item, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white/5 transition-colors group">
              <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 mb-8 block">0{i + 1}</span>
              <h3 className="text-2xl font-black tracking-tight mb-4">{item.title}</h3>
              <p className="text-gray-500 mb-12">{item.desc}</p>
              <button
                onClick={() => navigate('/products')}
                className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase group-hover:gap-6 transition-all"
              >
                Explore <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7988740/pexels-photo-7988740.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Mission"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-24 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 uppercase mb-8 block">OUR MISSION</span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-12 leading-tight">
                WE PROVIDE THE SHIELD FOR <br /> THOSE WHO STAND IN THE GAP.
              </h2>
              <button
                onClick={() => navigate('/about')}
                className="px-12 py-5 border border-white/20 hover:bg-white text-white hover:text-black font-bold tracking-[0.2em] text-xs uppercase transition-all"
              >
                The Company
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-24 border-t border-white/10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-24">
          {[
            { label: 'DELIVERED UNITS', value: '50K+' },
            { label: 'NIJ CERTIFIED', value: '100%' },
            { label: 'YEARS IN FIELD', value: '15+' },
            { label: 'OFFICE LOCATIONS', value: '03+' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-6xl sm:text-7xl font-black tracking-tighter mb-4">{stat.value}</div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-24 bg-zinc-950 border-t border-white/5 text-gray-500">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <div>
            <div className="text-3xl font-black text-white tracking-tighter mb-8">WMO TACTICAL.</div>
            <p className="max-w-sm leading-relaxed text-sm">
              Premier ballistic protection and tactical equipment supplier. Partnering with global defense forces to ensure maximum survivability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8">PAGES</h4>
              <ul className="space-y-4 text-xs font-semibold tracking-wider">
                <li><Link to="/products" className="hover:text-white transition">PRODUCTS</Link></li>
                <li><Link to="/about" className="hover:text-white transition">ABOUT</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">CONTACT</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8">SOCIAL</h4>
              <ul className="space-y-4 text-xs font-semibold tracking-wider">
                <li><a href="#" className="hover:text-white transition">LINKEDIN</a></li>
                <li><a href="#" className="hover:text-white transition">TWITTER</a></li>
                <li><a href="#" className="hover:text-white transition">INSTAGRAM</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-bold tracking-[0.2em] uppercase">
          <div>© 2026 WMO GADGETS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}