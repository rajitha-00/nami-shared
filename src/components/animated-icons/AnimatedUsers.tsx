import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Users Icon
 * Avatar bouncing and nodding on hover or idle
 */
export const AnimatedUsers: React.FC<AnimatedIconProps> = ({
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
      {/* Primary User Head */}
      <motion.circle
        cx="9"
        cy="7"
        r="4"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1.5, 0],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -3, transition: { type: 'spring', stiffness: 400, damping: 10 } },
        }}
      />
      {/* Primary User Body */}
      <motion.path
        d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.02, 1],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.05, transition: { type: 'spring' } },
        }}
      />

      {/* Secondary User Head (background) */}
      <motion.path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1, 0],
            transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          },
          hover: { y: -2, transition: { type: 'spring' } },
        }}
      />
      {/* Secondary User Body (background) */}
      <motion.path
        d="M21 21v-2a4 4 0 0 0-3-3.87"
        variants={{
          idle: { opacity: 0.8 },
          animate: {
            opacity: [0.7, 1, 0.7],
            transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          },
          hover: { opacity: 1 },
        }}
      />
    </motion.svg>
  );
};
