import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Shield Check Icon
 * Shield pulse and checkmark drawing
 */
export const AnimatedShieldCheck: React.FC<AnimatedIconProps> = ({
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
      {/* Shield Outline */}
      <motion.path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.03, 1],
            transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.05, transition: { type: 'spring' } },
        }}
      />
      {/* Checkmark */}
      <motion.path
        d="m9 12 2 2 4-4"
        variants={{
          idle: { pathLength: 1 },
          animate: {
            pathLength: [0.8, 1, 0.8],
            transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { pathLength: 1, scale: 1.1, originX: '12px', originY: '12px' },
        }}
      />
    </motion.svg>
  );
};
