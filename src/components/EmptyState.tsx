import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AnimatedInbox } from './animated-icons/AnimatedInbox';

const EmptyStateContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6, 3),
  textAlign: 'center',
  borderRadius: 16,
  border: `1px dashed ${theme.palette.divider}`,
  backgroundColor: theme.palette.mode === 'light' 
    ? 'rgba(248, 249, 250, 0.6)' 
    : 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(8px)',
  width: '100%',
  minHeight: 280,
  transition: 'all 0.2s ease',
}));

const IconGlowBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  borderRadius: '24px',
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(135deg, rgba(0, 122, 255, 0.08) 0%, rgba(88, 86, 214, 0.08) 100%)'
    : 'linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(88, 86, 214, 0.15) 100%)',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 122, 255, 0.12)' : 'rgba(0, 122, 255, 0.25)'}`,
  boxShadow: '0 8px 24px rgba(0, 122, 255, 0.08)',
  marginBottom: theme.spacing(1),
}));

export interface EmptyStateProps {
  icon?: ReactNode;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  descriptionParams?: Record<string, unknown>;
  /** Optional CTA (e.g. an "Add Room" button). */
  action?: ReactNode;
  compact?: boolean;
}

/**
 * Modern Empty State with Lucide-Animated icon, soft glassmorphism & optional CTA.
 */
export const EmptyState = ({
  icon,
  titleKey = 'common:states.noResults',
  title,
  descriptionKey,
  description,
  descriptionParams,
  action,
  compact = false,
}: EmptyStateProps) => {
  const { t } = useTranslation();
  const displayTitle = title || t(titleKey);
  const displayDesc = description || (descriptionKey ? t(descriptionKey, descriptionParams) : undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ width: '100%' }}
    >
      <EmptyStateContainer
        variant="outlined"
        sx={{
          py: compact ? 3.5 : 6,
          minHeight: compact ? 180 : 280,
        }}
      >
        <IconGlowBadge>
          {icon ?? <AnimatedInbox size={42} isAnimated />}
        </IconGlowBadge>

        <Stack spacing={0.75} alignItems="center" sx={{ maxWidth: 440, mt: 1, mb: action ? 2.5 : 0 }}>
          <Typography variant="h6" fontWeight={700} color="text.primary" letterSpacing="-0.2px">
            {displayTitle}
          </Typography>
          {displayDesc ? (
            <Typography variant="body2" color="text.secondary" fontWeight={500} lineHeight={1.5}>
              {displayDesc}
            </Typography>
          ) : null}
        </Stack>

        {action ? <Box sx={{ mt: 1 }}>{action}</Box> : null}
      </EmptyStateContainer>
    </motion.div>
  );
};
