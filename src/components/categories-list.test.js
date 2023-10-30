import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import CategoriesList from './categories-list';

jest.mock('../hooks/use-categories', () => ({
  useCategories: jest.fn().mockReturnValue({
    data: [
      {
        name: 'test-name',
        title: 'test-title',
        description: 'test-description'
      }
    ]
  })
}));

describe('<CategoriesList />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <CategoriesList />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c4 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c5 {
        height: 1px;
      }

      .c3 {
        height: 200px;
      }

      .c3 img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .c6 {
        background-color: #1C1311;
        padding: 0!important;
        line-height: 1.2em;
      }

      .c7 {
        background-color: #1C1311;
        padding: 0!important;
        font-size: 0.7em;
        line-height: 1.5em;
      }

      .c2 {
        flex-basis: 32%;
        min-width: 200px;
        min-height: 200px;
        text-align: center;
        box-shadow: 0px 0px 2px #1C1311;
      }

      .c0 {
        margin: auto;
        margin-bottom: 50px;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .c0 h3 {
        align-self: center;
        margin: 40px;
      }

      .c0 p {
        padding: 10px;
      }

      .c1 {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 20px;
      }

      @media only screen and (max-width:768px) {
        .c2 {
          flex-basis: 80%;
        }
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <a
            class="c2"
            href="/category/test-name"
          >
            <div
              class="c3"
            >
              <img
                src="./images/test-name/cover.jpg"
              />
            </div>
            <div
              class="c4 c5"
            />
            <p
              class="c6"
            >
              test-title
            </p>
            <p
              class="c7"
            >
              test-description
            </p>
            <div
              class="c4 c5"
            />
          </a>
        </div>
      </div>
    `);
  });
});
