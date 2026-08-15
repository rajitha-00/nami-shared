import { type ReactNode } from 'react';
export interface DescriptionListItem {
    labelKey: string;
    labelParams?: Record<string, unknown>;
    value: ReactNode;
}
export interface DescriptionListProps {
    items: DescriptionListItem[];
}
/** Label/value pairs for detail views. */
export declare function DescriptionList({ items }: DescriptionListProps): import("react").JSX.Element;
