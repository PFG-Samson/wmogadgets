import React from 'react';
import { motion } from 'framer-motion';

export function PageTransition({ children }) {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

