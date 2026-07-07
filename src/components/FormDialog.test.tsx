import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import { renderWithProviders } from '../test-utils';
import { FormDialog } from './FormDialog';
import { FormTextField } from './FormFields';

const schema = z.object({
  name: z.string().min(1, 'common:validation.required'),
});

type Values = z.infer<typeof schema>;

const extraResources = { test: { title: 'Add client', name: 'Name' } };

describe('FormDialog', () => {
  it('shows a translated validation error and blocks submit', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <FormDialog<Values>
        open
        titleKey="test:title"
        schema={schema}
        defaultValues={{ name: '' }}
        onSubmit={onSubmit}
        onClose={vi.fn()}
      >
        {(form) => <FormTextField control={form.control} name="name" labelKey="test:name" />}
      </FormDialog>,
      { extraResources },
    );

    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(await screen.findByText('This field is required')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('submits valid values', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <FormDialog<Values>
        open
        titleKey="test:title"
        schema={schema}
        defaultValues={{ name: '' }}
        onSubmit={onSubmit}
        onClose={vi.fn()}
      >
        {(form) => <FormTextField control={form.control} name="name" labelKey="test:name" />}
      </FormDialog>,
      { extraResources },
    );

    await user.type(screen.getByLabelText('Name'), 'Cinnamon Grand');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ name: 'Cinnamon Grand' });
    });
  });
});
