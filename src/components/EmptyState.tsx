import type { ReactNode } from 'react';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const EmptyStateRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const EmptyStateIcon = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  padding: theme.spacing(2),
  borderRadius: '50%',
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
  '& > svg': { fontSize: 40 },
}));

export interface EmptyStateProps {
  icon?: ReactNode;
  titleKey: string;
  descriptionKey?: string;
  descriptionParams?: Record<string, unknown>;
  /** Optional CTA (e.g. an "Add client" button). */
  action?: ReactNode;
}

/** Matches the Figma empty-table placeholder. */
export function EmptyState({
  icon,
  titleKey,
  descriptionKey,
  descriptionParams,
  action,
}: EmptyStateProps) {
  const { t } = useTranslation();
  return (
    <EmptyStateRoot>
      <EmptyStateIcon>{icon ?? <InboxOutlinedIcon />}</EmptyStateIcon>
      <Typography variant="h6" color="text.primary">
        {t(titleKey)}
      </Typography>
      {descriptionKey ? (
        <Typography variant="body2">{t(descriptionKey, descriptionParams)}</Typography>
      ) : null}
      {action}
    </EmptyStateRoot>
  );
}
