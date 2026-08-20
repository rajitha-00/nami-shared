export interface NamiosLoaderProps {
    /** Size of HashLoader spinner in px (default: 50) */
    size?: number;
    /** Color of HashLoader spinner (defaults to primary.main or #2563EB) */
    color?: string;
    /** Optional caption label below spinner (e.g. "Loading Stay OS...") */
    label?: string;
    /** Whether to display the Namios logo header (default: true) */
    showLogo?: boolean;
}
export declare function NamiosMarkSvg({ size, color }: {
    size?: number;
    color?: string;
}): any;
/** Pure CSS HashLoader with Namios branding — zero external dependencies. */
export declare function NamiosLoader({ size, color, label, showLogo, }: NamiosLoaderProps): any;
