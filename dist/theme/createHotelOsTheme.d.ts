import { type Theme, type ThemeOptions } from '@mui/material/styles';
import './augmentation';
export type ThemeMode = 'light' | 'dark';
/**
 * Builds the NamiOS MUI theme for the given mode, deep-merging optional
 * per-app overrides. This is the single theming source for ALL NamiOS apps.
 */
export declare function createHotelOsTheme(mode: ThemeMode, overrides?: ThemeOptions): Theme;
