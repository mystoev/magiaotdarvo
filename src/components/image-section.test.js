import React from 'react';
import { renderWithTheme } from '../../test/utils';

import ImageSection from './image-section';

describe('<ImageSection />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<ImageSection image={{}} />);

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
