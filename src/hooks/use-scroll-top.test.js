import { useLocation } from 'react-router-dom';
import { renderHook } from '@testing-library/react';

import { useScrollTop } from './use-scroll-top';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn()
}));

describe('use-scroll-top', () => {
  it('should scroll to top', () => {
    const scrollToMock = jest.fn();
    useLocation.mockReturnValue({ pathname: '/test' });
    const windowScrollTo = window.scrollTo;
    window.scrollTo = scrollToMock;

    try {
      renderHook(() => useScrollTop());

      expect(scrollToMock).toHaveBeenCalledWith(0, 0);
    } finally {
      window.scrollTo = windowScrollTo;
    }
  });
});
