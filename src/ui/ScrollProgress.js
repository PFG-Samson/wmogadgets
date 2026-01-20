import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-green-400 via-yellow-400 to-green-600"
      style={{ scaleX }}
    />
  );
}

