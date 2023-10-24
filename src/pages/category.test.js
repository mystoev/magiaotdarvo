import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { useCategoryData } from '../hooks/use-category-data';
import Category, { ITEMS_PER_PAGE } from './category';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: 'test-product' })
}));
jest.mock('../hooks/use-category-data', () => ({
  useCategoryData: jest.fn().mockReturnValue({
    data: {
      content: [
        {
          folder: 'test-folder',
          name: 'test-name',
          files: ['test-file1'],
          category: 'test-category'
        }
      ]
    }
  })
}));
jest.mock('../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

describe('category page', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <Category />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle page change', () => {
    const products = [];
    for (let index = 0; index < ITEMS_PER_PAGE; index++) {
      products.push({
        folder: 'test-folder',
        name: 'test-name',
        files: ['test-file1'],
        category: 'test-category'
      });
    }

    products.push({
      folder: 'test-folder',
      name: 'test-name-2',
      files: ['test-file1'],
      category: 'test-category'
    });

    useCategoryData.mockReturnValue({
      data: {
        content: products
      }
    });
    const { queryByText } = render(
      <Router>
        <Category />
      </Router>
    );

    expect(queryByText('test-name-2')).not.toBeInTheDocument();

    fireEvent.click(queryByText('2'));
    expect(queryByText('test-name-2')).toBeInTheDocument();
  });

  it('should change pages', () => {
    useCategoryData.mockReturnValue({
      data: null
    });

    render(
      <Router>
        <Category />
      </Router>
    );
  });
});
