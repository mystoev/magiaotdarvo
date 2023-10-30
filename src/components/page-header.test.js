import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import PageHeader from './page-header';

describe('<PageHeader />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <PageHeader title="Хедър" />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c1 {
        height: 3px;
      }

      .c2 {
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1C1311;
      }

      .c2 h1 {
        font-size: 3em;
      }

      .c2 h2 {
        font-size: 1.2em;
      }

      .c2 h1,
      .c2 h2 {
        color: #F3E5CF;
        text-shadow: 0px 0px 10px #EEC61F;
        text-decoration: none;
        text-align: center;
      }

      @media only screen and (max-width:768px) {
        .c2 h1 {
          font-size: 2em;
        }

        .c2 h2 {
          font-size: 1em;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
        <div
          class="c2"
        >
          <h1>
            ХЕДЪР
          </h1>
        </div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });

  it('should render with link', () => {
    const { container } = renderWithTheme(
      <Router>
        <PageHeader title="С линк" linkTo={'/home'} />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c1 {
        height: 3px;
      }

      .c2 {
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1C1311;
      }

      .c2 h1 {
        font-size: 3em;
      }

      .c2 h2 {
        font-size: 1.2em;
      }

      .c2 h1,
      .c2 h2 {
        color: #F3E5CF;
        text-shadow: 0px 0px 10px #EEC61F;
        text-decoration: none;
        text-align: center;
      }

      @media only screen and (max-width:768px) {
        .c2 h1 {
          font-size: 2em;
        }

        .c2 h2 {
          font-size: 1em;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
        <div
          class="c2"
        >
          <a
            href="/home"
          >
            <h1>
              С ЛИНК
            </h1>
          </a>
        </div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
});
