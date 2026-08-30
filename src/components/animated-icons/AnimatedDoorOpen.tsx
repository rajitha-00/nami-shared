import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Door Open Icon
 * Door panel swinging open
 */
export const AnimatedDoorOpen: React.FC<AnimatedIconProps> = ({
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
      <path d="M13 4h3a2 2 0 0 1 2 2v14" />
      <path d="M2 20h20" />
      {/* Swinging Door */}
      <motion.path
        d="M13 20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16"
        variants={{
          idle: { skewY: 0, originX: '4px', originY: '12px' },
          animate: {
            skewY: [0, -6, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { skewY: -12, transition: { type: 'spring', stiffness: 300 } },
        }}
      />
      <motion.circle
        cx="10"
        cy="12"
        r="1"
        fill={color}
        variants={{
          idle: { x: 0 },
          animate: {
            x: [0, -1, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
        }}
      />
    </motion.svg>
  );
};
