import type { IAppItem } from '../interfaces/IAppItem';
export interface AppFolderMiniPreviewProps {
    apps: IAppItem[];
    isOpen: boolean;
    onClick: () => void;
    tooltip?: string;
    className?: string;
}
export declare const AppFolderMiniPreview: ({ apps, isOpen, onClick, tooltip, className, }: AppFolderMiniPreviewProps) => import("react").JSX.Element;
