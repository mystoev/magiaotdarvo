import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import CategoriesList from './categories-list';

describe('<CategoriesList />', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <CategoriesList />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="section"
      >
        <div
          class="categories-list"
        >
          <a
            href="/category/jewery"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Бижута
            </p>
            <p
              class="thumb-description"
            >
              Обеци, колиета, украшение
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/eco"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Еко изделия
            </p>
            <p
              class="thumb-description"
            >
              Гривни, мартеници, макраме
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/kids"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              За децата
            </p>
            <p
              class="thumb-description"
            >
              Изграчки, пъзели, поставки
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/icons"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Икони и кръстове
            </p>
            <p
              class="thumb-description"
            >
              За стена или настолни
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/books"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Книги и тефтери
            </p>
            <p
              class="thumb-description"
            >
              Албуми, рецепти, ритуали
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/art"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Пана
            </p>
            <p
              class="thumb-description"
            >
              Фигури, арт инсталации
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/candles"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Свещници
            </p>
            <p
              class="thumb-description"
            >
              Единични, в чаша, тематични
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/signs"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Табели
            </p>
            <p
              class="thumb-description"
            >
              За къщи, стайни
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/boxes"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Кутии
            </p>
            <p
              class="thumb-description"
            >
              За бижута, карти, подаръчни
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/keyholders"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Ключодържатели
            </p>
            <p
              class="thumb-description"
            >
              Стенни, с бележки
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/photoframes"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Рамки за снимки
            </p>
            <p
              class="thumb-description"
            >
              За стена или настолни
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
          <a
            href="/category/other"
          >
            <div
              class="category category-background"
            >
              <img
                src="[object Object]"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              Други
            </p>
            <p
              class="thumb-description"
            >
              Родословни дървета, дъски за рязане
            </p>
            <div
              class="accent-bar slim"
            />
          </a>
        </div>
      </div>
    `);
  });
});
