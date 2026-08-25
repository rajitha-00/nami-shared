import React from 'react';
import type { IAppItem } from '../interfaces/IAppItem';
export interface AppFolderModalProps {
    title?: string;
    subtitle?: string;
    apps: IAppItem[];
    currentAppId?: string;
    isOpen: boolean;
    onClose: () => void;
    onSelectApp: (app: IAppItem) => void;
}
export declare const AppFolderModal: ({ title, subtitle, apps, currentAppId, isOpen, onClose, onSelectApp, }: AppFolderModalProps) => React.ReactPortal | null;
