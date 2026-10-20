import type { ReactNode } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const HeaderRoot = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export interface PageBreadcrumb {
  labelKey: string;
  path?: string;
}

export interface PageHeaderProps {
  titleKey: string;
  titleParams?: Record<string, unknown>;
  /** Optional plain-text title override (e.g. an entity name). */
  title?: string;
  subtitleKey?: string;
  subtitleParams?: Record<string, unknown>;
  breadcrumbs?: PageBreadcrumb[];
  onNavigate?: (path: string) => void;
  /** Right-aligned actions (buttons). */
  actions?: ReactNode;
}

/** Standard admin page header: breadcrumbs, title, subtitle, actions. */
export const PageHeader = ({
  titleKey,
  titleParams,
  title,
  subtitleKey,
  subtitleParams,
  breadcrumbs,
  onNavigate,
  actions,
}: PageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <HeaderRoot>
      <div>
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 0.5 }}>
            {breadcrumbs.map((crumb) =>
              crumb.path && onNavigate ? (
                <Link
                  key={crumb.labelKey}
                  component="button"
                  type="button"
                  variant="body2"
                  color="text.secondary"
                  underline="hover"
                  onClick={() => {
                    if (crumb.path) onNavigate(crumb.path);
                  }}
                >
                  {t(crumb.labelKey)}
                </Link>
              ) : (
                <Typography key={crumb.labelKey} variant="body2" color="text.primary">
                  {t(crumb.labelKey)}
                </Typography>
              ),
            )}
          </Breadcrumbs>
        ) : null}
        <Typography variant="h4" component="h1">
          {title ?? t(titleKey, titleParams)}
        </Typography>
        {subtitleKey ? (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {t(subtitleKey, subtitleParams)}
          </Typography>
        ) : null}
      </div>
      {actions ? <div>{actions}</div> : null}
    </HeaderRoot>
  );
};
