import { useState } from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { DateRangePreset, type UseDateRangeReturn } from '../hooks/useDateRange';

export interface DateRangeButtonProps {
  range: UseDateRangeReturn;
}

/** The "Jun 19 – Jul 3, 2026" pill; opens a popover with presets + custom dates. */
export function DateRangeButton({ range }: DateRangeButtonProps) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [draftFrom, setDraftFrom] = useState(range.from);
  const [draftTo, setDraftTo] = useState(range.to);

  const format = new Intl.DateTimeFormat(i18n.language, { month: 'short', day: 'numeric' });
  const formatWithYear = new Intl.DateTimeFormat(i18n.language, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const label = `${format.format(new Date(`${range.from}T00:00:00Z`))} – ${formatWithYear.format(
    new Date(`${range.to}T00:00:00Z`),
  )}`;

  const openPopover = (element: HTMLElement) => {
    setDraftFrom(range.from);
    setDraftTo(range.to);
    setAnchorEl(element);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<CalendarMonthOutlinedIcon />}
        onClick={(e) => {
          openPopover(e.currentTarget);
        }}
        sx={{ borderRadius: 999, whiteSpace: 'nowrap' }}
        aria-label={t('common:dateRange.label')}
      >
        {label}
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Stack spacing={2} sx={{ p: 2, width: 300 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {Object.values(DateRangePreset).map((preset) => (
              <Chip
                key={preset}
                label={t(`common:dateRange.presets.${preset}`)}
                size="small"
                color={range.preset === preset ? 'primary' : undefined}
                variant={range.preset === preset ? 'filled' : 'outlined'}
                onClick={() => {
                  range.applyPreset(preset);
                  setAnchorEl(null);
                }}
              />
            ))}
          </Stack>
          <TextField
            type="date"
            label={t('common:dateRange.from')}
            value={draftFrom}
            onChange={(e) => {
              setDraftFrom(e.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="date"
            label={t('common:dateRange.to')}
            value={draftTo}
            onChange={(e) => {
              setDraftTo(e.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <Button
            variant="contained"
            disabled={!draftFrom || !draftTo || draftTo < draftFrom}
            onClick={() => {
              range.setRange(draftFrom, draftTo);
              setAnchorEl(null);
            }}
          >
            {t('common:dateRange.apply')}
          </Button>
        </Stack>
      </Popover>
    </>
  );
}
