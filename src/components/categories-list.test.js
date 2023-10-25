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
          class="categories-list__CategoriesListStyled-sc-6xdcd1-0 iiXrbZ"
        >
          <a
            href="/category/test-name"
          >
            <div
              class="category-thumbnail__CategoryThumbnailStyled-sc-vcs4ko-0 iGqSaU"
            >
              <img
                src="./images/test-name/cover.jpg"
              />
            </div>
            <div
              class="accent-bar__AccentBarSlim-sc-1nm9o64-0 hLEDyk"
            />
            <p
              class="category-thumbnail__ThumbTitle-sc-vcs4ko-1 kLGgnU"
            >
              test-title
            </p>
            <p
              class="category-thumbnail__ThumbDescription-sc-vcs4ko-2 jkwqjx"
            >
              test-description
            </p>
            <div
              class="accent-bar__AccentBarSlim-sc-1nm9o64-0 hLEDyk"
            />
          </a>
        </div>
      </div>
    `);
  });
});
