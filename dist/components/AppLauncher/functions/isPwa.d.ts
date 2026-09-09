/**
 * Detects if the current application is running in an installed PWA / standalone window context.
 * Supports standard display-mode (standalone, window-controls-overlay, minimal-ui, fullscreen),
 * iOS Safari standalone mode, and Android Trusted Web Activity.
 */
export declare const isPwa: () => boolean;
