import React from 'react';
import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, y = 18, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

