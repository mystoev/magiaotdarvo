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
      <div
        class="section__SectionStyled-sc-1q03sw9-0 fbZuCG"
      >
        <div
          class="categories-list__CategoriesListStyled-sc-6xdcd1-0 dfxvRt"
        >
          <a
            class="category-thumbnail__StyledLink-sc-vcs4ko-3 hnPeWm"
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
              class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
            />
            <p
              class="category-thumbnail__ThumbTitle-sc-vcs4ko-1 jRVnGn"
            >
              test-title
            </p>
            <p
              class="category-thumbnail__ThumbDescription-sc-vcs4ko-2 daVepy"
            >
              test-description
            </p>
            <div
              class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
            />
          </a>
        </div>
      </div>
    `);
  });
});
