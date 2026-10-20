import type { ReactNode } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { NamiosMarkSvg } from './NamiosLoader';

export interface AuthLayoutFeatureItem {
  text: string;
  icon?: ReactNode;
}

export interface AuthLayoutProps {
  children: ReactNode;
  /** Brand/logo slot rendered above the form or on mobile top bar. */
  logo?: ReactNode;
  /** Slot pinned top-right (e.g. LanguageSwitcher). */
  topRight?: ReactNode;
  /** Application branding name (e.g., "Nami Stay", "Nami Dine", "Nami Super Admin"). */
  appName?: string;
  /** Product category/tagline (e.g., "Property Management System", "Food & Beverage Operations"). */
  tagline?: string;
  /** Hero headline on the brand panel. */
  headline?: string;
  /** Hero description below headline. */
  description?: string;
  /** Value proposition bullet points with checkmark icons. */
  features?: (AuthLayoutFeatureItem | string)[];
  /** Brand panel footer text. */
  footer?: string;
  /** Optional custom gradient for brand panel. */
  brandGradient?: string;
  /** Force single centered card mode instead of split screen. */
  centeredOnly?: boolean;
}

const AuthPageRoot = styled('main', {
  shouldForwardProp: (prop) => prop !== 'hasSplitBrand',
})<{ hasSplitBrand?: boolean }>(({ theme, hasSplitBrand }) => ({
  minHeight: '100dvh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    height: '100dvh',
    minHeight: '100dvh',
    maxHeight: '100dvh',
    overflow: 'hidden',
    gridTemplateColumns: hasSplitBrand ? 'minmax(0, 5fr) minmax(0, 7fr)' : 'minmax(0, 1fr)',
  },
  ...(hasSplitBrand && {
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'minmax(0, 5.2fr) minmax(0, 6.8fr)',
    },
  }),
}));

const AuthBrandPanel = styled('section', {
  shouldForwardProp: (prop) => prop !== 'customGradient',
})<{ customGradient?: string }>(({ theme, customGradient }) => ({
  display: 'none',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(6, 6, 5),
  color: theme.palette.common.white,
  background:
    customGradient ||
    `linear-gradient(145deg, #090e17 0%, #0f172a 45%, ${theme.palette.primary.dark || '#1e3a8a'} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'hidden',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: theme.spacing(52),
    height: theme.spacing(52),
    top: theme.spacing(-14),
    right: theme.spacing(-14),
    borderRadius: '50%',
    border: `${theme.spacing(5)} solid ${alpha(theme.palette.common.white, 0.04)}`,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: theme.spacing(40),
    height: theme.spacing(40),
    bottom: theme.spacing(-14),
    left: theme.spacing(-12),
    borderRadius: '50%',
    backgroundColor: alpha(theme.palette.common.white, 0.03),
    pointerEvents: 'none',
  },
}));

const BrandPanelContent = styled('div')({
  position: 'relative',
  zIndex: 1,
});

const BrandMarkTile = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(6),
  height: theme.spacing(6),
  borderRadius: theme.shape.borderRadius * 1.5,
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
}));

const FeatureList = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2.25),
  marginTop: theme.spacing(4.5),
}));

const FeatureItem = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.75),
  alignItems: 'center',
  color: alpha(theme.palette.common.white, 0.88),
}));

import type { PaperProps } from '@mui/material/Paper';
import { CursorGrid } from './CursorGrid';

const AuthFormPanel = styled('section')(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  /* Use flex-start instead of center to prevent scroll-loop glitch.
     Vertical centering is achieved via margin: 'auto 0' on the form shell. */
  justifyContent: 'flex-start',
  padding: theme.spacing(3, 2),
  position: 'relative',
  overflowY: 'auto',
  overflowX: 'hidden',
  /* Override global scroll-behavior: smooth to stop the auto-scroll loop
     when the browser tries to scrollIntoView the focused input. */
  scrollBehavior: 'auto',
  boxSizing: 'border-box',
  WebkitOverflowScrolling: 'touch',
  backgroundColor: '#f8fafc',
  backgroundImage:
    'radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.7) 100%)',
  '& .MuiInputBase-input': {
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4, 4),
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
    minHeight: 0,
    padding: theme.spacing(4, 5),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: 450,
  /* Safe vertical centering — replaces parent justifyContent:'center'
     which caused a scroll-loop when content overflowed. */
  margin: 'auto 0',
  padding: theme.spacing(3.5, 2.5),
  borderRadius: 20,
  border: '1px solid rgba(226, 232, 240, 0.9)',
  boxShadow: '0 20px 45px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.04)',
  backgroundImage: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.96)',
  backdropFilter: 'blur(10px)',
  boxSizing: 'border-box',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5),
  },
}));

export interface AuthFormShellProps extends PaperProps {
  children: ReactNode;
}

export const AuthFormShell = ({ children, sx, ...props }: AuthFormShellProps) => {
  return (
    <StyledPaper elevation={0} sx={sx} {...props}>
      {children}
    </StyledPaper>
  );
};

const AuthTopBar = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 2,
  flexShrink: 0,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pointerEvents: 'auto',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    padding: theme.spacing(3, 3, 0, 0),
  },
}));

const MobileBrand = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

/**
 * Standard NamiOS Auth Layout with responsive split brand panel
 * and elevated form shell.
 */
export const AuthLayout = ({
  children,
  logo,
  topRight,
  appName,
  tagline,
  headline,
  description,
  features,
  footer,
  brandGradient,
  centeredOnly = false,
}: AuthLayoutProps) => {
  const hasSplitBrand = !centeredOnly && Boolean(appName || headline);

  return (
    <AuthPageRoot hasSplitBrand={hasSplitBrand}>
      {hasSplitBrand ? (
        <AuthBrandPanel customGradient={brandGradient}>
          {/* Top Brand Identity */}
          <BrandPanelContent>
            <Stack direction="row" spacing={2} alignItems="center">
              <BrandMarkTile>
                <NamiosMarkSvg size={28} color="#0f172a" />
              </BrandMarkTile>
              <div>
                <Typography variant="h5" component="p" sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}>
                  {appName}
                </Typography>
                {tagline ? (
                  <Typography
                    variant="caption"
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'inherit',
                      opacity: 0.72,
                      fontWeight: 600,
                    }}
                  >
                    {tagline}
                  </Typography>
                ) : null}
              </div>
            </Stack>
          </BrandPanelContent>

          {/* Hero Content & Feature Highlights */}
          <BrandPanelContent>
            {headline ? (
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 750,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  maxWidth: (theme) => theme.spacing(60),
                }}
              >
                {headline}
              </Typography>
            ) : null}

            {description ? (
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  maxWidth: (theme) => theme.spacing(58),
                  color: 'inherit',
                  opacity: 0.76,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
            ) : null}

            {features && features.length > 0 ? (
              <FeatureList>
                {features.map((feature, idx) => {
                  const text = typeof feature === 'string' ? feature : feature.text;
                  const icon =
                    typeof feature === 'object' && feature.icon ? (
                      feature.icon
                    ) : (
                      <CheckCircleRoundedIcon sx={{ fontSize: 20, color: '#38bdf8' }} />
                    );
                  return (
                    <FeatureItem key={idx}>
                      {icon}
                      <Typography variant="body2" color="inherit" sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
                        {text}
                      </Typography>
                    </FeatureItem>
                  );
                })}
              </FeatureList>
            ) : null}
          </BrandPanelContent>

          {/* Brand Panel Footer */}
          <BrandPanelContent>
            <Typography variant="caption" sx={{ opacity: 0.6, fontSize: '0.75rem' }}>
              {footer || 'Hotel operations, thoughtfully connected.'}
            </Typography>
          </BrandPanelContent>
        </AuthBrandPanel>
      ) : null}

      {/* Form Panel */}
      <AuthFormPanel>
        <CursorGrid
          cellSize={64}
          color="#334155"
          radius={160}
          falloff="smooth"
          holdTime={350}
          fadeDuration={750}
          lineWidth={1.2}
          maxOpacity={0.45}
          fillOpacity={0.03}
          gridOpacity={0.05}
          cellRadius={6}
          clickPulse
          pulseSpeed={550}
        />

        <AuthTopBar>
          <MobileBrand>{logo}</MobileBrand>
          {topRight}
        </AuthTopBar>

        <AuthFormShell elevation={0}>
          <Stack spacing={3}>{children}</Stack>
        </AuthFormShell>
      </AuthFormPanel>
    </AuthPageRoot>
  );
}
