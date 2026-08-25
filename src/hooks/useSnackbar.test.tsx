import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { SnackbarProvider, useSnackbar } from './useSnackbar';

const ToastHarness = () => {
  const { showError, showSuccess } = useSnackbar();

  return (
    <div>
      <button type="button" onClick={() => showSuccess('Reservation saved')}>
        Show success
      </button>
      <button type="button" onClick={() => showError('Payment failed')}>
        Show error
      </button>
    </div>
  );
};

describe('useSnackbar', () => {
  it('queues severity-aware toasts and allows them to be dismissed', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <SnackbarProvider>
        <ToastHarness />
      </SnackbarProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Show success' }));
    await user.click(screen.getByRole('button', { name: 'Show error' }));

    const viewport = await screen.findByRole('region', { name: 'Notifications' });
    expect(within(viewport).getByText('Reservation saved')).toBeInTheDocument();
    expect(within(viewport).getByText('Payment failed')).toBeInTheDocument();
    expect(within(viewport).getByText('Success')).toBeInTheDocument();
    expect(within(viewport).getByText('Something went wrong')).toBeInTheDocument();

    const dismissButtons = within(viewport).getAllByLabelText('Dismiss notification');
    await user.click(dismissButtons[0]!);
    await waitFor(() => {
      expect(within(viewport).queryByText('Payment failed')).not.toBeInTheDocument();
    });
  });
});
