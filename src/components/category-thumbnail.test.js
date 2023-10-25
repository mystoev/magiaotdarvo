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
        class="category-thumbnail__StyledLink-sc-vcs4ko-3 fpTIlN"
        href="/category/undefined"
      >
        <div
          class="category-thumbnail__CategoryThumbnailStyled-sc-vcs4ko-0 iGqSaU"
        />
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 eYwklx dIekrv"
        />
        <p
          class="category-thumbnail__ThumbTitle-sc-vcs4ko-1 kLGgnU"
        />
        <p
          class="category-thumbnail__ThumbDescription-sc-vcs4ko-2 jkwqjx"
        />
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 eYwklx dIekrv"
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
        class="category-thumbnail__StyledLink-sc-vcs4ko-3 fpTIlN"
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
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 eYwklx dIekrv"
        />
        <p
          class="category-thumbnail__ThumbTitle-sc-vcs4ko-1 kLGgnU"
        >
          Нова категория
        </p>
        <p
          class="category-thumbnail__ThumbDescription-sc-vcs4ko-2 jkwqjx"
        >
          За теста
        </p>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 eYwklx dIekrv"
        />
      </a>
    `);
  });
});
