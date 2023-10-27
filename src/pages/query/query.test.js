import React from 'react';
import { render } from '@testing-library/react';

import Query from './';

jest.mock('../../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

jest.mock('../../components/query-form', () => () => <div>QueryForm</div>);
jest.mock('../../components/faq', () => () => <div>FAQ</div>);

describe('faq page', () => {
  it('should render', () => {
    const { container } = render(<Query />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Запитване
           
          Изпрати запитване относно конкретна изработка
        </div>
        <div>
          QueryForm
        </div>
        <div>
          FAQ
        </div>
      </div>
    `);
  });
});
