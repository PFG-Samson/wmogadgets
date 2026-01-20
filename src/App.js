import React, { useState, useEffect } from 'react';
import { ShieldCheck, Package, Award, Phone, Mail, MapPin, Menu, X, ShoppingCart, User, Search, ChevronRight, Star, Check, AlertCircle } from 'lucide-react';

export default function WMOLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { 
      name: 'Advanced Combat Helmet (ACH)', 
      price: 'Request Quote',
      image: '🪖',
      category: 'Helmets',
      level: 'NIJ Level IIIA',
      features: ['9mm Protection', 'Pad Suspension', '4-Point Chinstrap']
    },
    { 
      name: 'Tactical Plate Carrier', 
      price: 'Request Quote',
      image: '🦺',
      category: 'Vests',
      level: 'NIJ Level IV',
      features: ['Modular Design', 'Quick Release', 'MOLLE Compatible']
    },
    { 
      name: 'MICH 2000 Helmet', 
      price: 'Request Quote',
      image: '⛑️',
      category: 'Helmets',
      level: 'NIJ Level IIIA',
      features: ['Communications Ready', 'Lightweight', 'Night Vision Mount']
    },
    { 
      name: 'Hard Armor Plates', 
      price: 'Request Quote',
      image: '🛡️',
      category: 'Armor',
      level: 'NIJ Level IV',
      features: ['Multi-Hit Rated', 'Stand Alone', 'Ceramic Composite']
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
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-xs sm:text-sm">
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
          <span className="text-yellow-400 font-semibold">🎖️ Trusted by Defense Forces Nationwide</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 bg-white z-50 transition-shadow ${scrolled ? 'shadow-md' : 'border-b'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9 text-gray-900" />
                <div>
                  <span className="text-lg sm:text-2xl font-bold text-gray-900 block leading-none">WMO Gadgets</span>
                  <span className="text-xs text-gray-600 hidden sm:block">Professional Protection</span>
                </div>
              </div>
              <nav className="hidden lg:flex gap-6 xl:gap-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition">Home</a>
                <a href="#products" className="text-gray-700 hover:text-gray-900 font-medium transition">Products</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition">About</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition">Contact</a>
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
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Home</a>
              <a href="#products" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Products</a>
              <a href="#about" className="block text-gray-700 hover:text-gray-900 font-medium py-2">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Improved */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Award className="w-4 h-4" />
                NIJ CERTIFIED PROTECTION
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Protection
                <br />
                <span className="text-yellow-400">You Can Trust</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Premium ballistic helmets, vests, and armor plates designed for military, law enforcement, and security professionals across Nigeria and West Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  View Products
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white/20 transition border border-white/20">
                  Request Quote
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">Units Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">NIJ Certified</div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl sm:rounded-3xl aspect-square shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-8xl sm:text-9xl">
                  🛡️
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  IN STOCK
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-400 p-2 sm:p-3 rounded-lg">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">Every Life Counts</div>
                      <div className="text-xs sm:text-sm text-gray-600">Protecting those who protect us</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="hidden md:block absolute -top-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg transform -rotate-6">
                <div className="text-2xl font-bold">NIJ</div>
                <div className="text-xs">Certified</div>
              </div>
              <div className="hidden md:block absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-lg transform rotate-6">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-50 py-6 sm:py-8 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-2xl sm:text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">{feature.title}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{feature.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 sm:py-16 lg:py-20" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Browse our comprehensive range of certified ballistic protection equipment
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="group bg-white p-4 sm:p-6 rounded-xl text-center hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-1">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">{cat.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">{cat.count} Products</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Improved */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600 text-sm sm:text-base">Our most popular protection solutions</p>
            </div>
            <button className="text-yellow-600 hover:text-yellow-700 font-bold flex items-center gap-2 group">
              View All Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square overflow-hidden flex items-center justify-center text-7xl sm:text-8xl">
                  {product.image}
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {product.level}
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-semibold">{product.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2 group-hover:text-yellow-600 transition">{product.name}</h3>
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <p className="text-gray-900 font-bold text-sm sm:text-base">{product.price}</p>
                    <button className="bg-yellow-400 text-gray-900 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition text-xs sm:text-sm">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Main Promo */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white overflow-hidden">
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
                <p className="mb-6 sm:mb-8 text-blue-100 text-sm sm:text-base">
                  Premium ballistic protection equipment trusted by defense forces, law enforcement, and security professionals worldwide. Every product meets or exceeds international standards.
                </p>
                <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                  Download Catalog
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Side Promos */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 text-white flex items-center gap-4 sm:gap-6 hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
                <div className="bg-yellow-400 rounded-xl sm:rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-4xl sm:text-5xl flex-shrink-0 shadow-lg">
                  🎖️
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1 sm:mb-2">Certified Excellence</p>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Combat Helmet Collection</h4>
                  <button className="text-yellow-400 text-sm font-bold hover:text-yellow-300 transition flex items-center gap-1">
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
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Trusted by Professionals</h2>
            <p className="text-gray-400 text-sm sm:text-base">See what our clients say about our products</p>
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose WMO Gadgets?
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                With over 15 years of experience, we've become Nigeria's leading supplier of ballistic protection equipment. Our commitment to quality and safety has made us the trusted choice for defense and security organizations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">NIJ Certified Products</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All our products meet or exceed NIJ 0101.06 standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
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
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Ready to Protect What Matters?</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact our team for a consultation and find the right protection solution for your needs
          </p>
          <button className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition text-sm sm:text-base">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
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
                <li><a href="#products" className="hover:text-white transition">Products</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
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