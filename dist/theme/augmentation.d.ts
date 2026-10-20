import type { PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import '@mui/material/Chip';
declare module '@mui/material/styles' {
    interface Palette {
        neutral: PaletteColor;
    }
    interface PaletteOptions {
        neutral?: PaletteColorOptions;
    }
    interface Theme {
        custom: {
            sidebarWidth: number;
            topBarHeight: number;
            cardShadow: string;
            raisedShadow: string;
            overlayShadow: string;
        };
    }
    interface ThemeOptions {
        custom?: Partial<Theme['custom']>;
    }
}
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        neutral: true;
    }
}
export {};
