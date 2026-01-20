import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export function TiltCard({ children, className = '' }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useMotionTemplate`${my}deg`;
  const rotateY = useMotionTemplate`${mx}deg`;

  function onMove(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    mx.set((px - 0.5) * 12);
    my.set((0.5 - py) * 12);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      className={`[transform-style:preserve-3d] ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="[transform:translateZ(0px)]">{children}</div>
    </motion.div>
  );
}

