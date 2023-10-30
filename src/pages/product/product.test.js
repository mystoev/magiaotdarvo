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
      .c0 {
        width: 90%;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .c0 .image-gallery-original-style {
        height: 640px;
        border-radius: 3px;
        background-color: #1C1311);
      }

      .c0 .image-gallery-original-style img {
        height: 100%;
        object-fit: contain;
      }

      .c0 .image-gallery-thumbnail-style img {
        width: 100%;
        height: 100px;
        object-fit: cover;
      }

      .c0 .image-gallery {
        flex-basis: 70%;
      }

      .c0 .product-details {
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .c0 a {
        color: #1C1311;
      }

      .c0 .product-query-container {
        font-size: 0.75em;
        width: 80%;
      }

      .c0 .product-query-container h3 {
        margin-bottom: 10px;
      }

      .c0 .product-query-container fieldset {
        width: 100%;
      }

      .c0 .product-query-container input {
        height: 24px;
      }

      .c0 .product-query-container textarea {
        height: 120px;
      }

      .c0 .product-query-container button {
        margin-top: 5px;
      }

      @media only screen and (max-width:768px) {
        .c0 {
          flex-direction: column;
        }

        .c0 .product-query-container {
          width: 100%;
        }
      }

      <div>
        <div>
          <div>
             
            test-name
          </div>
          <div
            class="c0"
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
      .c0 {
        width: 90%;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .c0 .image-gallery-original-style {
        height: 640px;
        border-radius: 3px;
        background-color: #1C1311);
      }

      .c0 .image-gallery-original-style img {
        height: 100%;
        object-fit: contain;
      }

      .c0 .image-gallery-thumbnail-style img {
        width: 100%;
        height: 100px;
        object-fit: cover;
      }

      .c0 .image-gallery {
        flex-basis: 70%;
      }

      .c0 .product-details {
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .c0 a {
        color: #1C1311;
      }

      .c0 .product-query-container {
        font-size: 0.75em;
        width: 80%;
      }

      .c0 .product-query-container h3 {
        margin-bottom: 10px;
      }

      .c0 .product-query-container fieldset {
        width: 100%;
      }

      .c0 .product-query-container input {
        height: 24px;
      }

      .c0 .product-query-container textarea {
        height: 120px;
      }

      .c0 .product-query-container button {
        margin-top: 5px;
      }

      @media only screen and (max-width:768px) {
        .c0 {
          flex-direction: column;
        }

        .c0 .product-query-container {
          width: 100%;
        }
      }

      <div>
        <div>
          <div>
             
            test-name
          </div>
          <div
            class="c0"
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
