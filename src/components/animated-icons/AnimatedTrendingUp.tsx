import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Trending Up / Analytics Icon
 * Arrow rising and pulse
 */
export const AnimatedTrendingUp: React.FC<AnimatedIconProps> = ({
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
      {/* Trend line */}
      <motion.polyline
        points="22 7 13.5 15.5 8.5 10.5 2 17"
        variants={{
          idle: { pathLength: 1 },
          animate: {
            pathLength: [0.7, 1, 0.7],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { pathLength: 1 },
        }}
      />
      {/* Arrow head */}
      <motion.polyline
        points="16 7 22 7 22 13"
        variants={{
          idle: { x: 0, y: 0 },
          animate: {
            x: [0, 2, 0],
            y: [0, -2, 0],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { x: 3, y: -3, transition: { type: 'spring', stiffness: 400 } },
        }}
      />
    </motion.svg>
  );
};
