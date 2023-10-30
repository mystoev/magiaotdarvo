import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import PageHeader from './page-header';

describe('<PageHeader />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <PageHeader title="Хедър" />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 hRwmLQ fDJSZx"
        />
        <div
          class="page-header__HeaderTitles-sc-1ejvrf1-0 jqhYHF"
        >
          <h1>
            ХЕДЪР
          </h1>
        </div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 hRwmLQ fDJSZx"
        />
      </div>
    `);
  });

  it('should render with link', () => {
    const { container } = renderWithTheme(
      <Router>
        <PageHeader title="С линк" linkTo={'/home'} />
      </Router>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 hRwmLQ fDJSZx"
        />
        <div
          class="page-header__HeaderTitles-sc-1ejvrf1-0 jqhYHF"
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
          class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 hRwmLQ fDJSZx"
        />
      </div>
    `);
  });
});
