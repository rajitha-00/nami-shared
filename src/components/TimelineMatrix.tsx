import type { ReactNode } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { addDays, dateRangeDays, differenceInDays, todayIso } from '../utils/date';

export type TimelineColorKey = 'success' | 'info' | 'warning' | 'error' | 'neutral' | 'primary';

export interface TimelineResource {
  id: string;
}

export interface TimelineSpan<TData = unknown> {
  id: string;
  resourceId: string;
  /** Inclusive start date (YYYY-MM-DD). */
  startDate: string;
  /** Exclusive end date (YYYY-MM-DD) — a hotel checkout day. */
  endDate: string;
  label?: string;
  labelKey?: string;
  colorKey: TimelineColorKey;
  data?: TData;
}

const RESOURCE_COL_WIDTH = 148;
const DAY_COL_WIDTH = 76;
const ROW_HEIGHT = 52;
const SPAN_INSET = 8;

const MatrixRoot = styled('div')(({ theme }) => ({
  overflowX: 'auto',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const HeaderRow = styled('div')(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: 'sticky',
  top: 0,
  zIndex: 3,
}));

const ResourceCell = styled('div')(({ theme }) => ({
  width: RESOURCE_COL_WIDTH,
  minWidth: RESOURCE_COL_WIDTH,
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  left: 0,
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const DayHeaderCell = styled('div')(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  padding: theme.spacing(1, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
}));

const TodayBubble = styled('span')(({ theme }) => ({
  width: 26,
  height: 26,
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: theme.typography.body2.fontSize,
}));

const BodyRow = styled('div')(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-of-type': { borderBottom: 'none' },
  backgroundColor: theme.palette.background.paper,
}));

const RowTrack = styled('div')({
  position: 'relative',
  height: ROW_HEIGHT,
  display: 'flex',
});

const DayCell = styled('button')(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  height: '100%',
  border: 'none',
  borderLeft: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: 0,
  '&:hover': { backgroundColor: theme.palette.action.hover },
  '&:disabled': { cursor: 'default' },
}));

const SpanBar = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: SPAN_INSET,
  height: ROW_HEIGHT - SPAN_INSET * 2,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1),
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  textAlign: 'left',
  zIndex: 1,
}));

export interface TimelineMatrixProps<TResource extends TimelineResource, TSpanData = unknown> {
  resources: TResource[];
  spans: TimelineSpan<TSpanData>[];
  /** First visible day (YYYY-MM-DD). */
  startDate: string;
  /** Number of day columns. */
  days: number;
  /** Renders the left resource column cell. */
  renderResource: (resource: TResource) => ReactNode;
  /** i18n key for the resource column header. */
  resourceLabelKey: string;
  onSpanClick?: (span: TimelineSpan<TSpanData>) => void;
  /** Clicking an empty cell (resourceId + YYYY-MM-DD). */
  onCellClick?: (resourceId: string, date: string) => void;
  /** Legend rendered above the grid, right-aligned. */
  legend?: ReactNode;
  loading?: boolean;
  /** Highlighted "today"; defaults to the current date. */
  today?: string;
}

/**
 * Generic resource-timeline grid (e.g. the Room Allocation Matrix): sticky
 * resource column, N-day header with today highlight, positioned span bars.
 * Purely presentational — no domain logic inside.
 */
export function TimelineMatrix<TResource extends TimelineResource, TSpanData = unknown>({
  resources,
  spans,
  startDate,
  days,
  renderResource,
  resourceLabelKey,
  onSpanClick,
  onCellClick,
  legend,
  loading = false,
  today,
}: TimelineMatrixProps<TResource, TSpanData>) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);

  const spanColor = (key: TimelineColorKey) => {
    const paletteColor =
      key === 'neutral' ? theme.palette.neutral : theme.palette[key];
    return {
      backgroundColor: alpha(paletteColor.main, theme.palette.mode === 'light' ? 0.09 : 0.22),
      border: `1px solid ${alpha(paletteColor.main, 0.55)}`,
      color: theme.palette.mode === 'light' ? paletteColor.dark : paletteColor.light,
    };
  };

  const monthFormat = new Intl.DateTimeFormat(i18n.language, { month: 'short' });
  const dayFormat = new Intl.DateTimeFormat(i18n.language, { day: 'numeric' });

  if (loading) {
    return (
      <div>
        <Skeleton variant="rounded" height={ROW_HEIGHT * 6} />
      </div>
    );
  }

  return (
    <div>
      {legend ? (
        <Typography component="div" variant="body2" sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          {legend}
        </Typography>
      ) : null}
      <MatrixRoot>
        <div style={{ width: RESOURCE_COL_WIDTH + days * DAY_COL_WIDTH }}>
          <HeaderRow>
            <ResourceCell>
              <Typography variant="overline" color="text.secondary">
                {t(resourceLabelKey)}
              </Typography>
            </ResourceCell>
            {dayList.map((date) => {
              const isToday = date === todayDate;
              const dateObj = new Date(`${date}T00:00:00Z`);
              return (
                <DayHeaderCell key={date} aria-current={isToday ? 'date' : undefined}>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                    {monthFormat.format(dateObj)}
                  </Typography>
                  {isToday ? (
                    <TodayBubble aria-label={t('common:timeline.today')}>
                      {dayFormat.format(dateObj)}
                    </TodayBubble>
                  ) : (
                    <Typography variant="body2">{dayFormat.format(dateObj)}</Typography>
                  )}
                </DayHeaderCell>
              );
            })}
          </HeaderRow>
          {resources.map((resource) => {
            const rowSpans = spans.filter(
              (span) =>
                span.resourceId === resource.id &&
                span.startDate < endDate &&
                span.endDate > startDate,
            );
            return (
              <BodyRow key={resource.id}>
                <ResourceCell>{renderResource(resource)}</ResourceCell>
                <RowTrack style={{ width: days * DAY_COL_WIDTH }}>
                  {dayList.map((date) => (
                    <DayCell
                      key={date}
                      type="button"
                      aria-label={`${resource.id} ${date}`}
                      disabled={!onCellClick}
                      onClick={() => onCellClick?.(resource.id, date)}
                    />
                  ))}
                  {rowSpans.map((span) => {
                    const clampedStart =
                      span.startDate < startDate ? startDate : span.startDate;
                    const clampedEnd = span.endDate > endDate ? endDate : span.endDate;
                    const offset = differenceInDays(startDate, clampedStart);
                    const length = Math.max(1, differenceInDays(clampedStart, clampedEnd));
                    return (
                      <SpanBar
                        key={span.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSpanClick?.(span);
                        }}
                        style={{
                          left: offset * DAY_COL_WIDTH + 2,
                          width: length * DAY_COL_WIDTH - 4,
                          ...spanColor(span.colorKey),
                        }}
                      >
                        {span.labelKey ? t(span.labelKey) : span.label}
                      </SpanBar>
                    );
                  })}
                </RowTrack>
              </BodyRow>
            );
          })}
        </div>
      </MatrixRoot>
    </div>
  );
}
