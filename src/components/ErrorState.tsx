import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button, Typography } from '@namios/motionui-react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const ErrorStateRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: 'center',
}));

export interface ErrorStateProps {
  titleKey?: string;
  messageKey?: string;
  onRetry?: () => void;
  className?: string;
}

/** Inline error surface for failed queries, with optional retry, powered by MotionUI. */
export const ErrorState = ({
  titleKey = 'common:states.errorTitle',
  messageKey = 'common:states.errorGeneric',
  onRetry,
  className,
}: ErrorStateProps) => {
  const { t } = useTranslation();
  return (
    <ErrorStateRoot role="alert" className={className}>
      <ErrorOutlineIcon color="error" sx={{ fontSize: 40 }} />
      <Typography variant="h6">{t(titleKey)}</Typography>
      <Typography variant="body2" color="textSecondary">
        {t(messageKey)}
      </Typography>
      {onRetry ? (
        <Button onClick={onRetry} startIcon={<RefreshIcon />} variant="outlined">
          {t('common:actions.retry')}
        </Button>
      ) : null}
    </ErrorStateRoot>
  );
};
