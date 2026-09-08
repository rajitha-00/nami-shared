import { describe, expect, it } from 'vitest';
import { createHotelOsTheme } from './createHotelOsTheme';

describe('createHotelOsTheme', () => {
  it('builds a light theme', () => {
    const theme = createHotelOsTheme('light');
    expect(theme.palette.mode).toBe('light');
    expect(theme.palette.background.paper).toBe('#FFFFFF');
    expect(theme.custom.sidebarWidth).toBe(260);
  });

  it('builds a dark theme', () => {
    const theme = createHotelOsTheme('dark');
    expect(theme.palette.mode).toBe('dark');
    expect(theme.palette.background.default).toBe('#0F172A');
  });

  it('deep-merges per-app overrides without losing base tokens', () => {
    const theme = createHotelOsTheme('light', {
      palette: { primary: { main: '#FF0000' } },
      custom: { sidebarWidth: 300 },
    });
    expect(theme.palette.primary.main).toBe('#FF0000');
    expect(theme.custom.sidebarWidth).toBe(300);
    // untouched tokens survive the merge
    expect(theme.custom.topBarHeight).toBe(64);
    expect(theme.palette.success.main).toBe('#34C759');
  });
});
