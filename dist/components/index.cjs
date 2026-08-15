'use strict';

var CloseIcon = require('@mui/icons-material/Close');
var Dialog = require('@mui/material/Dialog');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogTitle = require('@mui/material/DialogTitle');
var IconButton = require('@mui/material/IconButton');
var reactI18next = require('react-i18next');
var styles = require('@mui/material/styles');
var Box5 = require('@mui/material/Box');
var Typography4 = require('@mui/material/Typography');
var jsxRuntime = require('react/jsx-runtime');
var Button5 = require('@mui/material/Button');
var DialogContentText = require('@mui/material/DialogContentText');
var react = require('react');
var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');
var InboxOutlinedIcon = require('@mui/icons-material/InboxOutlined');
var ErrorOutlineIcon = require('@mui/icons-material/ErrorOutline');
var RefreshIcon = require('@mui/icons-material/Refresh');
var Chip = require('@mui/material/Chip');
var Checkbox = require('@mui/material/Checkbox');
var Paper = require('@mui/material/Paper');
var Skeleton = require('@mui/material/Skeleton');
var Table = require('@mui/material/Table');
var TableBody = require('@mui/material/TableBody');
var TableCell = require('@mui/material/TableCell');
var TableContainer = require('@mui/material/TableContainer');
var TableHead = require('@mui/material/TableHead');
var TablePagination = require('@mui/material/TablePagination');
var TableRow = require('@mui/material/TableRow');
var TableSortLabel = require('@mui/material/TableSortLabel');
var TrendingDownIcon = require('@mui/icons-material/TrendingDown');
var TrendingFlatIcon = require('@mui/icons-material/TrendingFlat');
var TrendingUpIcon = require('@mui/icons-material/TrendingUp');
var Card = require('@mui/material/Card');
var CardContent = require('@mui/material/CardContent');
var CardHeader = require('@mui/material/CardHeader');
var ClearIcon = require('@mui/icons-material/Clear');
var SearchIcon = require('@mui/icons-material/Search');
var InputAdornment = require('@mui/material/InputAdornment');
var TextField4 = require('@mui/material/TextField');
var MenuItem = require('@mui/material/MenuItem');
var VisibilityIcon = require('@mui/icons-material/Visibility');
var VisibilityOffIcon = require('@mui/icons-material/VisibilityOff');
var FormControlLabel = require('@mui/material/FormControlLabel');
var Switch = require('@mui/material/Switch');
var CheckIcon = require('@mui/icons-material/Check');
var TranslateIcon = require('@mui/icons-material/Translate');
var ListItemIcon = require('@mui/material/ListItemIcon');
var ListItemText = require('@mui/material/ListItemText');
var Menu = require('@mui/material/Menu');
var MenuIcon = require('@mui/icons-material/Menu');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');
var Stack3 = require('@mui/material/Stack');
var Drawer2 = require('@mui/material/Drawer');
var Step = require('@mui/material/Step');
var StepLabel = require('@mui/material/StepLabel');
var Stepper = require('@mui/material/Stepper');
var CalendarMonthOutlinedIcon = require('@mui/icons-material/CalendarMonthOutlined');
var Popover = require('@mui/material/Popover');
var ExpandLessIcon = require('@mui/icons-material/ExpandLess');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var Collapse = require('@mui/material/Collapse');
var List = require('@mui/material/List');
var ListItemButton = require('@mui/material/ListItemButton');
var NavigateNextIcon = require('@mui/icons-material/NavigateNext');
var Breadcrumbs = require('@mui/material/Breadcrumbs');
var Link = require('@mui/material/Link');
var useMediaQuery = require('@mui/material/useMediaQuery');
var CardMedia = require('@mui/material/CardMedia');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var CloseIcon__default = /*#__PURE__*/_interopDefault(CloseIcon);
var Dialog__default = /*#__PURE__*/_interopDefault(Dialog);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var IconButton__default = /*#__PURE__*/_interopDefault(IconButton);
var Box5__default = /*#__PURE__*/_interopDefault(Box5);
var Typography4__default = /*#__PURE__*/_interopDefault(Typography4);
var Button5__default = /*#__PURE__*/_interopDefault(Button5);
var DialogContentText__default = /*#__PURE__*/_interopDefault(DialogContentText);
var InboxOutlinedIcon__default = /*#__PURE__*/_interopDefault(InboxOutlinedIcon);
var ErrorOutlineIcon__default = /*#__PURE__*/_interopDefault(ErrorOutlineIcon);
var RefreshIcon__default = /*#__PURE__*/_interopDefault(RefreshIcon);
var Chip__default = /*#__PURE__*/_interopDefault(Chip);
var Checkbox__default = /*#__PURE__*/_interopDefault(Checkbox);
var Paper__default = /*#__PURE__*/_interopDefault(Paper);
var Skeleton__default = /*#__PURE__*/_interopDefault(Skeleton);
var Table__default = /*#__PURE__*/_interopDefault(Table);
var TableBody__default = /*#__PURE__*/_interopDefault(TableBody);
var TableCell__default = /*#__PURE__*/_interopDefault(TableCell);
var TableContainer__default = /*#__PURE__*/_interopDefault(TableContainer);
var TableHead__default = /*#__PURE__*/_interopDefault(TableHead);
var TablePagination__default = /*#__PURE__*/_interopDefault(TablePagination);
var TableRow__default = /*#__PURE__*/_interopDefault(TableRow);
var TableSortLabel__default = /*#__PURE__*/_interopDefault(TableSortLabel);
var TrendingDownIcon__default = /*#__PURE__*/_interopDefault(TrendingDownIcon);
var TrendingFlatIcon__default = /*#__PURE__*/_interopDefault(TrendingFlatIcon);
var TrendingUpIcon__default = /*#__PURE__*/_interopDefault(TrendingUpIcon);
var Card__default = /*#__PURE__*/_interopDefault(Card);
var CardContent__default = /*#__PURE__*/_interopDefault(CardContent);
var CardHeader__default = /*#__PURE__*/_interopDefault(CardHeader);
var ClearIcon__default = /*#__PURE__*/_interopDefault(ClearIcon);
var SearchIcon__default = /*#__PURE__*/_interopDefault(SearchIcon);
var InputAdornment__default = /*#__PURE__*/_interopDefault(InputAdornment);
var TextField4__default = /*#__PURE__*/_interopDefault(TextField4);
var MenuItem__default = /*#__PURE__*/_interopDefault(MenuItem);
var VisibilityIcon__default = /*#__PURE__*/_interopDefault(VisibilityIcon);
var VisibilityOffIcon__default = /*#__PURE__*/_interopDefault(VisibilityOffIcon);
var FormControlLabel__default = /*#__PURE__*/_interopDefault(FormControlLabel);
var Switch__default = /*#__PURE__*/_interopDefault(Switch);
var CheckIcon__default = /*#__PURE__*/_interopDefault(CheckIcon);
var TranslateIcon__default = /*#__PURE__*/_interopDefault(TranslateIcon);
var ListItemIcon__default = /*#__PURE__*/_interopDefault(ListItemIcon);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);
var Menu__default = /*#__PURE__*/_interopDefault(Menu);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var Stack3__default = /*#__PURE__*/_interopDefault(Stack3);
var Drawer2__default = /*#__PURE__*/_interopDefault(Drawer2);
var Step__default = /*#__PURE__*/_interopDefault(Step);
var StepLabel__default = /*#__PURE__*/_interopDefault(StepLabel);
var Stepper__default = /*#__PURE__*/_interopDefault(Stepper);
var CalendarMonthOutlinedIcon__default = /*#__PURE__*/_interopDefault(CalendarMonthOutlinedIcon);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);
var ExpandLessIcon__default = /*#__PURE__*/_interopDefault(ExpandLessIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefault(ExpandMoreIcon);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var List__default = /*#__PURE__*/_interopDefault(List);
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var NavigateNextIcon__default = /*#__PURE__*/_interopDefault(NavigateNextIcon);
var Breadcrumbs__default = /*#__PURE__*/_interopDefault(Breadcrumbs);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var useMediaQuery__default = /*#__PURE__*/_interopDefault(useMediaQuery);
var CardMedia__default = /*#__PURE__*/_interopDefault(CardMedia);

// src/components/AppDialog.tsx
function NamiosMarkSvg({ size = 28, color }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: size, height: size, viewBox: "65.4 0 357 357", role: "img", "aria-label": "Namios Logo", children: /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M243.9 0C342.483 0 422.4 79.9172 422.4 178.5C422.4 277.083 342.483 357 243.9 357C145.317 357 65.4 277.083 65.4 178.5C65.4 79.9172 145.317 0 243.9 0ZM310.959 123.084C282.621 110.737 261.859 111.102 245.603 117.036C224.886 124.599 209.317 141.851 193.82 160.904C186.307 170.141 178.662 179.965 170.831 188.264C162.968 196.595 154.239 204.152 144.056 208.622C133.572 213.224 122.004 214.351 109.132 210.549C101.316 208.24 93.1868 204.165 84.6002 198.203C94.3132 277.55 161.929 339 243.9 339C323.826 339 390.103 280.577 402.365 204.107C383.535 221.966 364.908 230.599 347.532 231.866C324.416 233.552 305.636 222.043 294.281 206.255C283.077 190.676 278.393 169.948 284.417 151.887C288.56 139.462 297.435 129.246 310.959 123.084ZM243.9 18C156.6 18 85.5799 87.6993 83.4498 174.486C95.7717 185.135 105.871 190.816 114.232 193.286C122.972 195.868 130.174 195.059 136.822 192.141C143.772 189.09 150.539 183.54 157.741 175.909C164.974 168.245 171.961 159.252 179.855 149.547C195.17 130.717 213.508 109.591 239.431 100.128C266.056 90.4092 298.584 93.6021 340.923 118.22C344.325 120.197 346.047 124.155 345.176 127.992C344.305 131.829 341.043 134.655 337.122 134.971C315.166 136.736 305.095 146.78 301.493 157.582C297.626 169.176 300.411 183.949 308.894 195.745C317.227 207.331 330.354 215.072 346.222 213.914C361.815 212.776 382.028 18 243.9 18Z",
      fill: color || "currentColor"
    }
  ) });
}
var beforeKeyframes = (lat, thickness) => styles.keyframes`
  0% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  35% { width: ${lat * 2}px; boxShadow: 0 ${-thickness}px 0 0, 0 ${thickness}px 0 0; }
  70% { width: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  100% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
`;
var afterKeyframes = (lat, thickness) => styles.keyframes`
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
  const theme = styles.useTheme();
  const loaderColor = color || (theme.palette.mode === "light" ? "#2563EB" : "#60A5FA");
  const thickness = Math.max(4, Math.round(size / 5));
  const lat = Math.round((size - thickness) / 2);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box5__default.default,
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
        showLogo && /* @__PURE__ */ jsxRuntime.jsxs(
          Box5__default.default,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: loaderColor
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(NamiosMarkSvg, { size: 26, color: loaderColor }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Typography4__default.default,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          Box5__default.default,
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
        label && /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
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
var OverlayRoot = styles.styled("div")(({ theme }) => ({
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
  return /* @__PURE__ */ jsxRuntime.jsx(OverlayRoot, { children: /* @__PURE__ */ jsxRuntime.jsx(NamiosLoader, { size, label }) });
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
  const { t } = reactI18next.useTranslation();
  const handleClose = (_event, reason) => {
    if (disableClose && (reason === "backdropClick" || reason === "escapeKeyDown")) return;
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(Dialog__default.default, { open, onClose: handleClose, fullWidth: true, maxWidth: size, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      t(titleKey, titleParams),
      /* @__PURE__ */ jsxRuntime.jsx(
        IconButton__default.default,
        {
          "aria-label": t("common:actions.close"),
          onClick: onClose,
          edge: "end",
          size: "small",
          children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon__default.default, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { sx: { position: "relative" }, children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: loading })
    ] }),
    actions ? /* @__PURE__ */ jsxRuntime.jsx(DialogActions__default.default, { children: actions }) : null
  ] });
}
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(Dialog__default.default, { open, onClose: onCancel, maxWidth: "xs", fullWidth: true, sx: { zIndex: (theme) => theme.zIndex.modal + 200 }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogTitle__default.default, { children: t(titleKey) }),
    /* @__PURE__ */ jsxRuntime.jsx(DialogContent__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(DialogContentText__default.default, { children: t(messageKey, messageParams) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onCancel, color: "inherit", children: t(cancelKey) }),
      /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onConfirm, variant: "contained", color: VARIANT_COLOR[variant], autoFocus: true, children: t(confirmKey) })
    ] })
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
  const { t } = reactI18next.useTranslation();
  const form = reactHookForm.useForm({
    resolver: zod.zodResolver(schema),
    defaultValues,
    mode: "onBlur"
  });
  const { reset } = form;
  react.useEffect(() => {
    if (open) reset(defaultValues);
  }, [open, defaultValues, reset]);
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    AppDialog,
    {
      open,
      titleKey,
      titleParams,
      size,
      loading: submitting,
      disableClose: form.formState.isDirty,
      onClose,
      actions: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onClose, color: "inherit", disabled: submitting, children: t(cancelKey) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button5__default.default,
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
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var EmptyStateRoot = styles.styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
var EmptyStateIcon = styles.styled("div")(({ theme }) => ({
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(EmptyStateRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(EmptyStateIcon, { children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(InboxOutlinedIcon__default.default, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", color: "text.primary", children: t(titleKey) }),
    descriptionKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", children: t(descriptionKey, descriptionParams) }) : null,
    action
  ] });
}
var ErrorStateRoot = styles.styled("div")(({ theme }) => ({
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(ErrorStateRoot, { role: "alert", children: [
    /* @__PURE__ */ jsxRuntime.jsx(ErrorOutlineIcon__default.default, { color: "error", sx: { fontSize: 40 } }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", children: t(titleKey) }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", children: t(messageKey) }),
    onRetry ? /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onRetry, startIcon: /* @__PURE__ */ jsxRuntime.jsx(RefreshIcon__default.default, {}), variant: "outlined", children: t("common:actions.retry") }) : null
  ] });
}
function PageSkeleton({ label }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box5__default.default,
    {
      sx: {
        display: "flex",
        minHeight: "65vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(NamiosLoader, { size: 54, label })
    }
  );
}

// src/types/entities.ts
var Status = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED"
};

// src/constants/status-colors.ts
var STATUS_COLORS = {
  [Status.ACTIVE]: "success",
  [Status.INACTIVE]: "default",
  [Status.PENDING]: "info",
  [Status.SUSPENDED]: "warning",
  [Status.EXPIRED]: "error",
  [Status.CANCELLED]: "error"
};
function StatusChip({ status, size = "small" }) {
  const { t } = reactI18next.useTranslation();
  const color = STATUS_COLORS[status];
  return /* @__PURE__ */ jsxRuntime.jsx(
    Chip__default.default,
    {
      label: t(`common:status.${status}`),
      size,
      color: color === "default" ? void 0 : color,
      variant: color === "default" ? "outlined" : "filled",
      sx: color === "default" ? void 0 : { color: "#fff" }
    }
  );
}

// src/constants/app.ts
var DATE_FORMATS = {
  DATE: { year: "numeric", month: "short", day: "numeric" },
  DATE_TIME: { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" },
  MONTH_YEAR: { year: "numeric", month: "short" }
};
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var TableToolbar = styles.styled("div")(({ theme }) => ({
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
var ClickableRow = styles.styled(TableRow__default.default, {
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
  const { t } = reactI18next.useTranslation();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Paper__default.default, { variant: "outlined", sx: { borderRadius: 3, overflow: "hidden" }, children: [
    toolbar ? /* @__PURE__ */ jsxRuntime.jsx(TableToolbar, { children: toolbar }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(TableContainer__default.default, { children: /* @__PURE__ */ jsxRuntime.jsxs(Table__default.default, { size: "small", "aria-busy": isLoading, children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableHead__default.default, { children: /* @__PURE__ */ jsxRuntime.jsxs(TableRow__default.default, { children: [
        selectable ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntime.jsx(
          Checkbox__default.default,
          {
            checked: allSelected,
            indeterminate: !allSelected && someSelected,
            onChange: toggleAll,
            inputProps: { "aria-label": t("common:table.selectAll") }
          }
        ) }) : null,
        columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(
          TableCell__default.default,
          {
            align: column.align ?? "left",
            sx: { width: column.width },
            sortDirection: sortBy === column.key ? sortDir : false,
            children: column.sortable && onSortChange ? /* @__PURE__ */ jsxRuntime.jsx(
              TableSortLabel__default.default,
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
        rowActions ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: "right", children: t("common:table.actions") }) : null
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(TableBody__default.default, { children: [
        isLoading ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "text", height: 28 }) }) }, i)) : null,
        !isLoading && isError ? /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, sx: { border: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(ErrorState, { onRetry }) }) }) : null,
        !isLoading && !isError && rows.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, sx: { border: 0 }, children: emptyState ?? /* @__PURE__ */ jsxRuntime.jsx(EmptyState, { titleKey: "common:states.noResults" }) }) }) : null,
        !isLoading && !isError ? rows.map((row) => /* @__PURE__ */ jsxRuntime.jsxs(
          ClickableRow,
          {
            clickable: Boolean(onRowClick),
            hover: Boolean(onRowClick),
            selected: selected.includes(row.id),
            onClick: onRowClick ? () => {
              onRowClick(row);
            } : void 0,
            children: [
              selectable ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { padding: "checkbox", onClick: (e) => {
                e.stopPropagation();
              }, children: /* @__PURE__ */ jsxRuntime.jsx(
                Checkbox__default.default,
                {
                  checked: selected.includes(row.id),
                  onChange: () => {
                    toggleOne(row.id);
                  },
                  inputProps: { "aria-label": t("common:table.selectRow") }
                }
              ) }) : null,
              columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: column.align ?? "left", children: renderCell(row, column) }, String(column.key))),
              rowActions ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: "right", onClick: (e) => {
                e.stopPropagation();
              }, children: rowActions(row) }) : null
            ]
          },
          row.id
        )) : null
      ] })
    ] }) }),
    !compact ? /* @__PURE__ */ jsxRuntime.jsx(
      TablePagination__default.default,
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
var StatCardRoot = styles.styled(Card__default.default, {
  shouldForwardProp: (prop) => prop !== "compactSize"
})(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(1.5, 2) : theme.spacing(2.5),
  display: "flex",
  flexDirection: "column",
  gap: compactSize ? theme.spacing(0.75) : theme.spacing(1),
  height: "100%"
}));
var KpiHeaderRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1)
}));
var IconTile = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "colorKey" && prop !== "compact"
})(({ theme, colorKey, compact }) => ({
  display: "inline-flex",
  padding: theme.spacing(compact ? 0.75 : 1.25),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: styles.alpha(theme.palette[colorKey].main, 0.12),
  color: theme.palette[colorKey].main
}));
var DeltaRow = styles.styled("div", {
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
  up: /* @__PURE__ */ jsxRuntime.jsx(TrendingUpIcon__default.default, { fontSize: "inherit" }),
  down: /* @__PURE__ */ jsxRuntime.jsx(TrendingDownIcon__default.default, { fontSize: "inherit" }),
  flat: /* @__PURE__ */ jsxRuntime.jsx(TrendingFlatIcon__default.default, { fontSize: "inherit" })
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
  const { t } = reactI18next.useTranslation();
  const isCompact = size === "small" || size === "mini";
  const valueNode = loading ? /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "text", width: 80, height: isCompact ? 28 : 40 }) : /* @__PURE__ */ jsxRuntime.jsx(
    Typography4__default.default,
    {
      variant: isCompact ? "h5" : "h4",
      component: "div",
      sx: isCompact ? { fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.2 } : { fontWeight: 800 },
      children: value
    }
  );
  const deltaNode = delta && !loading ? /* @__PURE__ */ jsxRuntime.jsxs(DeltaRow, { trend, children: [
    TREND_ICONS[trend],
    delta
  ] }) : null;
  const subtitleNode = subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", color: "text.secondary", sx: { fontSize: "0.72rem" }, children: t(subtitleKey, subtitleParams) }) : null;
  if (layout === "kpi") {
    return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(KpiHeaderRow, { children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx(IconTile, { colorKey: iconColor, compact: isCompact, children: icon }) : /* @__PURE__ */ jsxRuntime.jsx("span", {}),
        badge ?? /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "overline",
            color: "text.secondary",
            sx: { textAlign: "right", lineHeight: 1.3, fontSize: isCompact ? "0.65rem" : "0.72rem", fontWeight: 700, letterSpacing: "0.06em" },
            children: t(labelKey)
          }
        )
      ] }),
      badge ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "overline", color: "text.secondary", sx: { fontSize: isCompact ? "0.65rem" : "0.72rem", fontWeight: 700 }, children: t(labelKey) }) : null,
      valueNode,
      deltaNode ?? subtitleNode
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Typography4__default.default,
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(Card__default.default, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      CardHeader__default.default,
      {
        title: t(titleKey, titleParams),
        titleTypographyProps: { variant: "h6" },
        action
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent__default.default, { sx: { pt: 0 }, children })
  ] });
}
var ListRoot = styles.styled("dl")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(140px, auto) 1fr",
  columnGap: theme.spacing(3),
  rowGap: theme.spacing(1.5),
  margin: 0
}));
var Term = styles.styled("dt")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary
}));
var Detail = styles.styled("dd")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  margin: 0
}));
function DescriptionList({ items }) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(ListRoot, { children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Term, { children: t(item.labelKey, item.labelParams) }),
    /* @__PURE__ */ jsxRuntime.jsx(Detail, { children: item.value })
  ] }, item.labelKey)) });
}
function SearchField({
  value,
  onChange,
  placeholderKey = "common:actions.search",
  fullWidth = false,
  autoFocus = false
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    TextField4__default.default,
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
        startAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "start", children: /* @__PURE__ */ jsxRuntime.jsx(SearchIcon__default.default, { fontSize: "small" }) }),
        endAdornment: value ? /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx(
          IconButton__default.default,
          {
            size: "small",
            "aria-label": t("common:actions.clear"),
            onClick: () => {
              onChange("");
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(ClearIcon__default.default, { fontSize: "small" })
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    TextField4__default.default,
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
        emptyOptionKey ? /* @__PURE__ */ jsxRuntime.jsx(MenuItem__default.default, { value: "", children: t(emptyOptionKey) }) : null,
        options.map((option) => /* @__PURE__ */ jsxRuntime.jsxs(MenuItem__default.default, { value: option.value, disabled: option.disabled, children: [
          option.icon,
          option.label
        ] }, String(option.value)))
      ]
    }
  );
}
var PasswordField = react.forwardRef(
  function PasswordField2(props, ref) {
    const { t } = reactI18next.useTranslation();
    const [visible, setVisible] = react.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsx(
      TextField4__default.default,
      {
        ...props,
        inputRef: ref ?? props.inputRef,
        type: visible ? "text" : "password",
        InputProps: {
          ...props.InputProps,
          endAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton__default.default,
            {
              "aria-label": t(
                visible ? "common:actions.hidePassword" : "common:actions.showPassword"
              ),
              onClick: () => {
                setVisible((v) => !v);
              },
              edge: "end",
              size: "small",
              children: visible ? /* @__PURE__ */ jsxRuntime.jsx(VisibilityOffIcon__default.default, { fontSize: "small" }) : /* @__PURE__ */ jsxRuntime.jsx(VisibilityIcon__default.default, { fontSize: "small" })
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
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
        return type === "password" ? /* @__PURE__ */ jsxRuntime.jsx(PasswordField, { ...shared }) : /* @__PURE__ */ jsxRuntime.jsx(TextField4__default.default, { ...shared, type });
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsxRuntime.jsx(
        TextField4__default.default,
        {
          ...field,
          select: true,
          label: t(labelKey),
          error: Boolean(fieldState.error),
          helperText: fieldState.error?.message ? t(fieldState.error.message) : void 0,
          fullWidth: true,
          margin: "normal",
          children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(MenuItem__default.default, { value: option.value, disabled: option.disabled, children: option.label }, String(option.value)))
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsxRuntime.jsx(
        FormControlLabel__default.default,
        {
          control: /* @__PURE__ */ jsxRuntime.jsx(Switch__default.default, { checked: Boolean(field.value), onChange: field.onChange }),
          label: t(labelKey)
        }
      )
    }
  );
}

// src/constants/locales.ts
var SUPPORTED_LOCALES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "si", label: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD", dir: "ltr" },
  { code: "ta", label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", dir: "ltr" },
  { code: "es", label: "Espa\xF1ol", dir: "ltr" },
  { code: "zh", label: "\u4E2D\u6587", dir: "ltr" },
  { code: "fr", label: "Fran\xE7ais", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" }
];
function LanguageSwitcher({ variant = "text" }) {
  const { i18n, t } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = react.useState(null);
  const current = SUPPORTED_LOCALES.find((locale) => i18n.language.startsWith(locale.code)) ?? SUPPORTED_LOCALES[0];
  const handleSelect = (code) => {
    void i18n.changeLanguage(code);
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button5__default.default,
      {
        color: "inherit",
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(TranslateIcon__default.default, {}),
        onClick: (e) => {
          setAnchorEl(e.currentTarget);
        },
        "aria-label": t("common:actions.changeLanguage"),
        "aria-haspopup": "menu",
        children: variant === "text" ? current.label : null
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      Menu__default.default,
      {
        anchorEl,
        open: Boolean(anchorEl),
        onClose: () => {
          setAnchorEl(null);
        },
        children: SUPPORTED_LOCALES.map((locale) => /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem__default.default,
          {
            selected: locale.code === current.code,
            onClick: () => {
              handleSelect(locale.code);
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { children: locale.code === current.code ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon__default.default, { fontSize: "small" }) : null }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { children: locale.label })
            ]
          },
          locale.code
        ))
      }
    )
  ] });
}
var TopBarSlot = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
var TopBarNav = styles.styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flexGrow: 1,
  justifyContent: "center"
}));
function AppTopBar({ logo, nav, actions, onMenuClick }) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    AppBar__default.default,
    {
      position: "fixed",
      color: "inherit",
      elevation: 0,
      sx: (theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer + 1
      }),
      children: /* @__PURE__ */ jsxRuntime.jsxs(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }), children: [
        /* @__PURE__ */ jsxRuntime.jsxs(TopBarSlot, { children: [
          onMenuClick ? /* @__PURE__ */ jsxRuntime.jsx(
            IconButton__default.default,
            {
              "aria-label": t("common:actions.openMenu"),
              onClick: onMenuClick,
              edge: "start",
              sx: { display: { md: "none" } },
              children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon__default.default, {})
            }
          ) : null,
          logo
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(TopBarNav, { children: nav }),
        /* @__PURE__ */ jsxRuntime.jsx(TopBarSlot, { children: actions })
      ] })
    }
  );
}

// src/utils/date.ts
var DAY_MS = 24 * 60 * 60 * 1e3;
function isoDate(value) {
  const iso = new Date(value).toISOString();
  return iso.slice(0, 10);
}
function todayIso() {
  const today = /* @__PURE__ */ new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function addDays(date, n) {
  return isoDate((/* @__PURE__ */ new Date(`${isoDate(date)}T00:00:00Z`)).getTime() + n * DAY_MS);
}
function differenceInDays(a, b) {
  const isoDayPattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDayPattern.test(a) || !isoDayPattern.test(b)) return 0;
  const start = (/* @__PURE__ */ new Date(`${a}T00:00:00Z`)).getTime();
  const end = (/* @__PURE__ */ new Date(`${b}T00:00:00Z`)).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 0;
  return Math.round((end - start) / DAY_MS);
}
function dateRangeDays(start, count) {
  return Array.from({ length: count }, (_, i) => addDays(start, i));
}
var RESOURCE_COL_WIDTH = 148;
var DAY_COL_WIDTH = 76;
var ROW_HEIGHT = 52;
var SPAN_INSET = 8;
var MatrixRoot = styles.styled("div")(({ theme }) => ({
  overflowX: "auto",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius
}));
var HeaderRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  zIndex: 3
}));
var ResourceCell = styles.styled("div")(({ theme }) => ({
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
var DayHeaderCell = styles.styled("div")(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  padding: theme.spacing(1, 0),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2
}));
var TodayBubble = styles.styled("span")(({ theme }) => ({
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
var BodyRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": { borderBottom: "none" },
  backgroundColor: theme.palette.background.paper
}));
var RowTrack = styles.styled("div")({
  position: "relative",
  height: ROW_HEIGHT,
  display: "flex"
});
var DayCell = styles.styled("button")(({ theme }) => ({
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
var SpanBar = styles.styled("button")(({ theme }) => ({
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
  const { t, i18n } = reactI18next.useTranslation();
  const theme = styles.useTheme();
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);
  const spanColor = (key) => {
    const paletteColor = key === "neutral" ? theme.palette.neutral : theme.palette[key];
    return {
      backgroundColor: styles.alpha(paletteColor.main, theme.palette.mode === "light" ? 0.09 : 0.22),
      border: `1px solid ${styles.alpha(paletteColor.main, 0.55)}`,
      color: theme.palette.mode === "light" ? paletteColor.dark : paletteColor.light
    };
  };
  const monthFormat = new Intl.DateTimeFormat(i18n.language, { month: "short" });
  const dayFormat = new Intl.DateTimeFormat(i18n.language, { day: "numeric" });
  if (loading) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "rounded", height: ROW_HEIGHT * 6 }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    legend ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { component: "div", variant: "body2", sx: { display: "flex", justifyContent: "flex-end", mb: 1 }, children: legend }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(MatrixRoot, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: RESOURCE_COL_WIDTH + days * DAY_COL_WIDTH }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(HeaderRow, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "overline", color: "text.secondary", children: t(resourceLabelKey) }) }),
        dayList.map((date) => {
          const isToday = date === todayDate;
          const dateObj = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
          return /* @__PURE__ */ jsxRuntime.jsxs(DayHeaderCell, { "aria-current": isToday ? "date" : void 0, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", color: "text.secondary", sx: { textTransform: "uppercase" }, children: monthFormat.format(dateObj) }),
            isToday ? /* @__PURE__ */ jsxRuntime.jsx(TodayBubble, { "aria-label": t("common:timeline.today"), children: dayFormat.format(dateObj) }) : /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", children: dayFormat.format(dateObj) })
          ] }, date);
        })
      ] }),
      resources.map((resource) => {
        const rowSpans = spans.filter(
          (span) => span.resourceId === resource.id && span.startDate < endDate && span.endDate > startDate
        );
        return /* @__PURE__ */ jsxRuntime.jsxs(BodyRow, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { children: renderResource(resource) }),
          /* @__PURE__ */ jsxRuntime.jsxs(RowTrack, { style: { width: days * DAY_COL_WIDTH }, children: [
            dayList.map((date) => /* @__PURE__ */ jsxRuntime.jsx(
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
              return /* @__PURE__ */ jsxRuntime.jsx(
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(Stack3__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, role: "tablist", children: options.map((option) => {
    const active = option.value === value;
    const label = option.count !== void 0 ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Chip__default.default,
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
var DrawerHeader = styles.styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper
}));
var DrawerContent = styles.styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(3),
  position: "relative"
}));
var DrawerFooter = styles.styled("footer")(({ theme }) => ({
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
  const { t } = reactI18next.useTranslation();
  const resolvedWidth = typeof width === "string" && width in DRAWER_WIDTHS ? DRAWER_WIDTHS[width] : width;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Drawer2__default.default,
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
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerHeader, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", spacing: 1.5, alignItems: "center", sx: { flexGrow: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", noWrap: true, children: title ?? (titleKey ? t(titleKey, titleParams) : null) }),
            statusChip
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton__default.default, { "aria-label": t("common:actions.close"), onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon__default.default, { fontSize: "small" }) })
        ] }),
        tabs,
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerContent, { children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: loading })
        ] }),
        footer ? /* @__PURE__ */ jsxRuntime.jsx(DrawerFooter, { children: footer }) : null
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
  const { t } = reactI18next.useTranslation();
  const isLast = activeStep === steps.length - 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(Dialog__default.default, { open, onClose: onCancel, fullWidth: true, maxWidth: "lg", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      t(titleKey),
      /* @__PURE__ */ jsxRuntime.jsx(IconButton__default.default, { "aria-label": t("common:actions.close"), onClick: onCancel, size: "small", edge: "end", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon__default.default, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Stepper__default.default, { activeStep, sx: { px: 3, pb: 2 }, children: steps.map((step) => /* @__PURE__ */ jsxRuntime.jsx(Step__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(StepLabel__default.default, { children: t(step.labelKey) }) }, step.labelKey)) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { dividers: true, sx: { position: "relative", minHeight: 320 }, children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: submitting })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { sx: { justifyContent: "space-between", px: 3 }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onCancel, color: "inherit", disabled: submitting, children: t("common:actions.cancel") }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onBack, color: "inherit", disabled: activeStep === 0 || submitting, sx: { mr: 1 }, children: t(backKey) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button5__default.default,
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
var DateRangePreset = {
  LAST_7: "last7",
  NEXT_7: "next7",
  NEXT_14: "next14",
  THIS_MONTH: "thisMonth"
};
function DateRangeButton({ range }) {
  const { t, i18n } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = react.useState(null);
  const [draftFrom, setDraftFrom] = react.useState(range.from);
  const [draftTo, setDraftTo] = react.useState(range.to);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button5__default.default,
      {
        variant: "outlined",
        color: "inherit",
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(CalendarMonthOutlinedIcon__default.default, {}),
        onClick: (e) => {
          openPopover(e.currentTarget);
        },
        sx: { borderRadius: 999, whiteSpace: "nowrap" },
        "aria-label": t("common:dateRange.label"),
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      Popover__default.default,
      {
        open: Boolean(anchorEl),
        anchorEl,
        onClose: () => {
          setAnchorEl(null);
        },
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        children: /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { spacing: 2, sx: { p: 2, width: 300 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Stack3__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: Object.values(DateRangePreset).map((preset) => /* @__PURE__ */ jsxRuntime.jsx(
            Chip__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField4__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField4__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            Button5__default.default,
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
var NavItemButton = styles.styled(ListItemButton__default.default)(({ theme }) => ({
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
  const { t } = reactI18next.useTranslation();
  const [openMap, setOpenMap] = react.useState({});
  return /* @__PURE__ */ jsxRuntime.jsx(List__default.default, { component: depth === 0 ? "nav" : "div", disablePadding: depth > 0, children: items.map((item) => {
    const isActive = activePath === item.path || !item.exact && item.path !== "/" && activePath.startsWith(`${item.path}/`);
    const hasChildren = Boolean(item.children?.length);
    const isOpen = openMap[item.path] ?? isActive;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
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
            item.icon ? /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { sx: { minWidth: 40 }, children: item.icon }) : null,
            /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { primary: t(item.labelKey) }),
            hasChildren ? isOpen ? /* @__PURE__ */ jsxRuntime.jsx(ExpandLessIcon__default.default, {}) : /* @__PURE__ */ jsxRuntime.jsx(ExpandMoreIcon__default.default, {}) : null
          ]
        }
      ),
      hasChildren && item.children ? /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
    /* @__PURE__ */ jsxRuntime.jsx(NavList, { items, activePath, onNavigate })
  ] });
  if (temporary) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Drawer2__default.default,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Drawer2__default.default,
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
var HeaderRoot = styles.styled("header")(({ theme }) => ({
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(HeaderRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      breadcrumbs && breadcrumbs.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(Breadcrumbs__default.default, { separator: /* @__PURE__ */ jsxRuntime.jsx(NavigateNextIcon__default.default, { fontSize: "small" }), sx: { mb: 0.5 }, children: breadcrumbs.map(
        (crumb) => crumb.path && onNavigate ? /* @__PURE__ */ jsxRuntime.jsx(
          Link__default.default,
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
        ) : /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.primary", children: t(crumb.labelKey) }, crumb.labelKey)
      ) }) : null,
      /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h4", component: "h1", children: title ?? t(titleKey, titleParams) }),
      subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: t(subtitleKey, subtitleParams) }) : null
    ] }),
    actions ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: actions }) : null
  ] });
}
var AuthRoot = styles.styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default
}));
var AuthTopRight = styles.styled("div")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(3)
}));
var AuthCard = styles.styled(Card__default.default)(({ theme }) => ({
  width: "100%",
  maxWidth: 420,
  boxShadow: theme.custom.raisedShadow
}));
var AuthLogo = styles.styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: "flex",
  justifyContent: "center"
}));
function AuthLayout({ children, logo, topRight }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(AuthRoot, { children: [
    topRight ? /* @__PURE__ */ jsxRuntime.jsx(AuthTopRight, { children: topRight }) : null,
    logo ? /* @__PURE__ */ jsxRuntime.jsx(AuthLogo, { children: logo }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(AuthCard, { children: /* @__PURE__ */ jsxRuntime.jsx(CardContent__default.default, { sx: { p: 4 }, children }) })
  ] });
}
function useMediaBreakpoint() {
  const theme = styles.useTheme();
  const isMobile = useMediaQuery__default.default(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery__default.default(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery__default.default(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery__default.default(theme.breakpoints.up("lg"));
  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}
var LayoutRoot = styles.styled("div")({
  display: "flex",
  minHeight: "100vh"
});
var ContentArea = styles.styled("main")(({ theme }) => ({
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
  const [mobileOpen, setMobileOpen] = react.useState(false);
  const handleNavigate = (path) => {
    setMobileOpen(false);
    onNavigate(path);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(LayoutRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      AppTopBar,
      {
        logo,
        actions: topBarActions,
        onMenuClick: isDesktop ? void 0 : () => {
          setMobileOpen((open) => !open);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsxs(ContentArea, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
      children
    ] })
  ] });
}
var LaneContainer = styles.styled(Box5__default.default)(({ theme }) => ({
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
var ColumnHeader = styles.styled(Box5__default.default)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1.5),
  borderBottom: `2px solid ${theme.palette.divider}`
}));
var ItemsScrollArea = styles.styled(Box5__default.default)(({ theme }) => ({
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Stack3__default.default,
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
        return /* @__PURE__ */ jsxRuntime.jsxs(LaneContainer, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(ColumnHeader, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", spacing: 1.5, alignItems: "center", children: [
              column.color && /* @__PURE__ */ jsxRuntime.jsx(
                Box5__default.default,
                {
                  sx: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: column.color
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "subtitle2", sx: { fontWeight: 700, letterSpacing: "0.05em" }, children: column.title })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Card__default.default,
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
                children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", sx: { fontWeight: 700 }, children: laneItems.length })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ItemsScrollArea, { children: laneItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx(Box5__default.default, { sx: { position: "relative" }, children: renderItem(item) }, getItemId(item))) })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box5__default.default,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          Box5__default.default,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          Box5__default.default,
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
var DEFAULT_CURRENCY = "LKR";
function useLocaleFormat() {
  const { i18n } = reactI18next.useTranslation();
  const locale = i18n.language;
  return react.useMemo(
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
var StyledCard = styles.styled(Card__default.default, {
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
var ImageContainer = styles.styled(Box5__default.default)({
  position: "relative",
  paddingTop: "60%",
  // 5:3 Aspect Ratio
  width: "100%",
  overflow: "hidden"
});
var MediaOverlay = styles.styled(Box5__default.default)({
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    StyledCard,
    {
      activeBorderColor,
      hasAction: Boolean(onClick),
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(ImageContainer, { children: [
          imageUrl ? /* @__PURE__ */ jsxRuntime.jsx(
            CardMedia__default.default,
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
          ) : /* @__PURE__ */ jsxRuntime.jsx(
            Box5__default.default,
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
              children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", sx: { fontWeight: 600 }, children: "No Image" })
            }
          ),
          actionOverlay && /* @__PURE__ */ jsxRuntime.jsx(MediaOverlay, { children: actionOverlay })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(CardContent__default.default, { sx: { p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "subtitle1", sx: { fontWeight: 700, lineHeight: 1.2 }, noWrap: true, children: name }),
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "subtitle1", color: "primary", sx: { fontWeight: 700 }, children: formattedPrice })
          ] }),
          description && /* @__PURE__ */ jsxRuntime.jsx(
            Typography4__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Box5__default.default, { sx: { flexGrow: 1 } }),
          /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, alignItems: "center", sx: { mt: 1 }, children: [
            badges?.map((badge, idx) => /* @__PURE__ */ jsxRuntime.jsx(Box5__default.default, { children: badge }, idx)),
            /* @__PURE__ */ jsxRuntime.jsx(Box5__default.default, { sx: { flexGrow: 1 } }),
            stockLabel && /* @__PURE__ */ jsxRuntime.jsx(
              Chip__default.default,
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

exports.AppDialog = AppDialog;
exports.AppDrawer = AppDrawer;
exports.AppSideNav = AppSideNav;
exports.AppTopBar = AppTopBar;
exports.AuthLayout = AuthLayout;
exports.ConfirmDialog = ConfirmDialog;
exports.DashboardLayout = DashboardLayout;
exports.DataTable = DataTable;
exports.DateRangeButton = DateRangeButton;
exports.DescriptionList = DescriptionList;
exports.EmptyState = EmptyState;
exports.ErrorState = ErrorState;
exports.FormDialog = FormDialog;
exports.FormSelect = FormSelect;
exports.FormSwitch = FormSwitch;
exports.FormTextField = FormTextField;
exports.KanbanBoard = KanbanBoard;
exports.LanguageSwitcher = LanguageSwitcher;
exports.LoadingOverlay = LoadingOverlay;
exports.MenuCard = MenuCard;
exports.NamiosLoader = NamiosLoader;
exports.NamiosMarkSvg = NamiosMarkSvg;
exports.PageHeader = PageHeader;
exports.PageSkeleton = PageSkeleton;
exports.PasswordField = PasswordField;
exports.SearchField = SearchField;
exports.SectionCard = SectionCard;
exports.SelectField = SelectField;
exports.SplitPaneLayout = SplitPaneLayout;
exports.StatCard = StatCard;
exports.StatusChip = StatusChip;
exports.StatusFilterChips = StatusFilterChips;
exports.TimelineMatrix = TimelineMatrix;
exports.WizardDialog = WizardDialog;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map