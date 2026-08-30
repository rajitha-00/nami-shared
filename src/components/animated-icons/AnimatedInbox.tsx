import React from 'react';
import { motion } from 'framer-motion';

export interface AnimatedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  isAnimated?: boolean;
  animateOnHover?: boolean;
}

/**
 * Lucide-Animated inspired Inbox / Empty State Icon
 * Smooth spring lid lift and floating document
 */
export const AnimatedInbox: React.FC<AnimatedIconProps> = ({
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
      {/* Box base and flap */}
      <motion.polyline
        points="22 12 16 12 14 15 10 15 8 12 2 12"
        variants={{
          idle: { y: 0 },
          animate: {
            y: [0, -1.5, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -2, transition: { type: 'spring', stiffness: 300, damping: 15 } },
        }}
      />
      <motion.path
        d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        variants={{
          idle: { scale: 1 },
          animate: {
            scale: [1, 1.02, 1],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 15 } },
        }}
      />
      {/* Floating document / item descending or floating inside */}
      <motion.line
        x1="12"
        y1="7"
        x2="12"
        y2="10"
        variants={{
          idle: { opacity: 0.6, y: 0 },
          animate: {
            opacity: [0.3, 0.9, 0.3],
            y: [-2, 1, -2],
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          },
          hover: { y: -2, opacity: 1, transition: { type: 'spring' } },
        }}
      />
    </motion.svg>
  );
};
