import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { TimelineMatrix, type TimelineSpan } from './TimelineMatrix';

interface Room {
  id: string;
  number: string;
}

const resources: Room[] = [
  { id: 'r101', number: '101' },
  { id: 'r102', number: '102' },
];

const spans: TimelineSpan[] = [
  {
    id: 's1',
    resourceId: 'r101',
    startDate: '2026-07-02',
    endDate: '2026-07-05',
    label: 'John Doe',
    colorKey: 'info',
  },
];

describe('TimelineMatrix', () => {
  it('renders resources, spans and fires callbacks', async () => {
    const onSpanClick = vi.fn();
    const onCellClick = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(
      <TimelineMatrix<Room>
        resources={resources}
        spans={spans}
        startDate="2026-07-01"
        days={7}
        today="2026-07-03"
        resourceLabelKey="common:timeline.resource"
        renderResource={(room) => <span>{room.number}</span>}
        onSpanClick={onSpanClick}
        onCellClick={onCellClick}
      />,
    );

    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('102')).toBeInTheDocument();
    // today bubble
    expect(screen.getByLabelText('Today')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'John Doe' }));
    expect(onSpanClick).toHaveBeenCalledWith(expect.objectContaining({ id: 's1' }));

    await user.click(screen.getByRole('button', { name: 'r102 2026-07-04' }));
    expect(onCellClick).toHaveBeenCalledWith('r102', '2026-07-04');
  });

  it('positions an in-range initial date as the first visible day column with compact dayColWidth by default', () => {
    renderWithProviders(
      <TimelineMatrix<Room>
        resources={resources}
        spans={[]}
        startDate="2026-07-01"
        days={31}
        initialScrollDate="2026-07-12"
        resourceLabelKey="common:timeline.resource"
        renderResource={(room) => <span>{room.number}</span>}
      />,
    );

    expect(screen.getByTestId('timeline-matrix-scroll-container')).toHaveProperty(
      'scrollLeft',
      11 * 48,
    );
  });

  it('positions initial date with comfortable dayColWidth when comfortable is specified', () => {
    renderWithProviders(
      <TimelineMatrix<Room>
        resources={resources}
        spans={[]}
        startDate="2026-07-01"
        days={31}
        density="comfortable"
        initialScrollDate="2026-07-12"
        resourceLabelKey="common:timeline.resource"
        renderResource={(room) => <span>{room.number}</span>}
      />,
    );

    expect(screen.getByTestId('timeline-matrix-scroll-container')).toHaveProperty(
      'scrollLeft',
      11 * 76,
    );
  });

  it('renders custom tooltip builder for spans', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <TimelineMatrix<Room>
        resources={resources}
        spans={spans}
        startDate="2026-07-01"
        days={7}
        resourceLabelKey="common:timeline.resource"
        renderResource={(room) => <span>{room.number}</span>}
        renderSpanTooltip={(span) => (
          <div data-testid="custom-tooltip">Booking: {span.label}</div>
        )}
      />,
    );

    const spanBtn = screen.getByRole('button', { name: 'John Doe' });
    await user.hover(spanBtn);
    expect(await screen.findByTestId('custom-tooltip')).toBeInTheDocument();
  });
});
