import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export interface AuthFormHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  badge?: ReactNode;
}

/** Reusable header for auth views (login, forgot password, reset password). */
export function AuthFormHeader({ title, subtitle, badge }: AuthFormHeaderProps) {
  return (
    <Stack spacing={0.75} sx={{ mb: 1 }}>
      {badge ? <div>{badge}</div> : null}
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}
