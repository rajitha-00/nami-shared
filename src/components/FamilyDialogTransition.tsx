import { forwardRef, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TransitionProps } from '@mui/material/transitions';

export interface FamilyDialogTransitionProps extends TransitionProps {
  children: ReactElement;
}

/**
 * Family-style spring confirmation dialog transition inspired by Motion Family Dialog.
 * Uses high-fidelity spring physics (damping, stiffness), scale morphing, smooth translation, and subtle blur.
 */
export const FamilyDialogTransition = forwardRef<HTMLDivElement, FamilyDialogTransitionProps>(
  function FamilyDialogTransition(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, style, ...other } = props;

    return (
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (onExited) {
            onExited(null as unknown as HTMLElement);
          }
        }}
      >
        {inProp ? (
          <motion.div
            ref={ref}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 12,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                type: 'spring',
                damping: 28,
                stiffness: 380,
                mass: 0.8,
                opacity: { duration: 0.18 },
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 8,
              filter: 'blur(6px)',
              transition: {
                duration: 0.16,
                ease: [0.32, 0.72, 0, 1],
              },
            }}
            style={{
              outline: 'none',
              ...style,
            }}
            onAnimationStart={() => {
              if (inProp) {
                onEnter?.(null as unknown as HTMLElement, true);
              } else {
                onExit?.(null as unknown as HTMLElement);
              }
            }}
            onAnimationComplete={() => {
              if (inProp) {
                onEntered?.(null as unknown as HTMLElement, true);
              }
            }}
            {...(other as Record<string, unknown>)}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }
);
