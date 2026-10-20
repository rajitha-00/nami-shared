export interface PageSkeletonProps {
    label?: string;
    className?: string;
}
/** Suspense fallback used by lazy route modules featuring Namios HashLoader and MotionUI Box. */
export declare const PageSkeleton: ({ label, className }: PageSkeletonProps) => import("react").JSX.Element;
