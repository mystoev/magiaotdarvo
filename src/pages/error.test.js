import React from 'react';
import { render } from '@testing-library/react';

import Error from './error';

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn().mockReturnValue({
    error: {
      statusText: 'test-error-status-text'
    }
  })
}));

jest.mock('../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

describe('error page', () => {
  const mockConsoleError = jest.fn();
  beforeEach(() => (console.error = mockConsoleError));
  afterEach(() => jest.clearAllMocks());

  it('should render', () => {
    const { container } = render(<Error />);

    expect(mockConsoleError).toHaveBeenCalled();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="error__ErrorPageContainer-sc-11niwro-0 cyxbOs"
        >
          <div>
            Упс!
             
            Възникна неочаквана грешка. Съжаляваме за неудобството!
          </div>
          <h3>
            Моля, опитайте да:
          </h3>
          <ul>
            <li>
              заредите друга страница;
            </li>
            <li>
              отворите страницата, по-късно;
            </li>
          </ul>
          <h4>
            Системна грешка:
          </h4>
          <code />
        </div>
      </div>
    `);
  });
});
