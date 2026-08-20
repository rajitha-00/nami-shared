import type { ReactNode } from 'react';
export interface SplitPaneLayoutProps {
    leftPane: ReactNode;
    rightPane: ReactNode;
    rightWidth?: number | string;
}
/**
 * SplitPaneLayout: A master-detail framework split panel.
 * Designed for POS screen or split grids. Left side scrollable, right side sticky panel.
 */
export declare function SplitPaneLayout({ leftPane, rightPane, rightWidth, }: SplitPaneLayoutProps): any;
