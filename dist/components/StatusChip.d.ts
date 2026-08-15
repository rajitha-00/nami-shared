import { type ChipProps } from '@mui/material/Chip';
import type { Status } from '../types/entities';
export interface StatusChipProps {
    status: Status;
    size?: ChipProps['size'];
}
/** Colored chip for entity Status; label comes from the common namespace. */
export declare function StatusChip({ status, size }: StatusChipProps): import("react").JSX.Element;
