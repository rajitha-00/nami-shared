import { type UseDateRangeReturn } from '../hooks/useDateRange';
export interface DateRangeButtonProps {
    range: UseDateRangeReturn;
}
/** The "Jun 19 – Jul 3, 2026" pill; opens a popover with presets + custom dates. */
export declare const DateRangeButton: ({ range }: DateRangeButtonProps) => import("react").JSX.Element;
