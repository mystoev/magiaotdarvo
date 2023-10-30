import React from 'react';
import { renderWithTheme } from '../../test/utils';

import { AccentBar, AccentBarSlim } from './accent-bar';

describe('<AccentBar />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<AccentBar />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBar-sc-1nm9o64-2 hRwmLQ fDJSZx"
      />
    `);
  });

  it('should render slim', () => {
    const { container } = renderWithTheme(<AccentBarSlim />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="accent-bar__AccentBarBase-sc-1nm9o64-0 accent-bar__AccentBarSlim-sc-1nm9o64-1 hRwmLQ dIekrv"
      />
    `);
  });
});
