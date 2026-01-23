import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from './Header';
import { LocationMap } from './LocationMap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 902 441 9637'],
      color: 'bg-green-700'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@wmogadgets.com', 'support@wmogadgets.com'],
      color: 'bg-green-700'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['54 Balarabe Musa Crescent', 'Victoria Island, Lagos, Nigeria'],
      color: 'bg-green-700'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9988769/pexels-photo-9988769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 grayscale z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-none uppercase"
            >
              GET IN <span className="text-gray-500">TOUCH</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto font-medium"
            >
              Direct channels to our specialized defense and tactical solutions teams.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-48 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-32">
            {/* Contact Info Cards */}
            <div className="space-y-16">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-12">
                DEFENSE <br /> <span className="text-gray-500 uppercase">CHANNELS</span>
              </h2>

              <div className="grid gap-12">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <span className="text-[10px] font-bold tracking-[0.5em] text-gray-600 mb-6 block uppercase">{info.title}</span>
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-2xl font-black tracking-tight group-hover:text-green-500 transition-colors">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-zinc-950 p-8 lg:p-16 border border-white/5"
            >
              <h3 className="text-[10px] font-bold tracking-[0.5em] text-gray-500 mb-12 uppercase">SECURE INQUIRY</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24"
                >
                  <CheckCircle className="w-16 h-16 text-white mx-auto mb-8" />
                  <h3 className="text-3xl font-black tracking-tight mb-4 uppercase">TRANSMITTED</h3>
                  <p className="text-gray-500 font-medium">
                    Your request has been securely logged. Our team will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-8">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-bold focus:outline-none focus:border-white transition-colors peer placeholder:text-transparent"
                        placeholder="NAME"
                        id="name"
                      />
                      <label htmlFor="name" className="absolute left-0 top-0 text-[10px] font-bold tracking-[0.3em] text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] transition-all uppercase">FULL NAME</label>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-bold focus:outline-none focus:border-white transition-colors peer placeholder:text-transparent"
                        placeholder="EMAIL"
                        id="email"
                      />
                      <label htmlFor="email" className="absolute left-0 top-0 text-[10px] font-bold tracking-[0.3em] text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] transition-all uppercase">EMAIL ADDRESS</label>
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-bold focus:outline-none focus:border-white transition-colors peer placeholder:text-transparent resize-none"
                        placeholder="MESSAGE"
                        id="message"
                      ></textarea>
                      <label htmlFor="message" className="absolute left-0 top-0 text-[10px] font-bold tracking-[0.3em] text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] transition-all uppercase">INQUIRY DETAILS</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-6 bg-white text-black font-black tracking-[0.3em] text-xs uppercase hover:bg-gray-200 transition-colors"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Map / Location Map Section */}
          <div className="grayscale border-t border-white/5 py-24">
            <span className="text-[10px] font-bold tracking-[0.5em] text-gray-600 mb-12 block uppercase text-center">GLOBAL HQ</span>
            <div className="max-w-5xl mx-auto bg-zinc-950 p-4 border border-white/10 overflow-hidden">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-24 bg-zinc-950 border-t border-white/5 text-gray-500">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase">
          <div>© 2026 WMO TACTICAL. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
