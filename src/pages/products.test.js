import React from 'react';
import { render } from '@testing-library/react';

import Products from './products';

jest.mock('../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

jest.mock('../components/categories-list', () => () => <div>CategoriesList</div>);

describe('products page', () => {
  it('should render', () => {
    const { container } = render(<Products />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Изделия
           
          Галерия от моите уникални ръчни изработки
        </div>
        <div>
          CategoriesList
        </div>
      </div>
    `);
  });
});
