import React, { useMemo } from 'react';
import { Check, ChevronRight, ShieldCheck, Trash2, Plus, Minus } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';
import { useCart } from './CartContext';

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
    image: 'https://images.pexels.com/photos/7988740/pexels-photo-7988740.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/9988769/pexels-photo-9988769.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/9988766/pexels-photo-9988766.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=800',
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
  const initialCategory = searchParams.get('category') || 'All';
  const activeCategory = categories.includes(initialCategory) ? initialCategory : 'All';

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const { items, itemCount, subtotal, addItem, removeItem, decrementItem, clearCart } = useCart();

  const handleCategoryClick = (category) => {
    const next = category === 'All' ? {} : { category };
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full bg-green-700/30 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide">
                <ShieldCheck className="h-4 w-4" />
                NIJ-Certified Protective Equipment
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Shop WMO
                <span className="block text-green-400">Protection Systems</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-xl mx-auto lg:mx-0">
                Explore our curated selection of combat helmets, ballistic vests, and tactical armor designed for military, law enforcement, and security professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid + cart */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
            {/* Main content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">All Products</h2>
                  <p className="mt-1 text-sm sm:text-base text-gray-600">
                    Add items to your cart and send us a request for a tailored quote.
                  </p>
                </div>
              </div>

              {/* Category filter pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = cat === activeCategory;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className={`rounded-full border px-3 py-1 text-xs sm:text-sm font-semibold transition ${
                        isActive
                          ? 'border-green-700 bg-green-700 text-white shadow-sm'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-700'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product, idx) => (
                  <Reveal key={product.id} delay={idx * 0.06}>
                    <TiltCard className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col">
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
                      <div className="flex-1 p-4 sm:p-5 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2 group-hover:text-green-700 transition">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="space-y-1 mb-4">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-[11px] text-gray-600">
                              <Check className="w-3 h-3 text-green-700 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3 border-t">
                          <p className="text-gray-900 font-bold text-xs sm:text-sm">{product.priceLabel}</p>
                          <button
                            onClick={() =>
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                              })
                            }
                            className="inline-flex items-center gap-1 rounded-lg bg-green-700 px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold text-white hover:bg-green-800 transition"
                          >
                            Add to Cart
                            <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                ))}

                {filteredProducts.length === 0 && (
                  <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-600">
                    No products available in this category yet. Please choose another category or contact us for a custom solution.
                  </div>
                )}
              </div>
            </div>

            {/* Cart summary */}
            <aside className="w-full lg:w-80 xl:w-96">
              <Reveal y={24}>
                <div className="rounded-2xl bg-white shadow-lg border border-gray-200 p-5 sticky top-24">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Your Cart</h3>
                    <span className="text-xs text-gray-500">
                      {itemCount} item{itemCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-4">
                    Review your selection and send as a quote request. Our team will respond with final pricing.
                  </p>

                  <div className="max-h-64 overflow-y-auto space-y-3 mb-4 pr-1">
                    {items.length === 0 && (
                      <p className="text-xs text-gray-500">
                        Your cart is empty. Add helmets, vests, or carriers to get started.
                      </p>
                    )}
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2"
                      >
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                          {item.image && (
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="truncate text-xs font-semibold text-gray-900">{item.name}</p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-gray-500">
                          <div className="inline-flex items-center gap-1 rounded-full bg-white px-1 py-0.5 border border-gray-200">
                            <button
                              type="button"
                              onClick={() => decrementItem(item.id)}
                              className="p-1 hover:bg-gray-100 rounded-full"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-1 min-w-[16px] text-center text-[11px] font-semibold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                addItem({
                                  id: item.id,
                                  name: item.name,
                                  price: item.price,
                                  image: item.image,
                                })
                              }
                              className="p-1 hover:bg-gray-100 rounded-full"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-gray-700">
                      <span className="font-semibold">Estimated Subtotal</span>
                      <span className="font-bold">₦{subtotal.toLocaleString()}</span>
                    </div>
                    <p className="text-[11px] text-gray-500">
                      Final pricing may vary based on configuration, quantity, and delivery. We will confirm all details
                      before you commit.
                    </p>
                  </div>

                  <button
                    disabled={items.length === 0}
                    className={`mt-4 w-full rounded-lg px-4 py-3 text-xs sm:text-sm font-bold text-white transition ${
                      items.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-700 hover:bg-green-800 shadow-md'
                    }`}
                  >
                    Request Quote for {itemCount || 0} Item{itemCount !== 1 ? 's' : ''}
                  </button>

                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="mt-2 w-full rounded-lg px-4 py-2 text-[11px] font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
                    >
                      Clear Cart
                    </button>
                  )}
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

