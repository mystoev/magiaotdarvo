import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { renderWithTheme } from '../../test/utils';

import HeaderMenu from './header-menu';

describe('<HeaderMenu />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
      <Router>
        <HeaderMenu links={[]} />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with links', () => {
    const links = [
      { to: '/path1', text: 'Link1' },
      { to: '/path2', text: 'Link2' }
    ];

    const { container, queryByText } = renderWithTheme(
      <Router>
        <HeaderMenu links={links} />
      </Router>
    );

    expect(container).toMatchSnapshot();
    links.forEach(({ text }) => {
      expect(queryByText(text.toUpperCase())).toBeInTheDocument();
    });
  });
});
