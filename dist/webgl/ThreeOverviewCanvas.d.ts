import React from 'react';
export interface ThreeOverviewCanvasProps {
    height?: number | string;
    fallback?: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
    onRenderScene?: (gl: WebGLRenderingContext, width: number, height: number, rotation: {
        x: number;
        y: number;
    }, isDark: boolean) => void;
}
/**
 * ThreeOverviewCanvas
 *
 * Hardware-accelerated 3D WebGL Overview container.
 * Features:
 * - Crisp 4px micro-corner frame with 0.5px hairline grayed outline.
 * - Interactive pointer orbit rotation with smooth damping.
 * - Zero GPU spinning when idle (draws on demand).
 * - Automatic WebGL fallback when graphics context is unavailable.
 */
export declare function ThreeOverviewCanvas({ height, fallback, children, title, subtitle, onRenderScene, }: ThreeOverviewCanvasProps): React.JSX.Element;
