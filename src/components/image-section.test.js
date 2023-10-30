import React from 'react';
import { renderWithTheme } from '../../test/utils';

import ImageSection from './image-section';

describe('<ImageSection />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<ImageSection image={{}} />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin-top: 10px;
      }

      .c0 img {
        width: 100%;
      }

      <div>
        <div
          class="c0"
        >
          <img
            src="[object Object]"
          />
        </div>
      </div>
    `);
  });
});
