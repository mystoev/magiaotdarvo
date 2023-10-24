import React from 'react';
import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useSendEmail } from './use-send-email';
import { EMAIL_FILE } from '../constants/data';

jest.mock('axios');

describe('use-send-email', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const mockConsoleLog = jest.fn();
  beforeAll(() => {
    console.log = mockConsoleLog;
    localStorage.setItem('token', 'test-value');
  });

  afterEach(() => jest.clearAllMocks());
  afterAll(() => localStorage.clear());

  it('should send email', async () => {
    axios.post.mockResolvedValueOnce({ data: 'dummy email sent' });
    const mailParameters = {
      name: 'jest test',
      email: 'test mail',
      phone: 'test phone',
      message: 'test message'
    };
    const { result } = renderHook(() => useSendEmail(), { wrapper });

    result.current.mutate(mailParameters);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockConsoleLog).toHaveBeenCalledWith('dummy email sent');
    expect(axios.post).toHaveBeenCalledWith(EMAIL_FILE, {
      key: 'test-value',
      subject: `Запитване от ${mailParameters.name}`,
      message: `
      --------
      Имейл: ${mailParameters.email}
      Телефон: ${mailParameters.phone} 
      --------
      ${mailParameters.message}
    `
    });
  });

  it('should send email with productLink', async () => {
    axios.post.mockResolvedValueOnce({ data: 'dummy email sent' });
    const mailParameters = {
      name: 'jest test',
      email: 'test mail',
      phone: 'phone',
      message: 'test message',
      productLink: 'link'
    };
    const { result } = renderHook(() => useSendEmail(), { wrapper });

    result.current.mutate(mailParameters);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockConsoleLog).toHaveBeenCalledWith('dummy email sent');
    expect(axios.post).toHaveBeenCalledWith(EMAIL_FILE, {
      key: 'test-value',
      subject: `Запитване от ${mailParameters.name}`,
      message: `
      --------
      Имейл: ${mailParameters.email}
      Телефон: ${mailParameters.phone} ${`\n      Относно: ${mailParameters.productLink}`}
      --------
      ${mailParameters.message}
    `
    });
  });

  it('should log error', async () => {
    axios.post.mockImplementationOnce(() => {
      throw new Error('test error');
    });
    const { result } = renderHook(() => useSendEmail(), { wrapper });

    result.current.mutate({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(axios.post).toHaveBeenCalled();
    expect(mockConsoleLog).toHaveBeenCalledTimes(2);
    expect(mockConsoleLog).toHaveBeenCalledWith('ERROR SENDING EMAIL');
  });
});
