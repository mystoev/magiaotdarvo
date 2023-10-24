import { login, useToken } from './use-login';
import { renderHook } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('use-auth tests', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should login', async () => {
    const tokenMock = 'token-content';
    axios.post.mockResolvedValueOnce({ data: tokenMock });

    const result = await login('user', 'pass');

    expect(result).toBe(tokenMock);
    expect(localStorage.getItem('token')).toBe(tokenMock);
  });

  it('should not login', async () => {
    axios.post.mockResolvedValueOnce({ data: null });

    const result = await login();

    expect(result).toBeUndefined();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should not login when endpoint fails', async () => {
    axios.post.mockRejectedValueOnce(new Error('test error'));

    const result = await login();

    expect(result).toBeNull();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should use token', () => {
    const {
      result: {
        current: [token, setToken]
      }
    } = renderHook(useToken);

    expect(token).toBeNull();
    expect(typeof setToken).toBe('function');
  });

  it('should have token set', () => {
    const tokenTestValue = 'test-value';
    localStorage.setItem('token', tokenTestValue);

    const {
      result: {
        current: [token]
      }
    } = renderHook(useToken);

    expect(token).toBe(tokenTestValue);
  });
});
