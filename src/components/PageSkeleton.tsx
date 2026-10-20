import { Box } from '@namios/motionui-react';
import { NamiosLoader } from './NamiosLoader';

export interface PageSkeletonProps {
  label?: string;
  className?: string;
}

/** Suspense fallback used by lazy route modules featuring Namios HashLoader and MotionUI Box. */
export const PageSkeleton = ({ label, className }: PageSkeletonProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="65vh"
      width="100%"
      className={className}
    >
      <NamiosLoader size={54} label={label} />
    </Box>
  );
};
