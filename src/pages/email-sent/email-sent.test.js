import React from 'react';
import { render } from '@testing-library/react';

import EmailSent from './';

jest.mock('../../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

jest.mock('../../components/faq', () => () => <div>FAQ</div>);

describe('email sent page', () => {
  it('should render', () => {
    const { container } = render(<EmailSent />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        margin: 70px auto;
      }

      .c0 img {
        margin-top: 20px;
        width: 160px;
      }

      <div>
        <div>
          Успех
           
          Вашето запитване беше изпратено успешно!
        </div>
        <div
          class="c0"
        >
          <p>
            Благодарим Ви, за Вашия интерес!
          </p>
          <p>
            Очаквайте отговор относно Вашето запитване, в най-кратък срок.
          </p>
          <p>
            Обикновено в рамките на 1-2 работни дни.
          </p>
          <img
            src="[object Object]"
          />
        </div>
        <div>
          FAQ
        </div>
      </div>
    `);
  });
});
