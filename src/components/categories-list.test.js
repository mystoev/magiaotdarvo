import React from 'react';
import { render } from '@testing-library/react';
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
            href="/category/test-name"
          >
            <div
              class="category category-background"
            >
              <img
                src="./images/test-name/cover.jpg"
              />
            </div>
            <div
              class="accent-bar slim"
            />
            <p
              class="thumb-title"
            >
              test-title
            </p>
            <p
              class="thumb-description"
            >
              test-description
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
