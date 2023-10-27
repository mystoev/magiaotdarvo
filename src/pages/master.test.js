import React from 'react';
import { render } from '@testing-library/react';

import Master from './master';

jest.mock('react-router-dom', () => ({
  Outlet: () => <div>Outlet</div>,
  Link: () => <div>Link</div>
}));
jest.mock('../components/header', () => () => <div>Header</div>);
jest.mock('../components/footer', () => () => <div>Footer</div>);
jest.mock('../hooks/use-scroll-top', () => ({
  useScrollTop: jest.fn()
}));

describe('master page', () => {
  it('should render', () => {
    const { container } = render(<Master />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Header
        </div>
        <div>
          Outlet
        </div>
        <div>
          Footer
        </div>
        <div
          class="CookieConsent"
          style="align-items: baseline; background: rgb(53, 53, 53); color: white; display: flex; flex-wrap: wrap; justify-content: space-between; left: 0px; position: fixed; width: 100%; z-index: 999; bottom: 0px;"
        >
          <div
            class=""
            style="flex: 1 0 300px; margin: 15px;"
          >
            Този сайт използва бисквитки, за да работи оптимално за Вас.
          </div>
          <div
            class=""
          >
            <button
              aria-label="Accept cookies"
              class=""
              id="rcc-confirm-button"
              style="background: rgb(255, 212, 45); border: 0px; border-radius: 0px; box-shadow: none; color: black; cursor: pointer; flex: 0 0 auto; padding: 5px 10px; margin: 15px;"
            >
              Разбрах
            </button>
          </div>
        </div>
      </div>
    `);
  });
});
