import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Search Icon
 * Magnifying lens floating and rotating
 */
export const AnimatedSearch: React.FC<AnimatedIconProps> = ({
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
      <motion.g
        variants={{
          idle: { rotate: 0, x: 0, y: 0, originX: '11px', originY: '11px' },
          animate: {
            rotate: [0, -8, 8, 0],
            x: [0, -1, 1, 0],
            y: [0, -1, 0, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { rotate: -15, scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
        }}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </motion.g>
    </motion.svg>
  );
};
