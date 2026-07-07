import type { ReactNode } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { PAGE_SIZE_OPTIONS } from '../constants/app';
import type { Paginated, SortDir } from '../types/api';
import type { ID } from '../types/entities';
import type { TableColumn } from '../types/ui';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';

const TableToolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ClickableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'clickable',
})<{ clickable: boolean }>(({ theme, clickable }) => ({
  ...(clickable && {
    cursor: 'pointer',
    '&:hover': { backgroundColor: theme.palette.action.hover },
  }),
}));

export interface DataTableProps<T extends { id: ID }> {
  columns: TableColumn<T>[];
  data: Paginated<T> | undefined;
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  sortBy?: string;
  sortDir?: SortDir;
  onSortChange?: (key: string) => void;
  selectable?: boolean;
  selected?: ID[];
  onSelectedChange?: (selected: ID[]) => void;
  /** Row actions cell renderer (icon buttons, menus). */
  rowActions?: (row: T) => ReactNode;
  onRowClick?: (row: T) => void;
  /** Sticky toolbar slot (search field, filters). */
  toolbar?: ReactNode;
  /** Custom empty state (defaults to a generic one). */
  emptyState?: ReactNode;
  /** Compact mode: hides pagination (dashboard mini-tables). */
  compact?: boolean;
}

/**
 * Server-side paginated table driven by TableColumn<T>[]. Pairs directly with
 * useTableQuery + a Paginated<T> RTK Query endpoint.
 */
export function DataTable<T extends { id: ID }>({
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
  sortDir = 'asc',
  onSortChange,
  selectable = false,
  selected = [],
  onSelectedChange,
  rowActions,
  onRowClick,
  toolbar,
  emptyState,
  compact = false,
}: DataTableProps<T>) {
  const { t } = useTranslation();
  const rows = data?.items ?? [];
  const colSpan = columns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0);

  const allSelected = rows.length > 0 && rows.every((row) => selected.includes(row.id));
  const someSelected = rows.some((row) => selected.includes(row.id));

  const toggleAll = () => {
    if (!onSelectedChange) return;
    onSelectedChange(allSelected ? [] : rows.map((row) => row.id));
  };

  const toggleOne = (id: ID) => {
    if (!onSelectedChange) return;
    onSelectedChange(
      selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id],
    );
  };

  const renderCell = (row: T, column: TableColumn<T>): ReactNode => {
    if (column.render) return column.render(row);
    const value = (row as Record<string, unknown>)[column.key as string];
    return value === null || value === undefined ? '' : String(value);
  };

  return (
    <Paper variant="outlined" sx={{ borderRadius: 3, overflow: 'hidden' }}>
      {toolbar ? <TableToolbar>{toolbar}</TableToolbar> : null}
      <TableContainer>
        <Table size="small" aria-busy={isLoading}>
          <TableHead>
            <TableRow>
              {selectable ? (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={allSelected}
                    indeterminate={!allSelected && someSelected}
                    onChange={toggleAll}
                    inputProps={{ 'aria-label': t('common:table.selectAll') }}
                  />
                </TableCell>
              ) : null}
              {columns.map((column) => (
                <TableCell
                  key={String(column.key)}
                  align={column.align ?? 'left'}
                  sx={{ width: column.width }}
                  sortDirection={sortBy === column.key ? sortDir : false}
                >
                  {column.sortable && onSortChange ? (
                    <TableSortLabel
                      active={sortBy === column.key}
                      direction={sortBy === column.key ? sortDir : 'asc'}
                      onClick={() => {
                        onSortChange(String(column.key));
                      }}
                    >
                      {t(column.labelKey)}
                    </TableSortLabel>
                  ) : (
                    t(column.labelKey)
                  )}
                </TableCell>
              ))}
              {rowActions ? (
                <TableCell align="right">{t('common:table.actions')}</TableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={colSpan}>
                      <Skeleton variant="text" height={28} />
                    </TableCell>
                  </TableRow>
                ))
              : null}
            {!isLoading && isError ? (
              <TableRow>
                <TableCell colSpan={colSpan} sx={{ border: 0 }}>
                  <ErrorState onRetry={onRetry} />
                </TableCell>
              </TableRow>
            ) : null}
            {!isLoading && !isError && rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={colSpan} sx={{ border: 0 }}>
                  {emptyState ?? <EmptyState titleKey="common:states.noResults" />}
                </TableCell>
              </TableRow>
            ) : null}
            {!isLoading && !isError
              ? rows.map((row) => (
                  <ClickableRow
                    key={row.id}
                    clickable={Boolean(onRowClick)}
                    hover={Boolean(onRowClick)}
                    selected={selected.includes(row.id)}
                    onClick={onRowClick ? () => { onRowClick(row); } : undefined}
                  >
                    {selectable ? (
                      <TableCell padding="checkbox" onClick={(e) => { e.stopPropagation(); }}>
                        <Checkbox
                          checked={selected.includes(row.id)}
                          onChange={() => {
                            toggleOne(row.id);
                          }}
                          inputProps={{ 'aria-label': t('common:table.selectRow') }}
                        />
                      </TableCell>
                    ) : null}
                    {columns.map((column) => (
                      <TableCell key={String(column.key)} align={column.align ?? 'left'}>
                        {renderCell(row, column)}
                      </TableCell>
                    ))}
                    {rowActions ? (
                      <TableCell align="right" onClick={(e) => { e.stopPropagation(); }}>
                        {rowActions(row)}
                      </TableCell>
                    ) : null}
                  </ClickableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      {!compact ? (
        <TablePagination
          component="div"
          count={data?.total ?? 0}
          page={Math.max(0, page - 1)}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[...PAGE_SIZE_OPTIONS]}
          onPageChange={(_e, newPage) => {
            onPageChange(newPage + 1);
          }}
          onRowsPerPageChange={(e) => {
            onPageSizeChange(Number(e.target.value));
          }}
          labelRowsPerPage={t('common:table.rowsPerPage')}
          labelDisplayedRows={({ from, to, count }) =>
            t('common:table.displayedRows', { from, to, count })
          }
        />
      ) : null}
    </Paper>
  );
}
