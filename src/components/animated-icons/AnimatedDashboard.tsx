import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Dashboard / Layout Grid Icon
 * Tiles pulsing and expanding
 */
export const AnimatedDashboard: React.FC<AnimatedIconProps> = ({
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
      <motion.rect
        x="3"
        y="3"
        width="7"
        height="9"
        rx="1"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.05, 1],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.1, transition: { type: 'spring' } },
        }}
      />
      <motion.rect
        x="14"
        y="3"
        width="7"
        height="5"
        rx="1"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.05, 1],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          },
          hover: { scale: 1.1, transition: { type: 'spring' } },
        }}
      />
      <motion.rect
        x="14"
        y="12"
        width="7"
        height="9"
        rx="1"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.05, 1],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
          },
          hover: { scale: 1.1, transition: { type: 'spring' } },
        }}
      />
      <motion.rect
        x="3"
        y="16"
        width="7"
        height="5"
        rx="1"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.05, 1],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          },
          hover: { scale: 1.1, transition: { type: 'spring' } },
        }}
      />
    </motion.svg>
  );
};
