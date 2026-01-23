import React, { useMemo } from 'react';
import { Check, ChevronRight, ShieldCheck } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

const products = [
  {
    id: 'ach',
    name: 'Advanced Combat Helmet (ACH)',
    price: 185000,
    priceLabel: 'From ₦185,000',
    image: '/images/ach.jpg',
    imageAlt: 'Advanced Combat Helmet',
    category: 'Combat Helmets',
    level: 'NIJ Level IIIA',
    description: 'Modern ACH design with enhanced 9mm ballistic protection, pad suspension, and secure four-point chinstrap.',
    features: ['9mm Protection', 'Pad Suspension', '4-Point Chinstrap', 'Improved Design']
  },
  {
    id: 'lwh',
    name: 'Lightweight Helmet (LWH)',
    price: 195000,
    priceLabel: 'From ₦195,000',
    image: '/images/LWH.png',
    imageAlt: 'Lightweight Helmet',
    category: 'Combat Helmets',
    level: 'NIJ Level IIIA',
    description: 'Lightweight ballistic helmet designed for extended missions where comfort and protection are critical.',
    features: ['Reduced Weight', 'High Comfort', 'NIJ Certified', 'Field Tested']
  },
  {
    id: 'mich',
    name: 'MICH Special Operations Helmet',
    price: 225000,
    priceLabel: 'From ₦225,000',
    image: '/images/MICH.png',
    imageAlt: 'MICH Helmet',
    category: 'Special Operations',
    level: 'NIJ Level IIIA',
    description: 'MICH helmet optimized for communications integration and special operations requirements.',
    features: ['Comms Ready', 'SOF Rated', 'Ballistic Protection', 'Low Profile']
  },
  {
    id: 'plate-carrier',
    name: 'Tactical Plate Carrier',
    price: 265000,
    priceLabel: 'From ₦265,000',
    image: '/images/Hptplate-Carrier-150x150.png',
    imageAlt: 'Tactical Plate Carrier',
    category: 'Ballistic Vests',
    level: 'Multi-Hit',
    description: 'Durable plate carrier with MOLLE compatibility, optimized for NIJ-rated hard armor plates.',
    features: ['MOLLE Compatible', 'Adjustable Fit', 'Quick Release', 'Durable Fabric']
  },
  {
    id: 'ceramic-plates',
    name: 'Level IV Ceramic Armor Plate Set',
    price: 345000,
    priceLabel: 'From ₦345,000',
    image: '/images/Level IV Ceramic Armor Plate Set.webp',
    imageAlt: 'Stacked ballistic ceramic armor plates',
    category: 'Armor Plates',
    level: 'NIJ Level IV',
    description: 'Multi-hit rated ceramic plates with advanced strike-face technology for rifle threats.',
    features: ['Level IV Rated', 'Multi-Hit', 'Ergonomic Curve', 'Lightweight Composite']
  },
  {
    id: 'nv-goggles',
    name: 'Night Vision Goggles (Gen 3)',
    price: 780000,
    priceLabel: 'From ₦780,000',
    image: '/images/Night Vision Goggles (Gen 3).jpg',
    imageAlt: 'Night vision goggles glowing in low light',
    category: 'Optics & Surveillance',
    level: 'Gen 3',
    description: 'Ruggedized Gen 3 night vision goggles for low-light tactical operations.',
    features: ['Gen 3 Intensifier', 'Helmet Mountable', 'Weather Sealed', 'Long Battery Life']
  },
  {
    id: 'tac-gloves',
    name: 'Reinforced Tactical Gloves',
    price: 45000,
    priceLabel: 'From ₦45,000',
    image: '/images/reinforced tactical gloves.jpg',
    imageAlt: 'Pair of reinforced tactical gloves',
    category: 'Accessories',
    level: 'Cut Resistant',
    description: 'High-dexterity gloves with reinforced knuckles and cut-resistant palms.',
    features: ['Cut Resistant', 'Reinforced Knuckles', 'Touchscreen Ready', 'Breathable Fabric']
  },
  {
    id: 'encrypted-radio',
    name: 'Encrypted Tactical Radio',
    price: 260000,
    priceLabel: 'From ₦260,000',
    image: '/images/wmo-l450-150x150.png',
    imageAlt: 'Encrypted handheld tactical radio',
    category: 'Communication',
    level: 'AES-256',
    description: 'Secure encrypted handheld radio designed for mission-critical communications.',
    features: ['AES-256 Encryption', 'Long Range', 'Rugged Housing', 'Headset Compatible']
  },
];

export default function Products() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialCategory = searchParams.get('category') || 'All';
  const activeCategory = categories.includes(initialCategory) ? initialCategory : 'All';

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryClick = (category) => {
    const next = category === 'All' ? {} : { category };
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 z-10">
          <img
            src="/images/still-life-soldier-helmet (1).jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-30 w-full">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 mb-8 block uppercase">CAPABILITIES</span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-none uppercase">
              TACTICAL <br /> <span className="text-gray-500">SYSTEMS</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              NIJ-Certified protective equipment engineered for mission success.
            </p>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-24">
            {/* Category filter pills */}
            <div className="flex flex-wrap gap-4 border-b border-white/10 pb-12">
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`text-[10px] font-bold tracking-[0.3em] uppercase transition ${isActive
                      ? 'text-white border-b-2 border-white pb-2'
                      : 'text-gray-600 hover:text-white pb-2'
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-1px bg-white/10">
              {filteredProducts.map((product, idx) => (
                <Reveal key={product.id} delay={idx * 0.05}>
                  <div className="bg-black p-8 group flex flex-col h-full hover:bg-white/5 transition-colors border border-white/5">
                    <div className="aspect-square grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden mb-8">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600 mb-4 block uppercase">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight mb-4 uppercase group-hover:text-white transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-8 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="space-y-2 mb-12">
                        {product.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                            <div className="w-1 h-1 bg-white/20" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">SPEC: {product.level}</span>
                        <button
                          onClick={() => navigate('/contact')}
                          className="text-[10px] font-bold tracking-[0.3em] text-white hover:text-gray-400 transition-colors uppercase flex items-center gap-2 group/btn"
                        >
                          INQUIRE <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center border border-dashed border-white/10">
                <p className="text-gray-500 font-bold tracking-widest text-xs uppercase">No systems found in this sector.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-24 bg-zinc-950 border-t border-white/5 text-gray-500">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase">
          <div>© 2026 WMO GADGETS</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Logistics</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

