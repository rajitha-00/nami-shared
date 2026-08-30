import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Bed Icon
 * Micro-animations on pillow and cover lines
 */
export const AnimatedBed: React.FC<AnimatedIconProps> = ({
  size = 48,
  color = 'currentColor',
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="idle"
      animate={isAnimated && !animateOnHover ? 'animate' : 'idle'}
      whileHover={animateOnHover ? 'hover' : undefined}
      {...(props as any)}
    >
      {/* Bed frame / post */}
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />

      {/* Pillow - soft floating spring bounce */}
      <motion.path
        d="M6 8v9"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1.5, 0],
            transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -2, transition: { type: 'spring', stiffness: 300 } },
        }}
      />
      {/* Headboard pillow accent */}
      <motion.path
        d="M6 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H6v-1z"
        variants={{
          idle: { y: 0, scale: 1 },
          animate: {
            y: [0, -1, 0],
            scale: [1, 1.05, 1],
            transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.1, y: -1.5, transition: { type: 'spring' } },
        }}
      />
    </motion.svg>
  );
};
