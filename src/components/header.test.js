import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import Header from './header';

describe('<Header /> tests', () => {
  it('should render', () => {
    const { container } = render(
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
      <div>
        <div
          class="menu-header"
        >
          <a
            href="/"
          >
            <svg />
          </a>
          <div
            class="header-menu-small"
          >
            <svg
              class="menu-icon"
            />
          </div>
          <ul
            class="header-menu"
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
