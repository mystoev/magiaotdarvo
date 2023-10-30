import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useSendEmail } from '../hooks/use-send-email';
import QueryForm from './query-form';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));
jest.mock('../hooks/use-send-email', () => ({
  useSendEmail: jest.fn().mockReturnValue({ mutate: jest.fn() })
}));

describe('<QueryForm />', () => {
  const queryClient = new QueryClient();
  const renderQueryForm = (slim) =>
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <Router>
          <QueryForm slim={slim} />
        </Router>
      </QueryClientProvider>
    );

  const fillForm = (form) => {
    fireEvent.change(form.queryByAltText('name-field'), { target: { value: 'some-name' } });
    fireEvent.change(form.queryByAltText('email-field'), { target: { value: 'email-name' } });
    fireEvent.change(form.queryByAltText('phone-field'), { target: { value: 'phone-name' } });
    fireEvent.change(form.queryByText('', { selector: 'textarea' }), {
      target: { value: 'message-name' }
    });
  };

  it('should render', () => {
    const { container } = renderQueryForm(false);

    expect(container).toMatchSnapshot();
  });

  it('should render as slim', () => {
    const { container } = renderQueryForm(true);

    expect(container).toMatchSnapshot();
  });

  it('should have the button disabled', () => {
    const { queryByRole } = renderQueryForm();

    fireEvent.click(queryByRole('button'));

    expect(queryByRole('button')).toBeDisabled();
  });

  it('when info is typed, should enable button', () => {
    const form = renderQueryForm();

    fillForm(form);

    expect(form.queryByRole('button')).not.toBeDisabled();
  });

  it('should mutate on button click', () => {
    const mockMutate = jest.fn();
    useSendEmail.mockReturnValue({ mutate: mockMutate });
    const form = renderQueryForm();

    fillForm(form);

    fireEvent.click(form.queryByRole('button'));

    expect(mockMutate).toHaveBeenCalled();
  });

  it('should navigate away after email sent', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    useSendEmail.mockImplementation(({ onSuccess }) => {
      onSuccess();
      return { mutate: jest.fn() };
    });
    const form = renderQueryForm();

    fillForm(form);

    fireEvent.click(form.queryByRole('button'));

    expect(mockNavigate).toHaveBeenCalledWith('/email-sent');
  });
});
