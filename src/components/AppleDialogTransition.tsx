import { forwardRef, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TransitionProps } from '@mui/material/transitions';

export interface AppleDialogTransitionProps extends TransitionProps {
  children: ReactElement;
}

/**
 * Apple-like 3D perspective, blur, and scale dialog transition inspired by Motion Base UI Dialog.
 * Uses 3D rotation, blur filter, translateZ depth, and Apple cubic-bezier easing.
 */
export const AppleDialogTransition = forwardRef<HTMLDivElement, AppleDialogTransitionProps>(
  function AppleDialogTransition(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, ...other } = props;

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
              filter: 'blur(10px)',
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500,
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              rotateX: 0,
              rotateY: 0,
              z: 0,
              transition: {
                duration: 0.45,
                ease: [0.17, 0.67, 0.51, 1],
                opacity: {
                  duration: 0.35,
                  ease: 'easeOut',
                },
              },
            }}
            exit={{
              opacity: 0,
              filter: 'blur(10px)',
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500,
              transition: {
                duration: 0.25,
                ease: [0.67, 0.17, 0.62, 0.64],
              },
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              transformPerspective: 500,
              transformStyle: 'preserve-3d',
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
