import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { styled } from '@mui/material/styles';
import { Toast } from '@base-ui/react/toast';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ComponentType } from 'react';

export type MotionToastSeverity = 'success' | 'error' | 'info' | 'warning';

const TOAST_COLORS: Record<
  MotionToastSeverity,
  { accent: string; accentSoft: string }
> = {
  success: { accent: '#84f7c5', accentSoft: 'rgba(132, 247, 197, 0.13)' },
  error: { accent: '#ff8f9d', accentSoft: 'rgba(255, 143, 157, 0.13)' },
  warning: { accent: '#ffd479', accentSoft: 'rgba(255, 212, 121, 0.13)' },
  info: { accent: '#8fc7ff', accentSoft: 'rgba(143, 199, 255, 0.13)' },
};

const TOAST_ICONS: Record<MotionToastSeverity, ComponentType<{ fontSize?: 'small' }>> = {
  success: CheckCircleRoundedIcon,
  error: ErrorRoundedIcon,
  warning: WarningAmberRoundedIcon,
  info: InfoRoundedIcon,
};

const ToastViewport = styled(Toast.Viewport)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(2.5),
  bottom: theme.spacing(2.5),
  zIndex: theme.zIndex.snackbar,
  display: 'flex',
  width: 'min(360px, calc(100vw - 32px))',
  maxHeight: 'calc(100vh - 32px)',
  flexDirection: 'column',
  gap: theme.spacing(1),
  margin: 0,
  padding: 0,
  outline: 0,
  listStyle: 'none',
  pointerEvents: 'none',
  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

const ToastSurface = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: MotionToastSeverity }>(({ theme, severity }) => ({
  '--toast-accent': TOAST_COLORS[severity].accent,
  '--toast-accent-soft': TOAST_COLORS[severity].accentSoft,
  width: '100%',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.09)',
  borderRadius: 14,
  background: 'rgba(13, 18, 17, 0.96)',
  boxShadow: '0 18px 48px rgba(0, 0, 0, 0.32), 0 2px 8px rgba(0, 0, 0, 0.22)',
  color: '#f4f7f6',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  pointerEvents: 'auto',
  touchAction: 'pan-y',
  userSelect: 'none',
  '&:focus-visible': {
    outline: '2px solid var(--toast-accent)',
    outlineOffset: 2,
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: 12,
  },
}));

const ToastContent = styled(Toast.Content)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '36px minmax(0, 1fr) 32px',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  minHeight: 68,
  padding: theme.spacing(1.25, 1.25, 1.25, 1.5),
}));

const ToastIcon = styled('span')({
  display: 'grid',
  width: 36,
  height: 36,
  placeItems: 'center',
  borderRadius: 10,
  background: 'var(--toast-accent-soft)',
  color: 'var(--toast-accent)',
});

const ToastText = styled('div')({
  minWidth: 0,
});

const ToastTitle = styled(Toast.Title)({
  margin: 0,
  color: '#f7faf9',
  fontSize: 14,
  fontWeight: 750,
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
});

const ToastDescription = styled(Toast.Description)({
  display: '-webkit-box',
  overflow: 'hidden',
  marginTop: 2,
  color: '#99a6a2',
  fontSize: 12.5,
  lineHeight: 1.45,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
});

const ToastClose = styled(Toast.Close)({
  display: 'grid',
  width: 32,
  height: 32,
  padding: 0,
  placeItems: 'center',
  border: 0,
  borderRadius: 9,
  background: 'transparent',
  color: '#80908a',
  cursor: 'pointer',
  transition: 'background-color 160ms ease, color 160ms ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.07)',
    color: '#f7faf9',
  },
  '&:focus-visible': {
    outline: '2px solid var(--toast-accent)',
    outlineOffset: 1,
  },
});

const getSeverity = (type: string | undefined): MotionToastSeverity => {
  if (type === 'success' || type === 'error' || type === 'warning') return type;
  return 'info';
};

export const MotionToastViewport = () => {
  const { toasts, close } = Toast.useToastManager();
  const reduceMotion = useReducedMotion();

  return (
    <Toast.Portal>
      <ToastViewport>
        <AnimatePresence initial={false} mode="popLayout">
          {toasts.map((toast) => {
            const severity = getSeverity(toast.type);
            const Icon = TOAST_ICONS[severity];

            return (
              <Toast.Root
                key={toast.id}
                toast={toast}
                swipeDirection="right"
                render={
                  <ToastSurface
                    severity={severity}
                    layout={!reduceMotion}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 90, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 430, damping: 34, mass: 0.8 }}
                    drag={reduceMotion ? false : 'x'}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={{ left: 0.08, right: 0.7 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 72 || info.velocity.x > 520) close(toast.id);
                    }}
                  />
                }
              >
                <ToastContent>
                  <ToastIcon aria-hidden="true">
                    <Icon fontSize="small" />
                  </ToastIcon>
                  <ToastText>
                    <ToastTitle />
                    <ToastDescription />
                  </ToastText>
                  <ToastClose aria-label="Dismiss notification">
                    <CloseRoundedIcon fontSize="small" />
                  </ToastClose>
                </ToastContent>
              </Toast.Root>
            );
          })}
        </AnimatePresence>
      </ToastViewport>
    </Toast.Portal>
  );
};
