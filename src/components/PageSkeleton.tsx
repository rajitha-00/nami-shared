import Box from '@mui/material/Box';
import { NamiosLoader } from './NamiosLoader';

export interface PageSkeletonProps {
  label?: string;
}

/** Suspense fallback used by lazy route modules featuring Namios HashLoader. */
export function PageSkeleton({ label }: PageSkeletonProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '65vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NamiosLoader size={54} label={label} />
    </Box>
  );
}
