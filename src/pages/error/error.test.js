import React from 'react';
import { render } from '@testing-library/react';

import Error from './';

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn().mockReturnValue({
    error: {
      statusText: 'test-error-status-text'
    }
  }),
  Link: () => <div>Link</div>
}));

jest.mock('../../components/page-header', () => ({ title, description }) => (
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
          class="error__ErrorPageContainer-sc-jqcgqp-0 dSXBlL"
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
