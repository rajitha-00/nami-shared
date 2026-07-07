import { Fragment, type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const ListRoot = styled('dl')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(140px, auto) 1fr',
  columnGap: theme.spacing(3),
  rowGap: theme.spacing(1.5),
  margin: 0,
}));

const Term = styled('dt')(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Detail = styled('dd')(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  margin: 0,
}));

export interface DescriptionListItem {
  labelKey: string;
  labelParams?: Record<string, unknown>;
  value: ReactNode;
}

export interface DescriptionListProps {
  items: DescriptionListItem[];
}

/** Label/value pairs for detail views. */
export function DescriptionList({ items }: DescriptionListProps) {
  const { t } = useTranslation();
  return (
    <ListRoot>
      {items.map((item) => (
        <Fragment key={item.labelKey}>
          <Term>{t(item.labelKey, item.labelParams)}</Term>
          <Detail>{item.value}</Detail>
        </Fragment>
      ))}
    </ListRoot>
  );
}
