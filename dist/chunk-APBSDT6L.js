import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { jsx } from 'react/jsx-runtime';

// src/components/AppleDialogTransition.tsx
var AppleDialogTransition = forwardRef(
  function AppleDialogTransition2(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, ...other } = props;
    return /* @__PURE__ */ jsx(
      AnimatePresence,
      {
        mode: "wait",
        onExitComplete: () => {
          if (onExited) {
            onExited(null);
          }
        },
        children: inProp ? /* @__PURE__ */ jsx(
          motion.div,
          {
            ref,
            initial: {
              opacity: 0,
              filter: "blur(10px)",
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500
            },
            animate: {
              opacity: 1,
              filter: "blur(0px)",
              rotateX: 0,
              rotateY: 0,
              z: 0,
              transition: {
                duration: 0.45,
                ease: [0.17, 0.67, 0.51, 1],
                opacity: {
                  duration: 0.35,
                  ease: "easeOut"
                }
              }
            },
            exit: {
              opacity: 0,
              filter: "blur(10px)",
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500,
              transition: {
                duration: 0.25,
                ease: [0.67, 0.17, 0.62, 0.64]
              }
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              transformPerspective: 500,
              transformStyle: "preserve-3d"
            },
            onAnimationStart: () => {
              if (inProp) {
                onEnter?.(null, true);
              } else {
                onExit?.(null);
              }
            },
            onAnimationComplete: () => {
              if (inProp) {
                onEntered?.(null, true);
              }
            },
            ...other,
            children
          }
        ) : null
      }
    );
  }
);

export { AppleDialogTransition };
//# sourceMappingURL=chunk-APBSDT6L.js.map
//# sourceMappingURL=chunk-APBSDT6L.js.map