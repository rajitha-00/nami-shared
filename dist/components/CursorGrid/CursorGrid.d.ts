import './CursorGrid.css';
export type CursorGridFalloff = 'linear' | 'smooth' | 'sharp';
export interface CursorGridProps {
    cellSize?: number;
    color?: string;
    radius?: number;
    falloff?: CursorGridFalloff;
    holdTime?: number;
    fadeDuration?: number;
    lineWidth?: number;
    maxOpacity?: number;
    fillOpacity?: number;
    gridOpacity?: number;
    cellRadius?: number;
    clickPulse?: boolean;
    pulseSpeed?: number;
    className?: string;
}
export declare const CursorGrid: ({ cellSize, color, radius, falloff, holdTime, fadeDuration, lineWidth, maxOpacity, fillOpacity, gridOpacity, cellRadius, clickPulse, pulseSpeed, className, }: CursorGridProps) => import("react").JSX.Element;
export default CursorGrid;
