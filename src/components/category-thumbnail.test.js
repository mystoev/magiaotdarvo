import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import { Logo } from '../../public/images';
import CategoryThumbnail from './category-thumbnail';

describe('<CategoryThumbnail />', () => {
  it('should render with props', () => {
    const { container } = renderWithTheme(
      <Router>
        <CategoryThumbnail title="Нова категория" description={'За теста'} img={Logo} id={'link'} />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c2 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c3 {
        height: 1px;
      }

      .c1 {
        height: 200px;
      }

      .c1 img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .c4 {
        background-color: #1C1311;
        padding: 0!important;
        line-height: 1.2em;
      }

      .c5 {
        background-color: #1C1311;
        padding: 0!important;
        font-size: 0.7em;
        line-height: 1.5em;
      }

      .c0 {
        flex-basis: 32%;
        min-width: 200px;
        min-height: 200px;
        text-align: center;
        box-shadow: 0px 0px 2px #1C1311;
      }

      @media only screen and (max-width:768px) {
        .c0 {
          flex-basis: 80%;
        }
      }

      <a
        class="c0"
        href="/category/link"
      >
        <div
          class="c1"
        >
          <img
            src="svg"
          />
        </div>
        <div
          class="c2 c3"
        />
        <p
          class="c4"
        >
          Нова категория
        </p>
        <p
          class="c5"
        >
          За теста
        </p>
        <div
          class="c2 c3"
        />
      </a>
    `);
  });
});
