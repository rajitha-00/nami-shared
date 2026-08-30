import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Radio / Network Sync Icon
 * Signal waves pulsing outwards
 */
export const AnimatedRadio: React.FC<AnimatedIconProps> = ({
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
      {/* Center Dot */}
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill={color}
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.3, 1],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.4 },
        }}
      />
      {/* Inner Wave */}
      <motion.path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
        variants={{
          idle: { opacity: 0.7 },
          animate: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { opacity: 1, scale: 1.05, originX: '12px', originY: '12px' },
        }}
      />
    </motion.svg>
  );
};
