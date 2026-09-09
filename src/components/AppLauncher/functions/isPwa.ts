/**
 * Detects if the current application is running in an installed PWA / standalone window context.
 * Supports standard display-mode (standalone, window-controls-overlay, minimal-ui, fullscreen),
 * iOS Safari standalone mode, and Android Trusted Web Activity.
 */
export const isPwa = (): boolean => {
  if (typeof window === 'undefined') return false;

  const isStandaloneMedia =
    window.matchMedia?.('(display-mode: standalone)')?.matches ||
    window.matchMedia?.('(display-mode: window-controls-overlay)')?.matches ||
    window.matchMedia?.('(display-mode: minimal-ui)')?.matches ||
    window.matchMedia?.('(display-mode: fullscreen)')?.matches;

  const isIosStandalone = Boolean(
    (window.navigator as Navigator & { standalone?: boolean })?.standalone,
  );

  const isAndroidTwa = Boolean(document.referrer?.startsWith('android-app://'));

  return Boolean(isStandaloneMedia || isIosStandalone || isAndroidTwa);
};
