import React from 'react';
import { MotionConfig } from 'framer-motion';

export function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}

