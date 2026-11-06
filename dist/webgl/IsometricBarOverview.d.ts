import React from 'react';
export interface IsometricBarItem {
    label: string;
    value: number;
    color?: string;
    formattedValue?: string;
}
export interface IsometricBarOverviewProps {
    data: IsometricBarItem[];
    title?: string;
    subtitle?: string;
    height?: number | string;
    fallback?: React.ReactNode;
}
/**
 * 3D Isometric Bar Volume Overview
 *
 * Renders spatial volumetric bars in 3D isometric perspective.
 * Used for multi-property revenue volumes, occupancy rates, and sales trends.
 */
export declare function IsometricBarOverview({ data, title, subtitle, height, fallback, }: IsometricBarOverviewProps): React.JSX.Element;
