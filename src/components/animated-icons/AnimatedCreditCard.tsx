import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Credit Card Icon
 * Card floating with glowing magnetic stripe / chip shimmer
 */
export const AnimatedCreditCard: React.FC<AnimatedIconProps> = ({
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
      {/* Card Outline */}
      <motion.rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        variants={{
          idle: { y: 0, rotate: 0 },
          animate: {
            y: [0, -1.5, 0],
            rotate: [0, -1, 0, 1, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -3, rotate: -2, transition: { type: 'spring' } },
        }}
      />
      {/* Magnetic Stripe */}
      <motion.line
        x1="2"
        y1="10"
        x2="22"
        y2="10"
        variants={{
          idle: { opacity: 0.8 },
          animate: {
            opacity: [0.6, 1, 0.6],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
        }}
      />
      {/* EMV Chip */}
      <motion.rect
        x="5"
        y="13"
        width="3"
        height="2.5"
        rx="0.5"
        fill={color}
        variants={{
          idle: { opacity: 0.8 },
          animate: {
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.2 },
        }}
      />
    </motion.svg>
  );
};
