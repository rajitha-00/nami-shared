import React from 'react';
import type { IAppItem } from '../interfaces/IAppItem';
export interface AppTileProps {
    app: IAppItem;
    isActive?: boolean;
    onSelect: (app: IAppItem) => void;
}
export declare const AppTile: ({ app, isActive, onSelect, }: AppTileProps) => React.JSX.Element;
