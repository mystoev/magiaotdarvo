import React from 'react';
import { render } from '@testing-library/react';

import ImageSection from './image-section';

describe('<ImageSection />', () => {
  it('should render', () => {
    const { container } = render(<ImageSection image={{}} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="image-section__ImageContainer-sc-1qjyve1-0 jmhPHN"
        >
          <img
            src="[object Object]"
          />
        </div>
      </div>
    `);
  });
});
