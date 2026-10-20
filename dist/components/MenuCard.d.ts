import type { ReactNode } from 'react';
export interface MenuCardProps {
    name: string;
    price: string | number;
    description?: string;
    imageUrl?: string;
    badges?: ReactNode[];
    stockLabel?: string;
    stockColor?: 'success' | 'error' | 'warning' | 'default';
    actionOverlay?: ReactNode;
    activeBorderColor?: string;
    onClick?: () => void;
}
/**
 * MenuCard: A presentational card for items in the catalog or menu.
 */
export declare const MenuCard: ({ name, price, description, imageUrl, badges, stockLabel, stockColor, actionOverlay, activeBorderColor, onClick, }: MenuCardProps) => import("react").JSX.Element;
