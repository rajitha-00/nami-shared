import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { AppDialog } from './AppDialog';

const extraResources = { test: { title: 'Edit client' } };

describe('AppDialog', () => {
  it('renders title, content and close button', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <AppDialog open titleKey="test:title" onClose={onClose}>
        <p>Dialog body</p>
      </AppDialog>,
      { extraResources },
    );
    expect(screen.getByText('Edit client')).toBeInTheDocument();
    expect(screen.getByText('Dialog body')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('blocks Escape close when disableClose is set', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <AppDialog open titleKey="test:title" onClose={onClose} disableClose>
        <p>Dirty form</p>
      </AppDialog>,
      { extraResources },
    );
    await user.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });
});
