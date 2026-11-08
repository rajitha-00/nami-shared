import type { ReactNode } from 'react';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Skeleton } from '@namios/motionui-react';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StatCardRoot = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'compactSize' && prop !== 'borderless',
})<{ compactSize?: boolean; borderless?: boolean }>(({ theme, compactSize, borderless }) => ({
  padding: compactSize ? theme.spacing(1, 1.25) : theme.spacing(1.25, 1.75),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  borderRadius: borderless ? 0 : '4px',
  boxShadow: borderless ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.03)',
  border: borderless ? 'none' : `0.5px solid ${theme.palette.mode === 'light' ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
  backgroundColor: borderless ? 'transparent' : undefined,
  transition: 'border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease',
  '&:hover': {
    boxShadow: borderless ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.05)',
    borderColor: borderless ? 'transparent' : theme.palette.mode === 'light' ? 'rgba(15, 23, 42, 0.18)' : 'rgba(255, 255, 255, 0.18)',
    backgroundColor: borderless ? (theme.palette.mode === 'light' ? 'rgba(0,0,0,0.015)' : 'rgba(255,255,255,0.02)') : undefined,
    transform: 'none',
  },
}));

export type StatCardIconColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

const IconTile = styled('div', {
  shouldForwardProp: (prop) => prop !== 'colorKey' && prop !== 'compact',
})<{ colorKey: StatCardIconColor; compact?: boolean }>(({ theme, colorKey, compact }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: compact ? 36 : 40,
  height: compact ? 36 : 40,
  minWidth: compact ? 36 : 40,
  borderRadius: '4px',
  backgroundColor: alpha(theme.palette[colorKey].main, 0.10),
  color: theme.palette[colorKey].main,
  flexShrink: 0,
}));

const DeltaRow = styled('div', {
  shouldForwardProp: (prop) => prop !== 'trend',
})<{ trend: StatCardTrend }>(({ theme, trend }) => {
  const color =
    trend === 'up'
      ? theme.palette.success.main
      : trend === 'down'
        ? theme.palette.error.main
        : theme.palette.text.secondary;
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 3,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.2,
    color,
    '& svg': {
      fontSize: '0.875rem',
    },
  };
});

export type StatCardTrend = 'up' | 'down' | 'flat';
export type StatCardSize = 'medium' | 'small' | 'mini';

export interface StatCardProps {
  labelKey: string;
  value: ReactNode;
  /** Formatted delta text, e.g. "+12.4%". */
  delta?: string;
  trend?: StatCardTrend;
  icon?: ReactNode;
  loading?: boolean;
  /**
   * 'stat' — label above value with inline icon (Super Admin dashboard).
   * 'kpi' — icon tile right-aligned, label and value compact on left (Stay OS property overview / revenue KPIs).
   */
  layout?: 'stat' | 'kpi';
  /** Small line under or beside the value ("4 floors · 3 categories", "Due before 14:00"). */
  subtitleKey?: string;
  subtitleParams?: Record<string, unknown>;
  /** Free-form badge rendered in kpi layout (delta chip). */
  badge?: ReactNode;
  /** Tint of the kpi icon tile. */
  iconColor?: StatCardIconColor;
  /** Card sizing: 'medium' (default), 'small', or 'mini'. */
  size?: StatCardSize;
  /** Backward compatibility with compactSize flag */
  compactSize?: boolean;
  /** When true, removes outer card border, shadow, and background so it can sit inside a divided container */
  borderless?: boolean;
}

const TREND_ICONS = {
  up: <TrendingUpIcon fontSize="inherit" />,
  down: <TrendingDownIcon fontSize="inherit" />,
  flat: <TrendingFlatIcon fontSize="inherit" />,
} as const;

/** Dashboard KPI card with loading skeleton, trend indicator and two layouts. */
export const StatCard = ({
  labelKey,
  value,
  delta,
  trend = 'flat',
  icon,
  loading = false,
  layout = 'stat',
  subtitleKey,
  subtitleParams,
  badge,
  iconColor = 'primary',
  size = 'small',
  compactSize,
  borderless = false,
}: StatCardProps) => {
  const { t } = useTranslation();
  const isCompact = size === 'small' || size === 'mini' || Boolean(compactSize);

  const valueNode = loading ? (
    <Skeleton variant="text" width={80} height={isCompact ? 28 : 40} />
  ) : (
    <Typography
      variant={isCompact ? 'h5' : 'h4'}
      component="div"
      sx={isCompact ? { fontWeight: 800, fontSize: '1.35rem', lineHeight: 1.15 } : { fontWeight: 800, lineHeight: 1.15 }}
    >
      {value}
    </Typography>
  );

  const deltaNode =
    delta && !loading ? (
      <DeltaRow trend={trend}>
        {TREND_ICONS[trend]}
        {delta}
      </DeltaRow>
    ) : null;

  const subtitleNode = subtitleKey ? (
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ fontSize: '0.75rem', fontWeight: 500, lineHeight: 1.2 }}
    >
      {t(subtitleKey, subtitleParams)}
    </Typography>
  ) : null;

  if (layout === 'kpi') {
    return (
      <StatCardRoot compactSize={isCompact} borderless={borderless}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5, width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1, gap: 0.25 }}>
            <Typography
              variant="caption"
              color="text.secondary"
              noWrap
              title={t(labelKey)}
              sx={{
                fontSize: isCompact ? '0.75rem' : '0.8125rem',
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: '0.01em',
              }}
            >
              {t(labelKey)}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}>
              {valueNode}
              {deltaNode && subtitleNode ? (
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
                  {deltaNode}
                  <Typography component="span" variant="caption" color="text.disabled" sx={{ fontSize: '0.65rem' }}>
                    •
                  </Typography>
                  {subtitleNode}
                </Box>
              ) : (
                deltaNode ?? subtitleNode
              )}
              {icon && badge ? badge : null}
            </Box>
          </Box>
          {icon ? (
            <IconTile colorKey={iconColor} compact={isCompact}>
              {icon}
            </IconTile>
          ) : badge ? (
            <Box sx={{ flexShrink: 0 }}>{badge}</Box>
          ) : null}
        </Box>
      </StatCardRoot>
    );
  }

  return (
    <StatCardRoot compactSize={isCompact} borderless={borderless}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, width: '100%', mb: 0.25 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          title={t(labelKey)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: isCompact ? '0.75rem' : '0.8125rem',
            fontWeight: 600,
          }}
        >
          {icon}
          {t(labelKey)}
        </Typography>
        {badge}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}>
        {valueNode}
        {deltaNode && subtitleNode ? (
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
            {deltaNode}
            <Typography component="span" variant="caption" color="text.disabled" sx={{ fontSize: '0.65rem' }}>
              •
            </Typography>
            {subtitleNode}
          </Box>
        ) : (
          deltaNode ?? subtitleNode
        )}
      </Box>
    </StatCardRoot>
  );
};
