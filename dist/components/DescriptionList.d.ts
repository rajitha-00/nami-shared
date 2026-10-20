import { type ReactNode } from 'react';
export interface DescriptionListItem {
    labelKey: string;
    labelParams?: Record<string, unknown>;
    value: ReactNode;
}
export interface DescriptionListProps {
    items: DescriptionListItem[];
    className?: string;
}
/** Label/value pairs for detail views with strictly typed arrow function architecture. */
export declare const DescriptionList: ({ items, className }: DescriptionListProps) => import("react").JSX.Element;
