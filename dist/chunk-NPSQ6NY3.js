import { AppleDialogTransition } from './chunk-WIZSQCHM.js';
import { useContextMenu, DateRangePreset, useMediaBreakpoint, useLocaleFormat } from './chunk-D4Q67MSF.js';
import { STATUS_COLORS } from './chunk-PIXANAT2.js';
import { PAGE_SIZE_OPTIONS } from './chunk-PGMOSXPC.js';
import { SUPPORTED_LOCALES } from './chunk-TSLK7DRZ.js';
import { initialsFromName } from './chunk-MYZDKFRT.js';
import { dateRangeDays, todayIso, addDays, differenceInDays } from './chunk-3GW7KH25.js';
import CloseIcon4 from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton8 from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import { styled, alpha, useTheme, keyframes } from '@mui/material/styles';
import Box5 from '@mui/material/Box';
import Typography4 from '@mui/material/Typography';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React17, { useRef, useState, useCallback, useId, createContext, forwardRef as forwardRef$1, useEffect, useContext, useMemo, Fragment as Fragment$1 } from 'react';
import Button4 from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import Stack4 from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import Checkbox2 from '@mui/material/Checkbox';
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
import Card2 from '@mui/material/Card';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField5 from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch2 from '@mui/material/Switch';
import CheckIcon from '@mui/icons-material/Check';
import TranslateIcon from '@mui/icons-material/Translate';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Skeleton2 from '@mui/material/Skeleton';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Popover from '@mui/material/Popover';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Drawer2 from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import Tooltip2 from '@mui/material/Tooltip';
import { createPortal } from 'react-dom';
import InputBase from '@mui/material/InputBase';
import CardContent2 from '@mui/material/CardContent';
import CardMedia2 from '@mui/material/CardMedia';

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
var LoadingOverlay = ({ open, label, size = 48 }) => {
  if (!open) return null;
  return /* @__PURE__ */ jsx(OverlayRoot, { children: /* @__PURE__ */ jsx(NamiosLoader, { size, label }) });
};
var AppDialog = ({
  open,
  titleKey,
  titleParams,
  size = "sm",
  actions,
  loading = false,
  disableClose = false,
  onClose,
  children
}) => {
  const { t } = useTranslation();
  const handleClose = (_event, reason) => {
    if (disableClose && (reason === "backdropClick" || reason === "escapeKeyDown")) return;
    onClose();
  };
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      open,
      onClose: handleClose,
      fullWidth: true,
      maxWidth: size,
      TransitionComponent: AppleDialogTransition,
      children: [
        /* @__PURE__ */ jsxs(DialogTitle, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          t(titleKey, titleParams),
          /* @__PURE__ */ jsx(
            IconButton8,
            {
              "aria-label": t("common:actions.close"),
              onClick: onClose,
              edge: "end",
              size: "small",
              children: /* @__PURE__ */ jsx(CloseIcon4, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(DialogContent, { sx: { position: "relative" }, children: [
          children,
          /* @__PURE__ */ jsx(LoadingOverlay, { open: loading })
        ] }),
        actions ? /* @__PURE__ */ jsx(DialogActions, { children: actions }) : null
      ]
    }
  );
};
var FormDialog = ({
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
}) => {
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
            startIcon: submitting ? /* @__PURE__ */ jsx(CircularProgress, { size: 16, color: "inherit" }) : void 0,
            children: submitting ? t("common:actions.saving", { defaultValue: "Saving..." }) : t(submitKey)
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
};
var AnimatedInbox = ({
  size = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.polyline,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.line,
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
var EmptyStateContainer = styled(Paper)(({ theme }) => ({
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
var IconGlowBadge = styled(Box5)(({ theme }) => ({
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
  const { t } = useTranslation();
  const displayTitle = title || t(titleKey);
  const displayDesc = description || (descriptionKey ? t(descriptionKey, descriptionParams) : void 0);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 10, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.35, ease: "easeOut" },
      style: { width: "100%" },
      children: /* @__PURE__ */ jsxs(
        EmptyStateContainer,
        {
          variant: "outlined",
          sx: {
            py: compact ? 3.5 : 6,
            minHeight: compact ? 180 : 280
          },
          children: [
            /* @__PURE__ */ jsx(IconGlowBadge, { children: icon ?? /* @__PURE__ */ jsx(AnimatedInbox, { size: 42, isAnimated: true }) }),
            /* @__PURE__ */ jsxs(Stack4, { spacing: 0.75, alignItems: "center", sx: { maxWidth: 440, mt: 1, mb: action ? 2.5 : 0 }, children: [
              /* @__PURE__ */ jsx(Typography4, { variant: "h6", fontWeight: 700, color: "text.primary", letterSpacing: "-0.2px", children: displayTitle }),
              displayDesc ? /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.secondary", fontWeight: 500, lineHeight: 1.5, children: displayDesc }) : null
            ] }),
            action ? /* @__PURE__ */ jsx(Box5, { sx: { mt: 1 }, children: action }) : null
          ]
        }
      )
    }
  );
};
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
var idCounter = 0;
function generateId(prefix = "mui") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}
function forwardRef(component) {
  return React17.forwardRef(component);
}
function isInteractive(element) {
  const tag = element.tagName.toLowerCase();
  return tag === "button" || tag === "a" || tag === "input" || tag === "select" || tag === "textarea" || element.getAttribute("tabindex") !== null;
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function mapRange(value, inMin, inMax, outMin, outMax) {
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// node_modules/@namios/motionui-react/dist/esm/components/Accordion/Accordion.js
var AccordionSummary = ({ expandIcon, children, className, ...props }) => {
  return jsxs("button", { type: "button", className: cn("mui-accordion__summary", className), ...props, children: [jsx("div", { className: "mui-accordion__summary-content", children }), jsx("div", { className: "mui-accordion__expand-icon", children: expandIcon || jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: jsx("polyline", { points: "6 9 12 15 18 9" }) }) })] });
};
var AccordionDetails = ({ children, className, ...props }) => {
  return jsx("div", { className: cn("mui-accordion__details", className), ...props, children: jsx("div", { className: "mui-accordion__details-inner", children }) });
};
var Accordion = ({ expanded: controlledExpanded, defaultExpanded = false, onChange, className, children, ...props }) => {
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
  const isExpanded = controlledExpanded !== void 0 ? controlledExpanded : uncontrolledExpanded;
  const toggle = () => {
    const next = !isExpanded;
    if (controlledExpanded === void 0) {
      setUncontrolledExpanded(next);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(next);
  };
  return jsx("div", { className: cn("mui-accordion", isExpanded && "mui-accordion--expanded", className), ...props, children: React17.Children.map(children, (child) => {
    if (!React17.isValidElement(child))
      return child;
    if (child.type === AccordionSummary) {
      return React17.cloneElement(child, {
        onClick: toggle,
        role: "button",
        "aria-expanded": isExpanded
      });
    }
    return child;
  }) });
};
var AlertTitle = ({ className, children, ...props }) => {
  return jsx("h5", { className: cn("mui-alert__title", className), ...props, children });
};
var defaultIcons = {
  success: jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), jsx("polyline", { points: "22 4 12 14.01 9 11.01" })] }),
  info: jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("circle", { cx: "12", cy: "12", r: "10" }), jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] }),
  warning: jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }),
  error: jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("circle", { cx: "12", cy: "12", r: "10" }), jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] })
};
var Alert = React17.forwardRef(({ severity = "success", variant = "standard", icon, action, onClose, closeText = "Close", className, children, ...props }, ref) => {
  const renderIcon = () => {
    if (icon === false)
      return null;
    if (icon !== void 0)
      return jsx("div", { className: "mui-alert__icon", children: icon });
    return jsx("div", { className: "mui-alert__icon", children: defaultIcons[severity] });
  };
  return jsxs("div", { ref, role: "alert", className: cn("mui-alert", `mui-alert--${severity}`, `mui-alert--${variant}`, className), ...props, children: [renderIcon(), jsx("div", { className: "mui-alert__message", children }), action && jsx("div", { className: "mui-alert__action", children: action }), onClose && !action && jsx("div", { className: "mui-alert__action", children: jsx("button", { type: "button", className: "mui-alert__close-btn", "aria-label": closeText, onClick: onClose, children: jsxs("svg", { viewBox: "0 0 24 24", width: "18", height: "18", stroke: "currentColor", strokeWidth: "2", fill: "none", children: [jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }) })] });
});
Alert.displayName = "Alert";
var Avatar = React17.forwardRef(({ src, alt, size = "medium", variant = "circular", children, className, ...props }, ref) => {
  const sizeStyle = typeof size === "number" ? { width: size, height: size } : {};
  return jsx("div", { ref, className: cn("mui-avatar", `mui-avatar--${variant}`, typeof size === "string" && `mui-avatar--${size}`, className), style: sizeStyle, ...props, children: src ? jsx("img", { src, alt: alt || "", className: "mui-avatar__img" }) : children || (alt ? alt.charAt(0).toUpperCase() : "?") });
});
Avatar.displayName = "Avatar";
var AvatarGroup = React17.forwardRef(({ max = 5, spacing = "medium", children, className, ...props }, ref) => {
  const childArray = React17.Children.toArray(children);
  const excess = childArray.length - max;
  const visible = excess > 0 ? childArray.slice(0, max) : childArray;
  return jsxs("div", { ref, className: cn("mui-avatar-group", `mui-avatar-group--${spacing}`, className), ...props, children: [visible, excess > 0 && jsxs("div", { className: "mui-avatar mui-avatar--circular mui-avatar--medium mui-avatar-group__excess", children: ["+", excess] })] });
});
AvatarGroup.displayName = "AvatarGroup";
var Badge = React17.forwardRef(({ badgeContent, color = "error", variant = "standard", invisible = false, max = 99, overlap = "rectangular", anchorOrigin = { vertical: "top", horizontal: "right" }, children, className, ...props }, ref) => {
  const displayContent = variant === "dot" ? null : typeof badgeContent === "number" && badgeContent > max ? `${max}+` : badgeContent;
  const shouldHide = invisible || variant === "standard" && badgeContent == null;
  return jsxs("span", { ref, className: cn("mui-badge", className), ...props, children: [children, !shouldHide && jsx("span", { className: cn("mui-badge__badge", `mui-badge--${color}`, `mui-badge--${variant}`, `mui-badge--${overlap}`, `mui-badge--${anchorOrigin.vertical}-${anchorOrigin.horizontal}`), children: displayContent })] });
});
Badge.displayName = "Badge";
var Box3 = React17.forwardRef(({ component = "div", display, flexDirection, alignItems, justifyContent, gap, padding, margin, width, height, minWidth, maxWidth, minHeight, maxHeight, overflow, position, className, children, style, ...props }, ref) => {
  const inlineStyle = {
    ...style,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
    padding: typeof padding === "number" ? `${padding * 0.25}rem` : padding,
    margin: typeof margin === "number" ? `${margin * 0.25}rem` : margin,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    overflow,
    position
  };
  Object.keys(inlineStyle).forEach((key) => {
    if (inlineStyle[key] === void 0)
      delete inlineStyle[key];
  });
  return React17.createElement(component, { ref, className: cn("mui-box", className), style: inlineStyle, ...props }, children);
});
Box3.displayName = "Box";
var Button2 = React17.forwardRef(({ variant = "contained", color = "primary", size = "medium", fullWidth = false, disabled = false, loading = false, disableRipple = false, disableElevation = false, startIcon, endIcon, rounded = false, className, children, onClick, href, ...props }, ref) => {
  const buttonRef = useRef(null);
  const [ripples, setRipples] = useState([]);
  const handleClick = (e) => {
    if (disabled || loading)
      return;
    if (!disableRipple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const classes = cn("mui-button", `mui-button--${variant}`, `mui-button--${color}`, `mui-button--${size}`, fullWidth && "mui-button--full-width", disabled && "mui-button--disabled", loading && "mui-button--loading", disableElevation && "mui-button--flat", rounded && "mui-button--rounded", className);
  const content = jsxs(Fragment, { children: [loading && jsx("span", { className: "mui-button__spinner", "aria-hidden": "true", children: jsx("svg", { viewBox: "0 0 24 24", className: "mui-button__spinner-svg", children: jsx("circle", { cx: "12", cy: "12", r: "10", fill: "none", strokeWidth: "3" }) }) }), startIcon && jsx("span", { className: "mui-button__start-icon", children: startIcon }), jsx("span", { className: cn("mui-button__label", loading && "mui-button__label--hidden"), children }), endIcon && jsx("span", { className: "mui-button__end-icon", children: endIcon }), !disableRipple && ripples.map((ripple) => jsx("span", { className: "mui-button__ripple", style: { left: ripple.x, top: ripple.y } }, ripple.id))] });
  if (href && !disabled) {
    return jsx("a", { className: classes, href, role: "button", tabIndex: 0, children: content });
  }
  return jsx("button", { ref: ref || buttonRef, className: classes, disabled: disabled || loading, onClick: handleClick, "aria-busy": loading, "aria-disabled": disabled || loading, ...props, children: content });
});
Button2.displayName = "Button";
var Card = React17.forwardRef(({ elevation = 1, variant = "elevation", interactive = false, className, children, ...props }, ref) => jsx("div", { ref, className: cn("mui-card", variant === "elevation" && `mui-card--elevation-${elevation}`, variant === "outlined" && "mui-card--outlined", interactive && "mui-card--interactive", className), ...props, children }));
Card.displayName = "Card";
var CardHeader = ({ avatar, title, subheader, action, className, ...props }) => jsxs("div", { className: cn("mui-card__header", className), ...props, children: [avatar && jsx("div", { className: "mui-card__header-avatar", children: avatar }), jsxs("div", { className: "mui-card__header-content", children: [title && jsx("div", { className: "mui-card__header-title", children: title }), subheader && jsx("div", { className: "mui-card__header-subheader", children: subheader })] }), action && jsx("div", { className: "mui-card__header-action", children: action })] });
var CardContent = ({ className, children, ...props }) => jsx("div", { className: cn("mui-card__content", className), ...props, children });
var CardMedia = ({ component = "img", className, ...props }) => React17.createElement(component, { className: cn("mui-card__media", className), ...props });
var CardActions = ({ disableSpacing, className, children, ...props }) => jsx("div", { className: cn("mui-card__actions", !disableSpacing && "mui-card__actions--spaced", className), ...props, children });
var Checkbox = React17.forwardRef(({ color = "primary", size = "medium", label, indeterminate, className, id, ...props }, ref) => {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2)}`;
  const inputRef = React17.useRef(null);
  React17.useEffect(() => {
    const el = (ref === null || ref === void 0 ? void 0 : ref.current) || inputRef.current;
    if (el)
      el.indeterminate = !!indeterminate;
  }, [indeterminate, ref]);
  return jsxs("label", { className: cn("mui-checkbox", `mui-checkbox--${color}`, `mui-checkbox--${size}`, props.disabled && "mui-checkbox--disabled", className), htmlFor: inputId, children: [jsxs("span", { className: "mui-checkbox__box", children: [jsx("input", { ref: ref || inputRef, type: "checkbox", id: inputId, className: "mui-checkbox__input", ...props }), jsx("svg", { className: "mui-checkbox__icon", viewBox: "0 0 24 24", "aria-hidden": "true", children: indeterminate ? jsx("path", { d: "M6 12h12", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }) : jsx("path", { d: "M5 13l4 4L19 7", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), label && jsx("span", { className: "mui-checkbox__label", children: label })] });
});
Checkbox.displayName = "Checkbox";
var Chip = React17.forwardRef(({ label, variant = "filled", color = "primary", size = "medium", icon, avatar, deleteIcon, onDelete, clickable, disabled, className, onClick, ...props }, ref) => {
  const isClickable = clickable || !!onClick;
  return jsxs("div", { ref, className: cn("mui-chip", `mui-chip--${variant}`, `mui-chip--${color}`, `mui-chip--${size}`, isClickable && "mui-chip--clickable", disabled && "mui-chip--disabled", className), role: isClickable ? "button" : void 0, tabIndex: isClickable && !disabled ? 0 : void 0, onClick: !disabled ? onClick : void 0, ...props, children: [avatar && jsx("span", { className: "mui-chip__avatar", children: avatar }), icon && !avatar && jsx("span", { className: "mui-chip__icon", children: icon }), jsx("span", { className: "mui-chip__label", children: label }), onDelete && jsx("button", { className: "mui-chip__delete", onClick: (e) => {
    e.stopPropagation();
    onDelete();
  }, "aria-label": `Remove ${label}`, tabIndex: -1, children: deleteIcon || jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", children: jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }) }) })] });
});
Chip.displayName = "Chip";
var Container = React17.forwardRef(({ maxWidth = "lg", fixed = false, disableGutters = false, className, children, ...props }, ref) => {
  const classes = cn("mui-container", maxWidth && `mui-container--${maxWidth}`, fixed && "mui-container--fixed", !disableGutters && "mui-container--gutters", className);
  return jsx("div", { ref, className: classes, ...props, children });
});
Container.displayName = "Container";
var DialogTitle2 = ({ className, children, ...props }) => jsx("h2", { className: cn("mui-dialog__title", className), ...props, children });
var DialogContent2 = ({ className, children, ...props }) => jsx("div", { className: cn("mui-dialog__content", className), ...props, children });
var DialogActions2 = ({ className, children, ...props }) => jsx("div", { className: cn("mui-dialog__actions", className), ...props, children });
var Dialog2 = ({ open, onClose, maxWidth = "sm", fullWidth = true, className, children, ...props }) => {
  useEffect(() => {
    if (!open)
      return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
  if (!open)
    return null;
  return jsxs("div", { className: "mui-dialog__root", children: [jsx("div", { className: "mui-dialog__backdrop", onClick: onClose }), jsx("div", { className: "mui-dialog__container", children: jsx("div", { role: "dialog", "aria-modal": "true", className: cn("mui-dialog__paper", maxWidth && `mui-dialog--max-${maxWidth}`, fullWidth && "mui-dialog--full-width", className), ...props, children }) })] });
};
var Divider = React17.forwardRef(({ orientation = "horizontal", variant = "fullWidth", textAlign = "center", light = false, className, children, ...props }, ref) => {
  const hasContent = !!children;
  const classes = cn("mui-divider", `mui-divider--${orientation}`, `mui-divider--${variant}`, light && "mui-divider--light", hasContent && "mui-divider--with-content", hasContent && `mui-divider--text-${textAlign}`, className);
  if (hasContent) {
    return jsx("div", { ref, className: classes, role: "separator", ...props, children: jsx("span", { className: "mui-divider__content", children }) });
  }
  return jsx("hr", { ref, className: classes, role: "separator", ...props });
});
Divider.displayName = "Divider";
var Drawer = ({ open, onClose, anchor = "bottom", className, children, ...props }) => {
  useEffect(() => {
    if (!open)
      return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
  if (!open)
    return null;
  return jsxs("div", { className: "mui-drawer-root", children: [jsx("div", { className: "mui-drawer-backdrop", onClick: onClose }), jsxs("div", { role: "dialog", "aria-modal": "true", className: cn("mui-drawer-paper", `mui-drawer-paper--${anchor}`, className), ...props, children: [anchor === "bottom" && jsx("div", { className: "mui-drawer-handle-bar", children: jsx("div", { className: "mui-drawer-handle" }) }), jsx("div", { className: "mui-drawer-content", children })] })] });
};
var Grid = React17.forwardRef(({ container, item, spacing = 2, columns = 12, xs, sm, md, lg, xl, direction, alignItems, justifyContent, wrap = "wrap", component = "div", className, children, style, ...props }, ref) => {
  const classes = cn("mui-grid", container && "mui-grid--container", item && "mui-grid--item", typeof xs === "number" && `mui-grid--xs-${xs}`, xs === true && "mui-grid--xs-auto", typeof sm === "number" && `mui-grid--sm-${sm}`, typeof md === "number" && `mui-grid--md-${md}`, typeof lg === "number" && `mui-grid--lg-${lg}`, typeof xl === "number" && `mui-grid--xl-${xl}`, className);
  const inlineStyle = {
    ...style,
    ...container ? {
      "--grid-spacing": `${spacing * 0.25}rem`,
      "--grid-columns": columns,
      flexDirection: direction,
      alignItems,
      justifyContent,
      flexWrap: wrap
    } : {}
  };
  return React17.createElement(component, { ref, className: classes, style: inlineStyle, ...props }, children);
});
Grid.displayName = "Grid";
var IconButton2 = React17.forwardRef(({ color = "default", size = "medium", edge = false, className, disabled = false, children, ...props }, ref) => {
  return jsxs("button", { ref, type: "button", disabled, className: cn("mui-icon-button", `mui-icon-button--${color}`, `mui-icon-button--${size}`, edge && `mui-icon-button--edge-${edge}`, className), ...props, children: [jsx("span", { className: "mui-icon-button__content", children }), jsx("span", { className: "mui-icon-button__ripple" })] });
});
IconButton2.displayName = "IconButton";
var OtpInput = ({ length = 6, value: controlledValue, defaultValue = "", onChange, onComplete, disabled = false, error = false, autoFocus = false, className }) => {
  const [internalValue, setInternalValue] = useState((controlledValue !== null && controlledValue !== void 0 ? controlledValue : defaultValue).padEnd(length, " ").slice(0, length));
  const inputsRef = useRef([]);
  const digits = (controlledValue !== null && controlledValue !== void 0 ? controlledValue : internalValue).split("");
  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);
  const updateValue = (newDigits) => {
    const code = newDigits.join("").trimEnd();
    if (controlledValue === void 0) {
      setInternalValue(newDigits.join(""));
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(code);
    if (code.length === length) {
      onComplete === null || onComplete === void 0 ? void 0 : onComplete(code);
    }
  };
  const handleKeyDown = (index, e) => {
    var _a, _b, _c;
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = [...digits];
      if (next[index] && next[index] !== " ") {
        next[index] = " ";
        updateValue(next);
      } else if (index > 0) {
        next[index - 1] = " ";
        updateValue(next);
        (_a = inputsRef.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      (_b = inputsRef.current[index - 1]) === null || _b === void 0 ? void 0 : _b.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      (_c = inputsRef.current[index + 1]) === null || _c === void 0 ? void 0 : _c.focus();
    }
  };
  const handleChange = (index, e) => {
    var _a;
    const inputVal = e.target.value.replace(/\D/g, "");
    if (!inputVal)
      return;
    const char = inputVal.slice(-1);
    const next = [...digits];
    next[index] = char;
    updateValue(next);
    if (index < length - 1) {
      (_a = inputsRef.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
    }
  };
  const handlePaste = (e) => {
    var _a;
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted)
      return;
    const next = pasted.padEnd(length, " ").split("");
    updateValue(next);
    const focusIndex = Math.min(pasted.length, length - 1);
    (_a = inputsRef.current[focusIndex]) === null || _a === void 0 ? void 0 : _a.focus();
  };
  return jsx("div", { className: cn("mui-otp-input", error && "mui-otp-input--error", disabled && "mui-otp-input--disabled", className), onPaste: handlePaste, children: Array.from({ length }).map((_, i) => jsx("input", { ref: (el) => inputsRef.current[i] = el, type: "text", inputMode: "numeric", pattern: "[0-9]*", maxLength: 1, value: digits[i] === " " ? "" : digits[i] || "", disabled, onKeyDown: (e) => handleKeyDown(i, e), onChange: (e) => handleChange(i, e), onFocus: (e) => e.target.select(), className: "mui-otp-input__slot", "aria-label": `Digit ${i + 1} of ${length}` }, i)) });
};
var Paper2 = React17.forwardRef(({ elevation = 1, variant = "elevation", square = false, className, children, ...props }, ref) => {
  const classes = cn("mui-paper", variant === "elevation" && `mui-paper--elevation-${elevation}`, variant === "outlined" && "mui-paper--outlined", !square && "mui-paper--rounded", className);
  return jsx("div", { ref, className: classes, ...props, children });
});
Paper2.displayName = "Paper";
var CircularProgress2 = React17.forwardRef(({ size = 40, thickness = 3.6, value = 0, variant = "indeterminate", color = "primary", className, style, ...props }, ref) => {
  const numericSize = typeof size === "number" ? size : 40;
  const radius = (numericSize - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = variant === "determinate" ? circumference - circumference * Math.min(100, Math.max(0, value)) / 100 : void 0;
  return jsx("div", { ref, role: "progressbar", "aria-valuenow": variant === "determinate" ? Math.round(value) : void 0, className: cn("mui-circular-progress", `mui-circular-progress--${variant}`, `mui-circular-progress--${color}`, className), style: {
    width: size,
    height: size,
    ...style
  }, ...props, children: jsx("svg", { className: "mui-circular-progress__svg", viewBox: `0 0 ${numericSize} ${numericSize}`, children: jsx("circle", { className: "mui-circular-progress__circle", cx: numericSize / 2, cy: numericSize / 2, r: radius, fill: "none", strokeWidth: thickness, strokeDasharray: variant === "determinate" ? circumference : void 0, strokeDashoffset }) }) });
});
CircularProgress2.displayName = "CircularProgress";
var LinearProgress = React17.forwardRef(({ value = 0, variant = "indeterminate", color = "primary", className, style, ...props }, ref) => {
  return jsx("div", { ref, role: "progressbar", "aria-valuenow": variant === "determinate" ? Math.round(value) : void 0, className: cn("mui-linear-progress", `mui-linear-progress--${variant}`, `mui-linear-progress--${color}`, className), style, ...props, children: variant === "determinate" ? jsx("div", { className: "mui-linear-progress__bar", style: { width: `${Math.min(100, Math.max(0, value))}%` } }) : jsxs(Fragment, { children: [jsx("div", { className: "mui-linear-progress__bar mui-linear-progress__bar--1" }), jsx("div", { className: "mui-linear-progress__bar mui-linear-progress__bar--2" })] }) });
});
LinearProgress.displayName = "LinearProgress";
var Radio = React17.forwardRef(({ color = "primary", size = "medium", label, className, ...props }, ref) => jsxs("label", { className: cn("mui-radio", `mui-radio--${color}`, `mui-radio--${size}`, props.disabled && "mui-radio--disabled", className), children: [jsxs("span", { className: "mui-radio__circle", children: [jsx("input", { ref, type: "radio", className: "mui-radio__input", ...props }), jsx("span", { className: "mui-radio__dot" })] }), label && jsx("span", { className: "mui-radio__label", children: label })] }));
Radio.displayName = "Radio";
var RadioGroup = React17.forwardRef(({ name, value, defaultValue, onChange, row = false, children, className, ...props }, ref) => jsx("div", { ref, role: "radiogroup", className: cn("mui-radio-group", row && "mui-radio-group--row", className), ...props, children: React17.Children.map(children, (child) => {
  if (React17.isValidElement(child)) {
    return React17.cloneElement(child, { name, onChange, ...value !== void 0 ? { checked: child.props.value === value } : {} });
  }
  return child;
}) }));
RadioGroup.displayName = "RadioGroup";
var Rating = ({ value: controlledValue, defaultValue = 0, max = 5, onChange, readOnly = false, disabled = false, size = "medium", className }) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(null);
  const activeValue = hoverValue !== null ? hoverValue : controlledValue !== null && controlledValue !== void 0 ? controlledValue : internalValue;
  const handleClick = (rating) => {
    if (readOnly || disabled)
      return;
    if (controlledValue === void 0) {
      setInternalValue(rating);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(rating);
  };
  return jsx("div", { className: cn("mui-rating", `mui-rating--${size}`, readOnly && "mui-rating--readonly", disabled && "mui-rating--disabled", className), onMouseLeave: () => setHoverValue(null), role: "radiogroup", children: Array.from({ length: max }).map((_, i) => {
    const starNumber = i + 1;
    const isFilled = starNumber <= activeValue;
    return jsx("button", { type: "button", disabled: disabled || readOnly, className: cn("mui-rating__star", isFilled && "mui-rating__star--filled"), onClick: () => handleClick(starNumber), onMouseEnter: () => !readOnly && !disabled && setHoverValue(starNumber), "aria-label": `${starNumber} Star${starNumber > 1 ? "s" : ""}`, children: jsx("svg", { viewBox: "0 0 24 24", className: "mui-rating__star-icon", fill: isFilled ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }) }, i);
  }) });
};
var Select = React17.forwardRef(({ label, options = [], variant = "outlined", fullWidth = false, helperText, error = false, className, children, value, defaultValue, onChange, disabled, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  return jsxs("div", { className: cn("mui-select-field", `mui-select-field--${variant}`, fullWidth && "mui-select-field--full-width", error && "mui-select-field--error", disabled && "mui-select-field--disabled", isFocused && "mui-select-field--focused", className), children: [label && jsx("label", { className: "mui-select-field__label", children: label }), jsxs("div", { className: "mui-select-field__wrapper", children: [jsx("select", { ref, value, defaultValue, disabled, onChange, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), className: "mui-select-field__input", ...props, children: options.length > 0 ? options.map((opt) => jsx("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value)) : children }), jsx("div", { className: "mui-select-field__arrow", children: jsx("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "currentColor", children: jsx("path", { d: "M7 10l5 5 5-5z" }) }) })] }), helperText && jsx("p", { className: "mui-select-field__helper", children: helperText })] });
});
Select.displayName = "Select";
var Skeleton = React17.forwardRef(({ variant = "text", animation = "wave", width, height, className, style, ...props }, ref) => {
  return jsx("div", { ref, className: cn("mui-skeleton", `mui-skeleton--${variant}`, animation && `mui-skeleton--${animation}`, className), style: {
    width,
    height,
    ...style
  }, ...props });
});
Skeleton.displayName = "Skeleton";
var Slider = React17.forwardRef(({ value: propValue, defaultValue = 50, min = 0, max = 100, step = 1, color = "primary", size = "medium", disabled = false, marks = false, valueLabelDisplay = "auto", onChange, onChangeCommitted, className, ...props }, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const trackRef = useRef(null);
  const val = propValue !== void 0 ? propValue : internalValue;
  const percent = (val - min) / (max - min) * 100;
  const updateValue = useCallback((clientX) => {
    if (!trackRef.current || disabled)
      return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    const rawValue = min + ratio * (max - min);
    const stepped = Math.round(rawValue / step) * step;
    const clamped = clamp(stepped, min, max);
    setInternalValue(clamped);
    onChange === null || onChange === void 0 ? void 0 : onChange(clamped);
  }, [min, max, step, disabled, onChange]);
  const handleMouseDown = (e) => {
    if (disabled)
      return;
    setDragging(true);
    updateValue(e.clientX);
    const handleMouseMove = (ev) => updateValue(ev.clientX);
    const handleMouseUp = (ev) => {
      setDragging(false);
      updateValue(ev.clientX);
      onChangeCommitted === null || onChangeCommitted === void 0 ? void 0 : onChangeCommitted(val);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  const showLabel = valueLabelDisplay === "on" || valueLabelDisplay === "auto" && (dragging || hovering);
  return jsxs("div", { ref, className: cn("mui-slider", `mui-slider--${color}`, `mui-slider--${size}`, disabled && "mui-slider--disabled", dragging && "mui-slider--active", className), onMouseDown: handleMouseDown, role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": val, "aria-disabled": disabled, tabIndex: disabled ? -1 : 0, ...props, children: [jsxs("div", { ref: trackRef, className: "mui-slider__track-container", children: [jsx("div", { className: "mui-slider__rail" }), jsx("div", { className: "mui-slider__track", style: { width: `${percent}%` } }), jsx("div", { className: "mui-slider__thumb", style: { left: `${percent}%` }, onMouseEnter: () => setHovering(true), onMouseLeave: () => setHovering(false), children: showLabel && jsx("span", { className: "mui-slider__value-label", children: Math.round(val) }) })] }), marks && Array.isArray(marks) && jsx("div", { className: "mui-slider__marks", children: marks.map((m) => jsx("span", { className: "mui-slider__mark", style: { left: `${(m.value - min) / (max - min) * 100}%` }, children: m.label && jsx("span", { className: "mui-slider__mark-label", children: m.label }) }, m.value)) })] });
});
Slider.displayName = "Slider";
var Stack2 = React17.forwardRef(({ direction = "column", spacing = 2, alignItems, justifyContent, flexWrap, divider, component = "div", className, children, style, ...props }, ref) => {
  const classes = cn("mui-stack", `mui-stack--${direction}`, className);
  const inlineStyle = {
    ...style,
    gap: `${spacing * 0.25}rem`,
    alignItems,
    justifyContent,
    flexWrap
  };
  Object.keys(inlineStyle).forEach((k) => {
    if (inlineStyle[k] === void 0)
      delete inlineStyle[k];
  });
  let content = children;
  if (divider && React17.Children.count(children) > 1) {
    const childArray = React17.Children.toArray(children);
    const withDividers = [];
    childArray.forEach((child, i) => {
      withDividers.push(child);
      if (i < childArray.length - 1) {
        withDividers.push(React17.cloneElement(divider, { key: `divider-${i}` }));
      }
    });
    content = withDividers;
  }
  return React17.createElement(component, { ref, className: classes, style: inlineStyle, ...props }, content);
});
Stack2.displayName = "Stack";
var Switch = React17.forwardRef(({ color = "primary", size = "medium", label, labelPlacement = "end", className, ...props }, ref) => {
  return jsxs("label", { className: cn("mui-switch", `mui-switch--${color}`, `mui-switch--${size}`, `mui-switch--label-${labelPlacement}`, props.disabled && "mui-switch--disabled", className), children: [label && labelPlacement === "start" && jsx("span", { className: "mui-switch__label", children: label }), jsxs("span", { className: "mui-switch__track", children: [jsx("input", { ref, type: "checkbox", className: "mui-switch__input", role: "switch", ...props }), jsx("span", { className: "mui-switch__thumb" })] }), label && labelPlacement === "end" && jsx("span", { className: "mui-switch__label", children: label })] });
});
Switch.displayName = "Switch";
var Tab = ({ value, label, icon, selected = false, className, children, ...props }) => {
  return jsxs("button", { type: "button", role: "tab", "aria-selected": selected, className: cn("mui-tab", selected && "mui-tab--selected", className), ...props, children: [icon && jsx("span", { className: "mui-tab__icon", children: icon }), jsx("span", { className: "mui-tab__label", children: label !== null && label !== void 0 ? label : children })] });
};
var Tabs = ({ value, onChange, items, variant = "line", fullWidth = false, className, children }) => {
  return jsx("div", { role: "tablist", className: cn("mui-tabs", `mui-tabs--${variant}`, fullWidth && "mui-tabs--full-width", className), children: items ? items.map((item) => jsx(Tab, { value: item.id, label: item.label, icon: item.icon, disabled: item.disabled, selected: value === item.id, onClick: () => onChange(item.id) }, item.id)) : React17.Children.map(children, (child) => {
    if (!React17.isValidElement(child))
      return child;
    const isSelected = child.props.value === value;
    return React17.cloneElement(child, {
      selected: isSelected,
      onClick: () => onChange(child.props.value)
    });
  }) });
};
var TextField = React17.forwardRef(({ variant = "outlined", color = "primary", size = "medium", label, helperText, error = false, fullWidth = false, multiline = false, rows = 4, startAdornment, endAdornment, inputRef, className, disabled, value, defaultValue, onChange, onFocus, onBlur, id: propId, ...props }, ref) => {
  const autoId = useId();
  const id = propId || autoId;
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!(value || defaultValue));
  const internalRef = useRef(null);
  const handleFocus = (e) => {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  const handleBlur = (e) => {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const isFloating = focused || (value !== void 0 ? Boolean(value) : hasValue) || Boolean(defaultValue) || !!startAdornment;
  const wrapperClasses = cn("mui-textfield", `mui-textfield--${variant}`, `mui-textfield--${size}`, `mui-textfield--${error ? "error" : color}`, focused && "mui-textfield--focused", error && "mui-textfield--error", disabled && "mui-textfield--disabled", fullWidth && "mui-textfield--full-width", isFloating && "mui-textfield--floating", className);
  const inputProps = {
    ref: inputRef || internalRef,
    id,
    className: "mui-textfield__input",
    disabled,
    value,
    defaultValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    "aria-invalid": error,
    "aria-describedby": helperText ? `${id}-helper` : void 0,
    ...props
  };
  return jsxs("div", { ref, className: wrapperClasses, children: [jsxs("div", { className: "mui-textfield__wrapper", children: [startAdornment && jsx("span", { className: "mui-textfield__adornment mui-textfield__adornment--start", children: startAdornment }), multiline ? jsx("textarea", { ...inputProps, rows, className: "mui-textfield__input mui-textfield__textarea" }) : jsx("input", { ...inputProps }), label && jsx("label", { htmlFor: id, className: "mui-textfield__label", children: label }), endAdornment && jsx("span", { className: "mui-textfield__adornment mui-textfield__adornment--end", children: endAdornment }), variant === "filled" && jsx("div", { className: "mui-textfield__fill-bg" }), variant === "standard" && jsx("div", { className: "mui-textfield__underline" })] }), helperText && jsx("p", { id: `${id}-helper`, className: cn("mui-textfield__helper", error && "mui-textfield__helper--error"), children: helperText })] });
});
TextField.displayName = "TextField";
var Tooltip = ({ title, children, placement = "top", arrow = true, enterDelay = 150, leaveDelay = 100, className }) => {
  const [open, setOpen] = useState(false);
  const enterTimer = useRef(null);
  const leaveTimer = useRef(null);
  const handleMouseEnter = () => {
    if (leaveTimer.current)
      clearTimeout(leaveTimer.current);
    enterTimer.current = window.setTimeout(() => {
      setOpen(true);
    }, enterDelay);
  };
  const handleMouseLeave = () => {
    if (enterTimer.current)
      clearTimeout(enterTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      setOpen(false);
    }, leaveDelay);
  };
  useEffect(() => {
    return () => {
      if (enterTimer.current)
        clearTimeout(enterTimer.current);
      if (leaveTimer.current)
        clearTimeout(leaveTimer.current);
    };
  }, []);
  return jsxs("div", { className: "mui-tooltip-wrapper", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleMouseEnter, onBlur: handleMouseLeave, children: [children, open && title && jsxs("div", { role: "tooltip", className: cn("mui-tooltip", `mui-tooltip--${placement}`, arrow && "mui-tooltip--arrow", className), children: [title, arrow && jsx("span", { className: "mui-tooltip__arrow" })] })] });
};
var variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  inherit: "span"
};
var Typography3 = React17.forwardRef(({ variant = "body1", component, align = "inherit", color = "inherit", gutterBottom = false, noWrap = false, paragraph = false, className, children, ...props }, ref) => {
  const Component = component || (paragraph ? "p" : variantMapping[variant] || "span");
  const classes = cn("mui-typography", `mui-typography--${variant}`, align !== "inherit" && `mui-typography--align-${align}`, `mui-typography--color-${color}`, gutterBottom && "mui-typography--gutter-bottom", noWrap && "mui-typography--no-wrap", className);
  return React17.createElement(Component, { ref, className: classes, ...props }, children);
});
Typography3.displayName = "Typography";

// node_modules/@namios/motionui-react/dist/esm/utils/colorEngine.js
function hexToRgb(color) {
  if (!color)
    return { r: 99, g: 102, b: 241 };
  const clean = color.trim().replace("#", "");
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return { r, g, b };
  }
  if (clean.length >= 6) {
    const num = parseInt(clean.slice(0, 6), 16);
    return {
      r: num >> 16 & 255,
      g: num >> 8 & 255,
      b: num & 255
    };
  }
  const rgbMatch = color.match(/\d+/g);
  if (rgbMatch && rgbMatch.length >= 3) {
    return {
      r: parseInt(rgbMatch[0], 10),
      g: parseInt(rgbMatch[1], 10),
      b: parseInt(rgbMatch[2], 10)
    };
  }
  return { r: 99, g: 102, b: 241 };
}
function rgbToHex({ r, g, b }) {
  const clamp2 = (n) => Math.min(255, Math.max(0, Math.round(n)));
  const toHex = (n) => clamp2(n).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function getRelativeLuminance(r, g, b) {
  const [rl, gl, bl] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}
function getContrastRatio(lumA, lumB) {
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}
function getContrastText(backgroundColor, darkTextColor = "#0f172a", lightTextColor = "#ffffff") {
  const { r, g, b } = hexToRgb(backgroundColor);
  const bgLum = getRelativeLuminance(r, g, b);
  return bgLum >= 0.5 ? darkTextColor : lightTextColor;
}
function adjustLightness(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const factor = percent / 100;
  let nr, ng, nb;
  if (percent > 0) {
    nr = r + (255 - r) * factor;
    ng = g + (255 - g) * factor;
    nb = b + (255 - b) * factor;
  } else {
    const darkFactor = 1 + factor;
    nr = r * darkFactor;
    ng = g * darkFactor;
    nb = b * darkFactor;
  }
  return rgbToHex({ r: nr, g: ng, b: nb });
}
function buildColorRole(color) {
  const rgb = hexToRgb(color);
  const main = rgbToHex(rgb);
  const lum = getRelativeLuminance(rgb.r, rgb.g, rgb.b);
  const isLight = lum >= 0.5;
  const contrastText = getContrastText(main);
  return {
    main,
    light: adjustLightness(main, isLight ? -15 : 20),
    dark: adjustLightness(main, isLight ? -30 : -20),
    contrastText,
    rgb: `${rgb.r}, ${rgb.g}, ${rgb.b}`,
    luminance: lum,
    isLight
  };
}
function injectThemeTokens(tokens, target = typeof document !== "undefined" ? document.documentElement : null) {
  if (!target)
    return;
  const applyRole = (prefix, colorHex) => {
    if (!colorHex)
      return;
    const role = buildColorRole(colorHex);
    target.style.setProperty(`--mui-color-${prefix}`, role.main);
    target.style.setProperty(`--mui-color-${prefix}-main`, role.main);
    target.style.setProperty(`--mui-color-${prefix}-light`, role.light);
    target.style.setProperty(`--mui-color-${prefix}-dark`, role.dark);
    target.style.setProperty(`--mui-color-${prefix}-contrast`, role.contrastText);
    target.style.setProperty(`--mui-color-${prefix}-rgb`, role.rgb);
  };
  if (tokens.primary)
    applyRole("primary", tokens.primary);
  if (tokens.secondary)
    applyRole("secondary", tokens.secondary);
  if (tokens.success)
    applyRole("success", tokens.success);
  if (tokens.warning)
    applyRole("warning", tokens.warning);
  if (tokens.error)
    applyRole("error", tokens.error);
  if (tokens.info)
    applyRole("info", tokens.info);
  if (tokens.mode) {
    target.setAttribute("data-theme", tokens.mode);
  }
  if (tokens.fontFamily) {
    target.style.setProperty("--mui-font-family", tokens.fontFamily);
  }
  if (tokens.borderRadius !== void 0) {
    target.style.setProperty("--mui-radius-md", `${tokens.borderRadius}px`);
  }
}

// node_modules/@namios/motionui-react/dist/esm/theme/ThemeProvider.js
function resolvePaletteColor(input, fallback) {
  if (!input)
    return fallback;
  if (typeof input === "string") {
    const role = buildColorRole(input);
    return {
      main: role.main,
      light: role.light,
      dark: role.dark,
      contrastText: role.contrastText,
      rgb: role.rgb
    };
  }
  if (input.main && (!input.contrastText || !input.light || !input.dark)) {
    const role = buildColorRole(input.main);
    return {
      main: input.main,
      light: input.light || role.light,
      dark: input.dark || role.dark,
      contrastText: input.contrastText || role.contrastText,
      rgb: input.rgb || role.rgb
    };
  }
  return { ...fallback, ...input };
}
var defaultPalette = {
  primary: {
    main: "#6366f1",
    light: "#818cf8",
    dark: "#4f46e5",
    contrastText: "#ffffff",
    rgb: "99, 102, 241"
  },
  secondary: {
    main: "#ec4899",
    light: "#f472b6",
    dark: "#db2777",
    contrastText: "#ffffff",
    rgb: "236, 72, 153"
  },
  success: {
    main: "#10b981",
    light: "#34d399",
    dark: "#059669",
    contrastText: "#ffffff",
    rgb: "16, 185, 129"
  },
  warning: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
    contrastText: "#0f172a",
    // WCAG auto-contrast on amber
    rgb: "245, 158, 11"
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
    contrastText: "#ffffff",
    rgb: "239, 68, 68"
  },
  info: {
    main: "#3b82f6",
    light: "#60a5fa",
    dark: "#2563eb",
    contrastText: "#ffffff",
    rgb: "59, 130, 246"
  }
};
function createTheme(options = {}) {
  var _a;
  const p = options.palette;
  const palette = {
    mode: (_a = p === null || p === void 0 ? void 0 : p.mode) !== null && _a !== void 0 ? _a : "light",
    primary: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.primary, defaultPalette.primary),
    secondary: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.secondary, defaultPalette.secondary),
    success: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.success, defaultPalette.success),
    warning: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.warning, defaultPalette.warning),
    error: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.error, defaultPalette.error),
    info: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.info, defaultPalette.info)
  };
  const typography = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyMono: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: 16,
    ...options.typography
  };
  const shape = {
    borderRadius: 8,
    ...options.shape
  };
  return {
    palette,
    typography,
    shape,
    spacing: (factor) => `${factor * 0.25}rem`
  };
}
var defaultTheme = createTheme();
var ThemeContext = createContext({
  theme: defaultTheme,
  mode: "light",
  toggleMode: () => {
  },
  setMode: () => {
  },
  setDynamicBrand: () => {
  }
});
function useTheme2() {
  return useContext(ThemeContext);
}
var ThemeProvider = ({ theme: initialTheme = defaultTheme, children, defaultMode = "light" }) => {
  const [activeTheme, setActiveTheme] = useState(initialTheme);
  const [mode, setModeState] = useState(() => {
    if (defaultMode === "auto") {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    }
    return defaultMode;
  });
  useEffect(() => {
    setActiveTheme(initialTheme);
  }, [initialTheme]);
  useEffect(() => {
    if (defaultMode !== "auto" || typeof window === "undefined")
      return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      setModeState(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [defaultMode]);
  useEffect(() => {
    if (typeof document === "undefined")
      return;
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  useEffect(() => {
    if (typeof document === "undefined")
      return;
    injectThemeTokens({
      primary: activeTheme.palette.primary.main,
      secondary: activeTheme.palette.secondary.main,
      success: activeTheme.palette.success.main,
      warning: activeTheme.palette.warning.main,
      error: activeTheme.palette.error.main,
      info: activeTheme.palette.info.main,
      mode,
      fontFamily: activeTheme.typography.fontFamily,
      borderRadius: activeTheme.shape.borderRadius
    }, document.documentElement);
  }, [activeTheme, mode]);
  const toggleMode = useCallback(() => {
    setModeState((prev) => prev === "light" ? "dark" : "light");
  }, []);
  const setMode = useCallback((newMode) => {
    setModeState(newMode);
  }, []);
  const setDynamicBrand = useCallback((colors) => {
    setActiveTheme((prev) => createTheme({
      palette: {
        ...prev.palette,
        primary: colors.primary || prev.palette.primary,
        secondary: colors.secondary || prev.palette.secondary
      },
      typography: prev.typography,
      shape: prev.shape
    }));
  }, []);
  const contextValue = useMemo(() => ({ theme: activeTheme, mode, toggleMode, setMode, setDynamicBrand }), [activeTheme, mode, toggleMode, setMode, setDynamicBrand]);
  return React17.createElement(ThemeContext.Provider, { value: contextValue }, children);
};
var AdaptiveThemeProvider = ({ remoteConfig = {}, children }) => {
  const customTheme = useMemo(() => {
    return createTheme({
      palette: {
        primary: remoteConfig.primaryColor,
        secondary: remoteConfig.secondaryColor,
        mode: remoteConfig.mode || "light"
      },
      typography: remoteConfig.fontFamily ? { fontFamily: remoteConfig.fontFamily } : void 0,
      shape: remoteConfig.borderRadius !== void 0 ? { borderRadius: remoteConfig.borderRadius } : void 0
    });
  }, [remoteConfig.primaryColor, remoteConfig.secondaryColor, remoteConfig.mode, remoteConfig.fontFamily, remoteConfig.borderRadius]);
  return jsx(ThemeProvider, { theme: customTheme, defaultMode: remoteConfig.mode || "light", children });
};
function createMuiCompatiblePalette(theme) {
  return {
    mode: theme.palette.mode,
    primary: {
      main: theme.palette.primary.main,
      light: theme.palette.primary.light,
      dark: theme.palette.primary.dark,
      contrastText: theme.palette.primary.contrastText
    },
    secondary: {
      main: theme.palette.secondary.main,
      light: theme.palette.secondary.light,
      dark: theme.palette.secondary.dark,
      contrastText: theme.palette.secondary.contrastText
    },
    success: theme.palette.success,
    warning: theme.palette.warning,
    error: theme.palette.error,
    info: theme.palette.info
  };
}
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });
  useEffect(() => {
    if (typeof window === "undefined")
      return;
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event) => {
      setMatches(event.matches);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);
  return matches;
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
var ErrorState = ({
  titleKey = "common:states.errorTitle",
  messageKey = "common:states.errorGeneric",
  onRetry,
  className
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(ErrorStateRoot, { role: "alert", className, children: [
    /* @__PURE__ */ jsx(ErrorOutlineIcon, { color: "error", sx: { fontSize: 40 } }),
    /* @__PURE__ */ jsx(Typography3, { variant: "h6", children: t(titleKey) }),
    /* @__PURE__ */ jsx(Typography3, { variant: "body2", color: "textSecondary", children: t(messageKey) }),
    onRetry ? /* @__PURE__ */ jsx(Button2, { onClick: onRetry, startIcon: /* @__PURE__ */ jsx(RefreshIcon, {}), variant: "outlined", children: t("common:actions.retry") }) : null
  ] });
};
var PageSkeleton = ({ label, className }) => {
  return /* @__PURE__ */ jsx(
    Box3,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "65vh",
      width: "100%",
      className,
      children: /* @__PURE__ */ jsx(NamiosLoader, { size: 54, label })
    }
  );
};
var StatusChip = ({ status, size = "small", className }) => {
  const { t } = useTranslation();
  const color = STATUS_COLORS[status];
  const muiColor = color === "default" ? void 0 : color;
  return /* @__PURE__ */ jsx(
    Chip,
    {
      label: t(`common:status.${status}`),
      size,
      color: muiColor,
      variant: color === "default" ? "outlined" : "filled",
      className
    }
  );
};
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
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);
  const [position, setPosition] = useState({ x, y });
  useEffect(() => {
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
  useEffect(() => {
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
  const handleItemClick = useCallback(
    (item) => {
      if (item.disabled || item.separator) return;
      if (item.children && item.children.length > 0) return;
      onClose();
      item.onClick?.();
    },
    [onClose]
  );
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
    motion.div,
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
          return /* @__PURE__ */ jsx(
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
        return /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsxs(
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
                    /* @__PURE__ */ jsx(
                      motion.div,
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
                    /* @__PURE__ */ jsxs(
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
                          item.icon && /* @__PURE__ */ jsx(
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
                          /* @__PURE__ */ jsx("span", { children: item.label })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
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
                          item.shortcut && /* @__PURE__ */ jsx(
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
                          hasChildren && /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsx(AnimatePresence, { children: hasChildren && isSubmenuOpen && item.children && /* @__PURE__ */ jsx(
                motion.div,
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
                      return /* @__PURE__ */ jsx(
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
                    return /* @__PURE__ */ jsxs(
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
                          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                            sub.icon && /* @__PURE__ */ jsx("span", { children: sub.icon }),
                            /* @__PURE__ */ jsx("span", { children: sub.label })
                          ] }),
                          sub.shortcut && /* @__PURE__ */ jsx(
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
var TableToolbar = styled("div")(({ theme }) => ({
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
var ClickableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "clickable"
})(({ theme, clickable }) => ({
  transition: "background-color 0.15s ease",
  ...clickable && {
    cursor: "pointer",
    "&:hover": { backgroundColor: theme.palette.action.hover }
  }
}));
var DataTable = ({
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
}) => {
  const { t } = useTranslation();
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
  return /* @__PURE__ */ jsxs(
    Paper,
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
        toolbar ? /* @__PURE__ */ jsx(TableToolbar, { children: toolbar }) : null,
        !isLoading && isError ? /* @__PURE__ */ jsx(Box5, { sx: { p: 3 }, children: /* @__PURE__ */ jsx(ErrorState, { onRetry }) }) : null,
        !isLoading && !isError && rows.length === 0 ? /* @__PURE__ */ jsx(Box5, { sx: { p: 2 }, children: emptyState ?? /* @__PURE__ */ jsx(EmptyState, { titleKey: "common:states.noResults" }) }) : null,
        (isLoading || rows.length > 0) && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { size: "small", "aria-busy": isLoading, children: [
            /* @__PURE__ */ jsx(TableHead, { sx: { backgroundColor: "action.hover" }, children: /* @__PURE__ */ jsxs(TableRow, { children: [
              selectable ? /* @__PURE__ */ jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsx(
                Checkbox2,
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
                  sx: { width: column.width, fontWeight: 700 },
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
              rowActions ? /* @__PURE__ */ jsx(TableCell, { align: "right", sx: { fontWeight: 700 }, children: t("common:table.actions") }) : null
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: isLoading ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan, children: /* @__PURE__ */ jsx(Skeleton, { variant: "text", height: 28 }) }) }, i)) : rows.map((row) => /* @__PURE__ */ jsxs(
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
                  selectable ? /* @__PURE__ */ jsx(TableCell, { padding: "checkbox", onClick: (e) => {
                    e.stopPropagation();
                  }, children: /* @__PURE__ */ jsx(
                    Checkbox2,
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
            )) })
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
              labelDisplayedRows: ({ from, to, count }) => t("common:table.displayedRows", { from, to, count }),
              sx: {
                borderTop: "1px solid",
                borderColor: "divider",
                "& .MuiTablePagination-toolbar": { minHeight: 48, px: 2 }
              }
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsx(
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
};
var StatCardRoot = styled(Card2, {
  shouldForwardProp: (prop) => prop !== "compactSize"
})(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(1, 1.25) : theme.spacing(1.25, 1.75),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  borderRadius: "4px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
  border: `0.5px solid ${theme.palette.mode === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"}`,
  transition: "border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease",
  "&:hover": {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    borderColor: theme.palette.mode === "light" ? "rgba(15, 23, 42, 0.18)" : "rgba(255, 255, 255, 0.18)",
    transform: "none"
  }
}));
var IconTile = styled("div", {
  shouldForwardProp: (prop) => prop !== "colorKey" && prop !== "compact"
})(({ theme, colorKey, compact }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: compact ? 36 : 40,
  height: compact ? 36 : 40,
  minWidth: compact ? 36 : 40,
  borderRadius: "4px",
  backgroundColor: alpha(theme.palette[colorKey].main, 0.1),
  color: theme.palette[colorKey].main,
  flexShrink: 0
}));
var DeltaRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "trend"
})(({ theme, trend }) => {
  const color = trend === "up" ? theme.palette.success.main : trend === "down" ? theme.palette.error.main : theme.palette.text.secondary;
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 3,
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: 1.2,
    color,
    "& svg": {
      fontSize: "0.875rem"
    }
  };
});
var TREND_ICONS = {
  up: /* @__PURE__ */ jsx(TrendingUpIcon, { fontSize: "inherit" }),
  down: /* @__PURE__ */ jsx(TrendingDownIcon, { fontSize: "inherit" }),
  flat: /* @__PURE__ */ jsx(TrendingFlatIcon, { fontSize: "inherit" })
};
var StatCard = ({
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
  size = "small",
  compactSize
}) => {
  const { t } = useTranslation();
  const isCompact = size === "small" || size === "mini" || Boolean(compactSize);
  const valueNode = loading ? /* @__PURE__ */ jsx(Skeleton, { variant: "text", width: 80, height: isCompact ? 28 : 40 }) : /* @__PURE__ */ jsx(
    Typography4,
    {
      variant: isCompact ? "h5" : "h4",
      component: "div",
      sx: isCompact ? { fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.15 } : { fontWeight: 800, lineHeight: 1.15 },
      children: value
    }
  );
  const deltaNode = delta && !loading ? /* @__PURE__ */ jsxs(DeltaRow, { trend, children: [
    TREND_ICONS[trend],
    delta
  ] }) : null;
  const subtitleNode = subtitleKey ? /* @__PURE__ */ jsx(
    Typography4,
    {
      variant: "caption",
      color: "text.secondary",
      sx: { fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.2 },
      children: t(subtitleKey, subtitleParams)
    }
  ) : null;
  if (layout === "kpi") {
    return /* @__PURE__ */ jsx(StatCardRoot, { compactSize: isCompact, children: /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5, width: "100%" }, children: [
      /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1, gap: 0.25 }, children: [
        /* @__PURE__ */ jsx(
          Typography4,
          {
            variant: "caption",
            color: "text.secondary",
            noWrap: true,
            title: t(labelKey),
            sx: {
              fontSize: isCompact ? "0.75rem" : "0.8125rem",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "0.01em"
            },
            children: t(labelKey)
          }
        ),
        /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "baseline", gap: 1, flexWrap: "wrap" }, children: [
          valueNode,
          deltaNode && subtitleNode ? /* @__PURE__ */ jsxs(Box5, { sx: { display: "inline-flex", alignItems: "center", gap: 0.75, flexWrap: "wrap" }, children: [
            deltaNode,
            /* @__PURE__ */ jsx(Typography4, { component: "span", variant: "caption", color: "text.disabled", sx: { fontSize: "0.65rem" }, children: "\u2022" }),
            subtitleNode
          ] }) : deltaNode ?? subtitleNode,
          icon && badge ? badge : null
        ] })
      ] }),
      icon ? /* @__PURE__ */ jsx(IconTile, { colorKey: iconColor, compact: isCompact, children: icon }) : badge ? /* @__PURE__ */ jsx(Box5, { sx: { flexShrink: 0 }, children: badge }) : null
    ] }) });
  }
  return /* @__PURE__ */ jsxs(StatCardRoot, { compactSize: isCompact, children: [
    /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, width: "100%", mb: 0.25 }, children: [
      /* @__PURE__ */ jsxs(
        Typography4,
        {
          variant: "body2",
          color: "text.secondary",
          noWrap: true,
          title: t(labelKey),
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            fontSize: isCompact ? "0.75rem" : "0.8125rem",
            fontWeight: 600
          },
          children: [
            icon,
            t(labelKey)
          ]
        }
      ),
      badge
    ] }),
    /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "baseline", gap: 1, flexWrap: "wrap" }, children: [
      valueNode,
      deltaNode && subtitleNode ? /* @__PURE__ */ jsxs(Box5, { sx: { display: "inline-flex", alignItems: "center", gap: 0.75, flexWrap: "wrap" }, children: [
        deltaNode,
        /* @__PURE__ */ jsx(Typography4, { component: "span", variant: "caption", color: "text.disabled", sx: { fontSize: "0.65rem" }, children: "\u2022" }),
        subtitleNode
      ] }) : deltaNode ?? subtitleNode
    ] })
  ] });
};
var SectionCard = ({
  titleKey,
  titleParams,
  action,
  children,
  className
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Card, { elevation: 1, className, children: [
    /* @__PURE__ */ jsx(
      CardHeader,
      {
        title: /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, fontSize: "1.125rem" }, children: t(titleKey, titleParams) }),
        action
      }
    ),
    /* @__PURE__ */ jsx(CardContent, { style: { paddingTop: 0 }, children })
  ] });
};
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
var DescriptionList = ({ items, className }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(ListRoot, { className, children: items.map((item) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Term, { children: t(item.labelKey, item.labelParams) }),
    /* @__PURE__ */ jsx(Detail, { children: item.value })
  ] }, item.labelKey)) });
};
var SearchField = ({
  value,
  onChange,
  placeholderKey = "common:actions.search",
  fullWidth = false,
  autoFocus = false
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    TextField5,
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
          IconButton8,
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
};
var SelectField = ({
  value,
  onChange,
  options,
  labelKey,
  emptyOptionKey,
  fullWidth = false,
  minWidth = 160,
  disabled = false
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(
    TextField5,
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
};
var PasswordField = forwardRef$1(
  function PasswordField2(props, ref) {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    return /* @__PURE__ */ jsx(
      TextField5,
      {
        ...props,
        inputRef: ref ?? props.inputRef,
        type: visible ? "text" : "password",
        InputProps: {
          ...props.InputProps,
          endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(
            IconButton8,
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
var FormTextField = ({
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
}) => {
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
        return type === "password" ? /* @__PURE__ */ jsx(PasswordField, { ...shared }) : /* @__PURE__ */ jsx(TextField5, { ...shared, type });
      }
    }
  );
};
var FormSelect = ({
  control,
  name,
  labelKey,
  options
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
        TextField5,
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
};
var FormSwitch = ({
  control,
  name,
  labelKey
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    Controller,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsx(Switch2, { checked: Boolean(field.value), onChange: field.onChange }),
          label: t(labelKey)
        }
      )
    }
  );
};
var LanguageSwitcher = ({ variant = "text" }) => {
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
};
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
var AppTopBar = ({ appsLauncher, logo, nav, actions, onMenuClick }) => {
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
            IconButton8,
            {
              "aria-label": t("common:actions.openMenu"),
              onClick: onMenuClick,
              edge: "start",
              sx: { display: { md: "none" } },
              children: /* @__PURE__ */ jsx(MenuIcon, {})
            }
          ) : null,
          appsLauncher,
          logo
        ] }),
        /* @__PURE__ */ jsx(TopBarNav, { children: nav }),
        /* @__PURE__ */ jsx(TopBarSlot, { children: actions })
      ] })
    }
  );
};
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
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);
  useEffect(() => {
    if (!initialScrollDate || !scrollContainerRef.current) return;
    const dayIndex = differenceInDays(startDate, initialScrollDate);
    if (dayIndex < 0 || dayIndex >= days) return;
    scrollContainerRef.current.scrollLeft = dayIndex * DAY_COL_WIDTH;
  }, [days, initialScrollDate, startDate]);
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
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Skeleton2, { variant: "rounded", height: ROW_HEIGHT * 6 }) });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    legend ? /* @__PURE__ */ jsx(Typography4, { component: "div", variant: "body2", sx: { display: "flex", justifyContent: "flex-end", mb: 1 }, children: legend }) : null,
    /* @__PURE__ */ jsx(MatrixRoot, { ref: scrollContainerRef, "data-testid": "timeline-matrix-scroll-container", children: /* @__PURE__ */ jsxs("div", { style: { width: RESOURCE_COL_WIDTH + days * DAY_COL_WIDTH }, children: [
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
};
var StatusFilterChips = ({
  options,
  value,
  onChange,
  className
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(Stack2, { direction: "row", spacing: 1, flexWrap: "wrap", className, role: "tablist", children: options.map((option) => {
    const active = option.value === value;
    const label = option.count !== void 0 ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
    return /* @__PURE__ */ jsx(
      Chip,
      {
        label,
        color: active ? "primary" : void 0,
        variant: active ? "filled" : "outlined",
        clickable: true,
        onClick: () => {
          onChange(option.value);
        },
        role: "tab",
        "aria-selected": active
      },
      option.value
    );
  }) });
};
var DrawerHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper
}));
var DrawerContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(3),
  position: "relative",
  maxHeight: "75vh"
}));
var DrawerFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  "& > *": { flexGrow: 1 }
}));
var AppDrawer = ({
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
}) => {
  const { t } = useTranslation();
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
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      open,
      onClose: (_event, reason) => {
        if (reason !== "backdropClick") onClose();
      },
      maxWidth: getMaxWidth(),
      fullWidth: true,
      PaperProps: {
        sx: {
          borderRadius: "4px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
          border: "0.5px solid rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          ...getPaperWidthSx()
        }
      },
      children: [
        /* @__PURE__ */ jsxs(DrawerHeader, { children: [
          /* @__PURE__ */ jsxs(Stack4, { direction: "row", spacing: 1.5, alignItems: "center", sx: { flexGrow: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx(Typography4, { variant: "h5", fontWeight: 800, letterSpacing: "-0.3px", noWrap: true, children: title ?? (titleKey ? t(titleKey, titleParams) : null) }),
            statusChip
          ] }),
          /* @__PURE__ */ jsx(IconButton8, { "aria-label": t("common:actions.close"), onClick: onClose, size: "small", children: /* @__PURE__ */ jsx(CloseIcon4, { fontSize: "small" }) })
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
};
var WizardDialog = ({
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
}) => {
  const { t } = useTranslation();
  const isLast = activeStep === steps.length - 1;
  return /* @__PURE__ */ jsxs(
    Dialog,
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
          borderRadius: "4px",
          border: "0.5px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
          ...paperSx
        }
      },
      children: [
        /* @__PURE__ */ jsxs(DialogTitle, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, pt: 2.5, px: 3 }, children: [
          /* @__PURE__ */ jsxs(Stack4, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsx(Typography4, { variant: "h6", sx: { fontWeight: 700, letterSpacing: "-0.01em" }, children: t(titleKey) }),
            /* @__PURE__ */ jsx(
              Chip,
              {
                label: `${activeStep + 1} / ${steps.length}`,
                size: "small",
                color: "primary",
                variant: "outlined",
                style: { fontWeight: 700, fontSize: "0.75rem", height: 22 }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(IconButton8, { "aria-label": t("common:actions.close"), onClick: onCancel, size: "small", edge: "end", children: /* @__PURE__ */ jsx(CloseIcon4, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ jsx(
          Stepper,
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
            children: steps.map((step) => /* @__PURE__ */ jsx(Step, { children: /* @__PURE__ */ jsx(StepLabel, { children: t(step.labelKey) }) }, step.labelKey))
          }
        ),
        /* @__PURE__ */ jsxs(DialogContent, { dividers: true, sx: { position: "relative", minHeight: 320, p: 3 }, children: [
          children,
          /* @__PURE__ */ jsx(LoadingOverlay, { open: submitting })
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { sx: { justifyContent: "space-between", px: 3, py: 2 }, children: [
          /* @__PURE__ */ jsx(Button4, { onClick: onCancel, color: "inherit", disabled: submitting, sx: { borderRadius: "3px" }, children: t("common:actions.cancel") }),
          /* @__PURE__ */ jsxs(Stack4, { direction: "row", spacing: 1.5, alignItems: "center", children: [
            /* @__PURE__ */ jsx(
              Button4,
              {
                onClick: onBack,
                color: "inherit",
                disabled: activeStep === 0 || submitting,
                sx: { borderRadius: "3px" },
                children: t(backKey)
              }
            ),
            /* @__PURE__ */ jsx(
              Button4,
              {
                variant: "contained",
                onClick: isLast ? onFinish : onNext,
                disabled: !canNext || submitting,
                startIcon: submitting && isLast ? /* @__PURE__ */ jsx(CircularProgress, { size: 16, color: "inherit" }) : void 0,
                sx: {
                  borderRadius: "3px",
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
};
var DateRangeButton = ({ range }) => {
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
        children: /* @__PURE__ */ jsxs(Stack4, { spacing: 2, sx: { p: 2, width: 300 }, children: [
          /* @__PURE__ */ jsx(Stack4, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: Object.values(DateRangePreset).map((preset) => /* @__PURE__ */ jsx(
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
            TextField5,
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
            TextField5,
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
};
var NavItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "4px",
  margin: theme.spacing(0.35, 1.25),
  paddingTop: 8,
  paddingBottom: 8,
  transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&.Mui-selected": {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 122, 255, 0.10)" : "rgba(10, 132, 255, 0.18)",
    color: theme.palette.mode === "light" ? "#0A2540" : "#E8F0FE",
    fontWeight: 700,
    boxShadow: theme.palette.mode === "light" ? "0 2px 8px rgba(0, 122, 255, 0.12), inset 0 0 0 1px rgba(0, 122, 255, 0.15)" : "0 2px 8px rgba(10, 132, 255, 0.20)",
    "& .MuiListItemIcon-root": {
      color: theme.palette.mode === "light" ? "#005EC4" : "#90CAFF"
    },
    "& .MuiTypography-root": { fontWeight: 700 },
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "rgba(0, 122, 255, 0.15)" : "rgba(10, 132, 255, 0.25)"
    }
  }
}));
var NavList = ({
  items,
  activePath,
  onNavigate,
  depth = 0,
  compact = false
}) => {
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
          sx: {
            pl: (compact ? 1.25 : 2) + depth * 2,
            py: compact ? 0.55 : 1,
            minHeight: compact ? 38 : 48,
            borderRadius: "4px",
            mx: compact ? 0.75 : 1.25,
            my: compact ? 0.2 : 0.35,
            "& .MuiListItemIcon-root": { minWidth: compact ? 32 : 40 },
            "& .MuiTypography-root": { fontSize: compact ? "0.78rem" : "0.875rem", lineHeight: 1.2 }
          },
          children: [
            item.icon ? /* @__PURE__ */ jsx(ListItemIcon, { children: item.icon }) : null,
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
          depth: depth + 1,
          compact
        }
      ) }) : null
    ] }, item.path);
  }) });
};
var AppSideNav = ({
  items,
  activePath,
  onNavigate,
  mobileOpen = false,
  onMobileClose,
  temporary = false,
  compact = false,
  width
}) => {
  const drawerWidth = width;
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toolbar, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
    /* @__PURE__ */ jsx(NavList, { items, activePath, onNavigate, compact })
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
          "& .MuiDrawer-paper": { width: drawerWidth ?? theme.custom.sidebarWidth }
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
        width: drawerWidth ?? theme.custom.sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth ?? theme.custom.sidebarWidth,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`
        }
      }),
      children: content
    }
  );
};
var HeaderRoot = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));
var PageHeader = ({
  titleKey,
  titleParams,
  title,
  subtitleKey,
  subtitleParams,
  breadcrumbs,
  onNavigate,
  actions
}) => {
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
      /* @__PURE__ */ jsx(
        Typography4,
        {
          variant: "h5",
          component: "h1",
          sx: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25 },
          children: title ?? t(titleKey, titleParams)
        }
      ),
      subtitleKey ? /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: t(subtitleKey, subtitleParams) }) : null
    ] }),
    actions ? /* @__PURE__ */ jsx("div", { children: actions }) : null
  ] });
};
var AuthPageRoot = styled("main", {
  shouldForwardProp: (prop) => prop !== "hasSplitBrand"
})(({ theme, hasSplitBrand }) => ({
  minHeight: "100dvh",
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    display: "grid",
    height: "100dvh",
    minHeight: "100dvh",
    maxHeight: "100dvh",
    overflow: "hidden",
    gridTemplateColumns: hasSplitBrand ? "minmax(0, 5fr) minmax(0, 7fr)" : "minmax(0, 1fr)",
    gridTemplateRows: "minmax(0, 1fr)"
  },
  ...hasSplitBrand && {
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "minmax(0, 5.2fr) minmax(0, 6.8fr)"
    }
  }
}));
var AuthBrandPanel = styled("section", {
  shouldForwardProp: (prop) => prop !== "customGradient"
})(({ theme, customGradient }) => ({
  display: "none",
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  minHeight: 0,
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
    border: `${theme.spacing(5)} solid ${alpha(theme.palette.common.white, 0.04)}`,
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
    backgroundColor: alpha(theme.palette.common.white, 0.03),
    pointerEvents: "none"
  }
}));
var BrandPanelContent = styled("div")({
  position: "relative",
  zIndex: 1
});
var BrandMarkTile = styled("div")(({ theme }) => ({
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
var FeatureList = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2.25),
  marginTop: theme.spacing(4.5)
}));
var FeatureItem = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.75),
  alignItems: "center",
  color: alpha(theme.palette.common.white, 0.88)
}));
var AuthFormPanel = styled("section")(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  /* Use flex-start instead of center to prevent scroll-loop glitch.
     Vertical centering is achieved via margin: 'auto 0' on the form shell. */
  justifyContent: "flex-start",
  padding: theme.spacing(3, 2),
  position: "relative",
  overflowY: "auto",
  overflowX: "hidden",
  /* Override global scroll-behavior: smooth to stop the auto-scroll loop
     when the browser tries to scrollIntoView the focused input. */
  scrollBehavior: "auto",
  boxSizing: "border-box",
  WebkitOverflowScrolling: "touch",
  backgroundColor: theme.palette.background.paper,
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
    minHeight: 0,
    padding: theme.spacing(4, 5)
  }
}));
var StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 450,
  flexShrink: 0,
  /* Safe vertical centering — replaces parent justifyContent:'center'
     which caused a scroll-loop when content overflowed. */
  margin: "auto 0",
  padding: theme.spacing(3.5, 2.5),
  borderRadius: 20,
  border: "none",
  boxShadow: "none",
  backgroundImage: "none",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5)
  }
}));
var AuthFormShell = ({ children, sx, ...props }) => {
  return /* @__PURE__ */ jsx(StyledPaper, { elevation: 0, sx, ...props, children });
};
var AuthTopBar = styled(Box5)(({ theme }) => ({
  position: "relative",
  width: "100%",
  zIndex: 2,
  flexShrink: 0,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pointerEvents: "auto",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    padding: theme.spacing(3, 3, 0, 0)
  }
}));
var MobileBrand = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none"
  }
}));
var AuthLayout = ({
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
}) => {
  const hasSplitBrand = !centeredOnly && Boolean(appName || headline);
  return /* @__PURE__ */ jsxs(AuthPageRoot, { hasSplitBrand, children: [
    hasSplitBrand ? /* @__PURE__ */ jsxs(AuthBrandPanel, { customGradient: brandGradient, children: [
      /* @__PURE__ */ jsx(BrandPanelContent, { children: /* @__PURE__ */ jsxs(Stack4, { direction: "row", spacing: 2, alignItems: "center", children: [
        /* @__PURE__ */ jsx(BrandMarkTile, { children: /* @__PURE__ */ jsx(NamiosMarkSvg, { size: 28, color: "#0f172a" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Typography4, { variant: "h5", component: "p", sx: { fontWeight: 800, letterSpacing: "-0.01em" }, children: appName }),
          tagline ? /* @__PURE__ */ jsx(
            Typography4,
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
      /* @__PURE__ */ jsxs(BrandPanelContent, { children: [
        headline ? /* @__PURE__ */ jsx(
          Typography4,
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
        description ? /* @__PURE__ */ jsx(
          Typography4,
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
        features && features.length > 0 ? /* @__PURE__ */ jsx(FeatureList, { children: features.map((feature, idx) => {
          const text = typeof feature === "string" ? feature : feature.text;
          const icon = typeof feature === "object" && feature.icon ? feature.icon : /* @__PURE__ */ jsx(CheckCircleRoundedIcon, { sx: { fontSize: 20, color: "#38bdf8" } });
          return /* @__PURE__ */ jsxs(FeatureItem, { children: [
            icon,
            /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "inherit", sx: { fontWeight: 500, fontSize: "0.9rem" }, children: text })
          ] }, idx);
        }) }) : null
      ] }),
      /* @__PURE__ */ jsx(BrandPanelContent, { children: /* @__PURE__ */ jsx(Typography4, { variant: "caption", sx: { opacity: 0.6, fontSize: "0.75rem" }, children: footer || "Hotel operations, thoughtfully connected." }) })
    ] }) : null,
    /* @__PURE__ */ jsxs(AuthFormPanel, { children: [
      /* @__PURE__ */ jsxs(AuthTopBar, { children: [
        /* @__PURE__ */ jsx(MobileBrand, { children: logo }),
        topRight
      ] }),
      /* @__PURE__ */ jsx(AuthFormShell, { elevation: 0, children: /* @__PURE__ */ jsx(Stack4, { spacing: 3, children }) })
    ] })
  ] });
};
var AuthFormHeader = ({ title, subtitle, badge }) => {
  return /* @__PURE__ */ jsxs(Stack4, { spacing: 0.75, sx: { mb: 1 }, children: [
    badge ? /* @__PURE__ */ jsx("div", { children: badge }) : null,
    /* @__PURE__ */ jsx(Typography4, { variant: "h4", component: "h1", sx: { fontWeight: 700, letterSpacing: "-0.02em" }, children: title }),
    subtitle ? /* @__PURE__ */ jsx(Typography4, { variant: "body2", color: "text.secondary", sx: { fontSize: "0.875rem" }, children: subtitle }) : null
  ] });
};
var FALLOFF_CURVES = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  sharp: (t) => t * t * t
};
var hexToRgb2 = (hex) => {
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
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const propsRef = useRef({});
  const wakeRef = useRef(null);
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
  useEffect(() => {
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
      const [cr, cg, cb] = hexToRgb2(p.color);
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
  useEffect(() => {
    wakeRef.current?.();
  }, [gridOpacity, color, lineWidth, maxOpacity, fillOpacity, cellRadius]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: `cursor-grid${className ? ` ${className}` : ""}`, children: /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "cursor-grid__canvas" }) });
};

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
    icon: /* @__PURE__ */ jsx(HotelIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(RestaurantIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(PeopleIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(AdminPanelSettingsIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(PaymentsIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(InventoryIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(AutoAwesomeIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
    icon: /* @__PURE__ */ jsx(PublicIcon, { sx: { fontSize: 26, color: "#FFFFFF" } }),
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
  return /* @__PURE__ */ jsx(Tooltip2, { title: tooltip, arrow: true, placement: "bottom", children: /* @__PURE__ */ jsx(
    motion.button,
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
      children: /* @__PURE__ */ jsx(
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
          children: previewApps.map((app) => /* @__PURE__ */ jsx(
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
  const [imgError, setImgError] = useState(false);
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
  return /* @__PURE__ */ jsxs(
    motion.div,
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
        /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx(
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
              iconSrcToUse && !imgError ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: iconSrcToUse,
                  alt: app.name,
                  onError: () => setImgError(true),
                  style: { width: 32, height: 32, objectFit: "contain" },
                  draggable: false
                }
              ) : app.icon,
              isActive && /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
          Typography4,
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
        app.badge && /* @__PURE__ */ jsx(
          Chip,
          {
            label: app.badge,
            size: "small",
            color: app.badgeColor === "default" ? void 0 : app.badgeColor,
            variant: app.badgeColor === "default" ? "outlined" : "filled",
            style: {
              marginTop: 4,
              height: 16,
              fontSize: "0.6rem",
              fontWeight: 800,
              borderRadius: 5
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
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const modalRef = useRef(null);
  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setSelectedCategory("all");
    }
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  const categories = useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    apps.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [apps]);
  const filteredApps = useMemo(() => {
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
  return createPortal(
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: isOpen && /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx(
            motion.div,
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
          /* @__PURE__ */ jsxs(
            motion.div,
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
                /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }, children: [
                  /* @__PURE__ */ jsxs(Box5, { sx: { pr: 2 }, children: [
                    /* @__PURE__ */ jsx(
                      Typography4,
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
                    subtitle && /* @__PURE__ */ jsx(
                      Typography4,
                      {
                        variant: "caption",
                        sx: { color: "#64748B", fontWeight: 500, display: "block", mt: 0.5, fontSize: "0.8rem" },
                        children: subtitle
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    IconButton8,
                    {
                      size: "small",
                      onClick: onClose,
                      "aria-label": "Close apps directory",
                      sx: {
                        bgcolor: "rgba(0, 0, 0, 0.05)",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                        color: "#475569"
                      },
                      children: /* @__PURE__ */ jsx(CloseIcon4, { fontSize: "small" })
                    }
                  )
                ] }),
                apps.length > 4 && /* @__PURE__ */ jsxs(
                  Box5,
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
                      /* @__PURE__ */ jsx(SearchIcon, { sx: { fontSize: 18, color: "#94A3B8", mr: 1 } }),
                      /* @__PURE__ */ jsx(
                        InputBase,
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
                      search && /* @__PURE__ */ jsx(IconButton8, { size: "small", onClick: () => setSearch(""), sx: { p: 0.25 }, children: /* @__PURE__ */ jsx(CloseIcon4, { sx: { fontSize: 14 } }) })
                    ]
                  }
                ),
                categories.length > 1 && !search && /* @__PURE__ */ jsxs(
                  Box5,
                  {
                    sx: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mb: 2,
                      alignItems: "center"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        Chip,
                        {
                          label: "All Apps",
                          size: "small",
                          onClick: () => setSelectedCategory("all"),
                          variant: selectedCategory === "all" ? "filled" : "outlined",
                          color: selectedCategory === "all" ? "primary" : void 0,
                          style: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: 8
                          }
                        }
                      ),
                      categories.map((cat) => /* @__PURE__ */ jsx(
                        Chip,
                        {
                          label: getCategoryLabel(cat),
                          size: "small",
                          onClick: () => setSelectedCategory(cat),
                          variant: selectedCategory === cat ? "filled" : "outlined",
                          color: selectedCategory === cat ? "primary" : void 0,
                          style: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: 8
                          }
                        },
                        cat
                      ))
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Box5,
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
                    children: filteredApps.length === 0 ? /* @__PURE__ */ jsx(Box5, { sx: { py: 6, textAlign: "center" }, children: /* @__PURE__ */ jsxs(Typography4, { variant: "body2", color: "text.secondary", fontWeight: 600, children: [
                      "No apps found matching \u201C",
                      search,
                      "\u201D"
                    ] }) }) : /* @__PURE__ */ jsx(
                      motion.div,
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
                        children: filteredApps.map((app) => /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs(
                  Box5,
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
                      /* @__PURE__ */ jsx(Typography4, { variant: "caption", sx: { color: "#94A3B8", fontWeight: 600 }, children: "NamiOS Suite" }),
                      /* @__PURE__ */ jsxs(Typography4, { variant: "caption", sx: { color: "#94A3B8", fontSize: "0.7rem" }, children: [
                        "Press ",
                        /* @__PURE__ */ jsx("kbd", { style: { background: "rgba(0,0,0,0.06)", padding: "2px 4px", borderRadius: 4, fontWeight: 700 }, children: "Esc" }),
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
  const [isOpen, setIsOpen] = useState(false);
  const resolvedApps = useMemo(() => {
    return apps.map((app) => ({
      ...app,
      url: resolveAppUrl(app)
    }));
  }, [apps]);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleSelectApp = useCallback(
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
  return /* @__PURE__ */ jsxs(MotionConfig, { transition: FOLDER_LAYOUT_SPRING, children: [
    /* @__PURE__ */ jsx(
      AppFolderMiniPreview,
      {
        apps: resolvedApps,
        isOpen,
        onClick: handleOpen,
        tooltip,
        className
      }
    ),
    /* @__PURE__ */ jsx(
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
var DashboardLayout = ({
  navItems,
  activePath,
  onNavigate,
  appsLauncher = /* @__PURE__ */ jsx(AppLauncher, {}),
  logo,
  topBarActions,
  children
}) => {
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
        appsLauncher,
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
};
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
var KanbanBoard = ({
  columns,
  items,
  getItemId,
  getItemColumnId,
  renderItem
}) => {
  return /* @__PURE__ */ jsx(
    Stack4,
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
            /* @__PURE__ */ jsxs(Stack4, { direction: "row", spacing: 1.5, alignItems: "center", children: [
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
              Chip,
              {
                label: String(laneItems.length),
                size: "small",
                variant: "outlined",
                style: { height: 22, fontSize: "0.75rem", fontWeight: 700 }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(ItemsScrollArea, { children: laneItems.map((item) => /* @__PURE__ */ jsx(Box5, { sx: { position: "relative" }, children: renderItem(item) }, getItemId(item))) })
        ] }, column.id);
      })
    }
  );
};
var SplitPaneLayout = ({
  leftPane,
  rightPane,
  rightWidth = 400
}) => {
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
};
var StyledCard = styled(Card2, {
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
var MenuCard = ({
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
}) => {
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
            CardMedia2,
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
        /* @__PURE__ */ jsxs(CardContent2, { sx: { p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsxs(Stack4, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 1, children: [
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
          /* @__PURE__ */ jsxs(Stack4, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, alignItems: "center", sx: { mt: 1 }, children: [
            badges?.map((badge, idx) => /* @__PURE__ */ jsx(Box5, { children: badge }, idx)),
            /* @__PURE__ */ jsx(Box5, { sx: { flexGrow: 1 } }),
            stockLabel && /* @__PURE__ */ jsx(
              Chip,
              {
                label: stockLabel,
                size: "small",
                color: stockColor === "default" ? void 0 : stockColor,
                variant: stockColor === "default" ? "outlined" : "filled",
                style: { fontWeight: 700, fontSize: "0.65rem", height: 20 }
              }
            )
          ] })
        ] })
      ]
    }
  );
};
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
  style,
  fontSize,
  className
}) => {
  const [imageSrc, setImageSrc] = useState(avatarUrl);
  useEffect(() => {
    if (avatarUrl) {
      setImageSrc(avatarUrl);
      return;
    }
    try {
      const stored = window.localStorage.getItem("hotelos.avatar");
      if (stored) {
        setImageSrc(stored);
      }
    } catch {
    }
  }, [avatarUrl]);
  const displayName = name.trim() || email.trim() || "User";
  const initials = initialsFromName(displayName);
  const bgColor = getAvatarBgColor(displayName);
  const sxStyle = sx && typeof sx === "object" && !Array.isArray(sx) ? sx : void 0;
  const combinedStyle = {
    width: size,
    height: size,
    backgroundColor: bgColor,
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: fontSize ?? Math.max(12, Math.floor(size * 0.4)),
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    ...sxStyle,
    ...style
  };
  return /* @__PURE__ */ jsx(
    Avatar,
    {
      src: imageSrc,
      alt: displayName,
      size,
      variant: "circular",
      className,
      style: combinedStyle,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("path", { d: "M2 4v16" }),
        /* @__PURE__ */ jsx("path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }),
        /* @__PURE__ */ jsx("path", { d: "M2 17h20" }),
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.circle,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
        /* @__PURE__ */ jsx(
          motion.line,
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
        /* @__PURE__ */ jsx(
          motion.line,
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
        /* @__PURE__ */ jsx(
          motion.circle,
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
        /* @__PURE__ */ jsx(
          motion.circle,
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
        /* @__PURE__ */ jsx(
          motion.circle,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.polygon,
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
        /* @__PURE__ */ jsx(
          motion.polyline,
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
        /* @__PURE__ */ jsx(
          motion.polyline,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.rect,
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
        /* @__PURE__ */ jsx(
          motion.line,
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
        /* @__PURE__ */ jsx(
          motion.rect,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsxs(
          motion.g,
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
              /* @__PURE__ */ jsx("path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }),
              /* @__PURE__ */ jsx("path", { d: "M15 13 9 7l4-4 6 6z" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.polyline,
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
        /* @__PURE__ */ jsx(
          motion.polyline,
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.circle,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  return /* @__PURE__ */ jsx(
    motion.svg,
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
      children: /* @__PURE__ */ jsxs(
        motion.g,
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
            /* @__PURE__ */ jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.rect,
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
        /* @__PURE__ */ jsx(
          motion.rect,
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
        /* @__PURE__ */ jsx(
          motion.rect,
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
        /* @__PURE__ */ jsx(
          motion.rect,
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
  return /* @__PURE__ */ jsx(
    motion.svg,
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
      children: /* @__PURE__ */ jsxs(
        motion.g,
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
            /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }),
        /* @__PURE__ */ jsx("path", { d: "M2 20h20" }),
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.circle,
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
function useWebGlSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("webgl2");
      setSupported(Boolean(gl && gl instanceof WebGLRenderingContext));
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}
function ThreeOverviewCanvas({
  height = 280,
  fallback,
  children,
  title,
  subtitle,
  onRenderScene
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const hasWebGl = useWebGlSupport();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0.55, y: -0.65 });
  const isDraggingRef = useRef(false);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    e.target.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    setRotation((prev) => ({
      x: Math.max(0.1, Math.min(1.2, prev.x + dy * 8e-3)),
      y: prev.y + dx * 8e-3
    }));
  };
  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };
  useEffect(() => {
    if (!canvasRef.current || !hasWebGl) return;
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.floor(rect.width * dpr);
    const heightPx = Math.floor(rect.height * dpr);
    if (canvas.width !== width || canvas.height !== heightPx) {
      canvas.width = width;
      canvas.height = heightPx;
    }
    gl.viewport(0, 0, width, heightPx);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    if (isDark) {
      gl.clearColor(0.043, 0.051, 0.07, 1);
    } else {
      gl.clearColor(0.972, 0.98, 0.988, 1);
    }
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (onRenderScene) {
      onRenderScene(gl, width, heightPx, rotation, isDark);
    }
  }, [rotation, isDark, hasWebGl, onRenderScene]);
  if (!hasWebGl && fallback) {
    return /* @__PURE__ */ jsx(Fragment, { children: fallback });
  }
  return /* @__PURE__ */ jsxs(
    Box5,
    {
      ref: containerRef,
      sx: {
        width: "100%",
        height,
        position: "relative",
        borderRadius: "4px",
        border: `0.5px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"}`,
        backgroundColor: isDark ? "#0B0D12" : "#F8FAFC",
        overflow: "hidden",
        userSelect: "none"
      },
      children: [
        (title || subtitle) && /* @__PURE__ */ jsxs(
          Box5,
          {
            sx: {
              position: "absolute",
              top: 10,
              left: 12,
              zIndex: 2,
              pointerEvents: "none"
            },
            children: [
              title && /* @__PURE__ */ jsx(Typography4, { variant: "caption", sx: { fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: isDark ? "#94A3B8" : "#64748B", display: "block", fontSize: "0.68rem" }, children: title }),
              subtitle && /* @__PURE__ */ jsx(Typography4, { variant: "body2", sx: { fontWeight: 600, fontSize: "0.8rem", color: isDark ? "#F8FAFC" : "#0F172A" }, children: subtitle })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: canvasRef,
            style: { width: "100%", height: "100%", display: "block", cursor: "grab" },
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp
          }
        ),
        children && /* @__PURE__ */ jsx(Box5, { sx: { position: "absolute", bottom: 8, right: 10, zIndex: 2 }, children })
      ]
    }
  );
}
function IsometricBarOverview({
  data,
  title,
  subtitle,
  height = 280,
  fallback
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const maxValue = useMemo(() => {
    return Math.max(...data.map((d) => d.value), 1);
  }, [data]);
  const renderScene = React17.useCallback(
    (gl, width, heightPx, rotation) => {
      const vsSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        uniform mat4 uMatrix;
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_Position = uMatrix * vec4(aPosition, 1.0);
          vec3 lightDir = normalize(vec3(0.5, 1.0, 0.7));
          float diffuse = max(dot(aNormal, lightDir), 0.0);
          vLight = 0.55 + 0.45 * diffuse;
          vColor = uColor;
        }
      `;
      const fsSource = `
        precision mediump float;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_FragColor = vec4(vColor * vLight, 1.0);
        }
      `;
      const createShader = (type, src) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;
      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);
      const aPos = gl.getAttribLocation(program, "aPosition");
      const aNorm = gl.getAttribLocation(program, "aNormal");
      const uMatrix = gl.getUniformLocation(program, "uMatrix");
      const uColor = gl.getUniformLocation(program, "uColor");
      const vertices = new Float32Array([
        // Front face
        -0.5,
        0,
        0.5,
        0.5,
        0,
        0.5,
        0.5,
        1,
        0.5,
        -0.5,
        0,
        0.5,
        0.5,
        1,
        0.5,
        -0.5,
        1,
        0.5,
        // Back face
        -0.5,
        0,
        -0.5,
        -0.5,
        1,
        -0.5,
        0.5,
        1,
        -0.5,
        -0.5,
        0,
        -0.5,
        0.5,
        1,
        -0.5,
        0.5,
        0,
        -0.5,
        // Top face
        -0.5,
        1,
        -0.5,
        -0.5,
        1,
        0.5,
        0.5,
        1,
        0.5,
        -0.5,
        1,
        -0.5,
        0.5,
        1,
        0.5,
        0.5,
        1,
        -0.5,
        // Left face
        -0.5,
        0,
        -0.5,
        -0.5,
        0,
        0.5,
        -0.5,
        1,
        0.5,
        -0.5,
        0,
        -0.5,
        -0.5,
        1,
        0.5,
        -0.5,
        1,
        -0.5,
        // Right face
        0.5,
        0,
        -0.5,
        0.5,
        1,
        -0.5,
        0.5,
        1,
        0.5,
        0.5,
        0,
        -0.5,
        0.5,
        1,
        0.5,
        0.5,
        0,
        0.5
      ]);
      const normals = new Float32Array([
        // Front
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        // Back
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        // Top
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        // Left
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        // Right
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0
      ]);
      const vBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      const nBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, nBuf);
      gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aNorm);
      gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);
      const aspect = width / heightPx;
      const count = data.length;
      const spacing = 1.3;
      data.forEach((item, index) => {
        const heightNorm = Math.max(0.08, item.value / maxValue * 2.2);
        const xPos = (index - count / 2 + 0.5) * spacing;
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);
        const scale = 0.38;
        const mat = new Float32Array([
          cosY * scale / aspect,
          sinX * sinY * scale,
          -cosX * sinY * scale,
          0,
          0,
          cosX * scale * heightNorm,
          sinX * scale,
          0,
          sinY * scale / aspect,
          -sinX * cosY * scale,
          cosX * cosY * scale,
          0,
          xPos * scale * 0.9 / aspect,
          -0.45,
          0,
          1
        ]);
        gl.uniformMatrix4fv(uMatrix, false, mat);
        const hex = item.color || "#007AFF";
        const r = parseInt(hex.slice(1, 3), 16) / 255 || 0;
        const g = parseInt(hex.slice(3, 5), 16) / 255 || 0.48;
        const b = parseInt(hex.slice(5, 7), 16) / 255 || 1;
        gl.uniform3f(uColor, r, g, b);
        gl.drawArrays(gl.TRIANGLES, 0, 30);
      });
    },
    [data, maxValue]
  );
  return /* @__PURE__ */ jsx(Box5, { sx: { width: "100%", position: "relative" }, children: /* @__PURE__ */ jsx(
    ThreeOverviewCanvas,
    {
      height,
      title,
      subtitle,
      fallback,
      onRenderScene: renderScene,
      children: /* @__PURE__ */ jsx(
        Box5,
        {
          sx: {
            display: "flex",
            gap: 1.5,
            bgcolor: isDark ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
            px: 1.25,
            py: 0.5,
            borderRadius: "3px",
            border: `0.5px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`
          },
          children: data.slice(0, 4).map((d) => /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
            /* @__PURE__ */ jsx(
              Box5,
              {
                sx: {
                  width: 8,
                  height: 8,
                  borderRadius: "1.5px",
                  bgcolor: d.color || "#007AFF"
                }
              }
            ),
            /* @__PURE__ */ jsxs(Typography4, { variant: "caption", sx: { fontSize: "0.7rem", fontWeight: 600, color: "text.secondary" }, children: [
              d.label,
              ": ",
              /* @__PURE__ */ jsx("strong", { children: d.formattedValue || d.value })
            ] })
          ] }, d.label))
        }
      )
    }
  ) });
}
var STATUS_HEX = {
  available: "#34C759",
  // Apple Green
  occupied: "#007AFF",
  // Blue
  reserved: "#FF9500",
  // Amber
  cleaning: "#AF52DE"
  // Purple
};
function PropertyDigitalTwin({
  rooms,
  title,
  subtitle,
  height = 300,
  fallback
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const floors = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    rooms.forEach((r) => {
      const list = map.get(r.floor) || [];
      list.push(r);
      map.set(r.floor, list);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [rooms]);
  const renderScene = React17.useCallback(
    (gl, width, heightPx, rotation) => {
      const vsSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        uniform mat4 uMatrix;
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_Position = uMatrix * vec4(aPosition, 1.0);
          vec3 lightDir = normalize(vec3(0.6, 1.0, 0.5));
          float diffuse = max(dot(aNormal, lightDir), 0.0);
          vLight = 0.6 + 0.4 * diffuse;
          vColor = uColor;
        }
      `;
      const fsSource = `
        precision mediump float;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_FragColor = vec4(vColor * vLight, 1.0);
        }
      `;
      const createShader = (type, src) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;
      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);
      const aPos = gl.getAttribLocation(program, "aPosition");
      const aNorm = gl.getAttribLocation(program, "aNormal");
      const uMatrix = gl.getUniformLocation(program, "uMatrix");
      const uColor = gl.getUniformLocation(program, "uColor");
      const vertices = new Float32Array([
        // Front
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        // Back
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        // Top
        -0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        // Left
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        // Right
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5
      ]);
      const normals = new Float32Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0
      ]);
      const vBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      const nBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, nBuf);
      gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aNorm);
      gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);
      const aspect = width / heightPx;
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);
      const scale = 0.22;
      floors.forEach(([, floorRooms], fIdx) => {
        const floorY = (fIdx - floors.length / 2) * 1.1;
        floorRooms.forEach((rm, rIdx) => {
          const row = Math.floor(rIdx / 4);
          const col = rIdx % 4;
          const xPos = (col - 1.5) * 1.1;
          const zPos = (row - 0.5) * 1.1;
          const mat = new Float32Array([
            cosY * scale / aspect,
            sinX * sinY * scale,
            -cosX * sinY * scale,
            0,
            0,
            cosX * scale,
            sinX * scale,
            0,
            sinY * scale / aspect,
            -sinX * cosY * scale,
            cosX * cosY * scale,
            0,
            (xPos * cosY + zPos * sinY) * scale / aspect,
            floorY * scale + (-xPos * sinX * sinY + zPos * sinX * cosY) * scale,
            0,
            1
          ]);
          gl.uniformMatrix4fv(uMatrix, false, mat);
          const hex = STATUS_HEX[rm.status] || "#007AFF";
          const r = parseInt(hex.slice(1, 3), 16) / 255 || 0;
          const g = parseInt(hex.slice(3, 5), 16) / 255 || 0.48;
          const b = parseInt(hex.slice(5, 7), 16) / 255 || 1;
          gl.uniform3f(uColor, r, g, b);
          gl.drawArrays(gl.TRIANGLES, 0, 30);
        });
      });
    },
    [floors]
  );
  return /* @__PURE__ */ jsx(Box5, { sx: { width: "100%", position: "relative" }, children: /* @__PURE__ */ jsx(
    ThreeOverviewCanvas,
    {
      height,
      title,
      subtitle,
      fallback,
      onRenderScene: renderScene,
      children: /* @__PURE__ */ jsx(
        Box5,
        {
          sx: {
            display: "flex",
            gap: 1.5,
            bgcolor: isDark ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
            px: 1.25,
            py: 0.5,
            borderRadius: "3px",
            border: `0.5px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`
          },
          children: Object.entries(STATUS_HEX).map(([status, color]) => /* @__PURE__ */ jsxs(Box5, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ jsx(Box5, { sx: { width: 8, height: 8, borderRadius: "1.5px", bgcolor: color } }),
            /* @__PURE__ */ jsx(Typography4, { variant: "caption", sx: { fontSize: "0.68rem", fontWeight: 600, color: "text.secondary", textTransform: "capitalize" }, children: status })
          ] }, status))
        }
      )
    }
  ) });
}

export { APP_TILE_VARIANTS, Accordion, AccordionDetails, AccordionSummary, AdaptiveThemeProvider, Alert, AlertTitle, AnimatedBed, AnimatedBrush, AnimatedCalendar, AnimatedCreditCard, AnimatedDashboard, AnimatedDoorOpen, AnimatedFolderOpen, AnimatedInbox, AnimatedLayers, AnimatedRadio, AnimatedSearch, AnimatedSettings, AnimatedShieldCheck, AnimatedSparkles, AnimatedTrendingUp, AnimatedUsers, AppDialog, AppDrawer, AppFolderMiniPreview, AppFolderModal, AppLauncher, AppSideNav, AppTile, AppTopBar, AuthFormHeader, AuthFormShell, AuthLayout, Avatar, AvatarGroup, BACKDROP_TRANSITION, Badge, Box3 as Box, Button2 as Button, CONTAINER_VARIANTS, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress2 as CircularProgress, Container, ContextMenu, CursorGrid, DEFAULT_HOTELOS_APPS, DashboardLayout, DataTable, DateRangeButton, DescriptionList, Dialog2 as Dialog, DialogActions2 as DialogActions, DialogContent2 as DialogContent, DialogTitle2 as DialogTitle, Divider, Drawer, EmptyState, ErrorState, FOLDER_LAYOUT_SPRING, FormDialog, FormSelect, FormSwitch, FormTextField, Grid, IconButton2 as IconButton, IsometricBarOverview, KanbanBoard, LanguageSwitcher, LinearProgress, LoadingOverlay, MenuCard, NamiosLoader, NamiosMarkSvg, OtpInput, PRODUCTION_APP_URLS, PageHeader, PageSkeleton, Paper2 as Paper, PasswordField, PropertyDigitalTwin, Radio, RadioGroup, Rating, SearchField, SectionCard, Select, SelectField, Skeleton, Slider, SplitPaneLayout, Stack2 as Stack, StatCard, StatusChip, StatusFilterChips, Switch, Tab, Tabs, TextField, ThemeProvider, ThreeOverviewCanvas, TimelineMatrix, Tooltip, Typography3 as Typography, UserAvatar, VERCEL_APP_URLS, WizardDialog, adjustLightness, buildColorRole, clamp, cn, createMuiCompatiblePalette, createTheme, forwardRef, generateId, getAvatarBgColor, getContrastRatio, getContrastText, getRelativeLuminance, hexToRgb, injectThemeTokens, isInteractive, isPwa, mapRange, navigateApp, resolveAppUrl, rgbToHex, useMediaQuery, useTheme2 as useTheme, useWebGlSupport };
//# sourceMappingURL=chunk-NPSQ6NY3.js.map
//# sourceMappingURL=chunk-NPSQ6NY3.js.map