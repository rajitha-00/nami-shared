import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Calendar Icon
 * Micro-animations on calendar pins and day check/grid
 */
export const AnimatedCalendar: React.FC<AnimatedIconProps> = ({
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
      {/* Calendar Base Outline */}
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="10" x2="21" y2="10" />

      {/* Left Pin */}
      <motion.line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1.5, 0],
            transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -2, transition: { type: 'spring' } },
        }}
      />
      {/* Right Pin */}
      <motion.line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1.5, 0],
            transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          },
          hover: { y: -2, transition: { type: 'spring', delay: 0.05 } },
        }}
      />

      {/* Calendar Day Grid Indicators */}
      <motion.circle
        cx="8"
        cy="14"
        r="1"
        fill={color}
        variants={{
          idle: { opacity: 0.7 },
          animate: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.3 },
        }}
      />
      <motion.circle
        cx="12"
        cy="14"
        r="1"
        fill={color}
        variants={{
          idle: { opacity: 0.7 },
          animate: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          },
          hover: { scale: 1.3 },
        }}
      />
      <motion.circle
        cx="16"
        cy="14"
        r="1"
        fill={color}
        variants={{
          idle: { opacity: 0.7 },
          animate: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          },
          hover: { scale: 1.3 },
        }}
      />
    </motion.svg>
  );
};
