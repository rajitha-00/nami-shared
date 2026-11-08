import React, { type ReactNode } from 'react';
export interface ContextMenuItem {
    key?: string;
    label?: string;
    icon?: ReactNode;
    shortcut?: string;
    disabled?: boolean;
    danger?: boolean;
    separator?: boolean;
    onClick?: () => void;
    children?: ContextMenuItem[];
}
export interface ContextMenuProps {
    open: boolean;
    x: number;
    y: number;
    items: ContextMenuItem[];
    onClose: () => void;
    /**
     * Theme mode override. When omitted, dynamically adapts to the active MUI theme
     * mode (defaulting to 'light').
     */
    mode?: 'light' | 'dark';
}
export declare const ContextMenu: React.FC<ContextMenuProps>;
export default ContextMenu;
