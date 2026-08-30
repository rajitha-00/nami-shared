import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Layers Icon
 * Top layer floating upwards on hover/idle
 */
export const AnimatedLayers: React.FC<AnimatedIconProps> = ({
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
      {/* Top Layer */}
      <motion.polygon
        points="12 2 2 7 12 12 22 7 12 2"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -3, 0],
            transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -5, transition: { type: 'spring', stiffness: 400, damping: 12 } },
        }}
      />
      {/* Middle Layer */}
      <motion.polyline
        points="2 12 12 17 22 12"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1, 0],
            transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.15 },
          },
          hover: { y: -2, transition: { type: 'spring' } },
        }}
      />
      {/* Bottom Layer */}
      <motion.polyline
        points="2 17 12 22 22 17"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, 0, 0],
          },
          hover: { y: 0 },
        }}
      />
    </motion.svg>
  );
};
