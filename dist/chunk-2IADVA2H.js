import { DATE_FORMATS } from './chunk-4CEAHBDL.js';
import { differenceInDays, todayIso, isoDate, addDays } from './chunk-3GW7KH25.js';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState, useCallback } from 'react';

var VARIANT_COLOR = {
  danger: "error",
  warning: "warning",
  info: "primary"
};
function ConfirmDialog({
  open,
  titleKey,
  messageKey,
  messageParams,
  variant = "info",
  confirmKey = "common:actions.confirm",
  cancelKey = "common:actions.cancel",
  onConfirm,
  onCancel
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: onCancel, maxWidth: "xs", fullWidth: true, sx: { zIndex: (theme) => theme.zIndex.modal + 200 }, children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: t(titleKey) }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(DialogContentText, { children: t(messageKey, messageParams) }) }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: onCancel, color: "inherit", children: t(cancelKey) }),
      /* @__PURE__ */ jsx(Button, { onClick: onConfirm, variant: "contained", color: VARIANT_COLOR[variant], autoFocus: true, children: t(confirmKey) })
    ] })
  ] });
}
function useMediaBreakpoint() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}
var DEFAULT_CURRENCY = "LKR";
function useLocaleFormat() {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  return useMemo(
    () => ({
      formatDate: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.DATE).format(new Date(value)),
      formatDateTime: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.DATE_TIME).format(new Date(value)),
      formatMonthYear: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.MONTH_YEAR).format(new Date(value)),
      formatCurrency: (value, currency = DEFAULT_CURRENCY) => new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: value % 1 === 0 ? 0 : 2
      }).format(value),
      formatNumber: (value, options) => new Intl.NumberFormat(locale, options).format(value)
    }),
    [locale]
  );
}
var DateRangePreset = {
  LAST_7: "last7",
  NEXT_7: "next7",
  NEXT_14: "next14",
  THIS_MONTH: "thisMonth"
};
var presetRange = (preset) => {
  const today = todayIso();
  switch (preset) {
    case DateRangePreset.LAST_7:
      return { from: addDays(today, -6), to: today };
    case DateRangePreset.NEXT_7:
      return { from: today, to: addDays(today, 6) };
    case DateRangePreset.NEXT_14:
      return { from: today, to: addDays(today, 13) };
    case DateRangePreset.THIS_MONTH: {
      const start = `${today.slice(0, 8)}01`;
      const monthEnd = new Date(
        Date.UTC(Number(today.slice(0, 4)), Number(today.slice(5, 7)), 0)
      );
      return { from: start, to: isoDate(monthEnd) };
    }
  }
};
function useDateRange(initialPreset = DateRangePreset.NEXT_14) {
  const initial = presetRange(initialPreset);
  const [from, setFrom] = useState(initial.from);
  const [to, setTo] = useState(initial.to);
  const [preset, setPreset] = useState(initialPreset);
  const setRange = useCallback((nextFrom, nextTo) => {
    setFrom(nextFrom);
    setTo(nextTo);
    setPreset(null);
  }, []);
  const applyPreset = useCallback((next) => {
    const range = presetRange(next);
    setFrom(range.from);
    setTo(range.to);
    setPreset(next);
  }, []);
  const days = useMemo(() => differenceInDays(from, to) + 1, [from, to]);
  return { from, to, setRange, preset, applyPreset, days };
}

export { ConfirmDialog, DateRangePreset, useDateRange, useLocaleFormat, useMediaBreakpoint };
//# sourceMappingURL=chunk-2IADVA2H.js.map
//# sourceMappingURL=chunk-2IADVA2H.js.map