import { DATE_FORMATS } from './chunk-PGMOSXPC.js';
import { differenceInDays, todayIso, isoDate, addDays } from './chunk-3GW7KH25.js';
import { forwardRef, useMemo, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { jsx, jsxs } from 'react/jsx-runtime';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Popover from '@mui/material/Popover';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

var FamilyDialogTransition = forwardRef(
  function FamilyDialogTransition2(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, style, ...other } = props;
    return /* @__PURE__ */ jsx(
      AnimatePresence,
      {
        mode: "wait",
        onExitComplete: () => {
          if (onExited) {
            onExited(null);
          }
        },
        children: inProp ? /* @__PURE__ */ jsx(
          motion.div,
          {
            ref,
            initial: {
              opacity: 0,
              scale: 0.92,
              y: 12,
              filter: "blur(8px)"
            },
            animate: {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                damping: 28,
                stiffness: 380,
                mass: 0.8,
                opacity: { duration: 0.18 }
              }
            },
            exit: {
              opacity: 0,
              scale: 0.94,
              y: 8,
              filter: "blur(6px)",
              transition: {
                duration: 0.16,
                ease: [0.32, 0.72, 0, 1]
              }
            },
            style: {
              outline: "none",
              ...style
            },
            onAnimationStart: () => {
              if (inProp) {
                onEnter?.(null, true);
              } else {
                onExit?.(null);
              }
            },
            onAnimationComplete: () => {
              if (inProp) {
                onEntered?.(null, true);
              }
            },
            ...other,
            children
          }
        ) : null
      }
    );
  }
);
function ConfirmDialog({
  open,
  titleKey,
  messageKey,
  messageParams,
  variant = "info",
  confirmKey = "common:actions.confirm",
  cancelKey = "common:actions.cancel",
  anchorEl,
  disableBackdrop = false,
  onConfirm,
  onCancel
}) {
  const { t } = useTranslation();
  const content = /* @__PURE__ */ jsxs(Box, { sx: { width: "100%", maxWidth: "380px" }, children: [
    /* @__PURE__ */ jsxs(
      DialogTitle,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2.5,
          px: 3,
          pb: 0.5,
          fontWeight: 800,
          fontSize: "1.15rem",
          letterSpacing: "-0.02em"
        },
        children: [
          t(titleKey),
          /* @__PURE__ */ jsx(
            IconButton,
            {
              "aria-label": t("common:actions.close"),
              onClick: onCancel,
              size: "small",
              edge: "end",
              sx: {
                p: 0.6,
                color: "text.secondary",
                borderRadius: "50%",
                bgcolor: (theme) => theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.06)",
                "&:hover": {
                  bgcolor: (theme) => theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.12)"
                }
              },
              children: /* @__PURE__ */ jsx(CloseIcon, { sx: { fontSize: 16 } })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(DialogContent, { sx: { px: 3, py: 1 }, children: /* @__PURE__ */ jsx(
      DialogContentText,
      {
        sx: {
          color: "text.secondary",
          fontSize: "0.9375rem",
          lineHeight: 1.5
        },
        children: t(messageKey, messageParams)
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogActions, { sx: { px: 3, pb: 2.5, pt: 1, display: "flex", justifyContent: "flex-end", gap: 1 }, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: onCancel,
          color: "inherit",
          sx: {
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            px: 2.5,
            py: 0.8,
            color: "text.secondary",
            "&:hover": {
              bgcolor: (theme) => theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.08)",
              color: "text.primary"
            }
          },
          children: t(cancelKey)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: onConfirm,
          variant: "contained",
          autoFocus: true,
          color: variant === "danger" ? "error" : variant === "warning" ? "warning" : "primary",
          sx: {
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "0.875rem",
            px: 3,
            py: 0.8,
            ...variant === "info" && {
              backgroundColor: (theme) => theme.palette.mode === "light" ? "#0F172A" : "#F8FAFC",
              color: (theme) => theme.palette.mode === "light" ? "#FFFFFF" : "#0F172A",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.mode === "light" ? "#000000" : "#E2E8F0",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)"
              }
            },
            ...variant === "danger" && {
              backgroundColor: "#DC2626",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(220, 38, 38, 0.25)",
              "&:hover": {
                backgroundColor: "#B91C1C",
                boxShadow: "0 6px 16px rgba(220, 38, 38, 0.35)"
              }
            },
            ...variant === "warning" && {
              backgroundColor: "#D97706",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(217, 119, 6, 0.25)",
              "&:hover": {
                backgroundColor: "#B45309",
                boxShadow: "0 6px 16px rgba(217, 119, 6, 0.35)"
              }
            }
          },
          children: t(confirmKey)
        }
      )
    ] })
  ] });
  const isAnchorValid = Boolean(
    anchorEl && typeof window !== "undefined" && document.body.contains(anchorEl) && anchorEl.getBoundingClientRect().width > 0 && anchorEl.getBoundingClientRect().height > 0 && (anchorEl.getBoundingClientRect().top > 0 || anchorEl.getBoundingClientRect().left > 0)
  );
  if (isAnchorValid && anchorEl) {
    return /* @__PURE__ */ jsx(
      Popover,
      {
        open,
        anchorEl,
        onClose: onCancel,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        TransitionComponent: FamilyDialogTransition,
        slotProps: {
          paper: {
            sx: {
              borderRadius: "28px",
              maxWidth: "380px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              p: 0.5,
              mt: 1,
              overflow: "hidden"
            }
          },
          root: {
            sx: {
              zIndex: (theme) => theme.zIndex.modal + 200,
              "& .MuiBackdrop-root": {
                backgroundColor: "transparent"
              }
            }
          }
        },
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Dialog,
    {
      open,
      onClose: onCancel,
      maxWidth: "xs",
      fullWidth: true,
      TransitionComponent: FamilyDialogTransition,
      PaperProps: {
        sx: {
          borderRadius: "28px",
          maxWidth: "380px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          p: 0.5
        }
      },
      sx: {
        zIndex: (theme) => theme.zIndex.modal + 200,
        "& .MuiBackdrop-root": {
          backgroundColor: disableBackdrop ? "transparent" : "rgba(0, 0, 0, 0.15)",
          backdropFilter: disableBackdrop ? "none" : "blur(2px)",
          WebkitBackdropFilter: disableBackdrop ? "none" : "blur(2px)"
        }
      },
      children: content
    }
  );
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
function useContextMenu() {
  const [contextMenu, setContextMenu] = useState({
    open: false,
    x: 0,
    y: 0,
    items: []
  });
  const openContextMenu = useCallback(
    (event, items) => {
      event.preventDefault();
      event.stopPropagation();
      setContextMenu({
        open: true,
        x: event.clientX,
        y: event.clientY,
        items
      });
    },
    []
  );
  const closeContextMenu = useCallback(() => {
    setContextMenu((prev) => prev.open ? { ...prev, open: false } : prev);
  }, []);
  return {
    contextMenu,
    openContextMenu,
    closeContextMenu
  };
}

export { ConfirmDialog, DateRangePreset, FamilyDialogTransition, useContextMenu, useDateRange, useLocaleFormat, useMediaBreakpoint };
//# sourceMappingURL=chunk-2AA7TM6P.js.map
//# sourceMappingURL=chunk-2AA7TM6P.js.map