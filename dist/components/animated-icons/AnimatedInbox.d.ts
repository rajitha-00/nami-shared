import React from 'react';
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
export declare const AnimatedInbox: React.FC<AnimatedIconProps>;
