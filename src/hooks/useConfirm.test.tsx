import { useState } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { ConfirmProvider, useConfirm } from './useConfirm';

function Harness() {
  const confirm = useConfirm();
  const [outcome, setOutcome] = useState('none');
  return (
    <button
      type="button"
      onClick={() => {
        void confirm({
          titleKey: 'test:deleteTitle',
          messageKey: 'test:deleteMessage',
          variant: 'danger',
        }).then((ok) => {
          setOutcome(ok ? 'confirmed' : 'cancelled');
        });
      }}
    >
      trigger {outcome}
    </button>
  );
}

const extraResources = {
  test: { deleteTitle: 'Delete item?', deleteMessage: 'This cannot be undone.' },
};

describe('useConfirm', () => {
  it('resolves true when confirmed', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <ConfirmProvider>
        <Harness />
      </ConfirmProvider>,
      { extraResources },
    );

    await user.click(screen.getByRole('button', { name: /trigger/ }));
    expect(await screen.findByText('Delete item?')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(await screen.findByText('trigger confirmed')).toBeInTheDocument();
  });

  it('resolves false when cancelled', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <ConfirmProvider>
        <Harness />
      </ConfirmProvider>,
      { extraResources },
    );

    await user.click(screen.getByRole('button', { name: /trigger/ }));
    await user.click(await screen.findByRole('button', { name: 'Cancel' }));
    expect(await screen.findByText('trigger cancelled')).toBeInTheDocument();
  });
});
