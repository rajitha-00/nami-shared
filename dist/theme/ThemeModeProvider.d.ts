import { type ReactNode } from 'react';
import type { ThemeOptions } from '@mui/material/styles';
import { type ThemeMode } from './createHotelOsTheme';
export interface ThemeModeContextValue {
    mode: ThemeMode;
    toggleMode: () => void;
    setMode: (mode: ThemeMode) => void;
}
export interface ThemeModeProviderProps {
    children: ReactNode;
    /**
     * Per-app theme overrides forwarded to {@link createHotelOsTheme}.
     * Pass a function to derive different overrides per mode (light/dark).
     */
    overrides?: ThemeOptions | ((mode: ThemeMode) => ThemeOptions);
}
/**
 * Provides light/dark switching backed by localStorage and prefers-color-scheme.
 * Automatically synchronizes `data-theme` attribute for MotionUI design tokens.
 * Apps pinned to a single mode (Super Admin) skip this and use
 * `createHotelOsTheme('light')` with MUI's ThemeProvider directly.
 */
export declare const ThemeModeProvider: ({ children, overrides }: ThemeModeProviderProps) => import("react").JSX.Element;
export declare const useThemeMode: () => ThemeModeContextValue;
