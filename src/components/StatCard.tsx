import type { ReactNode } from 'react';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card from '@mui/material/Card';
import { Skeleton } from '@namios/motionui-react';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StatCardRoot = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'compactSize',
})<{ compactSize?: boolean }>(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(1.25, 1.5) : theme.spacing(1.5, 2),
  display: 'flex',
  flexDirection: 'column',
  gap: compactSize ? theme.spacing(0.5) : theme.spacing(0.75),
  height: '100%',
  borderRadius: '4px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
  border: `0.5px solid ${theme.palette.mode === 'light' ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
  transition: 'border-color 0.15s ease, background-color 0.15s ease',
  '&:hover': {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    borderColor: theme.palette.mode === 'light' ? 'rgba(15, 23, 42, 0.20)' : 'rgba(255, 255, 255, 0.20)',
    transform: 'none',
  },
}));

const KpiHeaderRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  width: '100%',
}));

export type StatCardIconColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

const IconTile = styled('div', {
  shouldForwardProp: (prop) => prop !== 'colorKey' && prop !== 'compact',
})<{ colorKey: StatCardIconColor; compact?: boolean }>(({ theme, colorKey, compact }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(compact ? 0.75 : 1),
  borderRadius: '2px',
  backgroundColor: alpha(theme.palette[colorKey].main, 0.10),
  color: theme.palette[colorKey].main,
  flexShrink: 0,
}));

const DeltaRow = styled('div', {
  shouldForwardProp: (prop) => prop !== 'trend',
})<{ trend: StatCardTrend }>(({ theme, trend }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  ...theme.typography.caption,
  fontWeight: 700,
  fontSize: '0.75rem',
  color:
    trend === 'up'
      ? theme.palette.success.main
      : trend === 'down'
        ? theme.palette.error.main
        : theme.palette.text.secondary,
}));

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
   * 'stat' — label above value (Super Admin dashboard).
   * 'kpi' — icon tile top-left, right-aligned uppercase label, badge slot
   * top-right (Stay OS property overview / revenue KPIs).
   */
  layout?: 'stat' | 'kpi';
  /** Small line under the value ("4 floors · 3 categories", "Due before 14:00"). */
  subtitleKey?: string;
  subtitleParams?: Record<string, unknown>;
  /** Free-form badge rendered top-right in kpi layout (delta chip). */
  badge?: ReactNode;
  /** Tint of the kpi icon tile. */
  iconColor?: StatCardIconColor;
  /** Card sizing: 'medium' (default), 'small', or 'mini'. */
  size?: StatCardSize;
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
}: StatCardProps) => {
  const { t } = useTranslation();
  const isCompact = size === 'small' || size === 'mini';

  const valueNode = loading ? (
    <Skeleton variant="text" width={80} height={isCompact ? 28 : 40} />
  ) : (
    <Typography
      variant={isCompact ? 'h5' : 'h4'}
      component="div"
      sx={isCompact ? { fontWeight: 800, fontSize: '1.35rem', lineHeight: 1.2 } : { fontWeight: 800 }}
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
    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
      {t(subtitleKey, subtitleParams)}
    </Typography>
  ) : null;

  if (layout === 'kpi') {
    return (
      <StatCardRoot compactSize={isCompact}>
        <KpiHeaderRow>
          {icon ? <IconTile colorKey={iconColor} compact={isCompact}>{icon}</IconTile> : <span />}
          {badge ?? (
            <Typography
              variant="overline"
              color="text.secondary"
              noWrap
              sx={{
                textAlign: 'right',
                lineHeight: 1.3,
                fontSize: isCompact ? '0.68rem' : '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                maxWidth: '70%',
                pr: 0.5,
              }}
            >
              {t(labelKey)}
            </Typography>
          )}
        </KpiHeaderRow>
        {badge ? (
          <Typography variant="overline" color="text.secondary" noWrap sx={{ fontSize: isCompact ? '0.68rem' : '0.75rem', fontWeight: 700, pr: 0.5 }}>
            {t(labelKey)}
          </Typography>
        ) : null}
        {valueNode}
        {deltaNode ?? subtitleNode}
      </StatCardRoot>
    );
  }

  return (
    <StatCardRoot compactSize={isCompact}>
      <Typography
        variant="body2"
        color="text.secondary"
        noWrap
        sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: isCompact ? '0.75rem' : '0.8125rem', pr: 0.5 }}
      >
        {icon}
        {t(labelKey)}
      </Typography>
      {valueNode}
      {deltaNode}
      {subtitleNode}
    </StatCardRoot>
  );
}
