import type { Transition } from 'framer-motion';

export const FOLDER_LAYOUT_SPRING: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
  mass: 0.8,
};

export const BACKDROP_TRANSITION: Transition = {
  duration: 0.24,
  ease: [0.16, 1, 0.3, 1],
};

export const CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 26,
      mass: 0.8,
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.86,
    y: 10,
    transition: {
      duration: 0.18,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export const APP_TILE_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: 14,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 340,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.12,
    },
  },
};
