import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { Logo } from '../../public/images';
import CategoryThumbnail from './category-thumbnail';

describe('<CategoryThumbnail />', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <CategoryThumbnail />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="/category/undefined"
      >
        <div
          class="category category-background"
        />
        <div
          class="accent-bar slim"
        />
        <p
          class="thumb-title"
        />
        <p
          class="thumb-description"
        />
        <div
          class="accent-bar slim"
        />
      </a>
    `);
  });

  it('should render with props', () => {
    const { container } = render(
      <Router>
        <CategoryThumbnail title="Нова категория" description={'За теста'} img={Logo} id={'link'} />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="/category/link"
      >
        <div
          class="category category-background"
        >
          <img
            src="svg"
          />
        </div>
        <div
          class="accent-bar slim"
        />
        <p
          class="thumb-title"
        >
          Нова категория
        </p>
        <p
          class="thumb-description"
        >
          За теста
        </p>
        <div
          class="accent-bar slim"
        />
      </a>
    `);
  });
});
