export interface ErrorStateProps {
    titleKey?: string;
    messageKey?: string;
    onRetry?: () => void;
    className?: string;
}
/** Inline error surface for failed queries, with optional retry, powered by MotionUI. */
export declare const ErrorState: ({ titleKey, messageKey, onRetry, className, }: ErrorStateProps) => import("react").JSX.Element;
