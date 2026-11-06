import { useEffect, useRef, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { addDays, dateRangeDays, differenceInDays, todayIso } from '../utils/date';

export type TimelineColorKey = 'success' | 'info' | 'warning' | 'error' | 'neutral' | 'primary';
export type TimelineDensity = 'comfortable' | 'compact';

export interface TimelineDimensions {
  resourceColWidth: number;
  dayColWidth: number;
  rowHeight: number;
  spanInset: number;
}

export const TIMELINE_DIMENSIONS: Record<TimelineDensity, TimelineDimensions> = {
  comfortable: {
    resourceColWidth: 148,
    dayColWidth: 76,
    rowHeight: 52,
    spanInset: 8,
  },
  compact: {
    resourceColWidth: 128,
    dayColWidth: 48,
    rowHeight: 38,
    spanInset: 4,
  },
};

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
  code?: string;
  status?: string;
  totalAmount?: number | null;
  tooltip?: ReactNode;
}

const MatrixRoot = styled('div', {
  shouldForwardProp: (p) => p !== 'disableBorder',
})<{ disableBorder?: boolean }>(({ theme, disableBorder }) => ({
  overflowX: 'auto',
  border: disableBorder ? 'none' : `1px solid ${theme.palette.divider}`,
  borderRadius: disableBorder ? 0 : theme.shape.borderRadius,
}));

const HeaderRow = styled('div')(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: 'sticky',
  top: 0,
  zIndex: 3,
}));

const ResourceCell = styled('div', {
  shouldForwardProp: (p) => p !== 'density',
})<{ density?: TimelineDensity }>(({ theme, density }) => {
  const isCompact = density === 'compact';
  return {
    padding: isCompact ? theme.spacing(0.5, 1) : theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    left: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    boxSizing: 'border-box',
  };
});

const DayHeaderCell = styled('div', {
  shouldForwardProp: (p) => p !== 'density',
})<{ density?: TimelineDensity }>(({ theme, density }) => {
  const isCompact = density === 'compact';
  return {
    padding: isCompact ? theme.spacing(0.5, 0) : theme.spacing(1, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isCompact ? 1 : 2,
    boxSizing: 'border-box',
  };
});

const TodayBubble = styled('span', {
  shouldForwardProp: (p) => p !== 'density',
})<{ density?: TimelineDensity }>(({ theme, density }) => {
  const isCompact = density === 'compact';
  const size = isCompact ? 22 : 26;
  return {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: isCompact ? '0.72rem' : theme.typography.body2.fontSize,
  };
});

const BodyRow = styled('div')(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-of-type': { borderBottom: 'none' },
  backgroundColor: theme.palette.background.paper,
}));

const RowTrack = styled('div')({
  position: 'relative',
  display: 'flex',
});

const DayCell = styled('button')(({ theme }) => ({
  height: '100%',
  border: 'none',
  borderLeft: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: 0,
  boxSizing: 'border-box',
  transition: 'background-color 0.15s ease',
  '&:hover': { backgroundColor: theme.palette.action.hover },
  '&:disabled': { cursor: 'default' },
}));

const SpanBar = styled('button', {
  shouldForwardProp: (p) => p !== 'density',
})<{ density?: TimelineDensity }>(({ theme, density }) => {
  const isCompact = density === 'compact';
  return {
    position: 'absolute',
    borderRadius: isCompact ? 4 : theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: isCompact ? theme.spacing(0.75) : theme.spacing(1.5),
    paddingRight: isCompact ? theme.spacing(0.5) : theme.spacing(1),
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: isCompact ? '0.75rem' : theme.typography.body2.fontSize,
    fontWeight: 600,
    lineHeight: 1.2,
    textAlign: 'left',
    zIndex: 1,
    boxSizing: 'border-box',
    transition: 'transform 0.1s ease, box-shadow 0.15s ease',
    '&:hover': {
      zIndex: 5,
      transform: 'translateY(-1px)',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.14)',
    },
  };
});

export interface TimelineMatrixProps<TResource extends TimelineResource, TSpanData = unknown> {
  resources: TResource[];
  spans: TimelineSpan<TSpanData>[];
  /** First visible day (YYYY-MM-DD). */
  startDate: string;
  /** Number of day columns. */
  days: number;
  /** Renders the left resource column cell. */
  renderResource: (resource: TResource, density?: TimelineDensity) => ReactNode;
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
  /** Date positioned as the first visible day column when the matrix opens. */
  initialScrollDate?: string;
  /** Layout density: 'comfortable' (default) or 'compact' (dense rows and columns). */
  density?: TimelineDensity;
  /** Custom dimension overrides. */
  customDimensions?: Partial<TimelineDimensions>;
  /** Optional custom tooltip builder for spans. */
  renderSpanTooltip?: (span: TimelineSpan<TSpanData>) => ReactNode;
  /** Optional custom tooltip builder for empty cells. */
  renderCellTooltip?: (resourceId: string, date: string) => ReactNode;
  /** Disable border and border-radius (e.g. when nested inside a styled Paper). */
  disableBorder?: boolean;
}

/**
 * Generic resource-timeline grid (e.g. the Room Allocation Matrix): sticky
 * resource column, N-day header with today highlight, positioned span bars.
 * Supports compact mode and rich tooltips. Purely presentational.
 */
export const TimelineMatrix = <TResource extends TimelineResource, TSpanData = unknown>({
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
  initialScrollDate,
  density = 'compact',
  customDimensions,
  renderSpanTooltip,
  renderCellTooltip,
  disableBorder = false,
}: TimelineMatrixProps<TResource, TSpanData>) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);

  const dimensions: TimelineDimensions = {
    ...TIMELINE_DIMENSIONS[density],
    ...customDimensions,
  };
  const { resourceColWidth, dayColWidth, rowHeight, spanInset } = dimensions;

  useEffect(() => {
    if (!initialScrollDate || !scrollContainerRef.current) return;

    const dayIndex = differenceInDays(startDate, initialScrollDate);
    if (dayIndex < 0 || dayIndex >= days) return;

    scrollContainerRef.current.scrollLeft = dayIndex * dayColWidth;
  }, [days, initialScrollDate, startDate, dayColWidth]);

  const spanColor = (key: TimelineColorKey) => {
    const paletteColor =
      key === 'neutral' ? theme.palette.neutral : theme.palette[key];
    return {
      backgroundColor: alpha(paletteColor.main, theme.palette.mode === 'light' ? 0.12 : 0.24),
      border: `1px solid ${alpha(paletteColor.main, 0.55)}`,
      color: theme.palette.mode === 'light' ? paletteColor.dark : paletteColor.light,
    };
  };

  const monthFormat = new Intl.DateTimeFormat(i18n.language, { month: 'short' });
  const dayFormat = new Intl.DateTimeFormat(i18n.language, { day: 'numeric' });

  if (loading) {
    return (
      <div>
        <Skeleton variant="rounded" height={rowHeight * 6} />
      </div>
    );
  }

  const tooltipSx = {
    bgcolor: 'background.paper',
    color: 'text.primary',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.16)',
    border: '1px solid',
    borderColor: 'divider',
    p: 0,
    borderRadius: 2,
    maxWidth: 320,
  };

  return (
    <div>
      {legend ? (
        <Typography component="div" variant="body2" sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          {legend}
        </Typography>
      ) : null}
      <MatrixRoot ref={scrollContainerRef} disableBorder={disableBorder} data-testid="timeline-matrix-scroll-container">
        <div style={{ width: resourceColWidth + days * dayColWidth }}>
          <HeaderRow>
            <ResourceCell density={density} style={{ width: resourceColWidth, minWidth: resourceColWidth }}>
              <Typography
                variant={density === 'compact' ? 'caption' : 'overline'}
                color="text.secondary"
                fontWeight={700}
                sx={{ letterSpacing: density === 'compact' ? '0.5px' : undefined }}
              >
                {t(resourceLabelKey)}
              </Typography>
            </ResourceCell>
            {dayList.map((date) => {
              const isToday = date === todayDate;
              const dateObj = new Date(`${date}T00:00:00Z`);
              return (
                <DayHeaderCell
                  key={date}
                  density={density}
                  aria-current={isToday ? 'date' : undefined}
                  style={{ width: dayColWidth, minWidth: dayColWidth }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: density === 'compact' ? '0.65rem' : undefined,
                      lineHeight: 1.1,
                      fontWeight: 600,
                    }}
                  >
                    {monthFormat.format(dateObj)}
                  </Typography>
                  {isToday ? (
                    <TodayBubble density={density} aria-label={t('common:timeline.today')}>
                      {dayFormat.format(dateObj)}
                    </TodayBubble>
                  ) : (
                    <Typography
                      variant={density === 'compact' ? 'caption' : 'body2'}
                      sx={{
                        fontSize: density === 'compact' ? '0.75rem' : undefined,
                        fontWeight: 600,
                      }}
                    >
                      {dayFormat.format(dateObj)}
                    </Typography>
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
                <ResourceCell density={density} style={{ width: resourceColWidth, minWidth: resourceColWidth }}>
                  {renderResource(resource, density)}
                </ResourceCell>
                <RowTrack style={{ width: days * dayColWidth, height: rowHeight }}>
                  {dayList.map((date) => {
                    const cellTooltip = renderCellTooltip?.(resource.id, date);
                    const cellButton = (
                      <DayCell
                        key={date}
                        type="button"
                        aria-label={`${resource.id} ${date}`}
                        disabled={!onCellClick}
                        onClick={() => onCellClick?.(resource.id, date)}
                        style={{ width: dayColWidth, minWidth: dayColWidth }}
                      />
                    );
                    if (!cellTooltip) return cellButton;
                    return (
                      <Tooltip
                        key={date}
                        title={cellTooltip}
                        arrow
                        placement="top"
                        enterDelay={350}
                        leaveDelay={50}
                        componentsProps={{
                          tooltip: { sx: tooltipSx },
                          arrow: { sx: { color: 'background.paper', '&::before': { border: '1px solid', borderColor: 'divider' } } },
                        }}
                      >
                        {cellButton}
                      </Tooltip>
                    );
                  })}
                  {rowSpans.map((span) => {
                    const clampedStart =
                      span.startDate < startDate ? startDate : span.startDate;
                    const clampedEnd = span.endDate > endDate ? endDate : span.endDate;
                    const offset = differenceInDays(startDate, clampedStart);
                    const length = Math.max(1, differenceInDays(clampedStart, clampedEnd));

                    const defaultTooltip = (
                      <Box sx={{ p: 1, minWidth: 140 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.8125rem' }} noWrap>
                          {span.labelKey ? t(span.labelKey) : span.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.25 }}>
                          {span.startDate} → {span.endDate}
                        </Typography>
                      </Box>
                    );

                    const tooltipContent = renderSpanTooltip
                      ? renderSpanTooltip(span)
                      : span.tooltip ?? defaultTooltip;

                    const spanButton = (
                      <SpanBar
                        key={span.id}
                        type="button"
                        density={density}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSpanClick?.(span);
                        }}
                        style={{
                          left: offset * dayColWidth + 2,
                          width: length * dayColWidth - 4,
                          height: rowHeight - spanInset * 2,
                          top: spanInset,
                          ...spanColor(span.colorKey),
                        }}
                      >
                        {span.labelKey ? t(span.labelKey) : span.label}
                      </SpanBar>
                    );

                    return (
                      <Tooltip
                        key={span.id}
                        title={tooltipContent}
                        arrow
                        placement="top"
                        enterDelay={150}
                        leaveDelay={50}
                        componentsProps={{
                          tooltip: { sx: tooltipSx },
                          arrow: { sx: { color: 'background.paper', '&::before': { border: '1px solid', borderColor: 'divider' } } },
                        }}
                      >
                        {spanButton}
                      </Tooltip>
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
};

