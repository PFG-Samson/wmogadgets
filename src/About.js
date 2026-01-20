import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Header from './Header';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous R&D to develop cutting-edge protective solutions',
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'International standards and rigorous testing on all products',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Tailor-made designs for every customer\'s unique requirements',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Proven protective wear trusted by military and law enforcement',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              About <span className="text-green-400">WMO Gadgets</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Global Leaders in Advanced Protective Equipment Manufacturing
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  WMO Gadgets is a global brand that leverages on modern technology to manufacture personal protective equipment that are built to international standards.
                </p>
                
                <p>
                  Our products are widely used by defence and law enforcement agencies. We have a Research and Development unit that continuously develops innovative products and strives to keep ahead of time.
                </p>
                
                <p>
                  We rely on the exploration of new ballistic technologies and materials ensuring that performance and safety of lives are our highest priority.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-4 flex flex-wrap gap-4"
              >
                {[
                  { icon: '🌍', label: 'Global Reach' },
                  { icon: '✅', label: 'ISO Certified' },
                  { icon: '⭐', label: '15+ Years' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-2 text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-lg cursor-pointer transition"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center group"
            >
              <motion.div
                className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 20px 25px -5px rgba(34, 197, 94, 0.2)",
                    "0 25px 30px -5px rgba(34, 197, 94, 0.3)",
                    "0 20px 25px -5px rgba(34, 197, 94, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.img 
                  src="/images/Assault-Vest-Header.jpg" 
                  alt="WMO Assault Vest" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6"
                >
                  <p className="text-white font-semibold">Premium Tactical Vest</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Our Purpose
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 40px rgba(34, 197, 94, 0.15)" }}
              className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border-l-4 border-green-700 cursor-pointer transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-700 p-3 rounded-lg cursor-pointer"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To leverage world class research and development, offering proven protective clothing and accessories for the empowerment, protection and comfort of personnel in service.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 40px rgba(34, 197, 94, 0.15)" }}
              className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border-l-4 border-green-700 cursor-pointer transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: -360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-700 p-3 rounded-lg cursor-pointer"
                >
                  <Eye className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the number one protective wear company of choice for the Armed Forces and Law Enforcement Agencies across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, boxShadow: "0 25px 35px rgba(0, 0, 0, 0.1)" }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transition duration-300 cursor-pointer border border-transparent hover:border-green-300"
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <div className="bg-green-700 p-4 rounded-lg group-hover:bg-green-800 transition hover:shadow-lg hover:shadow-green-500/50">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Manufacturing Excellence
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Due to flexibility in the manufacturing process, our designs can be tailor-made to every customer's particular requirements. Durable and high quality materials are used on all garments to ensure that they withstand the rigors of military use and abuse.
            </p>

            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: '100%', label: 'Custom Designs' },
                { number: 'ISO', label: 'Certified' },
                { number: '24/7', label: 'Support' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  className="bg-green-700/20 border border-green-700/50 rounded-lg p-8 cursor-pointer transition hover:bg-green-700/30 hover:border-green-500"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2 hover:text-green-300 transition">
                    {item.number}
                  </div>
                  <div className="text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Our State-of-the-Art Facilities
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { src: '/images/facility-300x174.jpg', alt: 'Modern Manufacturing Facility', title: 'Manufacturing' },
              { src: '/images/facility2-300x200.jpg', alt: 'Quality Control Lab', title: 'Quality Control' },
              { src: '/images/facility3-300x157.jpg', alt: 'Production Floor', title: 'Production' }
            ].map((facility, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              >
                <motion.img
                  src={facility.src}
                  alt={facility.alt}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-white font-bold text-lg mb-2">{facility.title}</h3>
                  <p className="text-gray-300 text-sm">{facility.alt}</p>
                </motion.div>
                <motion.div
                  className="absolute inset-0 border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Join Us in Our Mission
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Experience the difference that quality, innovation, and dedication to excellence can make.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition shadow-lg inline-flex items-center gap-2 group"
          >
            Get in Touch
            <motion.span
              className="inline-block"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
