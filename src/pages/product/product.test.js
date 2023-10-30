import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { renderWithTheme } from '../../../test/utils';
import { useProduct } from '../../hooks/use-product';
import Product from './';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ category: 'test-category', productName: 'test-folder' })
}));
jest.mock('react-image-gallery/styles/css/image-gallery.css', () => null);
jest.mock('react-image-gallery', () => () => <div>ImageGallery</div>);

jest.mock('../../hooks/use-product', () => ({
  useProduct: jest.fn().mockReturnValue({
    data: {
      folder: 'test-folder',
      name: 'test-name',
      files: ['test-file1'],
      category: 'test-category',
      images: ''
    }
  })
}));
jest.mock('../../components/query-form', () => () => <div>QueryForm</div>);
jest.mock('../../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

describe('product page', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <Product />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div>
             
            test-name
          </div>
          <div
            class="product__ProductDetailsContaier-sc-1m2wwb4-0 dryWGx"
          >
            <div>
              ImageGallery
            </div>
            <div
              class="product-details"
            >
              <div>
                <p>
                  Име: 
                  test-name
                </p>
                <a
                  href="/category/test-category"
                >
                  <p>
                    Категория: 
                  </p>
                </a>
                <p>
                  Описание: 
                </p>
              </div>
              <div
                class="product-query-container"
              >
                <h3>
                  Изпрати запитване за този продукт
                </h3>
                <div>
                  QueryForm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('should render with price and date', () => {
    useProduct.mockReturnValueOnce({
      data: {
        folder: 'test-folder',
        description: 'test-description',
        name: 'test-name',
        files: ['test-file1'],
        category: 'test-category',
        images: ''
      }
    });
    const { container } = renderWithTheme(
      <Router>
        <Product />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div>
             
            test-name
          </div>
          <div
            class="product__ProductDetailsContaier-sc-1m2wwb4-0 dryWGx"
          >
            <div>
              ImageGallery
            </div>
            <div
              class="product-details"
            >
              <div>
                <p>
                  Име: 
                  test-name
                </p>
                <a
                  href="/category/test-category"
                >
                  <p>
                    Категория: 
                  </p>
                </a>
                <p>
                  Описание: 
                  test-description
                </p>
              </div>
              <div
                class="product-query-container"
              >
                <h3>
                  Изпрати запитване за този продукт
                </h3>
                <div>
                  QueryForm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
