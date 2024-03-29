import React from 'react';
import { renderWithTheme } from '../../../test/utils';

import Contacts from './';

jest.mock('../../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

jest.mock('../../components/query-form', () => () => <div>QueryForm</div>);

describe('contacts page', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Contacts />);

    expect(container).toMatchInlineSnapshot(`
      .c0 p {
        text-align: center;
      }

      .c0 h2 {
        text-align: center;
        margin-top: 20px;
      }

      .c0 a {
        color: #1C1311;
      }

      <div>
        <div>
          Контакти
           
        </div>
        <div
          class="c0"
        >
          <h2>
            Телефон
          </h2>
          <p>
            0890932001
          </p>
          <h2>
            Имейл
          </h2>
          <p
            style="font-family: Verdana;"
          >
            <a
              href="mailto:magiaotdarvo@gmail.com"
            >
              magiaotdarvo@gmail.com
            </a>
          </p>
          <h2>
            Адрес
          </h2>
          <p>
            5177, с. Сушица, община Стражица, обл. Велико Търново
          </p>
        </div>
        <div>
          QueryForm
        </div>
      </div>
    `);
  });
});
