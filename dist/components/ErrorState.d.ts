export interface ErrorStateProps {
    titleKey?: string;
    messageKey?: string;
    onRetry?: () => void;
}
/** Inline error surface for failed queries, with optional retry. */
export declare function ErrorState({ titleKey, messageKey, onRetry, }: ErrorStateProps): import("react").JSX.Element;
