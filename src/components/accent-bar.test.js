import React from 'react';
import { renderWithTheme } from '../../test/utils';

import { AccentBar, AccentBarSlim } from './accent-bar';

describe('<AccentBar />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<AccentBar />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c1 {
        height: 3px;
      }

      <div
        class="c0 c1"
      />
    `);
  });

  it('should render slim', () => {
    const { container } = renderWithTheme(<AccentBarSlim />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        background-color: #EEC61F;
        opacity: 0.5;
      }

      .c1 {
        height: 1px;
      }

      <div
        class="c0 c1"
      />
    `);
  });
});
