export interface BrandLogoProps {
    propertyName?: string;
    logoSrc?: string;
    fallbackSubtitle?: string;
    textColor?: string;
    subtitleColor?: string;
    onClick?: () => void;
    className?: string;
}
export declare function NamiosMarkSvg({ size, color }: {
    size?: number;
    color?: string;
}): import("react").JSX.Element;
/**
 * Standard NamiOS BrandLogo component.
 * Ensures consistent squircle tile, resilient zero-broken-image fallback to /nami-mark.svg and NamiosMarkSvg,
 * bold 700 property title, and crisp 9px "POWERED BY NAMIOS" subtitle across all microfrontends.
 */
export declare function BrandLogo({ propertyName, logoSrc, fallbackSubtitle, textColor, subtitleColor, onClick, className, }: BrandLogoProps): import("react").JSX.Element;
