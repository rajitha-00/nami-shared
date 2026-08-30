import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Cleaning Brush / Sparkle Mop Icon
 * Sweeping tilt and sparkle micro-animations
 */
export const AnimatedBrush: React.FC<AnimatedIconProps> = ({
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
      {/* Handle & Brush head */}
      <motion.g
        variants={{
          idle: { rotate: 0, originX: '18px', originY: '6px' },
          animate: {
            rotate: [0, -12, 6, 0],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { rotate: -18, transition: { type: 'spring', stiffness: 300 } },
        }}
      >
        <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
        <path d="M15 13 9 7l4-4 6 6z" />
      </motion.g>

      {/* Sparkle 1 */}
      <motion.path
        d="M19 2v3"
        variants={{
          idle: { opacity: 0.5, scale: 1 },
          animate: {
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
          },
        }}
      />
      {/* Sparkle 2 */}
      <motion.path
        d="M22 5h-3"
        variants={{
          idle: { opacity: 0.5, scale: 1 },
          animate: {
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
