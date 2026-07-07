import type { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useTranslation } from 'react-i18next';

export interface SectionCardProps {
  titleKey: string;
  titleParams?: Record<string, unknown>;
  /** Optional header action (button, menu). */
  action?: ReactNode;
  children: ReactNode;
}

/** Titled card used for detail-view sections and dashboard panels. */
export function SectionCard({ titleKey, titleParams, action, children }: SectionCardProps) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader
        title={t(titleKey, titleParams)}
        titleTypographyProps={{ variant: 'h6' }}
        action={action}
      />
      <CardContent sx={{ pt: 0 }}>{children}</CardContent>
    </Card>
  );
}
