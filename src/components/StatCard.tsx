import type { ReactNode } from 'react';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StatCardRoot = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  height: '100%',
}));

const KpiHeaderRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}));

export type StatCardIconColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

const IconTile = styled('div', {
  shouldForwardProp: (prop) => prop !== 'colorKey',
})<{ colorKey: StatCardIconColor }>(({ theme, colorKey }) => ({
  display: 'inline-flex',
  padding: theme.spacing(1.25),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette[colorKey].main, 0.12),
  color: theme.palette[colorKey].main,
}));

const DeltaRow = styled('div', {
  shouldForwardProp: (prop) => prop !== 'trend',
})<{ trend: StatCardTrend }>(({ theme, trend }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  ...theme.typography.caption,
  fontWeight: 600,
  color:
    trend === 'up'
      ? theme.palette.success.main
      : trend === 'down'
        ? theme.palette.error.main
        : theme.palette.text.secondary,
}));

export type StatCardTrend = 'up' | 'down' | 'flat';

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
}

const TREND_ICONS = {
  up: <TrendingUpIcon fontSize="inherit" />,
  down: <TrendingDownIcon fontSize="inherit" />,
  flat: <TrendingFlatIcon fontSize="inherit" />,
} as const;

/** Dashboard KPI card with loading skeleton, trend indicator and two layouts. */
export function StatCard({
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
}: StatCardProps) {
  const { t } = useTranslation();

  const valueNode = loading ? (
    <Skeleton variant="text" width={120} height={40} />
  ) : (
    <Typography variant="h3" component="div">
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
    <Typography variant="caption" color="text.secondary">
      {t(subtitleKey, subtitleParams)}
    </Typography>
  ) : null;

  if (layout === 'kpi') {
    return (
      <StatCardRoot>
        <KpiHeaderRow>
          {icon ? <IconTile colorKey={iconColor}>{icon}</IconTile> : <span />}
          {badge ?? (
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ textAlign: 'right', lineHeight: 1.4 }}
            >
              {t(labelKey)}
            </Typography>
          )}
        </KpiHeaderRow>
        {badge ? (
          <Typography variant="overline" color="text.secondary">
            {t(labelKey)}
          </Typography>
        ) : null}
        {valueNode}
        {deltaNode ?? subtitleNode}
      </StatCardRoot>
    );
  }

  return (
    <StatCardRoot>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
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
