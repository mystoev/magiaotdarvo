import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import PageHeader from './page-header';

describe('<PageHeader />', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <PageHeader title="Хедър" />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 eYwklx fDJSZx"
        />
        <div
          class="page-header__HeaderTitles-sc-1ejvrf1-0 gErLqz"
        >
          <h1>
            ХЕДЪР
          </h1>
        </div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 eYwklx fDJSZx"
        />
      </div>
    `);
  });

  it('should render with link', () => {
    const { container } = render(
      <Router>
        <PageHeader title="С линк" linkTo={'/home'} />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 eYwklx fDJSZx"
        />
        <div
          class="page-header__HeaderTitles-sc-1ejvrf1-0 gErLqz"
        >
          <a
            href="/home"
          >
            <h1>
              С ЛИНК
            </h1>
          </a>
        </div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 eYwklx fDJSZx"
        />
      </div>
    `);
  });
});
