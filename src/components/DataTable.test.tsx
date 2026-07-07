import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Paginated } from '../types/api';
import type { TableColumn } from '../types/ui';
import { renderWithProviders } from '../test-utils';
import { DataTable } from './DataTable';

interface Row {
  id: string;
  name: string;
  city: string;
}

const columns: TableColumn<Row>[] = [
  { key: 'name', labelKey: 'test:name', sortable: true },
  { key: 'city', labelKey: 'test:city' },
];

const data: Paginated<Row> = {
  items: [
    { id: '1', name: 'Cinnamon Grand', city: 'Colombo' },
    { id: '2', name: 'Galle Face Hotel', city: 'Colombo' },
  ],
  page: 1,
  pageSize: 10,
  total: 2,
  totalPages: 1,
};

const extraResources = { test: { name: 'Name', city: 'City' } };

const noop = () => undefined;

describe('DataTable', () => {
  it('renders headers and rows', () => {
    renderWithProviders(
      <DataTable<Row>
        columns={columns}
        data={data}
        page={1}
        pageSize={10}
        onPageChange={noop}
        onPageSizeChange={noop}
      />,
      { extraResources },
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Cinnamon Grand')).toBeInTheDocument();
    expect(screen.getByText('Galle Face Hotel')).toBeInTheDocument();
  });

  it('shows the empty state when there are no rows', () => {
    renderWithProviders(
      <DataTable<Row>
        columns={columns}
        data={{ ...data, items: [], total: 0 }}
        page={1}
        pageSize={10}
        onPageChange={noop}
        onPageSizeChange={noop}
      />,
      { extraResources },
    );
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('shows the error state with retry', () => {
    const onRetry = vi.fn();
    renderWithProviders(
      <DataTable<Row>
        columns={columns}
        data={undefined}
        isError
        onRetry={onRetry}
        page={1}
        pageSize={10}
        onPageChange={noop}
        onPageSizeChange={noop}
      />,
      { extraResources },
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
  });
});
