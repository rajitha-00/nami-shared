import { DateRangePreset, useMediaBreakpoint, useLocaleFormat } from './chunk-2IADVA2H.js';
import { STATUS_COLORS } from './chunk-PIXANAT2.js';
import { PAGE_SIZE_OPTIONS } from './chunk-4CEAHBDL.js';
import { SUPPORTED_LOCALES } from './chunk-TSLK7DRZ.js';
import { dateRangeDays, todayIso, addDays, differenceInDays } from './chunk-3GW7KH25.js';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import { styled, alpha, useTheme, keyframes } from '@mui/material/styles';
import Box5 from '@mui/material/Box';
import Typography4 from '@mui/material/Typography';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect, Fragment as Fragment$1 } from 'react';
import Button4 from '@mui/material/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField4 from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import CheckIcon from '@mui/icons-material/Check';
import TranslateIcon from '@mui/icons-material/Translate';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack3 from '@mui/material/Stack';
import Drawer2 from '@mui/material/Drawer';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Popover from '@mui/material/Popover';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';

function NamiosMarkSvg({ size = 28, color }) {
  return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "65.4 0 357 357", role: "img", "aria-label": "Namios Logo", children: /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M243.9 0C342.483 0 422.4 79.9172 422.4 178.5C422.4 277.083 342.483 357 243.9 357C145.317 357 65.4 277.083 65.4 178.5C65.4 79.9172 145.317 0 243.9 0ZM310.959 123.084C282.621 110.737 261.859 111.102 245.603 117.036C224.886 124.599 209.317 141.851 193.82 160.904C186.307 170.141 178.662 179.965 170.831 188.264C162.968 196.595 154.239 204.152 144.056 208.622C133.572 213.224 122.004 214.351 109.132 210.549C101.316 208.24 93.1868 204.165 84.6002 198.203C94.3132 277.55 161.929 339 243.9 339C323.826 339 390.103 280.577 402.365 204.107C383.535 221.966 364.908 230.599 347.532 231.866C324.416 233.552 305.636 222.043 294.281 206.255C283.077 190.676 278.393 169.948 284.417 151.887C288.56 139.462 297.435 129.246 310.959 123.084ZM243.9 18C156.6 18 85.5799 87.6993 83.4498 174.486C95.7717 185.135 105.871 190.816 114.232 193.286C122.972 195.868 130.174 195.059 136.822 192.141C143.772 189.09 150.539 183.54 157.741 175.909C164.974 168.245 171.961 159.252 179.855 149.547C195.17 130.717 213.508 109.591 239.431 100.128C266.056 90.4092 298.584 93.6021 340.923 118.22C344.325 120.197 346.047 124.155 345.176 127.992C344.305 131.829 341.043 134.655 337.122 134.971C315.166 136.736 305.095 146.78 301.493 157.582C297.626 169.176 300.411 183.949 308.894 195.745C317.227 207.331 330.354 215.072 346.222 213.914C361.815 212.776 382.028 18 243.9 18Z",
      fill: color || "currentColor"
    }
  ) });
}
var beforeKeyframes = (lat, thickness) => keyframes`
  0% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  35% { width: ${lat * 2}px; boxShadow: 0 ${-thickness}px 0 0, 0 ${thickness}px 0 0; }
  70% { width: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  100% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
`;
var afterKeyframes = (lat, thickness) => keyframes`
  0% { height: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  35% { height: ${lat * 2}px; boxShadow: ${-thickness}px 0 0 0, ${thickness}px 0 0 0; }
  70% { height: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  100% { height: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
`;
function NamiosLoader({
  size = 50,
  color,
  label,
  showLogo = true
}) {
  const theme = useTheme();
  const loaderColor = color || (theme.palette.mode === "light" ? "#2563EB" : "#60A5FA");
  const thickness = Math.max(4, Math.round(size / 5));
  const lat = Math.round((size - thickness) / 2);
  return /* @__PURE__ */ jsxs(
    Box5,
    {
      sx: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2
      },
      children: [
        showLogo && /* @__PURE__ */ jsxs(
          Box5,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: loaderColor
            },
            children: [
              /* @__PURE__ */ jsx(NamiosMarkSvg, { size: 26, color: loaderColor }),
              /* @__PURE__ */ jsx(
                Typography4,
                {
                  variant: "subtitle2",
                  sx: {
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    color: "text.primary"
                  },
                  children: "Namios"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Box5,
          {
            sx: {
              position: "relative",
              width: size,
              height: size,
              transform: "rotate(165deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                display: "block",
                borderRadius: `${thickness / 2}px`,
                backgroundColor: loaderColor,
                transform: "translate(-50%, -50%)"
              },
              "&::before": {
                height: `${thickness}px`,
                animation: `${beforeKeyframes(lat, thickness)} 2s infinite ease`
              },
              "&::after": {
                width: `${thickness}px`,
                animation: `${afterKeyframes(lat, thickness)} 2s infinite ease`
              }
            }
          }
        ),
        label && /* @__PURE__ */ jsx(
          Typography4,
          {
            variant: "caption",
            color: "text.secondary",
            sx: {
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontSize: "0.72rem",
              mt: 0.5
            },
            children: label
          }
        )
      ]
    }
  );
}
var OverlayRoot = styled("div")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(19, 23, 34, 0.85)",
  backdropFilter: "blur(4px)",
  zIndex: theme.zIndex.modal
}));
function LoadingOverlay({ open, label, size = 48 }) {
  if (!open) return null;
  return /* @__PURE__ */ jsx(OverlayRoot, { children: /* @__PURE__ */ jsx(NamiosLoader, { size, label }) });
}
function AppDialog({
  open,
  titleKey,
  titleParams,
  size = "sm",
  actions,
  loading = false,
  disableClose = false,
  onClose,
  children
}) {
  const { t } = useTranslation();
  const handleClose = (_event, reason) => {
    if (disableClose && (reason === "backdropClick" || reason === "escapeKeyDown")) return;
    onClose();
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: handleClose, fullWidth: true, maxWidth: size, children: [
    /* @__PURE__ */ jsxs(DialogTitle, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      t(titleKey, titleParams),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          "aria-label": t("common:actions.close"),
          onClick: onClose,
          edge: "end",
          size: "small",
          children: /* @__PURE__ */ jsx(CloseIcon, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(DialogContent, { sx: { position: "relative" }, children: [
      children,
      /* @__PURE__ */ jsx(LoadingOverlay, { open: loading })
    ] }),
    actions ? /* @__PURE__ */ jsx(DialogActions, { children: actions }) : null
  ] });
}
function FormDialog({
  open,
  titleKey,
  titleParams,
  size = "sm",
  schema,
  defaultValues,
  onSubmit,
  onClose,
  submitting = false,
  submitKey = "common:actions.save",
  cancelKey = "common:actions.cancel",
  children
}) {
  const { t } = useTranslation();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur"
  });
  const { reset } = form;
  useEffect(() => {
    if (open) reset(defaultValues);
  }, [open, defaultValues, reset]);
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
  });
  return /* @__PURE__ */ jsx(
    AppDialog,
    {
      open,
      titleKey,
      titleParams,
      size,
      loading: submitting,
      disableClose: form.formState.isDirty,
      onClose,
      actions: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Button4, { onClick: onClose, color: "inherit", disabled: submitting, children: t(cancelKey) }),
        /* @__PURE__ */ jsx(
          Button4,
          {
            onClick: () => {
              void handleSubmit();
            },
            variant: "contained",
            disabled: submitting,
            children: t(submitKey)
          }
        )
      ] }),
      children: /* @__PURE__ */ jsx(
        "form",
        {
          onSubmit: (event) => {
            event.preventDefault();
            void handleSubmit(event);
          },
          noValidate: true,
          children: children(form)
        }
      )
    }
  );
}
var EmptyStateRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
var EmptyStateIcon = styled("div")(({ theme }) => ({
  display: "inline-flex",
  padding: theme.spacing(2),
  borderRadius: "50%",
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
  "& > svg": { fontSize: 40 }
}));
function EmptyState({
  icon,
  titleKey,
  descriptionKey,
  descriptionParams,
  action
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(EmptyStateRoot, { children: [
    /* @__PURE__ */ jsx(EmptyStateIcon, { children: icon ?? /* @__PURE__ */ jsx(InboxOutlinedIcon, {}) }),
    /* @__PURE__ */ jsx(Typography4, { variant: "h6", color: "text.primary", children: t(titleKey) }),
    descriptionKey ? /* @__PURE__ */ jsx(Typography4, { variant: "body2", children: t(descriptionKey, descriptionParams) }) : null,
    action
  ] });
}
var ErrorStateRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: "center"
}));
function ErrorState({
  titleKey = "common:states.errorTitle",
  messageKey = "common:states.errorGeneric",
  onRetry
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(ErrorStateRoot, { role: "alert", children: [
    /* @__PURE__ */ jsx(ErrorOutlineIcon, { color: "error", sx: { fontSize: 40 } }),
    /* @__PURE__ */ jsx(Typography4, { variant: "h6", children: t(titleKey) }),
    /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.secondary", children: t(messageKey) }),
    onRetry ? /* @__PURE__ */ jsx(Button4, { onClick: onRetry, startIcon: /* @__PURE__ */ jsx(RefreshIcon, {}), variant: "outlined", children: t("common:actions.retry") }) : null
  ] });
}
function PageSkeleton({ label }) {
  return /* @__PURE__ */ jsx(
    Box5,
    {
      sx: {
        display: "flex",
        minHeight: "65vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsx(NamiosLoader, { size: 54, label })
    }
  );
}
function StatusChip({ status, size = "small" }) {
  const { t } = useTranslation();
  const color = STATUS_COLORS[status];
  return /* @__PURE__ */ jsx(
    Chip,
    {
      label: t(`common:status.${status}`),
      size,
      color: color === "default" ? void 0 : color,
      variant: color === "default" ? "outlined" : "filled",
      sx: color === "default" ? void 0 : { color: "#fff" }
    }
  );
}
var TableToolbar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`
}));
var ClickableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "clickable"
})(({ theme, clickable }) => ({
  ...clickable && {
    cursor: "pointer",
    "&:hover": { backgroundColor: theme.palette.action.hover }
  }
}));
function DataTable({
  columns,
  data,
  isLoading = false,
  isError = false,
  onRetry,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  sortBy,
  sortDir = "asc",
  onSortChange,
  selectable = false,
  selected = [],
  onSelectedChange,
  rowActions,
  onRowClick,
  toolbar,
  emptyState,
  compact = false
}) {
  const { t } = useTranslation();
  const rows = data?.items ?? [];
  const colSpan = columns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0);
  const allSelected = rows.length > 0 && rows.every((row) => selected.includes(row.id));
  const someSelected = rows.some((row) => selected.includes(row.id));
  const toggleAll = () => {
    if (!onSelectedChange) return;
    onSelectedChange(allSelected ? [] : rows.map((row) => row.id));
  };
  const toggleOne = (id) => {
    if (!onSelectedChange) return;
    onSelectedChange(
      selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]
    );
  };
  const renderCell = (row, column) => {
    if (column.render) return column.render(row);
    const value = row[column.key];
    return value === null || value === void 0 ? "" : String(value);
  };
  return /* @__PURE__ */ jsxs(Paper, { variant: "outlined", sx: { borderRadius: 3, overflow: "hidden" }, children: [
    toolbar ? /* @__PURE__ */ jsx(TableToolbar, { children: toolbar }) : null,
    /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { size: "small", "aria-busy": isLoading, children: [
      /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        selectable ? /* @__PURE__ */ jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsx(
          Checkbox,
          {
            checked: allSelected,
            indeterminate: !allSelected && someSelected,
            onChange: toggleAll,
            inputProps: { "aria-label": t("common:table.selectAll") }
          }
        ) }) : null,
        columns.map((column) => /* @__PURE__ */ jsx(
          TableCell,
          {
            align: column.align ?? "left",
            sx: { width: column.width },
            sortDirection: sortBy === column.key ? sortDir : false,
            children: column.sortable && onSortChange ? /* @__PURE__ */ jsx(
              TableSortLabel,
              {
                active: sortBy === column.key,
                direction: sortBy === column.key ? sortDir : "asc",
                onClick: () => {
                  onSortChange(String(column.key));
                },
                children: t(column.labelKey)
              }
            ) : t(column.labelKey)
          },
          String(column.key)
        )),
        rowActions ? /* @__PURE__ */ jsx(TableCell, { align: "right", children: t("common:table.actions") }) : null
      ] }) }),
      /* @__PURE__ */ jsxs(TableBody, { children: [
        isLoading ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan, children: /* @__PURE__ */ jsx(Skeleton, { variant: "text", height: 28 }) }) }, i)) : null,
        !isLoading && isError ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan, sx: { border: 0 }, children: /* @__PURE__ */ jsx(ErrorState, { onRetry }) }) }) : null,
        !isLoading && !isError && rows.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan, sx: { border: 0 }, children: emptyState ?? /* @__PURE__ */ jsx(EmptyState, { titleKey: "common:states.noResults" }) }) }) : null,
        !isLoading && !isError ? rows.map((row) => /* @__PURE__ */ jsxs(
          ClickableRow,
          {
            clickable: Boolean(onRowClick),
            hover: Boolean(onRowClick),
            selected: selected.includes(row.id),
            onClick: onRowClick ? () => {
              onRowClick(row);
            } : void 0,
            children: [
              selectable ? /* @__PURE__ */ jsx(TableCell, { padding: "checkbox", onClick: (e) => {
                e.stopPropagation();
              }, children: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  checked: selected.includes(row.id),
                  onChange: () => {
                    toggleOne(row.id);
                  },
                  inputProps: { "aria-label": t("common:table.selectRow") }
                }
              ) }) : null,
              columns.map((column) => /* @__PURE__ */ jsx(TableCell, { align: column.align ?? "left", children: renderCell(row, column) }, String(column.key))),
              rowActions ? /* @__PURE__ */ jsx(TableCell, { align: "right", onClick: (e) => {
                e.stopPropagation();
              }, children: rowActions(row) }) : null
            ]
          },
          row.id
        )) : null
      ] })
    ] }) }),
    !compact ? /* @__PURE__ */ jsx(
      TablePagination,
      {
        component: "div",
        count: data?.total ?? 0,
        page: Math.max(0, page - 1),
        rowsPerPage: pageSize,
        rowsPerPageOptions: [...PAGE_SIZE_OPTIONS],
        onPageChange: (_e, newPage) => {
          onPageChange(newPage + 1);
        },
        onRowsPerPageChange: (e) => {
          onPageSizeChange(Number(e.target.value));
        },
        labelRowsPerPage: t("common:table.rowsPerPage"),
        labelDisplayedRows: ({ from, to, count }) => t("common:table.displayedRows", { from, to, count })
      }
    ) : null
  ] });
}
var StatCardRoot = styled(Card, {
  shouldForwardProp: (prop) => prop !== "compactSize"
})(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(1.5, 2) : theme.spacing(2.5),
  display: "flex",
  flexDirection: "column",
  gap: compactSize ? theme.spacing(0.75) : theme.spacing(1),
  height: "100%"
}));
var KpiHeaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1)
}));
var IconTile = styled("div", {
  shouldForwardProp: (prop) => prop !== "colorKey" && prop !== "compact"
})(({ theme, colorKey, compact }) => ({
  display: "inline-flex",
  padding: theme.spacing(compact ? 0.75 : 1.25),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette[colorKey].main, 0.12),
  color: theme.palette[colorKey].main
}));
var DeltaRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "trend"
})(({ theme, trend }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  ...theme.typography.caption,
  fontWeight: 600,
  fontSize: "0.72rem",
  color: trend === "up" ? theme.palette.success.main : trend === "down" ? theme.palette.error.main : theme.palette.text.secondary
}));
var TREND_ICONS = {
  up: /* @__PURE__ */ jsx(TrendingUpIcon, { fontSize: "inherit" }),
  down: /* @__PURE__ */ jsx(TrendingDownIcon, { fontSize: "inherit" }),
  flat: /* @__PURE__ */ jsx(TrendingFlatIcon, { fontSize: "inherit" })
};
function StatCard({
  labelKey,
  value,
  delta,
  trend = "flat",
  icon,
  loading = false,
  layout = "stat",
  subtitleKey,
  subtitleParams,
  badge,
  iconColor = "primary",
  size = "small"
}) {
  const { t } = useTranslation();
  const isCompact = size === "small" || size === "mini";
  const valueNode = loading ? /* @__PURE__ */ jsx(Skeleton, { variant: "text", width: 80, height: isCompact ? 28 : 40 }) : /* @__PURE__ */ jsx(
    Typography4,
    {
      variant: isCompact ? "h5" : "h4",
      component: "div",
      sx: isCompact ? { fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.2 } : { fontWeight: 800 },
      children: value
    }
  );
  const deltaNode = delta && !loading ? /* @__PURE__ */ jsxs(DeltaRow, { trend, children: [
    TREND_ICONS[trend],
    delta
  ] }) : null;
  const subtitleNode = subtitleKey ? /* @__PURE__ */ jsx(Typography4, { variant: "caption", color: "text.secondary", sx: { fontSize: "0.72rem" }, children: t(subtitleKey, subtitleParams) }) : null;
  if (layout === "kpi") {
    return /* @__PURE__ */ jsxs(StatCardRoot, { compactSize: isCompact, children: [
      /* @__PURE__ */ jsxs(KpiHeaderRow, { children: [
        icon ? /* @__PURE__ */ jsx(IconTile, { colorKey: iconColor, compact: isCompact, children: icon }) : /* @__PURE__ */ jsx("span", {}),
        badge ?? /* @__PURE__ */ jsx(
          Typography4,
          {
            variant: "overline",
            color: "text.secondary",
            sx: { textAlign: "right", lineHeight: 1.3, fontSize: isCompact ? "0.65rem" : "0.72rem", fontWeight: 700, letterSpacing: "0.06em" },
            children: t(labelKey)
          }
        )
      ] }),
      badge ? /* @__PURE__ */ jsx(Typography4, { variant: "overline", color: "text.secondary", sx: { fontSize: isCompact ? "0.65rem" : "0.72rem", fontWeight: 700 }, children: t(labelKey) }) : null,
      valueNode,
      deltaNode ?? subtitleNode
    ] });
  }
  return /* @__PURE__ */ jsxs(StatCardRoot, { compactSize: isCompact, children: [
    /* @__PURE__ */ jsxs(
      Typography4,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { display: "flex", alignItems: "center", gap: 1, fontSize: isCompact ? "0.75rem" : "0.8125rem" },
        children: [
          icon,
          t(labelKey)
        ]
      }
    ),
    valueNode,
    deltaNode,
    subtitleNode
  ] });
}
function SectionCard({ titleKey, titleParams, action, children }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(
      CardHeader,
      {
        title: t(titleKey, titleParams),
        titleTypographyProps: { variant: "h6" },
        action
      }
    ),
    /* @__PURE__ */ jsx(CardContent, { sx: { pt: 0 }, children })
  ] });
}
var ListRoot = styled("dl")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(140px, auto) 1fr",
  columnGap: theme.spacing(3),
  rowGap: theme.spacing(1.5),
  margin: 0
}));
var Term = styled("dt")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary
}));
var Detail = styled("dd")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  margin: 0
}));
function DescriptionList({ items }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(ListRoot, { children: items.map((item) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Term, { children: t(item.labelKey, item.labelParams) }),
    /* @__PURE__ */ jsx(Detail, { children: item.value })
  ] }, item.labelKey)) });
}
function SearchField({
  value,
  onChange,
  placeholderKey = "common:actions.search",
  fullWidth = false,
  autoFocus = false
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    TextField4,
    {
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      placeholder: t(placeholderKey),
      fullWidth,
      autoFocus,
      inputProps: { "aria-label": t(placeholderKey) },
      InputProps: {
        startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(SearchIcon, { fontSize: "small" }) }),
        endAdornment: value ? /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(
          IconButton,
          {
            size: "small",
            "aria-label": t("common:actions.clear"),
            onClick: () => {
              onChange("");
            },
            children: /* @__PURE__ */ jsx(ClearIcon, { fontSize: "small" })
          }
        ) }) : void 0
      }
    }
  );
}
function SelectField({
  value,
  onChange,
  options,
  labelKey,
  emptyOptionKey,
  fullWidth = false,
  minWidth = 160,
  disabled = false
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(
    TextField4,
    {
      select: true,
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      label: labelKey ? t(labelKey) : void 0,
      fullWidth,
      disabled,
      sx: { minWidth: fullWidth ? void 0 : minWidth },
      children: [
        emptyOptionKey ? /* @__PURE__ */ jsx(MenuItem, { value: "", children: t(emptyOptionKey) }) : null,
        options.map((option) => /* @__PURE__ */ jsxs(MenuItem, { value: option.value, disabled: option.disabled, children: [
          option.icon,
          option.label
        ] }, String(option.value)))
      ]
    }
  );
}
var PasswordField = forwardRef(
  function PasswordField2(props, ref) {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    return /* @__PURE__ */ jsx(
      TextField4,
      {
        ...props,
        inputRef: ref ?? props.inputRef,
        type: visible ? "text" : "password",
        InputProps: {
          ...props.InputProps,
          endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(
            IconButton,
            {
              "aria-label": t(
                visible ? "common:actions.hidePassword" : "common:actions.showPassword"
              ),
              onClick: () => {
                setVisible((v) => !v);
              },
              edge: "end",
              size: "small",
              children: visible ? /* @__PURE__ */ jsx(VisibilityOffIcon, { fontSize: "small" }) : /* @__PURE__ */ jsx(VisibilityIcon, { fontSize: "small" })
            }
          ) })
        }
      }
    );
  }
);
function FormTextField({
  control,
  name,
  labelKey,
  type,
  multiline,
  rows,
  autoFocus,
  autoComplete,
  placeholderKey,
  disabled
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    Controller,
    {
      control,
      name,
      render: ({ field: { ref, ...field }, fieldState }) => {
        const shared = {
          ...field,
          inputRef: ref,
          label: t(labelKey),
          placeholder: placeholderKey ? t(placeholderKey) : void 0,
          error: Boolean(fieldState.error),
          helperText: fieldState.error?.message ? t(fieldState.error.message) : void 0,
          fullWidth: true,
          margin: "normal",
          multiline,
          rows,
          autoFocus,
          autoComplete,
          disabled
        };
        return type === "password" ? /* @__PURE__ */ jsx(PasswordField, { ...shared }) : /* @__PURE__ */ jsx(TextField4, { ...shared, type });
      }
    }
  );
}
function FormSelect({
  control,
  name,
  labelKey,
  options
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
        TextField4,
        {
          ...field,
          select: true,
          label: t(labelKey),
          error: Boolean(fieldState.error),
          helperText: fieldState.error?.message ? t(fieldState.error.message) : void 0,
          fullWidth: true,
          margin: "normal",
          children: options.map((option) => /* @__PURE__ */ jsx(MenuItem, { value: option.value, disabled: option.disabled, children: option.label }, String(option.value)))
        }
      )
    }
  );
}
function FormSwitch({
  control,
  name,
  labelKey
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    Controller,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsx(Switch, { checked: Boolean(field.value), onChange: field.onChange }),
          label: t(labelKey)
        }
      )
    }
  );
}
function LanguageSwitcher({ variant = "text" }) {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const current = SUPPORTED_LOCALES.find((locale) => i18n.language.startsWith(locale.code)) ?? SUPPORTED_LOCALES[0];
  const handleSelect = (code) => {
    void i18n.changeLanguage(code);
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button4,
      {
        color: "inherit",
        startIcon: /* @__PURE__ */ jsx(TranslateIcon, {}),
        onClick: (e) => {
          setAnchorEl(e.currentTarget);
        },
        "aria-label": t("common:actions.changeLanguage"),
        "aria-haspopup": "menu",
        children: variant === "text" ? current.label : null
      }
    ),
    /* @__PURE__ */ jsx(
      Menu,
      {
        anchorEl,
        open: Boolean(anchorEl),
        onClose: () => {
          setAnchorEl(null);
        },
        children: SUPPORTED_LOCALES.map((locale) => /* @__PURE__ */ jsxs(
          MenuItem,
          {
            selected: locale.code === current.code,
            onClick: () => {
              handleSelect(locale.code);
            },
            children: [
              /* @__PURE__ */ jsx(ListItemIcon, { children: locale.code === current.code ? /* @__PURE__ */ jsx(CheckIcon, { fontSize: "small" }) : null }),
              /* @__PURE__ */ jsx(ListItemText, { children: locale.label })
            ]
          },
          locale.code
        ))
      }
    )
  ] });
}
var TopBarSlot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
var TopBarNav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flexGrow: 1,
  justifyContent: "center"
}));
function AppTopBar({ logo, nav, actions, onMenuClick }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    AppBar,
    {
      position: "fixed",
      color: "inherit",
      elevation: 0,
      sx: (theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer + 1
      }),
      children: /* @__PURE__ */ jsxs(Toolbar, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }), children: [
        /* @__PURE__ */ jsxs(TopBarSlot, { children: [
          onMenuClick ? /* @__PURE__ */ jsx(
            IconButton,
            {
              "aria-label": t("common:actions.openMenu"),
              onClick: onMenuClick,
              edge: "start",
              sx: { display: { md: "none" } },
              children: /* @__PURE__ */ jsx(MenuIcon, {})
            }
          ) : null,
          logo
        ] }),
        /* @__PURE__ */ jsx(TopBarNav, { children: nav }),
        /* @__PURE__ */ jsx(TopBarSlot, { children: actions })
      ] })
    }
  );
}
var RESOURCE_COL_WIDTH = 148;
var DAY_COL_WIDTH = 76;
var ROW_HEIGHT = 52;
var SPAN_INSET = 8;
var MatrixRoot = styled("div")(({ theme }) => ({
  overflowX: "auto",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius
}));
var HeaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  zIndex: 3
}));
var ResourceCell = styled("div")(({ theme }) => ({
  width: RESOURCE_COL_WIDTH,
  minWidth: RESOURCE_COL_WIDTH,
  padding: theme.spacing(1, 2),
  display: "flex",
  alignItems: "center",
  position: "sticky",
  left: 0,
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`
}));
var DayHeaderCell = styled("div")(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  padding: theme.spacing(1, 0),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2
}));
var TodayBubble = styled("span")(({ theme }) => ({
  width: 26,
  height: 26,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: theme.typography.body2.fontSize
}));
var BodyRow = styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": { borderBottom: "none" },
  backgroundColor: theme.palette.background.paper
}));
var RowTrack = styled("div")({
  position: "relative",
  height: ROW_HEIGHT,
  display: "flex"
});
var DayCell = styled("button")(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  height: "100%",
  border: "none",
  borderLeft: `1px solid ${theme.palette.divider}`,
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  "&:hover": { backgroundColor: theme.palette.action.hover },
  "&:disabled": { cursor: "default" }
}));
var SpanBar = styled("button")(({ theme }) => ({
  position: "absolute",
  top: SPAN_INSET,
  height: ROW_HEIGHT - SPAN_INSET * 2,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1),
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  textAlign: "left",
  zIndex: 1
}));
function TimelineMatrix({
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
  today
}) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);
  const spanColor = (key) => {
    const paletteColor = key === "neutral" ? theme.palette.neutral : theme.palette[key];
    return {
      backgroundColor: alpha(paletteColor.main, theme.palette.mode === "light" ? 0.09 : 0.22),
      border: `1px solid ${alpha(paletteColor.main, 0.55)}`,
      color: theme.palette.mode === "light" ? paletteColor.dark : paletteColor.light
    };
  };
  const monthFormat = new Intl.DateTimeFormat(i18n.language, { month: "short" });
  const dayFormat = new Intl.DateTimeFormat(i18n.language, { day: "numeric" });
  if (loading) {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Skeleton, { variant: "rounded", height: ROW_HEIGHT * 6 }) });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    legend ? /* @__PURE__ */ jsx(Typography4, { component: "div", variant: "body2", sx: { display: "flex", justifyContent: "flex-end", mb: 1 }, children: legend }) : null,
    /* @__PURE__ */ jsx(MatrixRoot, { children: /* @__PURE__ */ jsxs("div", { style: { width: RESOURCE_COL_WIDTH + days * DAY_COL_WIDTH }, children: [
      /* @__PURE__ */ jsxs(HeaderRow, { children: [
        /* @__PURE__ */ jsx(ResourceCell, { children: /* @__PURE__ */ jsx(Typography4, { variant: "overline", color: "text.secondary", children: t(resourceLabelKey) }) }),
        dayList.map((date) => {
          const isToday = date === todayDate;
          const dateObj = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
          return /* @__PURE__ */ jsxs(DayHeaderCell, { "aria-current": isToday ? "date" : void 0, children: [
            /* @__PURE__ */ jsx(Typography4, { variant: "caption", color: "text.secondary", sx: { textTransform: "uppercase" }, children: monthFormat.format(dateObj) }),
            isToday ? /* @__PURE__ */ jsx(TodayBubble, { "aria-label": t("common:timeline.today"), children: dayFormat.format(dateObj) }) : /* @__PURE__ */ jsx(Typography4, { variant: "body2", children: dayFormat.format(dateObj) })
          ] }, date);
        })
      ] }),
      resources.map((resource) => {
        const rowSpans = spans.filter(
          (span) => span.resourceId === resource.id && span.startDate < endDate && span.endDate > startDate
        );
        return /* @__PURE__ */ jsxs(BodyRow, { children: [
          /* @__PURE__ */ jsx(ResourceCell, { children: renderResource(resource) }),
          /* @__PURE__ */ jsxs(RowTrack, { style: { width: days * DAY_COL_WIDTH }, children: [
            dayList.map((date) => /* @__PURE__ */ jsx(
              DayCell,
              {
                type: "button",
                "aria-label": `${resource.id} ${date}`,
                disabled: !onCellClick,
                onClick: () => onCellClick?.(resource.id, date)
              },
              date
            )),
            rowSpans.map((span) => {
              const clampedStart = span.startDate < startDate ? startDate : span.startDate;
              const clampedEnd = span.endDate > endDate ? endDate : span.endDate;
              const offset = differenceInDays(startDate, clampedStart);
              const length = Math.max(1, differenceInDays(clampedStart, clampedEnd));
              return /* @__PURE__ */ jsx(
                SpanBar,
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    onSpanClick?.(span);
                  },
                  style: {
                    left: offset * DAY_COL_WIDTH + 2,
                    width: length * DAY_COL_WIDTH - 4,
                    ...spanColor(span.colorKey)
                  },
                  children: span.labelKey ? t(span.labelKey) : span.label
                },
                span.id
              );
            })
          ] })
        ] }, resource.id);
      })
    ] }) })
  ] });
}
function StatusFilterChips({
  options,
  value,
  onChange
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(Stack3, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, role: "tablist", children: options.map((option) => {
    const active = option.value === value;
    const label = option.count !== void 0 ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
    return /* @__PURE__ */ jsx(
      Chip,
      {
        label,
        color: active ? "primary" : void 0,
        variant: active ? "filled" : "outlined",
        onClick: () => {
          onChange(option.value);
        },
        role: "tab",
        "aria-selected": active
      },
      option.value
    );
  }) });
}
var DRAWER_WIDTHS = { sm: 400, md: 520, lg: 680, xl: 900, full: "100vw" };
var DrawerHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper
}));
var DrawerContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(3),
  position: "relative"
}));
var DrawerFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  "& > *": { flexGrow: 1 }
}));
function AppDrawer({
  open,
  onClose,
  titleKey,
  titleParams,
  title,
  statusChip,
  tabs,
  footer,
  width = "md",
  loading = false,
  children
}) {
  const { t } = useTranslation();
  const resolvedWidth = typeof width === "string" && width in DRAWER_WIDTHS ? DRAWER_WIDTHS[width] : width;
  return /* @__PURE__ */ jsxs(
    Drawer2,
    {
      anchor: "right",
      open,
      onClose,
      sx: {
        zIndex: (theme) => theme.zIndex.modal + 100,
        "& .MuiDrawer-paper": {
          width: { xs: "100%", sm: resolvedWidth },
          display: "flex",
          backgroundColor: "background.paper"
        }
      },
      children: [
        /* @__PURE__ */ jsxs(DrawerHeader, { children: [
          /* @__PURE__ */ jsxs(Stack3, { direction: "row", spacing: 1.5, alignItems: "center", sx: { flexGrow: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx(Typography4, { variant: "h6", noWrap: true, children: title ?? (titleKey ? t(titleKey, titleParams) : null) }),
            statusChip
          ] }),
          /* @__PURE__ */ jsx(IconButton, { "aria-label": t("common:actions.close"), onClick: onClose, size: "small", children: /* @__PURE__ */ jsx(CloseIcon, { fontSize: "small" }) })
        ] }),
        tabs,
        /* @__PURE__ */ jsxs(DrawerContent, { children: [
          children,
          /* @__PURE__ */ jsx(LoadingOverlay, { open: loading })
        ] }),
        footer ? /* @__PURE__ */ jsx(DrawerFooter, { children: footer }) : null
      ]
    }
  );
}
function WizardDialog({
  open,
  titleKey,
  steps,
  activeStep,
  canNext,
  onNext,
  onBack,
  onCancel,
  onFinish,
  submitting = false,
  nextKey = "common:actions.next",
  backKey = "common:actions.back",
  finishKey = "common:wizard.finish",
  children
}) {
  const { t } = useTranslation();
  const isLast = activeStep === steps.length - 1;
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: onCancel, fullWidth: true, maxWidth: "lg", children: [
    /* @__PURE__ */ jsxs(DialogTitle, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      t(titleKey),
      /* @__PURE__ */ jsx(IconButton, { "aria-label": t("common:actions.close"), onClick: onCancel, size: "small", edge: "end", children: /* @__PURE__ */ jsx(CloseIcon, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ jsx(Stepper, { activeStep, sx: { px: 3, pb: 2 }, children: steps.map((step) => /* @__PURE__ */ jsx(Step, { children: /* @__PURE__ */ jsx(StepLabel, { children: t(step.labelKey) }) }, step.labelKey)) }),
    /* @__PURE__ */ jsxs(DialogContent, { dividers: true, sx: { position: "relative", minHeight: 320 }, children: [
      children,
      /* @__PURE__ */ jsx(LoadingOverlay, { open: submitting })
    ] }),
    /* @__PURE__ */ jsxs(DialogActions, { sx: { justifyContent: "space-between", px: 3 }, children: [
      /* @__PURE__ */ jsx(Button4, { onClick: onCancel, color: "inherit", disabled: submitting, children: t("common:actions.cancel") }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx(Button4, { onClick: onBack, color: "inherit", disabled: activeStep === 0 || submitting, sx: { mr: 1 }, children: t(backKey) }),
        /* @__PURE__ */ jsx(
          Button4,
          {
            variant: "contained",
            onClick: isLast ? onFinish : onNext,
            disabled: !canNext || submitting,
            children: t(isLast ? finishKey : nextKey)
          }
        )
      ] })
    ] })
  ] });
}
function DateRangeButton({ range }) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [draftFrom, setDraftFrom] = useState(range.from);
  const [draftTo, setDraftTo] = useState(range.to);
  const format = new Intl.DateTimeFormat(i18n.language, { month: "short", day: "numeric" });
  const formatWithYear = new Intl.DateTimeFormat(i18n.language, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  const label = `${format.format(/* @__PURE__ */ new Date(`${range.from}T00:00:00Z`))} \u2013 ${formatWithYear.format(
    /* @__PURE__ */ new Date(`${range.to}T00:00:00Z`)
  )}`;
  const openPopover = (element) => {
    setDraftFrom(range.from);
    setDraftTo(range.to);
    setAnchorEl(element);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button4,
      {
        variant: "outlined",
        color: "inherit",
        startIcon: /* @__PURE__ */ jsx(CalendarMonthOutlinedIcon, {}),
        onClick: (e) => {
          openPopover(e.currentTarget);
        },
        sx: { borderRadius: 999, whiteSpace: "nowrap" },
        "aria-label": t("common:dateRange.label"),
        children: label
      }
    ),
    /* @__PURE__ */ jsx(
      Popover,
      {
        open: Boolean(anchorEl),
        anchorEl,
        onClose: () => {
          setAnchorEl(null);
        },
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        children: /* @__PURE__ */ jsxs(Stack3, { spacing: 2, sx: { p: 2, width: 300 }, children: [
          /* @__PURE__ */ jsx(Stack3, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: Object.values(DateRangePreset).map((preset) => /* @__PURE__ */ jsx(
            Chip,
            {
              label: t(`common:dateRange.presets.${preset}`),
              size: "small",
              color: range.preset === preset ? "primary" : void 0,
              variant: range.preset === preset ? "filled" : "outlined",
              onClick: () => {
                range.applyPreset(preset);
                setAnchorEl(null);
              }
            },
            preset
          )) }),
          /* @__PURE__ */ jsx(
            TextField4,
            {
              type: "date",
              label: t("common:dateRange.from"),
              value: draftFrom,
              onChange: (e) => {
                setDraftFrom(e.target.value);
              },
              InputLabelProps: { shrink: true }
            }
          ),
          /* @__PURE__ */ jsx(
            TextField4,
            {
              type: "date",
              label: t("common:dateRange.to"),
              value: draftTo,
              onChange: (e) => {
                setDraftTo(e.target.value);
              },
              InputLabelProps: { shrink: true }
            }
          ),
          /* @__PURE__ */ jsx(
            Button4,
            {
              variant: "contained",
              disabled: !draftFrom || !draftTo || draftTo < draftFrom,
              onClick: () => {
                range.setRange(draftFrom, draftTo);
                setAnchorEl(null);
              },
              children: t("common:dateRange.apply")
            }
          )
        ] })
      }
    )
  ] });
}
var NavItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.25, 1),
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "& .MuiListItemIcon-root": { color: theme.palette.primary.contrastText },
    "&:hover": { backgroundColor: theme.palette.primary.dark }
  }
}));
function NavList({
  items,
  activePath,
  onNavigate,
  depth = 0
}) {
  const { t } = useTranslation();
  const [openMap, setOpenMap] = useState({});
  return /* @__PURE__ */ jsx(List, { component: depth === 0 ? "nav" : "div", disablePadding: depth > 0, children: items.map((item) => {
    const isActive = activePath === item.path || !item.exact && item.path !== "/" && activePath.startsWith(`${item.path}/`);
    const hasChildren = Boolean(item.children?.length);
    const isOpen = openMap[item.path] ?? isActive;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        NavItemButton,
        {
          selected: isActive && !hasChildren,
          onClick: () => {
            if (hasChildren) {
              setOpenMap((prev) => ({ ...prev, [item.path]: !isOpen }));
            } else {
              onNavigate(item.path);
            }
          },
          sx: { pl: 2 + depth * 2 },
          children: [
            item.icon ? /* @__PURE__ */ jsx(ListItemIcon, { sx: { minWidth: 40 }, children: item.icon }) : null,
            /* @__PURE__ */ jsx(ListItemText, { primary: t(item.labelKey) }),
            hasChildren ? isOpen ? /* @__PURE__ */ jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsx(ExpandMoreIcon, {}) : null
          ]
        }
      ),
      hasChildren && item.children ? /* @__PURE__ */ jsx(Collapse, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(
        NavList,
        {
          items: item.children,
          activePath,
          onNavigate,
          depth: depth + 1
        }
      ) }) : null
    ] }, item.path);
  }) });
}
function AppSideNav({
  items,
  activePath,
  onNavigate,
  mobileOpen = false,
  onMobileClose,
  temporary = false
}) {
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toolbar, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
    /* @__PURE__ */ jsx(NavList, { items, activePath, onNavigate })
  ] });
  if (temporary) {
    return /* @__PURE__ */ jsx(
      Drawer2,
      {
        variant: "temporary",
        open: mobileOpen,
        onClose: onMobileClose,
        ModalProps: { keepMounted: true },
        sx: (theme) => ({
          "& .MuiDrawer-paper": { width: theme.custom.sidebarWidth }
        }),
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Drawer2,
    {
      variant: "permanent",
      sx: (theme) => ({
        width: theme.custom.sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: theme.custom.sidebarWidth,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`
        }
      }),
      children: content
    }
  );
}
var HeaderRoot = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3)
}));
function PageHeader({
  titleKey,
  titleParams,
  title,
  subtitleKey,
  subtitleParams,
  breadcrumbs,
  onNavigate,
  actions
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(HeaderRoot, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      breadcrumbs && breadcrumbs.length > 0 ? /* @__PURE__ */ jsx(Breadcrumbs, { separator: /* @__PURE__ */ jsx(NavigateNextIcon, { fontSize: "small" }), sx: { mb: 0.5 }, children: breadcrumbs.map(
        (crumb) => crumb.path && onNavigate ? /* @__PURE__ */ jsx(
          Link,
          {
            component: "button",
            type: "button",
            variant: "body2",
            color: "text.secondary",
            underline: "hover",
            onClick: () => {
              if (crumb.path) onNavigate(crumb.path);
            },
            children: t(crumb.labelKey)
          },
          crumb.labelKey
        ) : /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.primary", children: t(crumb.labelKey) }, crumb.labelKey)
      ) }) : null,
      /* @__PURE__ */ jsx(Typography4, { variant: "h4", component: "h1", children: title ?? t(titleKey, titleParams) }),
      subtitleKey ? /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: t(subtitleKey, subtitleParams) }) : null
    ] }),
    actions ? /* @__PURE__ */ jsx("div", { children: actions }) : null
  ] });
}
var AuthRoot = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default
}));
var AuthTopRight = styled("div")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(3)
}));
var AuthCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 420,
  boxShadow: theme.custom.raisedShadow
}));
var AuthLogo = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: "flex",
  justifyContent: "center"
}));
function AuthLayout({ children, logo, topRight }) {
  return /* @__PURE__ */ jsxs(AuthRoot, { children: [
    topRight ? /* @__PURE__ */ jsx(AuthTopRight, { children: topRight }) : null,
    logo ? /* @__PURE__ */ jsx(AuthLogo, { children: logo }) : null,
    /* @__PURE__ */ jsx(AuthCard, { children: /* @__PURE__ */ jsx(CardContent, { sx: { p: 4 }, children }) })
  ] });
}
var LayoutRoot = styled("div")({
  display: "flex",
  minHeight: "100vh"
});
var ContentArea = styled("main")(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default
}));
function DashboardLayout({
  navItems,
  activePath,
  onNavigate,
  logo,
  topBarActions,
  children
}) {
  const { isDesktop } = useMediaBreakpoint();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleNavigate = (path) => {
    setMobileOpen(false);
    onNavigate(path);
  };
  return /* @__PURE__ */ jsxs(LayoutRoot, { children: [
    /* @__PURE__ */ jsx(
      AppTopBar,
      {
        logo,
        actions: topBarActions,
        onMenuClick: isDesktop ? void 0 : () => {
          setMobileOpen((open) => !open);
        }
      }
    ),
    /* @__PURE__ */ jsx(
      AppSideNav,
      {
        items: navItems,
        activePath,
        onNavigate: handleNavigate,
        temporary: !isDesktop,
        mobileOpen,
        onMobileClose: () => {
          setMobileOpen(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(ContentArea, { children: [
      /* @__PURE__ */ jsx(Toolbar, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
      children
    ] })
  ] });
}
var LaneContainer = styled(Box5)(({ theme }) => ({
  flex: 1,
  minWidth: 280,
  maxWidth: 360,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === "light" ? "#F1F5F9" : "#0F172A",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  height: "100%",
  minHeight: 500,
  border: `1px solid ${theme.palette.mode === "light" ? "#E2E8F0" : "#1E293B"}`
}));
var ColumnHeader = styled(Box5)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1.5),
  borderBottom: `2px solid ${theme.palette.divider}`
}));
var ItemsScrollArea = styled(Box5)(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  paddingRight: theme.spacing(0.5),
  "&::-webkit-scrollbar": {
    width: 6
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.mode === "light" ? "#CBD5E1" : "#475569",
    borderRadius: 3
  }
}));
function KanbanBoard({
  columns,
  items,
  getItemId,
  getItemColumnId,
  renderItem
}) {
  return /* @__PURE__ */ jsx(
    Stack3,
    {
      direction: "row",
      spacing: 2.5,
      sx: {
        overflowX: "auto",
        pb: 2,
        height: "100%",
        alignItems: "stretch",
        minHeight: 550
      },
      children: columns.map((column) => {
        const laneItems = items.filter((item) => getItemColumnId(item) === column.id);
        return /* @__PURE__ */ jsxs(LaneContainer, { children: [
          /* @__PURE__ */ jsxs(ColumnHeader, { children: [
            /* @__PURE__ */ jsxs(Stack3, { direction: "row", spacing: 1.5, alignItems: "center", children: [
              column.color && /* @__PURE__ */ jsx(
                Box5,
                {
                  sx: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: column.color
                  }
                }
              ),
              /* @__PURE__ */ jsx(Typography4, { variant: "subtitle2", sx: { fontWeight: 700, letterSpacing: "0.05em" }, children: column.title })
            ] }),
            /* @__PURE__ */ jsx(
              Card,
              {
                variant: "outlined",
                sx: {
                  px: 1,
                  py: 0.25,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  borderColor: "divider",
                  boxShadow: "none"
                },
                children: /* @__PURE__ */ jsx(Typography4, { variant: "caption", sx: { fontWeight: 700 }, children: laneItems.length })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(ItemsScrollArea, { children: laneItems.map((item) => /* @__PURE__ */ jsx(Box5, { sx: { position: "relative" }, children: renderItem(item) }, getItemId(item))) })
        ] }, column.id);
      })
    }
  );
}
function SplitPaneLayout({
  leftPane,
  rightPane,
  rightWidth = 400
}) {
  return /* @__PURE__ */ jsxs(
    Box5,
    {
      sx: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        width: "100%",
        height: "100%",
        alignItems: "stretch"
      },
      children: [
        /* @__PURE__ */ jsx(
          Box5,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column"
            },
            children: leftPane
          }
        ),
        /* @__PURE__ */ jsx(
          Box5,
          {
            sx: {
              width: { xs: "100%", md: rightWidth },
              flexShrink: 0,
              position: { md: "sticky" },
              top: { md: 88 },
              // Adjust based on TopBar height (topBarHeight is 64, offset by spacing)
              height: { md: "calc(100vh - 120px)" },
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: rightPane
          }
        )
      ]
    }
  );
}
var StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "activeBorderColor" && prop !== "hasAction"
})(({ theme, activeBorderColor, hasAction }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out",
  cursor: hasAction ? "pointer" : "default",
  border: activeBorderColor ? `2px solid ${activeBorderColor}` : `1px solid ${theme.palette.divider}`,
  "&:hover": hasAction ? {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
    borderColor: activeBorderColor || theme.palette.text.secondary
  } : {}
}));
var ImageContainer = styled(Box5)({
  position: "relative",
  paddingTop: "60%",
  // 5:3 Aspect Ratio
  width: "100%",
  overflow: "hidden"
});
var MediaOverlay = styled(Box5)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.2s ease-in-out",
  "&:hover": {
    opacity: 1
  }
});
function MenuCard({
  name,
  price,
  description,
  imageUrl,
  badges,
  stockLabel,
  stockColor = "default",
  actionOverlay,
  activeBorderColor,
  onClick
}) {
  const { formatCurrency } = useLocaleFormat();
  const formattedPrice = typeof price === "number" ? formatCurrency(price) : price;
  return /* @__PURE__ */ jsxs(
    StyledCard,
    {
      activeBorderColor,
      hasAction: Boolean(onClick),
      onClick,
      children: [
        /* @__PURE__ */ jsxs(ImageContainer, { children: [
          imageUrl ? /* @__PURE__ */ jsx(
            CardMedia,
            {
              component: "img",
              image: imageUrl,
              alt: name,
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }
          ) : /* @__PURE__ */ jsx(
            Box5,
            {
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "action.hover"
              },
              children: /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.secondary", sx: { fontWeight: 600 }, children: "No Image" })
            }
          ),
          actionOverlay && /* @__PURE__ */ jsx(MediaOverlay, { children: actionOverlay })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { sx: { p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsxs(Stack3, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 1, children: [
            /* @__PURE__ */ jsx(Typography4, { variant: "subtitle1", sx: { fontWeight: 700, lineHeight: 1.2 }, noWrap: true, children: name }),
            /* @__PURE__ */ jsx(Typography4, { variant: "subtitle1", color: "primary", sx: { fontWeight: 700 }, children: formattedPrice })
          ] }),
          description && /* @__PURE__ */ jsx(
            Typography4,
            {
              variant: "body2",
              color: "text.secondary",
              sx: {
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: 40,
                lineHeight: 1.4
              },
              children: description
            }
          ),
          /* @__PURE__ */ jsx(Box5, { sx: { flexGrow: 1 } }),
          /* @__PURE__ */ jsxs(Stack3, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, alignItems: "center", sx: { mt: 1 }, children: [
            badges?.map((badge, idx) => /* @__PURE__ */ jsx(Box5, { children: badge }, idx)),
            /* @__PURE__ */ jsx(Box5, { sx: { flexGrow: 1 } }),
            stockLabel && /* @__PURE__ */ jsx(
              Chip,
              {
                label: stockLabel,
                size: "small",
                color: stockColor,
                sx: { fontWeight: 700, fontSize: "0.65rem", height: 20 }
              }
            )
          ] })
        ] })
      ]
    }
  );
}

export { AppDialog, AppDrawer, AppSideNav, AppTopBar, AuthLayout, DashboardLayout, DataTable, DateRangeButton, DescriptionList, EmptyState, ErrorState, FormDialog, FormSelect, FormSwitch, FormTextField, KanbanBoard, LanguageSwitcher, LoadingOverlay, MenuCard, NamiosLoader, NamiosMarkSvg, PageHeader, PageSkeleton, PasswordField, SearchField, SectionCard, SelectField, SplitPaneLayout, StatCard, StatusChip, StatusFilterChips, TimelineMatrix, WizardDialog };
//# sourceMappingURL=chunk-TTPUSMK5.js.map
//# sourceMappingURL=chunk-TTPUSMK5.js.map