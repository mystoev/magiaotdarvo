import React from 'react';
import { render } from '@testing-library/react';

import AccentBar from './accent-bar';

describe('<AccentBar />', () => {
  it('should render', () => {
    const { container } = render(<AccentBar />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="accent-bar normal"
      />
    `);
  });

  it('should render slim', () => {
    const { container } = render(<AccentBar slim />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="accent-bar slim"
      />
    `);
  });
});
