import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from '@namios/motionui-react';
import { useTranslation } from 'react-i18next';

export interface SectionCardProps {
  titleKey: string;
  titleParams?: Record<string, unknown>;
  /** Optional header action (button, menu). */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Titled card used for detail-view sections and dashboard panels powered by MotionUI. */
export const SectionCard = ({
  titleKey,
  titleParams,
  action,
  children,
  className,
}: SectionCardProps) => {
  const { t } = useTranslation();
  return (
    <Card elevation={1} className={className}>
      <CardHeader
        title={<span style={{ fontWeight: 600, fontSize: '1.125rem' }}>{t(titleKey, titleParams)}</span>}
        action={action}
      />
      <CardContent style={{ paddingTop: 0 }}>{children}</CardContent>
    </Card>
  );
};
