'use strict';

var CloseIcon5 = require('@mui/icons-material/Close');
var Dialog = require('@mui/material/Dialog');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogTitle = require('@mui/material/DialogTitle');
var IconButton8 = require('@mui/material/IconButton');
var reactI18next = require('react-i18next');
var react = require('react');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');
var styles = require('@mui/material/styles');
var Box7 = require('@mui/material/Box');
var Typography9 = require('@mui/material/Typography');
var Button5 = require('@mui/material/Button');
var CircularProgress = require('@mui/material/CircularProgress');
var Popover = require('@mui/material/Popover');
var DialogContentText = require('@mui/material/DialogContentText');
var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');
var Stack4 = require('@mui/material/Stack');
var Paper = require('@mui/material/Paper');
var ErrorOutlineIcon = require('@mui/icons-material/ErrorOutline');
var RefreshIcon = require('@mui/icons-material/Refresh');
var Chip6 = require('@mui/material/Chip');
var Checkbox = require('@mui/material/Checkbox');
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
var Step = require('@mui/material/Step');
var StepLabel = require('@mui/material/StepLabel');
var Stepper = require('@mui/material/Stepper');
var CalendarMonthOutlinedIcon = require('@mui/icons-material/CalendarMonthOutlined');
var ExpandLessIcon = require('@mui/icons-material/ExpandLess');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var Collapse = require('@mui/material/Collapse');
var Drawer = require('@mui/material/Drawer');
var List = require('@mui/material/List');
var ListItemButton = require('@mui/material/ListItemButton');
var NavigateNextIcon = require('@mui/icons-material/NavigateNext');
var Breadcrumbs = require('@mui/material/Breadcrumbs');
var Link = require('@mui/material/Link');
var CheckCircleRoundedIcon = require('@mui/icons-material/CheckCircleRounded');
var useMediaQuery = require('@mui/material/useMediaQuery');
var HotelIcon = require('@mui/icons-material/Hotel');
var RestaurantIcon = require('@mui/icons-material/Restaurant');
var AdminPanelSettingsIcon = require('@mui/icons-material/AdminPanelSettings');
var PublicIcon = require('@mui/icons-material/Public');
var AutoAwesomeIcon = require('@mui/icons-material/AutoAwesome');
var PaymentsIcon = require('@mui/icons-material/Payments');
var PeopleIcon = require('@mui/icons-material/People');
var InventoryIcon = require('@mui/icons-material/Inventory');
var Tooltip = require('@mui/material/Tooltip');
var reactDom = require('react-dom');
var InputBase = require('@mui/material/InputBase');
var CardMedia = require('@mui/material/CardMedia');
var Avatar = require('@mui/material/Avatar');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var CloseIcon5__default = /*#__PURE__*/_interopDefault(CloseIcon5);
var Dialog__default = /*#__PURE__*/_interopDefault(Dialog);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var IconButton8__default = /*#__PURE__*/_interopDefault(IconButton8);
var Box7__default = /*#__PURE__*/_interopDefault(Box7);
var Typography9__default = /*#__PURE__*/_interopDefault(Typography9);
var Button5__default = /*#__PURE__*/_interopDefault(Button5);
var CircularProgress__default = /*#__PURE__*/_interopDefault(CircularProgress);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);
var DialogContentText__default = /*#__PURE__*/_interopDefault(DialogContentText);
var Stack4__default = /*#__PURE__*/_interopDefault(Stack4);
var Paper__default = /*#__PURE__*/_interopDefault(Paper);
var ErrorOutlineIcon__default = /*#__PURE__*/_interopDefault(ErrorOutlineIcon);
var RefreshIcon__default = /*#__PURE__*/_interopDefault(RefreshIcon);
var Chip6__default = /*#__PURE__*/_interopDefault(Chip6);
var Checkbox__default = /*#__PURE__*/_interopDefault(Checkbox);
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
var Step__default = /*#__PURE__*/_interopDefault(Step);
var StepLabel__default = /*#__PURE__*/_interopDefault(StepLabel);
var Stepper__default = /*#__PURE__*/_interopDefault(Stepper);
var CalendarMonthOutlinedIcon__default = /*#__PURE__*/_interopDefault(CalendarMonthOutlinedIcon);
var ExpandLessIcon__default = /*#__PURE__*/_interopDefault(ExpandLessIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefault(ExpandMoreIcon);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
var List__default = /*#__PURE__*/_interopDefault(List);
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var NavigateNextIcon__default = /*#__PURE__*/_interopDefault(NavigateNextIcon);
var Breadcrumbs__default = /*#__PURE__*/_interopDefault(Breadcrumbs);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var CheckCircleRoundedIcon__default = /*#__PURE__*/_interopDefault(CheckCircleRoundedIcon);
var useMediaQuery__default = /*#__PURE__*/_interopDefault(useMediaQuery);
var HotelIcon__default = /*#__PURE__*/_interopDefault(HotelIcon);
var RestaurantIcon__default = /*#__PURE__*/_interopDefault(RestaurantIcon);
var AdminPanelSettingsIcon__default = /*#__PURE__*/_interopDefault(AdminPanelSettingsIcon);
var PublicIcon__default = /*#__PURE__*/_interopDefault(PublicIcon);
var AutoAwesomeIcon__default = /*#__PURE__*/_interopDefault(AutoAwesomeIcon);
var PaymentsIcon__default = /*#__PURE__*/_interopDefault(PaymentsIcon);
var PeopleIcon__default = /*#__PURE__*/_interopDefault(PeopleIcon);
var InventoryIcon__default = /*#__PURE__*/_interopDefault(InventoryIcon);
var Tooltip__default = /*#__PURE__*/_interopDefault(Tooltip);
var InputBase__default = /*#__PURE__*/_interopDefault(InputBase);
var CardMedia__default = /*#__PURE__*/_interopDefault(CardMedia);
var Avatar__default = /*#__PURE__*/_interopDefault(Avatar);

// src/components/AppDialog.tsx
var AppleDialogTransition = react.forwardRef(
  function AppleDialogTransition2(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, ...other } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.AnimatePresence,
      {
        mode: "wait",
        onExitComplete: () => {
          if (onExited) {
            onExited(null);
          }
        },
        children: inProp ? /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            ref,
            initial: {
              opacity: 0,
              filter: "blur(10px)",
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500
            },
            animate: {
              opacity: 1,
              filter: "blur(0px)",
              rotateX: 0,
              rotateY: 0,
              z: 0,
              transition: {
                duration: 0.45,
                ease: [0.17, 0.67, 0.51, 1],
                opacity: {
                  duration: 0.35,
                  ease: "easeOut"
                }
              }
            },
            exit: {
              opacity: 0,
              filter: "blur(10px)",
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500,
              transition: {
                duration: 0.25,
                ease: [0.67, 0.17, 0.62, 0.64]
              }
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              transformPerspective: 500,
              transformStyle: "preserve-3d"
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
    Box7__default.default,
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
          Box7__default.default,
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
                Typography9__default.default,
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
          Box7__default.default,
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
          Typography9__default.default,
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open,
      onClose: handleClose,
      fullWidth: true,
      maxWidth: size,
      TransitionComponent: AppleDialogTransition,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          t(titleKey, titleParams),
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton8__default.default,
            {
              "aria-label": t("common:actions.close"),
              onClick: onClose,
              edge: "end",
              size: "small",
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { sx: { position: "relative" }, children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: loading })
        ] }),
        actions ? /* @__PURE__ */ jsxRuntime.jsx(DialogActions__default.default, { children: actions }) : null
      ]
    }
  );
}
var FamilyDialogTransition = react.forwardRef(
  function FamilyDialogTransition2(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, style, ...other } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.AnimatePresence,
      {
        mode: "wait",
        onExitComplete: () => {
          if (onExited) {
            onExited(null);
          }
        },
        children: inProp ? /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
  loading = false,
  anchorEl,
  disableBackdrop = false,
  onConfirm,
  onCancel
}) {
  const { t } = reactI18next.useTranslation();
  const content = /* @__PURE__ */ jsxRuntime.jsxs(Box7__default.default, { sx: { width: "100%", maxWidth: "380px" }, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogTitle__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton8__default.default,
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
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { sx: { fontSize: 16 } })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(DialogContent__default.default, { sx: { px: 3, py: 1 }, children: /* @__PURE__ */ jsxRuntime.jsx(
      DialogContentText__default.default,
      {
        sx: {
          color: "text.secondary",
          fontSize: "0.9375rem",
          lineHeight: 1.5
        },
        children: t(messageKey, messageParams)
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { sx: { px: 3, pb: 2.5, pt: 1, display: "flex", justifyContent: "flex-end", gap: 1 }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Button5__default.default,
        {
          onClick: onCancel,
          color: "inherit",
          disabled: loading,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Button5__default.default,
        {
          onClick: onConfirm,
          variant: "contained",
          autoFocus: true,
          disabled: loading,
          startIcon: loading ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress__default.default, { size: 16, color: "inherit" }) : void 0,
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      Popover__default.default,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Dialog__default.default,
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
            startIcon: submitting ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress__default.default, { size: 16, color: "inherit" }) : void 0,
            children: submitting ? t("common:actions.saving", { defaultValue: "Saving..." }) : t(submitKey)
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
var AnimatedInbox = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, transition: { type: "spring", stiffness: 300, damping: 15 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.02, 1],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 15 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "12",
            y1: "7",
            x2: "12",
            y2: "10",
            variants: {
              idle: { opacity: 0.6, y: 0 },
              animate: {
                opacity: [0.3, 0.9, 0.3],
                y: [-2, 1, -2],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, opacity: 1, transition: { type: "spring" } }
            }
          }
        )
      ]
    }
  );
};
var EmptyStateContainer = styles.styled(Paper__default.default)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6, 3),
  textAlign: "center",
  borderRadius: 16,
  border: `1px dashed ${theme.palette.divider}`,
  backgroundColor: theme.palette.mode === "light" ? "rgba(248, 249, 250, 0.6)" : "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(8px)",
  width: "100%",
  minHeight: 280,
  transition: "all 0.2s ease"
}));
var IconGlowBadge = styles.styled(Box7__default.default)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  borderRadius: "24px",
  background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(0, 122, 255, 0.08) 0%, rgba(88, 86, 214, 0.08) 100%)" : "linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(88, 86, 214, 0.15) 100%)",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.mode === "light" ? "rgba(0, 122, 255, 0.12)" : "rgba(0, 122, 255, 0.25)"}`,
  boxShadow: "0 8px 24px rgba(0, 122, 255, 0.08)",
  marginBottom: theme.spacing(1)
}));
var EmptyState = ({
  icon,
  titleKey = "common:states.noResults",
  title,
  descriptionKey,
  description,
  descriptionParams,
  action,
  compact = false
}) => {
  const { t } = reactI18next.useTranslation();
  const displayTitle = title || t(titleKey);
  const displayDesc = description || (descriptionKey ? t(descriptionKey, descriptionParams) : void 0);
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      initial: { opacity: 0, y: 10, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.35, ease: "easeOut" },
      style: { width: "100%" },
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        EmptyStateContainer,
        {
          variant: "outlined",
          sx: {
            py: compact ? 3.5 : 6,
            minHeight: compact ? 180 : 280
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(IconGlowBadge, { children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(AnimatedInbox, { size: 42, isAnimated: true }) }),
            /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { spacing: 0.75, alignItems: "center", sx: { maxWidth: 440, mt: 1, mb: action ? 2.5 : 0 }, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h6", fontWeight: 700, color: "text.primary", letterSpacing: "-0.2px", children: displayTitle }),
              displayDesc ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "text.secondary", fontWeight: 500, lineHeight: 1.5, children: displayDesc }) : null
            ] }),
            action ? /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { mt: 1 }, children: action }) : null
          ]
        }
      )
    }
  );
};
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
    /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h6", children: t(titleKey) }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "text.secondary", children: t(messageKey) }),
    onRetry ? /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onRetry, startIcon: /* @__PURE__ */ jsxRuntime.jsx(RefreshIcon__default.default, {}), variant: "outlined", children: t("common:actions.retry") }) : null
  ] });
}
function PageSkeleton({ label }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box7__default.default,
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
    Chip6__default.default,
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
var PAGE_SIZE_OPTIONS = [15, 25, 50, 100];
var MENU_SPRING = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.7
};
var HIGHLIGHT_SPRING = {
  type: "spring",
  stiffness: 500,
  damping: 35
};
var ContextMenu = ({
  open,
  x,
  y,
  items,
  onClose
}) => {
  const [highlightedIndex, setHighlightedIndex] = react.useState(-1);
  const [activeSubmenu, setActiveSubmenu] = react.useState(null);
  const menuRef = react.useRef(null);
  const [position, setPosition] = react.useState({ x, y });
  react.useEffect(() => {
    if (!open) {
      setHighlightedIndex(-1);
      setActiveSubmenu(null);
      return;
    }
    const estimatedWidth = 220;
    const estimatedHeight = items.length * 36 + 20;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    let posX = x;
    let posY = y;
    if (posX + estimatedWidth > winWidth - 12) {
      posX = Math.max(12, posX - estimatedWidth);
    }
    if (posY + estimatedHeight > winHeight - 12) {
      posY = Math.max(12, winHeight - estimatedHeight - 12);
    }
    setPosition({ x: Math.max(12, posX), y: Math.max(12, posY) });
  }, [open, x, y, items]);
  react.useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    const handleScroll = () => {
      onClose();
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, [open, onClose]);
  const handleItemClick = react.useCallback(
    (item) => {
      if (item.disabled || item.separator) return;
      if (item.children && item.children.length > 0) return;
      onClose();
      item.onClick?.();
    },
    [onClose]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      ref: menuRef,
      initial: { opacity: 0, scale: 0.9, y: -4 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.94, transition: { duration: 0.1 } },
      transition: MENU_SPRING,
      style: {
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 999999,
        backgroundColor: "#11151e",
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: 12,
        padding: 5,
        minWidth: 210,
        maxWidth: 280,
        boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0.5px 0 rgba(255, 255, 255, 0.12)",
        userSelect: "none",
        outline: "none"
      },
      onContextMenu: (e) => e.preventDefault(),
      children: items.map((item, index) => {
        if (item.separator) {
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                height: 1,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                margin: "4px 6px"
              }
            },
            `sep-${index}`
          );
        }
        const isHighlighted = highlightedIndex === index;
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isSubmenuOpen = activeSubmenu === item.label;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: { position: "relative" },
            onMouseEnter: () => {
              if (!item.disabled) {
                setHighlightedIndex(index);
                if (hasChildren && item.label) {
                  setActiveSubmenu(item.label);
                } else {
                  setActiveSubmenu(null);
                }
              }
            },
            onMouseLeave: () => {
              if (!hasChildren) {
                setHighlightedIndex(-1);
              }
            },
            onClick: () => handleItemClick(item),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  style: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 10px",
                    borderRadius: 8,
                    cursor: item.disabled ? "not-allowed" : "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: item.disabled ? "rgba(255, 255, 255, 0.25)" : item.danger ? "#FF453A" : "#FFFFFF",
                    gap: 12
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.div,
                      {
                        initial: false,
                        animate: { opacity: isHighlighted || isSubmenuOpen ? 1 : 0 },
                        transition: HIGHLIGHT_SPRING,
                        style: {
                          position: "absolute",
                          inset: 0,
                          borderRadius: 8,
                          backgroundColor: item.danger ? "rgba(255, 69, 58, 0.18)" : "rgba(255, 255, 255, 0.1)",
                          pointerEvents: "none"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        style: {
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: [
                          item.icon && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 16,
                                width: 16,
                                height: 16,
                                opacity: item.disabled ? 0.3 : 0.9
                              },
                              children: item.icon
                            }
                          ),
                          /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        style: {
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 6
                        },
                        children: [
                          item.shortcut && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "11px",
                                fontWeight: 600,
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                color: isHighlighted ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.35)",
                                letterSpacing: "0.04em"
                              },
                              children: item.shortcut
                            }
                          ),
                          hasChildren && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "14px",
                                color: isHighlighted ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)"
                              },
                              children: "\u203A"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: hasChildren && isSubmenuOpen && item.children && /* @__PURE__ */ jsxRuntime.jsx(
                framerMotion.motion.div,
                {
                  initial: { opacity: 0, x: -6, scale: 0.94 },
                  animate: { opacity: 1, x: 0, scale: 1 },
                  exit: { opacity: 0, x: -4, transition: { duration: 0.1 } },
                  transition: MENU_SPRING,
                  style: {
                    position: "absolute",
                    top: -4,
                    left: "calc(100% + 4px)",
                    backgroundColor: "#11151e",
                    backdropFilter: "blur(24px) saturate(1.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 12,
                    padding: 5,
                    minWidth: 180,
                    boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.55)",
                    zIndex: 1e6
                  },
                  children: item.children.map((sub, subIdx) => {
                    if (sub.separator) {
                      return /* @__PURE__ */ jsxRuntime.jsx(
                        "div",
                        {
                          style: {
                            height: 1,
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            margin: "4px 6px"
                          }
                        },
                        `sub-sep-${subIdx}`
                      );
                    }
                    return /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        onClick: () => handleItemClick(sub),
                        style: {
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "6px 10px",
                          borderRadius: 8,
                          cursor: sub.disabled ? "not-allowed" : "pointer",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: sub.disabled ? "rgba(255, 255, 255, 0.25)" : sub.danger ? "#FF453A" : "#FFFFFF",
                          gap: 12
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                            sub.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { children: sub.icon }),
                            /* @__PURE__ */ jsxRuntime.jsx("span", { children: sub.label })
                          ] }),
                          sub.shortcut && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "11px",
                                color: "rgba(255, 255, 255, 0.35)"
                              },
                              children: sub.shortcut
                            }
                          )
                        ]
                      },
                      sub.key || sub.label || `sub-${subIdx}`
                    );
                  })
                }
              ) })
            ]
          },
          item.key || item.label || `item-${index}`
        );
      })
    }
  ) });
};
function useContextMenu() {
  const [contextMenu, setContextMenu] = react.useState({
    open: false,
    x: 0,
    y: 0,
    items: []
  });
  const openContextMenu = react.useCallback(
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
  const closeContextMenu = react.useCallback(() => {
    setContextMenu((prev) => prev.open ? { ...prev, open: false } : prev);
  }, []);
  return {
    contextMenu,
    openContextMenu,
    closeContextMenu
  };
}
var TableToolbar = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 2),
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`
}));
var ClickableRow = styles.styled(TableRow__default.default, {
  shouldForwardProp: (prop) => prop !== "clickable"
})(({ theme, clickable }) => ({
  transition: "background-color 0.15s ease",
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
  getContextMenuItems,
  rowActions,
  onRowClick,
  toolbar,
  emptyState,
  compact = false
}) {
  const { t } = reactI18next.useTranslation();
  const { contextMenu, openContextMenu, closeContextMenu } = useContextMenu();
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
  const handleRowContextMenu = (event, row) => {
    if (getContextMenuItems) {
      const items = getContextMenuItems(row);
      if (items && items.length > 0) {
        openContextMenu(event, items);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Paper__default.default,
    {
      variant: "outlined",
      sx: {
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper"
      },
      children: [
        toolbar ? /* @__PURE__ */ jsxRuntime.jsx(TableToolbar, { children: toolbar }) : null,
        !isLoading && isError ? /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntime.jsx(ErrorState, { onRetry }) }) : null,
        !isLoading && !isError && rows.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { p: 2 }, children: emptyState ?? /* @__PURE__ */ jsxRuntime.jsx(EmptyState, { titleKey: "common:states.noResults" }) }) : null,
        (isLoading || rows.length > 0) && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(TableContainer__default.default, { children: /* @__PURE__ */ jsxRuntime.jsxs(Table__default.default, { size: "small", "aria-busy": isLoading, children: [
            /* @__PURE__ */ jsxRuntime.jsx(TableHead__default.default, { sx: { backgroundColor: "action.hover" }, children: /* @__PURE__ */ jsxRuntime.jsxs(TableRow__default.default, { children: [
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
                  sx: { width: column.width, fontWeight: 700 },
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
              rowActions ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: "right", sx: { fontWeight: 700 }, children: t("common:table.actions") }) : null
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(TableBody__default.default, { children: isLoading ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "text", height: 28 }) }) }, i)) : rows.map((row) => /* @__PURE__ */ jsxRuntime.jsxs(
              ClickableRow,
              {
                clickable: Boolean(onRowClick || getContextMenuItems),
                hover: true,
                selected: selected.includes(row.id),
                onClick: onRowClick ? () => {
                  onRowClick(row);
                } : void 0,
                onContextMenu: (e) => handleRowContextMenu(e, row),
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
            )) })
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
              labelDisplayedRows: ({ from, to, count }) => t("common:table.displayedRows", { from, to, count }),
              sx: {
                borderTop: "1px solid",
                borderColor: "divider",
                "& .MuiTablePagination-toolbar": { minHeight: 48, px: 2 }
              }
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          ContextMenu,
          {
            open: contextMenu.open,
            x: contextMenu.x,
            y: contextMenu.y,
            items: contextMenu.items,
            onClose: closeContextMenu
          }
        )
      ]
    }
  );
}
var StatCardRoot = styles.styled(Card__default.default, {
  shouldForwardProp: (prop) => prop !== "compactSize"
})(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(2, 2.5) : theme.spacing(2.5, 3),
  display: "flex",
  flexDirection: "column",
  gap: compactSize ? theme.spacing(0.75) : theme.spacing(1),
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
  border: "1px solid rgba(229, 229, 234, 0.85)",
  transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&:hover": {
    boxShadow: "0 8px 28px rgba(0, 0, 0, 0.07)",
    borderColor: theme.palette.primary.main,
    transform: "translateY(-2px)"
  }
}));
var KpiHeaderRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),
  width: "100%"
}));
var IconTile = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "colorKey" && prop !== "compact"
})(({ theme, colorKey, compact }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(compact ? 1 : 1.25),
  borderRadius: "12px",
  backgroundColor: styles.alpha(theme.palette[colorKey].main, 0.12),
  color: theme.palette[colorKey].main,
  flexShrink: 0
}));
var DeltaRow = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "trend"
})(({ theme, trend }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  ...theme.typography.caption,
  fontWeight: 700,
  fontSize: "0.75rem",
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
    Typography9__default.default,
    {
      variant: isCompact ? "h5" : "h4",
      component: "div",
      sx: isCompact ? { fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.2 } : { fontWeight: 800 },
      children: value
    }
  );
  const deltaNode = delta && !loading ? /* @__PURE__ */ jsxRuntime.jsxs(DeltaRow, { trend, children: [
    TREND_ICONS[trend],
    delta
  ] }) : null;
  const subtitleNode = subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "caption", color: "text.secondary", sx: { fontSize: "0.75rem", fontWeight: 500 }, children: t(subtitleKey, subtitleParams) }) : null;
  if (layout === "kpi") {
    return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(KpiHeaderRow, { children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx(IconTile, { colorKey: iconColor, compact: isCompact, children: icon }) : /* @__PURE__ */ jsxRuntime.jsx("span", {}),
        badge ?? /* @__PURE__ */ jsxRuntime.jsx(
          Typography9__default.default,
          {
            variant: "overline",
            color: "text.secondary",
            noWrap: true,
            sx: {
              textAlign: "right",
              lineHeight: 1.3,
              fontSize: isCompact ? "0.68rem" : "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              maxWidth: "70%",
              pr: 0.5
            },
            children: t(labelKey)
          }
        )
      ] }),
      badge ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "overline", color: "text.secondary", noWrap: true, sx: { fontSize: isCompact ? "0.68rem" : "0.75rem", fontWeight: 700, pr: 0.5 }, children: t(labelKey) }) : null,
      valueNode,
      deltaNode ?? subtitleNode
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Typography9__default.default,
      {
        variant: "body2",
        color: "text.secondary",
        noWrap: true,
        sx: { display: "flex", alignItems: "center", gap: 1, fontSize: isCompact ? "0.75rem" : "0.8125rem", pr: 0.5 },
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
          IconButton8__default.default,
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
            IconButton8__default.default,
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
function AppTopBar({ appsLauncher, logo, nav, actions, onMenuClick }) {
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
            IconButton8__default.default,
            {
              "aria-label": t("common:actions.openMenu"),
              onClick: onMenuClick,
              edge: "start",
              sx: { display: { md: "none" } },
              children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon__default.default, {})
            }
          ) : null,
          appsLauncher,
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
var TimelineMatrix = ({
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
  initialScrollDate
}) => {
  const { t, i18n } = reactI18next.useTranslation();
  const theme = styles.useTheme();
  const scrollContainerRef = react.useRef(null);
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);
  react.useEffect(() => {
    if (!initialScrollDate || !scrollContainerRef.current) return;
    const dayIndex = differenceInDays(startDate, initialScrollDate);
    if (dayIndex < 0 || dayIndex >= days) return;
    scrollContainerRef.current.scrollLeft = dayIndex * DAY_COL_WIDTH;
  }, [days, initialScrollDate, startDate]);
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
    legend ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { component: "div", variant: "body2", sx: { display: "flex", justifyContent: "flex-end", mb: 1 }, children: legend }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(MatrixRoot, { ref: scrollContainerRef, "data-testid": "timeline-matrix-scroll-container", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: RESOURCE_COL_WIDTH + days * DAY_COL_WIDTH }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(HeaderRow, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "overline", color: "text.secondary", children: t(resourceLabelKey) }) }),
        dayList.map((date) => {
          const isToday = date === todayDate;
          const dateObj = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
          return /* @__PURE__ */ jsxRuntime.jsxs(DayHeaderCell, { "aria-current": isToday ? "date" : void 0, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "caption", color: "text.secondary", sx: { textTransform: "uppercase" }, children: monthFormat.format(dateObj) }),
            isToday ? /* @__PURE__ */ jsxRuntime.jsx(TodayBubble, { "aria-label": t("common:timeline.today"), children: dayFormat.format(dateObj) }) : /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", children: dayFormat.format(dateObj) })
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
};
function StatusFilterChips({
  options,
  value,
  onChange
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(Stack4__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, role: "tablist", children: options.map((option) => {
    const active = option.value === value;
    const label = option.count !== void 0 ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Chip6__default.default,
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
var DrawerHeader = styles.styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper
}));
var DrawerContent = styles.styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(3),
  position: "relative",
  maxHeight: "75vh"
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
  width,
  loading = false,
  children
}) {
  const { t } = reactI18next.useTranslation();
  const getMaxWidth = () => {
    if (width === "full" || width === "xl") return "xl";
    if (width === "lg") return "lg";
    if (width === "sm") return "sm";
    if (width === "xs") return "xs";
    return "md";
  };
  const getPaperWidthSx = () => {
    if (width === "full") {
      return { maxWidth: "1380px", width: "95vw" };
    }
    if (width === "xl") {
      return { maxWidth: "1440px", width: "95vw" };
    }
    if (width === "lg") {
      return { maxWidth: "1200px", width: "92vw" };
    }
    if (typeof width === "number") {
      return { maxWidth: `${width}px`, width: "95vw" };
    }
    return {};
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open,
      onClose: (_event, reason) => {
        if (reason !== "backdropClick") onClose();
      },
      maxWidth: getMaxWidth(),
      fullWidth: true,
      PaperProps: {
        sx: {
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
          border: "1px solid rgba(229, 229, 234, 0.9)",
          overflow: "hidden",
          ...getPaperWidthSx()
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerHeader, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 1.5, alignItems: "center", sx: { flexGrow: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h5", fontWeight: 800, letterSpacing: "-0.3px", noWrap: true, children: title ?? (titleKey ? t(titleKey, titleParams) : null) }),
            statusChip
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton8__default.default, { "aria-label": t("common:actions.close"), onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" }) })
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
  maxWidth = "md",
  paperSx,
  children
}) {
  const { t } = reactI18next.useTranslation();
  const isLast = activeStep === steps.length - 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open,
      onClose: onCancel,
      fullWidth: true,
      maxWidth,
      TransitionComponent: AppleDialogTransition,
      PaperProps: {
        sx: {
          maxWidth: { xs: "calc(100vw - 32px)", sm: 780, md: 960 },
          width: "100%",
          borderRadius: "24px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08)",
          ...paperSx
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, pt: 2.5, px: 3 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h6", sx: { fontWeight: 700, letterSpacing: "-0.01em" }, children: t(titleKey) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Chip6__default.default,
              {
                label: `${activeStep + 1} / ${steps.length}`,
                size: "small",
                color: "primary",
                variant: "outlined",
                sx: { fontWeight: 700, fontSize: "0.75rem", height: 22 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton8__default.default, { "aria-label": t("common:actions.close"), onClick: onCancel, size: "small", edge: "end", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Stepper__default.default,
          {
            activeStep,
            sx: {
              px: 3,
              pb: 2.5,
              "& .MuiStepLabel-label": {
                fontSize: "0.8125rem",
                fontWeight: 500,
                "&.Mui-active": {
                  fontWeight: 700,
                  color: "primary.main"
                },
                "&.Mui-completed": {
                  fontWeight: 600,
                  color: "text.primary"
                }
              },
              "& .MuiStepIcon-root": {
                width: 26,
                height: 26,
                "&.Mui-active": {
                  color: "primary.main"
                },
                "&.Mui-completed": {
                  color: "success.main"
                }
              }
            },
            children: steps.map((step) => /* @__PURE__ */ jsxRuntime.jsx(Step__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(StepLabel__default.default, { children: t(step.labelKey) }) }, step.labelKey))
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { dividers: true, sx: { position: "relative", minHeight: 320, p: 3 }, children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: submitting })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { sx: { justifyContent: "space-between", px: 3, py: 2 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onCancel, color: "inherit", disabled: submitting, sx: { borderRadius: "12px" }, children: t("common:actions.cancel") }),
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 1.5, alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button5__default.default,
              {
                onClick: onBack,
                color: "inherit",
                disabled: activeStep === 0 || submitting,
                sx: { borderRadius: "12px" },
                children: t(backKey)
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button5__default.default,
              {
                variant: "contained",
                onClick: isLast ? onFinish : onNext,
                disabled: !canNext || submitting,
                startIcon: submitting && isLast ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress__default.default, { size: 16, color: "inherit" }) : void 0,
                sx: {
                  borderRadius: "12px",
                  px: 3,
                  fontWeight: 700
                },
                children: submitting && isLast ? t("common:actions.saving", { defaultValue: "Saving..." }) : t(isLast ? finishKey : nextKey)
              }
            )
          ] })
        ] })
      ]
    }
  );
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
        children: /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { spacing: 2, sx: { p: 2, width: 300 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Stack4__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: Object.values(DateRangePreset).map((preset) => /* @__PURE__ */ jsxRuntime.jsx(
            Chip6__default.default,
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
  borderRadius: "12px",
  margin: theme.spacing(0.35, 1.25),
  paddingTop: 8,
  paddingBottom: 8,
  transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&.Mui-selected": {
    backgroundColor: theme.palette.mode === "light" ? "#007AFF" : "#0A84FF",
    color: "#FFFFFF",
    fontWeight: 700,
    boxShadow: theme.palette.mode === "light" ? "0 4px 14px rgba(0, 122, 255, 0.25)" : "none",
    "& .MuiListItemIcon-root": { color: "#FFFFFF" },
    "& .MuiTypography-root": { fontWeight: 700 },
    "&:hover": { backgroundColor: theme.palette.mode === "light" ? "#0062CC" : "#0051A8" }
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
      Drawer__default.default,
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
    Drawer__default.default,
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
        ) : /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "text.primary", children: t(crumb.labelKey) }, crumb.labelKey)
      ) }) : null,
      /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h4", component: "h1", children: title ?? t(titleKey, titleParams) }),
      subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: t(subtitleKey, subtitleParams) }) : null
    ] }),
    actions ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: actions }) : null
  ] });
}
var FALLOFF_CURVES = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  sharp: (t) => t * t * t
};
var hexToRgb = (hex) => {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = parseInt(v.slice(0, 6), 16);
  return [num >> 16 & 255, num >> 8 & 255, num & 255];
};
var CursorGrid = ({
  cellSize = 70,
  color = "#231924",
  radius = 140,
  falloff = "smooth",
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  fillOpacity = 0,
  gridOpacity = 0,
  cellRadius = 0,
  clickPulse = true,
  pulseSpeed = 600,
  className = ""
}) => {
  const containerRef = react.useRef(null);
  const canvasRef = react.useRef(null);
  const propsRef = react.useRef({});
  const wakeRef = react.useRef(null);
  propsRef.current = {
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed
  };
  react.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const isTouch = typeof window !== "undefined" && (window.matchMedia("(hover: none) and (pointer: coarse)").matches || window.innerWidth < 900);
    if (isTouch) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    let cols = 0;
    let rows = 0;
    let offX = 0;
    let offY = 0;
    let alphas = new Float32Array(0);
    let touched = new Float64Array(0);
    let w = 0;
    let h = 0;
    const pulses = [];
    let raf = 0;
    let running = false;
    let lastFrame = 0;
    const rebuild = () => {
      const p = propsRef.current;
      w = container.offsetWidth;
      h = container.offsetHeight;
      if (w <= 0 || h <= 0) return;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / p.cellSize) + 1;
      rows = Math.ceil(h / p.cellSize) + 1;
      offX = (w - cols * p.cellSize) / 2;
      offY = (h - rows * p.cellSize) / 2;
      alphas = new Float32Array(cols * rows);
      touched = new Float64Array(cols * rows);
    };
    const cellCenter = (i) => {
      const p = propsRef.current;
      const cx = offX + i % cols * p.cellSize + p.cellSize / 2;
      const cy = offY + Math.floor(i / cols) * p.cellSize + p.cellSize / 2;
      return [cx, cy];
    };
    const energize = (x, y, boost) => {
      const p = propsRef.current;
      const r = Math.max(p.radius, 1);
      const ease = FALLOFF_CURVES[p.falloff] ?? FALLOFF_CURVES.linear;
      const now = performance.now();
      const minCol = Math.max(0, Math.floor((x - r - offX) / p.cellSize));
      const maxCol = Math.min(cols - 1, Math.floor((x + r - offX) / p.cellSize));
      const minRow = Math.max(0, Math.floor((y - r - offY) / p.cellSize));
      const maxRow = Math.min(rows - 1, Math.floor((y + r - offY) / p.cellSize));
      for (let cRow = minRow; cRow <= maxRow; cRow++) {
        for (let cCol = minCol; cCol <= maxCol; cCol++) {
          const i = cRow * cols + cCol;
          const [cx, cy] = cellCenter(i);
          const dist = Math.hypot(cx - x, cy - y);
          if (dist > r) continue;
          const level = ease(1 - dist / r) * p.maxOpacity * (1);
          const currentAlpha = alphas[i] ?? 0;
          if (level > currentAlpha) {
            alphas[i] = level;
            touched[i] = now;
          } else if (level > 0) {
            touched[i] = now;
          }
        }
      }
    };
    const draw = (now) => {
      const p = propsRef.current;
      const dt = Math.min(now - lastFrame, 50);
      lastFrame = now;
      ctx.clearRect(0, 0, w, h);
      const [cr, cg, cb] = hexToRgb(p.color);
      if (p.gridOpacity > 0) {
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${p.gridOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let cCol = 0; cCol <= cols; cCol++) {
          const x = Math.round(offX + cCol * p.cellSize) + 0.5;
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }
        for (let cRow = 0; cRow <= rows; cRow++) {
          const y = Math.round(offY + cRow * p.cellSize) + 0.5;
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }
        ctx.stroke();
      }
      for (let pi = pulses.length - 1; pi >= 0; pi--) {
        const pulse = pulses[pi];
        if (!pulse) continue;
        const age = (now - pulse.t0) / 1e3;
        const ringR = age * p.pulseSpeed;
        if (ringR > Math.hypot(w, h)) {
          pulses.splice(pi, 1);
          continue;
        }
        const band = p.cellSize;
        const minCol = Math.max(0, Math.floor((pulse.x - ringR - band - offX) / p.cellSize));
        const maxCol = Math.min(cols - 1, Math.floor((pulse.x + ringR + band - offX) / p.cellSize));
        const minRow = Math.max(0, Math.floor((pulse.y - ringR - band - offY) / p.cellSize));
        const maxRow = Math.min(rows - 1, Math.floor((pulse.y + ringR + band - offY) / p.cellSize));
        for (let cRow = minRow; cRow <= maxRow; cRow++) {
          for (let cCol = minCol; cCol <= maxCol; cCol++) {
            const i = cRow * cols + cCol;
            const [cx, cy] = cellCenter(i);
            const dist = Math.hypot(cx - pulse.x, cy - pulse.y);
            const currentAlpha = alphas[i] ?? 0;
            if (Math.abs(dist - ringR) < band / 2 && p.maxOpacity > currentAlpha) {
              alphas[i] = p.maxOpacity;
              touched[i] = now;
            }
          }
        }
      }
      let anyVisible = pulses.length > 0;
      const fadeStep = dt / Math.max(p.fadeDuration, 16);
      const half = p.cellSize / 2;
      for (let i = 0; i < alphas.length; i++) {
        let a = alphas[i] ?? 0;
        if (a <= 0) continue;
        const lastTouch = touched[i] ?? 0;
        if (now - lastTouch > p.holdTime) {
          a = Math.max(0, a - fadeStep);
          alphas[i] = a;
          if (a <= 0) continue;
        }
        anyVisible = true;
        const [cx, cy] = cellCenter(i);
        const gradient = ctx.createRadialGradient(cx, cy, half * 0.1, cx, cy, p.cellSize);
        gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${a})`);
        gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        const x = cx - half + 0.5;
        const y = cy - half + 0.5;
        const s = p.cellSize - 1;
        ctx.beginPath();
        if (p.cellRadius > 0) {
          ctx.roundRect(x, y, s, s, p.cellRadius);
        } else {
          ctx.rect(x, y, s, s);
        }
        if (p.fillOpacity > 0) {
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a * p.fillOpacity})`;
          ctx.fill();
        }
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.lineWidth;
        ctx.stroke();
      }
      if (anyVisible) {
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
        if (propsRef.current.gridOpacity <= 0) ctx.clearRect(0, 0, w, h);
      }
    };
    const wake = () => {
      if (running) return;
      running = true;
      lastFrame = performance.now();
      raf = requestAnimationFrame(draw);
    };
    wakeRef.current = wake;
    const toLocal = (e) => {
      const rect = canvas.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    };
    const onPointerMove = (e) => {
      const [x, y] = toLocal(e);
      energize(x, y);
      wake();
    };
    const onPointerDown = (e) => {
      if (!propsRef.current.clickPulse) return;
      const [x, y] = toLocal(e);
      pulses.push({ x, y, t0: performance.now() });
      wake();
    };
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const newW = entry.contentRect.width;
      const newH = entry.contentRect.height;
      if (Math.abs(newW - w) >= 2 || Math.abs(newH - h) >= 2) {
        rebuild();
        wake();
      }
    }) : null;
    if (ro) ro.observe(container);
    rebuild();
    wake();
    const target = container.parentElement || container;
    target.addEventListener("pointermove", onPointerMove, { passive: true });
    target.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      target.removeEventListener("pointermove", onPointerMove);
      target.removeEventListener("pointerdown", onPointerDown);
    };
  }, [cellSize]);
  react.useEffect(() => {
    wakeRef.current?.();
  }, [gridOpacity, color, lineWidth, maxOpacity, fillOpacity, cellRadius]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: containerRef, className: `cursor-grid${className ? ` ${className}` : ""}`, children: /* @__PURE__ */ jsxRuntime.jsx("canvas", { ref: canvasRef, className: "cursor-grid__canvas" }) });
};
var AuthPageRoot = styles.styled("main", {
  shouldForwardProp: (prop) => prop !== "hasSplitBrand"
})(({ theme, hasSplitBrand }) => ({
  minHeight: "100dvh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    display: "grid",
    height: "100vh",
    minHeight: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
    gridTemplateColumns: hasSplitBrand ? "minmax(0, 5fr) minmax(0, 7fr)" : "minmax(0, 1fr)"
  },
  ...hasSplitBrand && {
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "minmax(0, 5.2fr) minmax(0, 6.8fr)"
    }
  }
}));
var AuthBrandPanel = styles.styled("section", {
  shouldForwardProp: (prop) => prop !== "customGradient"
})(({ theme, customGradient }) => ({
  display: "none",
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(6, 6, 5),
  color: theme.palette.common.white,
  background: customGradient || `linear-gradient(145deg, #090e17 0%, #0f172a 45%, ${theme.palette.primary.dark || "#1e3a8a"} 100%)`,
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden"
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: theme.spacing(52),
    height: theme.spacing(52),
    top: theme.spacing(-14),
    right: theme.spacing(-14),
    borderRadius: "50%",
    border: `${theme.spacing(5)} solid ${styles.alpha(theme.palette.common.white, 0.04)}`,
    pointerEvents: "none"
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: theme.spacing(40),
    height: theme.spacing(40),
    bottom: theme.spacing(-14),
    left: theme.spacing(-12),
    borderRadius: "50%",
    backgroundColor: styles.alpha(theme.palette.common.white, 0.03),
    pointerEvents: "none"
  }
}));
var BrandPanelContent = styles.styled("div")({
  position: "relative",
  zIndex: 1
});
var BrandMarkTile = styles.styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(6),
  height: theme.spacing(6),
  borderRadius: theme.shape.borderRadius * 1.5,
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.common.white,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)"
}));
var FeatureList = styles.styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2.25),
  marginTop: theme.spacing(4.5)
}));
var FeatureItem = styles.styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.75),
  alignItems: "center",
  color: styles.alpha(theme.palette.common.white, 0.88)
}));
var AuthFormPanel = styles.styled("section")(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3, 2),
  position: "relative",
  overflowY: "auto",
  overflowX: "hidden",
  boxSizing: "border-box",
  WebkitOverflowScrolling: "touch",
  backgroundColor: "#f8fafc",
  backgroundImage: "radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.7) 100%)",
  "& .MuiInputBase-input": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 4)
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
    minHeight: "100vh",
    padding: theme.spacing(4, 5)
  }
}));
var StyledPaper = styles.styled(Paper__default.default)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 450,
  margin: "auto 0",
  padding: theme.spacing(3.5, 2.5),
  borderRadius: 20,
  border: "1px solid rgba(226, 232, 240, 0.9)",
  boxShadow: "0 20px 45px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.04)",
  backgroundImage: "none",
  backgroundColor: "rgba(255, 255, 255, 0.96)",
  backdropFilter: "blur(10px)",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5),
    margin: "auto 0"
  }
}));
function AuthFormShell({ children, sx, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(StyledPaper, { elevation: 0, sx, ...props, children });
}
var AuthTopBar = styles.styled(Box7__default.default)(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: theme.spacing(2),
  left: theme.spacing(2),
  right: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pointerEvents: "auto",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    top: theme.spacing(3),
    right: theme.spacing(3),
    left: "auto"
  }
}));
var MobileBrand = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none"
  }
}));
function AuthLayout({
  children,
  logo,
  topRight,
  appName,
  tagline,
  headline,
  description,
  features,
  footer,
  brandGradient,
  centeredOnly = false
}) {
  const hasSplitBrand = !centeredOnly && Boolean(appName || headline);
  return /* @__PURE__ */ jsxRuntime.jsxs(AuthPageRoot, { hasSplitBrand, children: [
    hasSplitBrand ? /* @__PURE__ */ jsxRuntime.jsxs(AuthBrandPanel, { customGradient: brandGradient, children: [
      /* @__PURE__ */ jsxRuntime.jsx(BrandPanelContent, { children: /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 2, alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(BrandMarkTile, { children: /* @__PURE__ */ jsxRuntime.jsx(NamiosMarkSvg, { size: 28, color: "#0f172a" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h5", component: "p", sx: { fontWeight: 800, letterSpacing: "-0.01em" }, children: appName }),
          tagline ? /* @__PURE__ */ jsxRuntime.jsx(
            Typography9__default.default,
            {
              variant: "caption",
              sx: {
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "inherit",
                opacity: 0.72,
                fontWeight: 600
              },
              children: tagline
            }
          ) : null
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(BrandPanelContent, { children: [
        headline ? /* @__PURE__ */ jsxRuntime.jsx(
          Typography9__default.default,
          {
            variant: "h3",
            component: "h1",
            sx: {
              fontWeight: 750,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              maxWidth: (theme) => theme.spacing(60)
            },
            children: headline
          }
        ) : null,
        description ? /* @__PURE__ */ jsxRuntime.jsx(
          Typography9__default.default,
          {
            variant: "body1",
            sx: {
              mt: 2,
              maxWidth: (theme) => theme.spacing(58),
              color: "inherit",
              opacity: 0.76,
              lineHeight: 1.6
            },
            children: description
          }
        ) : null,
        features && features.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(FeatureList, { children: features.map((feature, idx) => {
          const text = typeof feature === "string" ? feature : feature.text;
          const icon = typeof feature === "object" && feature.icon ? feature.icon : /* @__PURE__ */ jsxRuntime.jsx(CheckCircleRoundedIcon__default.default, { sx: { fontSize: 20, color: "#38bdf8" } });
          return /* @__PURE__ */ jsxRuntime.jsxs(FeatureItem, { children: [
            icon,
            /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "inherit", sx: { fontWeight: 500, fontSize: "0.9rem" }, children: text })
          ] }, idx);
        }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(BrandPanelContent, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "caption", sx: { opacity: 0.6, fontSize: "0.75rem" }, children: footer || "Hotel operations, thoughtfully connected." }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntime.jsxs(AuthFormPanel, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        CursorGrid,
        {
          cellSize: 64,
          color: "#334155",
          radius: 160,
          falloff: "smooth",
          holdTime: 350,
          fadeDuration: 750,
          lineWidth: 1.2,
          maxOpacity: 0.45,
          fillOpacity: 0.03,
          gridOpacity: 0.05,
          cellRadius: 6,
          clickPulse: true,
          pulseSpeed: 550
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(AuthTopBar, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(MobileBrand, { children: logo }),
        topRight
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(AuthFormShell, { elevation: 0, children: /* @__PURE__ */ jsxRuntime.jsx(Stack4__default.default, { spacing: 3, children }) })
    ] })
  ] });
}
function AuthFormHeader({ title, subtitle, badge }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { spacing: 0.75, sx: { mb: 1 }, children: [
    badge ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: badge }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "h4", component: "h1", sx: { fontWeight: 700, letterSpacing: "-0.02em" }, children: title }),
    subtitle ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "text.secondary", sx: { fontSize: "0.875rem" }, children: subtitle }) : null
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

// src/components/AppLauncher/constants/animationConfig.ts
var FOLDER_LAYOUT_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 26,
  mass: 0.8
};
var BACKDROP_TRANSITION = {
  duration: 0.24,
  ease: [0.16, 1, 0.3, 1]
};
var CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 12
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
      mass: 0.8,
      staggerChildren: 0.035,
      delayChildren: 0.06
    }
  },
  exit: {
    opacity: 0,
    scale: 0.86,
    y: 10,
    transition: {
      duration: 0.18,
      ease: [0.32, 0, 0.67, 0]
    }
  }
};
var APP_TILE_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: 14
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 24
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.12
    }
  }
};
var PRODUCTION_APP_URLS = {
  "stay-os": "https://stay.namios.app",
  "dine-os": "https://dine.namios.app",
  "people-hr": "https://people.namios.app",
  "super-admin": "https://admin.namios.app",
  "payments-os": "https://payments.namios.app",
  "inventory-os": "https://inventory.namios.app",
  "nami-ai": "https://ai.namios.app",
  "public-web": "https://booking.namios.app"
};
var VERCEL_APP_URLS = {
  "stay-os": "https://hotelos-stay-os.vercel.app",
  "dine-os": "https://hotelos-dine-os.vercel.app",
  "super-admin": "https://hotelos-super-admin.vercel.app"
};
function resolveAppUrl(app) {
  if (typeof window === "undefined") {
    return app.url || PRODUCTION_APP_URLS[app.id] || "";
  }
  const hostname = window.location.hostname;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local");
  if (isLocalhost && app.url) {
    return app.url;
  }
  const isLocalhostUrl = !app.url || app.url.includes("localhost") || app.url.includes("127.0.0.1");
  if (isLocalhostUrl) {
    const vercelUrl = VERCEL_APP_URLS[app.id];
    if (hostname.endsWith(".vercel.app") && vercelUrl) {
      return vercelUrl;
    }
    return PRODUCTION_APP_URLS[app.id] || app.url || "";
  }
  return app.url || "";
}
var DEFAULT_HOTELOS_APPS = [
  {
    id: "stay-os",
    name: "Stay OS",
    shortName: "PMS & Desk",
    tagline: "Property Management System",
    description: "Front desk operations, room allocation matrix grid, reservation wizard, housekeeping kanban, and folio engines.",
    category: "operations",
    status: "OPERATIONAL",
    port: 5174,
    url: "http://localhost:5174",
    devCommand: "cd hotelos-stay-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)",
    iconColor: "#007AFF",
    gradientBorder: "from-blue-500/20 via-indigo-500/20 to-sky-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(HotelIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Core",
    badgeText: "Port 5174",
    badgeColor: "primary",
    shortcut: "\u23181",
    isFavorite: true,
    docUrl: "https://docs.stay.namios.app/",
    lordIconSrc: "/icons/stay.gif"
  },
  {
    id: "dine-os",
    name: "Dine OS",
    shortName: "F&B & POS",
    tagline: "Restaurant & Kitchen Workspace",
    description: "Interactive floor seating canvas, live dual-pane POS order cart, kitchen queue kanban with rush indicators, and room bill transfers.",
    category: "food_beverage",
    status: "OPERATIONAL",
    port: 5175,
    url: "http://localhost:5175",
    devCommand: "cd hotelos-dine-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #FF6B00 0%, #FFA800 100%)",
    iconColor: "#FF6B00",
    gradientBorder: "from-rose-500/20 via-orange-500/20 to-amber-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(RestaurantIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Live",
    badgeText: "Port 5175",
    badgeColor: "warning",
    shortcut: "\u23182",
    isFavorite: true,
    docUrl: "https://docs.dine.namios.app/",
    lordIconSrc: "/icons/dine.gif"
  },
  {
    id: "people-hr",
    name: "People (HR)",
    shortName: "Staff & HR",
    tagline: "Staff Roster, Attendance & Payroll",
    description: "Shift scheduling, employee attendance tracking, payroll processing, leave management, and staff performance metrics.",
    category: "operations",
    status: "OPERATIONAL",
    port: 5176,
    url: "http://localhost:5176",
    devCommand: "cd hotelos-stay-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #9333EA 0%, #C084FC 100%)",
    iconColor: "#9333EA",
    gradientBorder: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(PeopleIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "HR",
    badgeText: "HR Module",
    badgeColor: "info",
    isFavorite: true,
    docUrl: "https://docs.people.namios.app/",
    lordIconSrc: "/icons/people.gif"
  },
  {
    id: "super-admin",
    name: "Super Admin",
    shortName: "Platform Control",
    tagline: "Tenant & Subscription Control",
    description: "Platform management dashboard tracking tenant onboarding, subscription tiers, MRR analytics, and system audit logs.",
    category: "management",
    status: "OPERATIONAL",
    port: 5173,
    url: "http://localhost:5173",
    devCommand: "cd hotelos-super-admin && pnpm dev",
    iconBg: "linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)",
    iconColor: "#16A34A",
    gradientBorder: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(AdminPanelSettingsIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Admin",
    badgeText: "Port 5173",
    badgeColor: "default",
    isFavorite: true,
    docUrl: "https://docs.admin.namios.app/",
    lordIconSrc: "/icons/admin.gif"
  },
  {
    id: "payments-os",
    name: "Payments OS",
    shortName: "Billing & Gateway",
    tagline: "Multi-Currency Terminal & Invoicing",
    description: "Payment gateway integrations, card terminal processing, room folio billing, cash drawer reconciliations, and tax calculations.",
    category: "operations",
    status: "OPERATIONAL",
    port: 4e3,
    url: "http://localhost:4000",
    devCommand: "cd hotel-os-be && npm run dev",
    iconBg: "linear-gradient(135deg, #00C7BE 0%, #30B0C7 100%)",
    iconColor: "#EA580C",
    gradientBorder: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(PaymentsIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Gateway",
    badgeText: "Gateway",
    badgeColor: "info",
    isFavorite: true,
    docUrl: "https://docs.payments.namios.app/",
    lordIconSrc: "/icons/payments.gif"
  },
  {
    id: "inventory-os",
    name: "Inventory OS",
    shortName: "Stock & POs",
    tagline: "F&B Stock & Supplies Control",
    description: "Real-time stock level tracking, kitchen ingredient usage, linen inventories, low-stock alerts, and purchase order creation.",
    category: "operations",
    status: "OPERATIONAL",
    port: 5175,
    url: "http://localhost:5175",
    devCommand: "cd hotelos-dine-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)",
    iconColor: "#0891B2",
    gradientBorder: "from-cyan-500/20 via-sky-500/20 to-blue-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(InventoryIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Stock",
    badgeText: "Stock Engine",
    badgeColor: "default",
    isFavorite: true,
    docUrl: "https://docs.inventory.namios.app/",
    lordIconSrc: "/icons/inventory.gif"
  },
  {
    id: "nami-ai",
    name: "Nami AI",
    shortName: "AI Concierge",
    tagline: "Smart Assistant & Messaging",
    description: "AI Guest Concierge, Assistant & Smart Messaging across Guest Portals and Front Desk.",
    category: "guest_experience",
    status: "BETA",
    port: 5176,
    url: "http://localhost:5176",
    iconBg: "linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)",
    iconColor: "#AF52DE",
    icon: /* @__PURE__ */ jsxRuntime.jsx(AutoAwesomeIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "AI Beta",
    badgeText: "Beta",
    badgeColor: "info",
    shortcut: "\u23184",
    isFavorite: false
  },
  {
    id: "public-web",
    name: "Booking Engine",
    shortName: "Guest Portal",
    tagline: "Public Guest Direct Booking",
    description: "Public Guest Direct Booking & Hotel Web Portal for direct room reservations.",
    category: "marketing",
    status: "OPERATIONAL",
    port: 3e3,
    url: "http://localhost:3000",
    iconBg: "linear-gradient(135deg, #34C759 0%, #30D158 100%)",
    iconColor: "#34C759",
    icon: /* @__PURE__ */ jsxRuntime.jsx(PublicIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Public",
    badgeText: "Guest Web",
    badgeColor: "success",
    isExternal: true
  }
];
var AppFolderMiniPreview = ({
  apps,
  isOpen,
  onClick,
  tooltip = "NamiOS Apps",
  className
}) => {
  const previewApps = apps.slice(0, 4);
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip__default.default, { title: tooltip, arrow: true, placement: "bottom", children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.button,
    {
      type: "button",
      layoutId: "hotelos-app-folder-container",
      transition: FOLDER_LAYOUT_SPRING,
      onClick,
      "aria-label": tooltip,
      "aria-expanded": isOpen,
      "aria-haspopup": "dialog",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.94 },
      className,
      style: {
        width: 38,
        height: 38,
        borderRadius: 12,
        padding: 4,
        border: "1px solid rgba(229, 231, 235, 0.9)",
        background: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2.5,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyItems: "center"
          },
          children: previewApps.map((app) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                width: "100%",
                height: "100%",
                borderRadius: 3.5,
                background: app.iconBg || "#007AFF",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            app.id
          ))
        }
      )
    }
  ) });
};
var AppTile = ({
  app,
  isActive = false,
  onSelect
}) => {
  const [imgError, setImgError] = react.useState(false);
  const iconSrcToUse = app.lordIconSrc || app.iconSrc;
  const handleClick = () => {
    if (app.disabled) return;
    onSelect(app);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.div,
    {
      variants: APP_TILE_VARIANTS,
      whileHover: { scale: 1.06, y: -2 },
      whileTap: { scale: 0.94 },
      transition: { type: "spring", stiffness: 380, damping: 20 },
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: app.disabled ? -1 : 0,
      role: "button",
      "aria-label": `${app.name}${app.description ? `: ${app.description}` : ""}`,
      "aria-disabled": app.disabled,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "6px 4px",
        borderRadius: 16,
        cursor: app.disabled ? "not-allowed" : "pointer",
        opacity: app.disabled ? 0.5 : 1,
        position: "relative",
        userSelect: "none",
        outline: "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              width: 56,
              height: 56,
              borderRadius: 15,
              background: app.iconBg || "linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)",
              boxShadow: isActive ? "0 6px 18px rgba(0, 122, 255, 0.45), 0 0 0 2.5px #007AFF" : "0 6px 16px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
              marginBottom: 6,
              border: "1px solid rgba(255, 255, 255, 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "45%",
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
                    pointerEvents: "none"
                  }
                }
              ),
              iconSrcToUse && !imgError ? /* @__PURE__ */ jsxRuntime.jsx(
                "img",
                {
                  src: iconSrcToUse,
                  alt: app.name,
                  onError: () => setImgError(true),
                  style: { width: 32, height: 32, objectFit: "contain" },
                  draggable: false
                }
              ) : app.icon,
              isActive && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 3.5,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 0 4px rgba(255, 255, 255, 0.9)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Typography9__default.default,
          {
            variant: "caption",
            sx: {
              fontWeight: 700,
              fontSize: "0.76rem",
              lineHeight: 1.2,
              color: "#0F172A",
              maxWidth: 86,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              letterSpacing: "-0.2px"
            },
            children: app.name
          }
        ),
        app.badge && /* @__PURE__ */ jsxRuntime.jsx(
          Chip6__default.default,
          {
            label: app.badge,
            size: "small",
            color: app.badgeColor || "default",
            sx: {
              mt: 0.4,
              height: 16,
              fontSize: "0.6rem",
              fontWeight: 800,
              borderRadius: "5px",
              "& .MuiChip-label": { px: 0.6 }
            }
          }
        )
      ]
    }
  );
};
var AppFolderModal = ({
  title = "NamiOS Ecosystem",
  subtitle = "Switch between NamiOS modules & portals",
  apps,
  currentAppId,
  isOpen,
  onClose,
  onSelectApp
}) => {
  const [search, setSearch] = react.useState("");
  const [selectedCategory, setSelectedCategory] = react.useState("all");
  const modalRef = react.useRef(null);
  react.useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setSelectedCategory("all");
    }
  }, [isOpen]);
  react.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  const categories = react.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    apps.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [apps]);
  const filteredApps = react.useMemo(() => {
    return apps.filter((app) => {
      const matchSearch = !search.trim() || app.name.toLowerCase().includes(search.toLowerCase()) || app.description && app.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === "all" || app.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [apps, search, selectedCategory]);
  const getCategoryLabel = (cat) => {
    switch (cat) {
      case "operations":
        return "Operations";
      case "food_beverage":
        return "F&B";
      case "platform":
        return "Platform";
      case "guest_experience":
        return "Guest Hub";
      case "management":
        return "Management";
      case "marketing":
        return "Public Web";
      default:
        return cat.replace("_", " ");
    }
  };
  if (typeof document === "undefined") return null;
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { mode: "wait", children: isOpen && /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: BACKDROP_TRANSITION,
              onClick: onClose,
              style: {
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(15, 23, 42, 0.18)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)"
              }
            },
            "backdrop"
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            framerMotion.motion.div,
            {
              ref: modalRef,
              variants: CONTAINER_VARIANTS,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              style: {
                position: "relative",
                width: "100%",
                maxWidth: 620,
                maxHeight: "88vh",
                borderRadius: 30,
                backgroundColor: "rgba(255, 255, 255, 0.94)",
                backdropFilter: "blur(28px) saturate(190%)",
                WebkitBackdropFilter: "blur(28px) saturate(190%)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 24px 60px -10px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
                padding: "24px 24px 18px 24px",
                display: "flex",
                flexDirection: "column",
                zIndex: 1,
                overflow: "hidden",
                boxSizing: "border-box",
                margin: "auto"
              },
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs(Box7__default.default, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }, children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(Box7__default.default, { sx: { pr: 2 }, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Typography9__default.default,
                      {
                        variant: "h6",
                        sx: {
                          fontWeight: 800,
                          letterSpacing: "-0.3px",
                          fontSize: "1.25rem",
                          color: "#0F172A",
                          lineHeight: 1.2
                        },
                        children: title
                      }
                    ),
                    subtitle && /* @__PURE__ */ jsxRuntime.jsx(
                      Typography9__default.default,
                      {
                        variant: "caption",
                        sx: { color: "#64748B", fontWeight: 500, display: "block", mt: 0.5, fontSize: "0.8rem" },
                        children: subtitle
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    IconButton8__default.default,
                    {
                      size: "small",
                      onClick: onClose,
                      "aria-label": "Close apps directory",
                      sx: {
                        bgcolor: "rgba(0, 0, 0, 0.05)",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                        color: "#475569"
                      },
                      children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" })
                    }
                  )
                ] }),
                apps.length > 4 && /* @__PURE__ */ jsxRuntime.jsxs(
                  Box7__default.default,
                  {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                      borderRadius: "12px",
                      px: 1.5,
                      py: 0.75,
                      mb: 1.75,
                      border: "1px solid rgba(0, 0, 0, 0.05)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(SearchIcon__default.default, { sx: { fontSize: 18, color: "#94A3B8", mr: 1 } }),
                      /* @__PURE__ */ jsxRuntime.jsx(
                        InputBase__default.default,
                        {
                          placeholder: "Search applications...",
                          value: search,
                          onChange: (e) => setSearch(e.target.value),
                          fullWidth: true,
                          autoFocus: false,
                          inputProps: {
                            "aria-label": "Search apps",
                            style: { fontSize: "0.875rem", fontWeight: 500, padding: 0 }
                          }
                        }
                      ),
                      search && /* @__PURE__ */ jsxRuntime.jsx(IconButton8__default.default, { size: "small", onClick: () => setSearch(""), sx: { p: 0.25 }, children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { sx: { fontSize: 14 } }) })
                    ]
                  }
                ),
                categories.length > 1 && !search && /* @__PURE__ */ jsxRuntime.jsxs(
                  Box7__default.default,
                  {
                    sx: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mb: 2,
                      alignItems: "center"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(
                        Chip6__default.default,
                        {
                          label: "All Apps",
                          size: "small",
                          onClick: () => setSelectedCategory("all"),
                          variant: selectedCategory === "all" ? "filled" : "outlined",
                          color: selectedCategory === "all" ? "primary" : "default",
                          sx: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: "8px"
                          }
                        }
                      ),
                      categories.map((cat) => /* @__PURE__ */ jsxRuntime.jsx(
                        Chip6__default.default,
                        {
                          label: getCategoryLabel(cat),
                          size: "small",
                          onClick: () => setSelectedCategory(cat),
                          variant: selectedCategory === cat ? "filled" : "outlined",
                          color: selectedCategory === cat ? "primary" : "default",
                          sx: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: "8px"
                          }
                        },
                        cat
                      ))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  Box7__default.default,
                  {
                    sx: {
                      flexGrow: 1,
                      overflowY: "auto",
                      py: 0.5,
                      pr: 0.5,
                      minHeight: 180,
                      "::-webkit-scrollbar": { width: 4 },
                      "::-webkit-scrollbar-thumb": {
                        bgcolor: "rgba(0, 0, 0, 0.12)",
                        borderRadius: 2
                      }
                    },
                    children: filteredApps.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { py: 6, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsxs(Typography9__default.default, { variant: "body2", color: "text.secondary", fontWeight: 600, children: [
                      "No apps found matching \u201C",
                      search,
                      "\u201D"
                    ] }) }) : /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.div,
                      {
                        variants: CONTAINER_VARIANTS,
                        initial: "hidden",
                        animate: "visible",
                        style: {
                          display: "grid",
                          gridTemplateColumns: "repeat(5, 1fr)",
                          gap: "14px 8px",
                          justifyItems: "center"
                        },
                        children: filteredApps.map((app) => /* @__PURE__ */ jsxRuntime.jsx(
                          AppTile,
                          {
                            app,
                            isActive: currentAppId === app.id,
                            onSelect: (selected) => {
                              onSelectApp(selected);
                              onClose();
                            }
                          },
                          app.id
                        ))
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Box7__default.default,
                  {
                    sx: {
                      pt: 1.5,
                      mt: 1,
                      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "caption", sx: { color: "#94A3B8", fontWeight: 600 }, children: "NamiOS Suite" }),
                      /* @__PURE__ */ jsxRuntime.jsxs(Typography9__default.default, { variant: "caption", sx: { color: "#94A3B8", fontSize: "0.7rem" }, children: [
                        "Press ",
                        /* @__PURE__ */ jsxRuntime.jsx("kbd", { style: { background: "rgba(0,0,0,0.06)", padding: "2px 4px", borderRadius: 4, fontWeight: 700 }, children: "Esc" }),
                        " to close"
                      ] })
                    ]
                  }
                )
              ]
            },
            "folder-modal"
          )
        ]
      }
    ) }),
    document.body
  );
};

// src/components/AppLauncher/functions/navigateApp.ts
var isReachableUrl = (url) => {
  if (!url) return false;
  try {
    const { hostname } = new URL(url);
    return hostname !== "localhost" && hostname !== "127.0.0.1";
  } catch {
    return false;
  }
};
var navigateApp = ({
  app,
  currentAppId,
  onSelectApp
}) => {
  if (onSelectApp) {
    onSelectApp(app);
    return;
  }
  const isCurrentApp = Boolean(currentAppId && app.id === currentAppId);
  if (isCurrentApp) return;
  const targetUrl = app.url;
  if (app.disabled || !isReachableUrl(targetUrl ?? "")) {
    window.location.href = "/404";
    return;
  }
  window.open(targetUrl, "_blank", "noopener,noreferrer");
};
var AppLauncher = ({
  title = "NamiOS Ecosystem",
  subtitle = "Switch between NamiOS modules & portals",
  apps = DEFAULT_HOTELOS_APPS,
  currentAppId = "stay-os",
  onSelectApp,
  className,
  tooltip = "NamiOS Apps"
}) => {
  const [isOpen, setIsOpen] = react.useState(false);
  const resolvedApps = react.useMemo(() => {
    return apps.map((app) => ({
      ...app,
      url: resolveAppUrl(app)
    }));
  }, [apps]);
  const handleOpen = react.useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = react.useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleSelectApp = react.useCallback(
    (app) => {
      const resolvedApp = {
        ...app,
        url: resolveAppUrl(app)
      };
      navigateApp({
        app: resolvedApp,
        currentAppId,
        onSelectApp
      });
    },
    [currentAppId, onSelectApp]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(framerMotion.MotionConfig, { transition: FOLDER_LAYOUT_SPRING, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      AppFolderMiniPreview,
      {
        apps: resolvedApps,
        isOpen,
        onClick: handleOpen,
        tooltip,
        className
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      AppFolderModal,
      {
        title,
        subtitle,
        apps: resolvedApps,
        currentAppId,
        isOpen,
        onClose: handleClose,
        onSelectApp: handleSelectApp
      }
    )
  ] });
};

// src/components/AppLauncher/functions/isPwa.ts
var isPwa = () => {
  if (typeof window === "undefined") return false;
  const isStandaloneMedia = window.matchMedia?.("(display-mode: standalone)")?.matches || window.matchMedia?.("(display-mode: window-controls-overlay)")?.matches || window.matchMedia?.("(display-mode: minimal-ui)")?.matches || window.matchMedia?.("(display-mode: fullscreen)")?.matches;
  const isIosStandalone = Boolean(
    window.navigator?.standalone
  );
  const isAndroidTwa = Boolean(document.referrer?.startsWith("android-app://"));
  return Boolean(isStandaloneMedia || isIosStandalone || isAndroidTwa);
};
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
  appsLauncher = /* @__PURE__ */ jsxRuntime.jsx(AppLauncher, {}),
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
        appsLauncher,
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
var LaneContainer = styles.styled(Box7__default.default)(({ theme }) => ({
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
var ColumnHeader = styles.styled(Box7__default.default)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1.5),
  borderBottom: `2px solid ${theme.palette.divider}`
}));
var ItemsScrollArea = styles.styled(Box7__default.default)(({ theme }) => ({
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
    Stack4__default.default,
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
            /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 1.5, alignItems: "center", children: [
              column.color && /* @__PURE__ */ jsxRuntime.jsx(
                Box7__default.default,
                {
                  sx: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: column.color
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "subtitle2", sx: { fontWeight: 700, letterSpacing: "0.05em" }, children: column.title })
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
                children: /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "caption", sx: { fontWeight: 700 }, children: laneItems.length })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ItemsScrollArea, { children: laneItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { position: "relative" }, children: renderItem(item) }, getItemId(item))) })
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
    Box7__default.default,
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
          Box7__default.default,
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
          Box7__default.default,
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
var ImageContainer = styles.styled(Box7__default.default)({
  position: "relative",
  paddingTop: "60%",
  // 5:3 Aspect Ratio
  width: "100%",
  overflow: "hidden"
});
var MediaOverlay = styles.styled(Box7__default.default)({
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
            Box7__default.default,
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
              children: /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "body2", color: "text.secondary", sx: { fontWeight: 600 }, children: "No Image" })
            }
          ),
          actionOverlay && /* @__PURE__ */ jsxRuntime.jsx(MediaOverlay, { children: actionOverlay })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(CardContent__default.default, { sx: { p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "subtitle1", sx: { fontWeight: 700, lineHeight: 1.2 }, noWrap: true, children: name }),
            /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "subtitle1", color: "primary", sx: { fontWeight: 700 }, children: formattedPrice })
          ] }),
          description && /* @__PURE__ */ jsxRuntime.jsx(
            Typography9__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { flexGrow: 1 } }),
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, alignItems: "center", sx: { mt: 1 }, children: [
            badges?.map((badge, idx) => /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { children: badge }, idx)),
            /* @__PURE__ */ jsxRuntime.jsx(Box7__default.default, { sx: { flexGrow: 1 } }),
            stockLabel && /* @__PURE__ */ jsxRuntime.jsx(
              Chip6__default.default,
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

// src/utils/string.ts
function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const only = parts[0] ?? "";
    return only.slice(0, 2).toUpperCase();
  }
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts[parts.length - 1]?.charAt(0) ?? "";
  return (first + last).toUpperCase();
}
var DETERMINISTIC_COLORS = [
  "#007AFF",
  // Blue
  "#5856D6",
  // Purple
  "#AF52DE",
  // Magenta
  "#FF2D55",
  // Pink
  "#FF9500",
  // Orange
  "#34C759",
  // Green
  "#00C7BE",
  // Teal
  "#32ADE6"
  // Light Blue
];
var getAvatarBgColor = (seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DETERMINISTIC_COLORS.length;
  return DETERMINISTIC_COLORS[index] ?? "#007AFF";
};
var UserAvatar = ({
  name = "",
  email = "",
  avatarUrl,
  size = 36,
  sx,
  fontSize,
  className
}) => {
  const [imageSrc, setImageSrc] = react.useState(avatarUrl);
  const [imageError, setImageError] = react.useState(false);
  react.useEffect(() => {
    if (avatarUrl) {
      setImageSrc(avatarUrl);
      setImageError(false);
      return;
    }
    try {
      const stored = window.localStorage.getItem("hotelos.avatar");
      if (stored) {
        setImageSrc(stored);
        setImageError(false);
      }
    } catch {
    }
  }, [avatarUrl]);
  const displayName = name.trim() || email.trim() || "User";
  const initials = initialsFromName(displayName);
  const bgColor = getAvatarBgColor(displayName);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Avatar__default.default,
    {
      src: imageError ? void 0 : imageSrc,
      alt: displayName,
      imgProps: {
        onError: () => setImageError(true)
      },
      className,
      sx: {
        width: size,
        height: size,
        bgcolor: bgColor,
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: fontSize ?? Math.max(12, Math.floor(size * 0.4)),
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...sx
      },
      children: initials
    }
  );
};
var AnimatedBed = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4v16" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 17h20" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M6 8v9",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, transition: { type: "spring", stiffness: 300 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M6 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H6v-1z",
            variants: {
              idle: { y: 0, scale: 1 },
              animate: {
                y: [0, -1, 0],
                scale: [1, 1.05, 1],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.1, y: -1.5, transition: { type: "spring" } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedUsers = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "9",
            cy: "7",
            r: "4",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -3, transition: { type: "spring", stiffness: 400, damping: 10 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.02, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.05, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1, 0],
                transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              },
              hover: { y: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M21 21v-2a4 4 0 0 0-3-3.87",
            variants: {
              idle: { opacity: 0.8 },
              animate: {
                opacity: [0.7, 1, 0.7],
                transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              },
              hover: { opacity: 1 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedCalendar = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              },
              hover: { y: -2, transition: { type: "spring", delay: 0.05 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "8",
            cy: "14",
            r: "1",
            fill: color,
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.3 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "12",
            cy: "14",
            r: "1",
            fill: color,
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              },
              hover: { scale: 1.3 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "16",
            cy: "14",
            r: "1",
            fill: color,
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              },
              hover: { scale: 1.3 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedFolderOpen = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.02, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.03, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M2 10h20l-2 10H4L2 10z",
            variants: {
              idle: { y: 0, skewX: 0 },
              animate: {
                y: [0, 1.5, 0],
                skewX: [0, -3, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: 2, skewX: -6, transition: { type: "spring", stiffness: 300 } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedLayers = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polygon,
          {
            points: "12 2 2 7 12 12 22 7 12 2",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -3, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -5, transition: { type: "spring", stiffness: 400, damping: 12 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "2 12 12 17 22 12",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }
              },
              hover: { y: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "2 17 12 22 22 17",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, 0, 0]
              },
              hover: { y: 0 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedCreditCard = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            variants: {
              idle: { y: 0, rotate: 0 },
              animate: {
                y: [0, -1.5, 0],
                rotate: [0, -1, 0, 1, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -3, rotate: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "2",
            y1: "10",
            x2: "22",
            y2: "10",
            variants: {
              idle: { opacity: 0.8 },
              animate: {
                opacity: [0.6, 1, 0.6],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "5",
            y: "13",
            width: "3",
            height: "2.5",
            rx: "0.5",
            fill: color,
            variants: {
              idle: { opacity: 0.8 },
              animate: {
                opacity: [0.5, 1, 0.5],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.2 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedBrush = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          framerMotion.motion.g,
          {
            variants: {
              idle: { rotate: 0, originX: "18px", originY: "6px" },
              animate: {
                rotate: [0, -12, 6, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { rotate: -18, transition: { type: "spring", stiffness: 300 } }
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }),
              /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 13 9 7l4-4 6 6z" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M19 2v3",
            variants: {
              idle: { opacity: 0.5, scale: 1 },
              animate: {
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M22 5h-3",
            variants: {
              idle: { opacity: 0.5, scale: 1 },
              animate: {
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }
            }
          }
        )
      ]
    }
  );
};
var AnimatedSparkles = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
            variants: {
              idle: { scale: 1, rotate: 0, originX: "12px", originY: "12px" },
              animate: {
                scale: [1, 1.1, 1],
                rotate: [0, 15, -10, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.2, rotate: 45, transition: { type: "spring", stiffness: 300 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M5 3v4",
            variants: {
              idle: { opacity: 0.6 },
              animate: {
                opacity: [0.2, 1, 0.2],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M7 5H3",
            variants: {
              idle: { opacity: 0.6 },
              animate: {
                opacity: [0.2, 1, 0.2],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        )
      ]
    }
  );
};
var AnimatedShieldCheck = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.03, 1],
                transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.05, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "m9 12 2 2 4-4",
            variants: {
              idle: { pathLength: 1 },
              animate: {
                pathLength: [0.8, 1, 0.8],
                transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { pathLength: 1, scale: 1.1, originX: "12px", originY: "12px" }
            }
          }
        )
      ]
    }
  );
};
var AnimatedTrendingUp = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            variants: {
              idle: { pathLength: 1 },
              animate: {
                pathLength: [0.7, 1, 0.7],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { pathLength: 1 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "16 7 22 7 22 13",
            variants: {
              idle: { x: 0, y: 0 },
              animate: {
                x: [0, 2, 0],
                y: [0, -2, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { x: 3, y: -3, transition: { type: "spring", stiffness: 400 } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedRadio = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "12",
            cy: "12",
            r: "2",
            fill: color,
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.3, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.4 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14",
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { opacity: 1, scale: 1.05, originX: "12px", originY: "12px" }
            }
          }
        )
      ]
    }
  );
};
var AnimatedSettings = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        framerMotion.motion.g,
        {
          variants: {
            idle: { rotate: 0, originX: "12.5px", originY: "12.5px" },
            animate: {
              rotate: [0, 90, 180, 270, 360],
              transition: { duration: 12, repeat: Infinity, ease: "linear" }
            },
            hover: { rotate: 90, transition: { type: "spring", stiffness: 300, damping: 15 } }
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
            /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }
      )
    }
  );
};
var AnimatedDashboard = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "3",
            y: "3",
            width: "7",
            height: "9",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "14",
            y: "3",
            width: "7",
            height: "5",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "14",
            y: "12",
            width: "7",
            height: "9",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "3",
            y: "16",
            width: "7",
            height: "5",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedSearch = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        framerMotion.motion.g,
        {
          variants: {
            idle: { rotate: 0, x: 0, y: 0, originX: "11px", originY: "11px" },
            animate: {
              rotate: [0, -8, 8, 0],
              x: [0, -1, 1, 0],
              y: [0, -1, 0, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            },
            hover: { rotate: -15, scale: 1.1, transition: { type: "spring", stiffness: 300 } }
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ]
        }
      )
    }
  );
};
var AnimatedDoorOpen = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 20h20" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M13 20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16",
            variants: {
              idle: { skewY: 0, originX: "4px", originY: "12px" },
              animate: {
                skewY: [0, -6, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { skewY: -12, transition: { type: "spring", stiffness: 300 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "10",
            cy: "12",
            r: "1",
            fill: color,
            variants: {
              idle: { x: 0 },
              animate: {
                x: [0, -1, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        )
      ]
    }
  );
};

exports.APP_TILE_VARIANTS = APP_TILE_VARIANTS;
exports.AnimatedBed = AnimatedBed;
exports.AnimatedBrush = AnimatedBrush;
exports.AnimatedCalendar = AnimatedCalendar;
exports.AnimatedCreditCard = AnimatedCreditCard;
exports.AnimatedDashboard = AnimatedDashboard;
exports.AnimatedDoorOpen = AnimatedDoorOpen;
exports.AnimatedFolderOpen = AnimatedFolderOpen;
exports.AnimatedInbox = AnimatedInbox;
exports.AnimatedLayers = AnimatedLayers;
exports.AnimatedRadio = AnimatedRadio;
exports.AnimatedSearch = AnimatedSearch;
exports.AnimatedSettings = AnimatedSettings;
exports.AnimatedShieldCheck = AnimatedShieldCheck;
exports.AnimatedSparkles = AnimatedSparkles;
exports.AnimatedTrendingUp = AnimatedTrendingUp;
exports.AnimatedUsers = AnimatedUsers;
exports.AppDialog = AppDialog;
exports.AppDrawer = AppDrawer;
exports.AppFolderMiniPreview = AppFolderMiniPreview;
exports.AppFolderModal = AppFolderModal;
exports.AppLauncher = AppLauncher;
exports.AppSideNav = AppSideNav;
exports.AppTile = AppTile;
exports.AppTopBar = AppTopBar;
exports.AppleDialogTransition = AppleDialogTransition;
exports.AuthFormHeader = AuthFormHeader;
exports.AuthFormShell = AuthFormShell;
exports.AuthLayout = AuthLayout;
exports.BACKDROP_TRANSITION = BACKDROP_TRANSITION;
exports.CONTAINER_VARIANTS = CONTAINER_VARIANTS;
exports.ConfirmDialog = ConfirmDialog;
exports.ContextMenu = ContextMenu;
exports.CursorGrid = CursorGrid;
exports.DEFAULT_HOTELOS_APPS = DEFAULT_HOTELOS_APPS;
exports.DashboardLayout = DashboardLayout;
exports.DataTable = DataTable;
exports.DateRangeButton = DateRangeButton;
exports.DescriptionList = DescriptionList;
exports.EmptyState = EmptyState;
exports.ErrorState = ErrorState;
exports.FOLDER_LAYOUT_SPRING = FOLDER_LAYOUT_SPRING;
exports.FamilyDialogTransition = FamilyDialogTransition;
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
exports.PRODUCTION_APP_URLS = PRODUCTION_APP_URLS;
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
exports.UserAvatar = UserAvatar;
exports.VERCEL_APP_URLS = VERCEL_APP_URLS;
exports.WizardDialog = WizardDialog;
exports.getAvatarBgColor = getAvatarBgColor;
exports.isPwa = isPwa;
exports.navigateApp = navigateApp;
exports.resolveAppUrl = resolveAppUrl;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map