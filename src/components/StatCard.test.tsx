import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { StatCard } from './StatCard';

const extraResources = {
  kpi: {
    totalRooms: 'Total Rooms',
    occupancyRate: 'Occupancy Rate',
    floorsCategories: '{{floors}} floors · {{categories}} categories',
  },
};

describe('StatCard', () => {
  it('renders KPI layout with label, value, subtitle, and icon', () => {
    renderWithProviders(
      <StatCard
        layout="kpi"
        labelKey="kpi:totalRooms"
        value="15"
        subtitleKey="kpi:floorsCategories"
        subtitleParams={{ floors: 3, categories: 4 }}
        icon={<span data-testid="test-icon">icon</span>}
        iconColor="info"
      />,
      { extraResources },
    );

    expect(screen.getByText('Total Rooms')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('3 floors · 4 categories')).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders delta and trend indicator', () => {
    renderWithProviders(
      <StatCard
        layout="kpi"
        labelKey="kpi:occupancyRate"
        value="85%"
        delta="+5% vs last week"
        trend="up"
      />,
      { extraResources },
    );

    expect(screen.getByText('Occupancy Rate')).toBeInTheDocument();
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('+5% vs last week')).toBeInTheDocument();
  });

  it('renders both delta and subtitle together if both are provided', () => {
    renderWithProviders(
      <StatCard
        layout="kpi"
        labelKey="kpi:occupancyRate"
        value="85%"
        delta="+5% vs last week"
        trend="up"
        subtitleKey="kpi:floorsCategories"
        subtitleParams={{ floors: 3, categories: 4 }}
      />,
      { extraResources },
    );

    expect(screen.getByText('+5% vs last week')).toBeInTheDocument();
    expect(screen.getByText('3 floors · 4 categories')).toBeInTheDocument();
    expect(screen.getByText('•')).toBeInTheDocument();
  });

  it('renders stat layout correctly', () => {
    renderWithProviders(
      <StatCard
        layout="stat"
        labelKey="kpi:totalRooms"
        value="42"
        icon={<span data-testid="stat-icon">ico</span>}
      />,
      { extraResources },
    );

    expect(screen.getByText('Total Rooms')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByTestId('stat-icon')).toBeInTheDocument();
  });
});

