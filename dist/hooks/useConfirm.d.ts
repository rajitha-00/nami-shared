import { type ReactNode } from 'react';
export type ConfirmVariant = 'danger' | 'warning' | 'info';
export interface ConfirmOptions {
    titleKey: string;
    messageKey: string;
    /** Interpolation values for the message, e.g. { name: client.name }. */
    messageParams?: Record<string, unknown>;
    variant?: ConfirmVariant;
    confirmKey?: string;
    cancelKey?: string;
    /** Optional anchor element to open confirmation right below the clicked button */
    anchorEl?: HTMLElement | null;
    /** When true, removes blocking dark backdrop */
    disableBackdrop?: boolean;
}
type ConfirmFn = (options: ConfirmOptions) => Promise<boolean>;
export interface ConfirmProviderProps {
    children: ReactNode;
}
/** Renders ONE shared ConfirmDialog and exposes a promise-based confirm(). */
export declare function ConfirmProvider({ children }: ConfirmProviderProps): import("react").JSX.Element;
/**
 * Promise-based confirmation:
 * `const ok = await confirm({ titleKey, messageKey, variant: 'danger' });`
 */
export declare function useConfirm(): ConfirmFn;
export {};
