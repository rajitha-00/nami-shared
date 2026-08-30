import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Sparkles Icon
 * Rotating and pulsing stars
 */
export const AnimatedSparkles: React.FC<AnimatedIconProps> = ({
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
      {/* Big Star */}
      <motion.path
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        variants={{
          idle: { scale: 1, rotate: 0, originX: '12px', originY: '12px' },
          animate: {
            scale: [1, 1.1, 1],
            rotate: [0, 15, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.2, rotate: 45, transition: { type: 'spring', stiffness: 300 } },
        }}
      />
      {/* Small Star 1 */}
      <motion.path
        d="M5 3v4"
        variants={{
          idle: { opacity: 0.6 },
          animate: {
            opacity: [0.2, 1, 0.2],
            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d="M7 5H3"
        variants={{
          idle: { opacity: 0.6 },
          animate: {
            opacity: [0.2, 1, 0.2],
            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          },
        }}
      />
    </motion.svg>
  );
};
