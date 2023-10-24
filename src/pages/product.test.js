import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { useCategoryData } from '../hooks/use-category-data';
import Product from './product';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ category: 'test-category', productName: 'test-folder' })
}));
jest.mock('../hooks/use-category-data', () => ({
  useCategoryData: jest.fn().mockReturnValue({
    data: {
      content: [
        {
          folder: 'test-folder',
          name: 'test-name',
          files: ['test-file1'],
          category: 'test-category'
        }
      ]
    }
  })
}));
jest.mock('react-image-gallery/styles/css/image-gallery.css', () => null);
jest.mock('react-image-gallery', () => () => <div>ImageGallery</div>);
jest.mock('../components/query-form', () => () => <div>QueryForm</div>);
jest.mock('../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

describe('product page', () => {
  it('should render', () => {
    const { container } = render(
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
            class="product-details-container"
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
    useCategoryData.mockReturnValueOnce({
      data: {
        content: [
          {
            folder: 'test-folder',
            name: 'test-name',
            files: ['test-file1'],
            category: 'test-category',
            price: '15',
            dateCreated: '1 Nov 2022'
          }
        ]
      }
    });
    const { container } = render(
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
            class="product-details-container"
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
                  Цена: 
                  15
                </p>
                <p>
                  Дата на изработка: 
                  1 Nov 2022
                </p>
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
});
