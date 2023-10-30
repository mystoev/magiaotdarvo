import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import { Logo } from '../../public/images';
import CategoryThumbnail from './category-thumbnail';

describe('<CategoryThumbnail />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <CategoryThumbnail />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="category-thumbnail__StyledLink-sc-vcs4ko-3 hnPeWm"
        href="/category/undefined"
      >
        <div
          class="category-thumbnail__CategoryThumbnailStyled-sc-vcs4ko-0 iGqSaU"
        />
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
        />
        <p
          class="category-thumbnail__ThumbTitle-sc-vcs4ko-1 jRVnGn"
        />
        <p
          class="category-thumbnail__ThumbDescription-sc-vcs4ko-2 daVepy"
        />
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
        />
      </a>
    `);
  });

  it('should render with props', () => {
    const { container } = renderWithTheme(
      <Router>
        <CategoryThumbnail title="Нова категория" description={'За теста'} img={Logo} id={'link'} />
      </Router>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="category-thumbnail__StyledLink-sc-vcs4ko-3 hnPeWm"
        href="/category/link"
      >
        <div
          class="category-thumbnail__CategoryThumbnailStyled-sc-vcs4ko-0 iGqSaU"
        >
          <img
            src="svg"
          />
        </div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
        />
        <p
          class="category-thumbnail__ThumbTitle-sc-vcs4ko-1 jRVnGn"
        >
          Нова категория
        </p>
        <p
          class="category-thumbnail__ThumbDescription-sc-vcs4ko-2 daVepy"
        >
          За теста
        </p>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
        />
      </a>
    `);
  });
});
