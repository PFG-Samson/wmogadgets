import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Target, Eye, Award, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Header from './Header';

export default function About() {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 z-10">
          <img
            src="/images/shot-armenian-military-soldiers-training-dry-field.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-none"
            >
              ABOUT <br /> <span className="text-gray-500 uppercase">WMO GADGETS</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto font-medium"
            >
              Engineering the future of personal protective equipment for mission-critical operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-48 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-24 items-center mb-32"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
                WHO WE <span className="text-gray-500">ARE</span>
              </h2>

              <div className="space-y-6 text-xl text-gray-400 leading-relaxed font-medium">
                <p>
                  WMO Gadgets is a premier defense equipment manufacturer leveraging advanced ballistics and material science to protect those who serve.
                </p>

                <p>
                  Our R&D division continuously pushes the boundaries of survivability, ensuring frontline personnel are equipped with battle-tested armor and communications.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-8">
                {[
                  { value: 'NIJ', label: 'CERTIFIED' },
                  { value: '15+', label: 'YEARS EXP' },
                  { value: 'GLOBAL', label: 'REACH' }
                ].map((item, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="text-3xl font-black tracking-tighter group-hover:text-green-500 transition-colors uppercase">{item.value}</div>
                    <div className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-square grayscale border border-white/10 overflow-hidden"
            >
              <img
                src="/images/still-life-soldier-helmet.jpg"
                alt="WMO Facility"
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-48 bg-zinc-950 border-y border-white/5 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-1px bg-white/5">
          {/* Mission */}
          <div className="bg-zinc-950 p-12 lg:p-24 hover:bg-white/5 transition-colors">
            <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 mb-12 block">MISSION</span>
            <h3 className="text-3xl lg:text-5xl font-black tracking-tighter mb-8 leading-tight">
              PROMOTING SURVIVABILITY THROUGH <span className="text-gray-500 uppercase">INNOVATION.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To leverage world-class R&D, offering proven protective solutions for the empowerment and safety of personnel in high-threat environments.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-zinc-950 p-12 lg:p-24 hover:bg-white/5 transition-colors">
            <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 mb-12 block">VISION</span>
            <h3 className="text-3xl lg:text-5xl font-black tracking-tighter mb-8 leading-tight">
              THE STANDARD IN <span className="text-gray-500 uppercase">PROTECTIVE</span> SYSTEMS.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the definitive choice for defense forces and law enforcement agencies across the continent and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 lg:py-48 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter mb-24 leading-none">
            CORE <span className="text-gray-500">VALUES</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/10">
            {[
              { title: 'INNOVATION', desc: 'Cutting-edge protective R&D.' },
              { title: 'INTEGRITY', desc: 'Transparency in every operation.' },
              { title: 'PRECISION', desc: 'Uncompromising quality control.' },
              { title: 'SERVICE', desc: 'Dedicated to those who protect.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-black p-12 hover:bg-white/5 transition-colors">
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 mb-8 block">0{idx + 1}</span>
                <h3 className="text-xl font-black tracking-tight mb-4 uppercase">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-48 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 text-center">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter mb-12">
            JOIN OUR <span className="text-gray-500">EQUIPE</span>.
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="px-12 py-5 border border-white/20 hover:bg-white text-white hover:text-black font-bold tracking-[0.3em] text-xs uppercase transition-all"
          >
            Contact Defense Solutions
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-24 border-t border-white/5 text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase flex flex-col sm:flex-row justify-between items-center gap-8">
        <div>© 2026 WMO GADGETS</div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
