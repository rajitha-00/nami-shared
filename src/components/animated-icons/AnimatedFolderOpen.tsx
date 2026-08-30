import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedIconProps } from './AnimatedInbox';

/**
 * Lucide-Animated inspired Folder Open Icon
 * Flap opening and spring tab bounce
 */
export const AnimatedFolderOpen: React.FC<AnimatedIconProps> = ({
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
      {/* Folder Back Tab */}
      <motion.path
        d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.02, 1],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.03, transition: { type: 'spring' } },
        }}
      />
      {/* Open Front Flap */}
      <motion.path
        d="M2 10h20l-2 10H4L2 10z"
        variants={{
          idle: { y: 0, skewX: 0 },
          animate: {
            y: [0, 1.5, 0],
            skewX: [0, -3, 0],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: 2, skewX: -6, transition: { type: 'spring', stiffness: 300 } },
        }}
      />
    </motion.svg>
  );
};
