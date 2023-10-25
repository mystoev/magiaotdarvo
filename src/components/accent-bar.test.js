import React from 'react';
import { render } from '@testing-library/react';

import AccentBar from './accent-bar';

describe('<AccentBar />', () => {
  it('should render', () => {
    const { container } = render(<AccentBar />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="accent-bar__AccentBarNormal-sc-1nm9o64-1 cbYeWr"
      />
    `);
  });

  it('should render slim', () => {
    const { container } = render(<AccentBar slim />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="accent-bar__AccentBarSlim-sc-1nm9o64-0 hLEDyk"
      />
    `);
  });
});
