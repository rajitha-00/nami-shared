import type { ContextMenuItem } from '../components/ContextMenu';
export interface ContextMenuState {
    open: boolean;
    x: number;
    y: number;
    items: ContextMenuItem[];
}
export declare function useContextMenu(): {
    contextMenu: ContextMenuState;
    openContextMenu: (event: React.MouseEvent, items: ContextMenuItem[]) => void;
    closeContextMenu: () => void;
};
