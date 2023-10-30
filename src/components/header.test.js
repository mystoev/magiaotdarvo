import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import Header from './header';

describe('<Header /> tests', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <Header
          links={[
            { to: '/', text: 'Начало' },
            { to: 'products', text: 'Изделия' },
            { to: 'query', text: 'Запитване' },
            { to: 'about', text: 'За мен' },
            { to: 'contacts', text: 'Контакти' }
          ]}
        />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        display: none;
      }

      .c2 {
        margin: 50px 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }

      .c2 li {
        font-size: 0.9em;
        list-style-type: none;
        white-space: nowrap;
      }

      .c0 {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: #1C1311;
        margin-bottom: 10px;
      }

      .c0 svg {
        height: 100px;
      }

      .c0 svg,
      .c0 ul {
        margin: 20px;
      }

      @media only screen and (max-width:768px) {
        .c1 {
          display: block;
        }

        .c1 .menu-icon {
          height: 40px;
          margin-right: 20px!important;
        }

        .c1 .header-menu-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
        }

        .c1 .header-menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px 0;
          width: calc(100% - 2px);
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #1C1311;
          border: 1px solid #F3E5CF;
          gap: 20px;
          z-index: 9;
        }

        .c1 .header-menu-overlay li {
          border-bottom: 1px solid #F3E5CF;
        }
      }

      @media only screen and (max-width:768px) {
        .c2 {
          display: none;
        }
      }

      @media only screen and (max-width:768px) {
        .c0 {
          justify-content: space-between;
        }

        .c0 svg {
          height: 50px;
        }

        .c0 svg,
        .c0 ul {
          margin: 10px;
        }
      }

      <div>
        <div
          class="c0"
        >
          <a
            href="/"
          >
            <svg />
          </a>
          <div
            class="c1"
          >
            <svg
              class="menu-icon"
            />
          </div>
          <ul
            class="c2"
          >
            <li>
              <a
                href="/"
              >
                НАЧАЛО
              </a>
            </li>
            <li>
              <a
                href="/products"
              >
                ИЗДЕЛИЯ
              </a>
            </li>
            <li>
              <a
                href="/query"
              >
                ЗАПИТВАНЕ
              </a>
            </li>
            <li>
              <a
                href="/about"
              >
                ЗА МЕН
              </a>
            </li>
            <li>
              <a
                href="/contacts"
              >
                КОНТАКТИ
              </a>
            </li>
          </ul>
        </div>
      </div>
    `);
  });
});
