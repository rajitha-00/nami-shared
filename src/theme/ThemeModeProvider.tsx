import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { STORAGE_KEYS } from '../constants/storage-keys';
import { createHotelOsTheme, type ThemeMode } from './createHotelOsTheme';

export interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const readInitialMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEYS.THEME_MODE);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

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
 * Apps pinned to a single mode (Super Admin) skip this and use
 * `createHotelOsTheme('light')` with MUI's ThemeProvider directly.
 */
export function ThemeModeProvider({ children, overrides }: ThemeModeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(readInitialMode);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode, setMode }), [mode, toggleMode, setMode]);
  const theme = useMemo(
    () => createHotelOsTheme(mode, typeof overrides === 'function' ? overrides(mode) : overrides),
    [mode, overrides],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode(): ThemeModeContextValue {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return ctx;
}
