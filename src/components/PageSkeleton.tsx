import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export interface PageSkeletonProps {
  /** Number of content block skeletons below the header. */
  blocks?: number;
}

/** Suspense fallback used by lazy route modules — mimics a typical page layout. */
export function PageSkeleton({ blocks = 3 }: PageSkeletonProps) {
  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Skeleton variant="text" width={280} height={40} />
      <Skeleton variant="rounded" height={56} />
      {Array.from({ length: blocks }, (_, i) => (
        <Skeleton key={i} variant="rounded" height={160} />
      ))}
    </Stack>
  );
}
