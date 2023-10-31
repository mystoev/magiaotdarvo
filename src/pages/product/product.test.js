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
      .c3 {
        font-size: 0.75em;
        width: 80%;
      }

      .c3 h3 {
        margin-bottom: 10px;
      }

      .c3 fieldset {
        width: 100%;
      }

      .c3 input {
        height: 24px;
      }

      .c3 textarea {
        height: 120px;
      }

      .c3 button {
        margin-top: 5px;
      }

      .c1 .image-gallery-original-style {
        height: 640px;
        border-radius: 3px;
        background-color: #1C1311;
      }

      .c1 .image-gallery-original-style img {
        height: 100%;
        object-fit: contain;
      }

      .c1 .image-gallery-thumbnail-style img {
        width: 100%;
        height: 100px;
        object-fit: cover;
      }

      .c1 .image-gallery {
        flex-basis: 70%;
      }

      .c0 {
        width: 90%;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .c0 a {
        color: #1C1311;
      }

      .c2 {
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      @media only screen and (max-width:768px) {
        .c3 {
          width: 100%;
        }
      }

      @media only screen and (max-width:768px) {
        .c0 {
          flex-direction: column;
        }
      }

      <div>
        <div>
           
          test-name
        </div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <div>
              ImageGallery
            </div>
          </div>
          <div
            class="c2"
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
              class="c3"
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
      .c3 {
        font-size: 0.75em;
        width: 80%;
      }

      .c3 h3 {
        margin-bottom: 10px;
      }

      .c3 fieldset {
        width: 100%;
      }

      .c3 input {
        height: 24px;
      }

      .c3 textarea {
        height: 120px;
      }

      .c3 button {
        margin-top: 5px;
      }

      .c1 .image-gallery-original-style {
        height: 640px;
        border-radius: 3px;
        background-color: #1C1311;
      }

      .c1 .image-gallery-original-style img {
        height: 100%;
        object-fit: contain;
      }

      .c1 .image-gallery-thumbnail-style img {
        width: 100%;
        height: 100px;
        object-fit: cover;
      }

      .c1 .image-gallery {
        flex-basis: 70%;
      }

      .c0 {
        width: 90%;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .c0 a {
        color: #1C1311;
      }

      .c2 {
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      @media only screen and (max-width:768px) {
        .c3 {
          width: 100%;
        }
      }

      @media only screen and (max-width:768px) {
        .c0 {
          flex-direction: column;
        }
      }

      <div>
        <div>
           
          test-name
        </div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <div>
              ImageGallery
            </div>
          </div>
          <div
            class="c2"
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
              class="c3"
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
    `);
  });
});
