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
        class="section__SectionStyled-sc-1q03sw9-0 fbZuCG"
      >
        <div
          class="categories-list__CategoriesListStyled-sc-6xdcd1-0 dfxvRt"
        >
          <a
            class="category-thumbnail__StyledLink-sc-vcs4ko-3 fpTIlN"
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
              class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 eYwklx dIekrv"
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
              class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 eYwklx dIekrv"
            />
          </a>
        </div>
      </div>
    `);
  });
});
