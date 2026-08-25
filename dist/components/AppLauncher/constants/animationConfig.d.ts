import type { Transition } from 'framer-motion';
export declare const FOLDER_LAYOUT_SPRING: Transition;
export declare const BACKDROP_TRANSITION: Transition;
export declare const CONTAINER_VARIANTS: {
    hidden: {
        opacity: number;
        scale: number;
        y: number;
    };
    visible: {
        opacity: number;
        scale: number;
        y: number;
        transition: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            staggerChildren: number;
            delayChildren: number;
        };
    };
    exit: {
        opacity: number;
        scale: number;
        y: number;
        transition: {
            duration: number;
            ease: number[];
        };
    };
};
export declare const APP_TILE_VARIANTS: {
    hidden: {
        opacity: number;
        scale: number;
        y: number;
    };
    visible: {
        opacity: number;
        scale: number;
        y: number;
        transition: {
            type: string;
            stiffness: number;
            damping: number;
        };
    };
    exit: {
        opacity: number;
        scale: number;
        transition: {
            duration: number;
        };
    };
};
