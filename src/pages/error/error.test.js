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
      .c0 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      .c0 h3,
      .c0 h4 {
        margin-top: 30px;
      }

      .c0 code {
        margin-top: 10px;
        border: 1px solid rgba(100,100,100,0.1);
        border-radius: 3px;
        background-color: rgba(100,100,100,0.2);
        padding: 10px 40px;
        font-size: 0.7em;
      }

      .c0 .header-titles {
        width: 100%;
      }

      <div>
        <div
          class="c0"
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
