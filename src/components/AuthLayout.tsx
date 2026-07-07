import type { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const AuthRoot = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

const AuthTopRight = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(3),
}));

const AuthCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 420,
  boxShadow: theme.custom.raisedShadow,
}));

const AuthLogo = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
}));

export interface AuthLayoutProps {
  children: ReactNode;
  /** Brand/logo slot rendered above the card. */
  logo?: ReactNode;
  /** Slot pinned top-right (language switcher). */
  topRight?: ReactNode;
}

/** Centered card page for login / forgot-password screens. */
export function AuthLayout({ children, logo, topRight }: AuthLayoutProps) {
  return (
    <AuthRoot>
      {topRight ? <AuthTopRight>{topRight}</AuthTopRight> : null}
      {logo ? <AuthLogo>{logo}</AuthLogo> : null}
      <AuthCard>
        <CardContent sx={{ p: 4 }}>{children}</CardContent>
      </AuthCard>
    </AuthRoot>
  );
}
