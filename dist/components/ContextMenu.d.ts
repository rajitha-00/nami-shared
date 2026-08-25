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
}
export declare const ContextMenu: React.FC<ContextMenuProps>;
