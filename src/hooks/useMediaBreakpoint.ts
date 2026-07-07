import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export interface UseMediaBreakpointReturn {
  /** Below `sm`. */
  isMobile: boolean;
  /** Between `sm` and `md`. */
  isTablet: boolean;
  /** `md` and up. */
  isDesktop: boolean;
  /** `lg` and up. */
  isLargeDesktop: boolean;
}

/** Wraps useMediaQuery with the Hotel OS theme breakpoints. */
export function useMediaBreakpoint(): UseMediaBreakpointReturn {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}
