import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../../test/utils';
import { MemoryRouter as Router } from 'react-router-dom';

import { useProducts } from '../../hooks/use-products';
import Category, { ITEMS_PER_PAGE } from './';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: 'test-product' })
}));
jest.mock('../../hooks/use-products', () => ({
  useProducts: jest.fn().mockReturnValue({
    data: [
      {
        folder: 'test-folder',
        name: 'test-name',
        files: ['test-file1'],
        category: 'test-category',
        images: ''
      }
    ]
  })
}));
jest.mock('../../components/page-header', () => ({ title, description }) => (
  <div>
    {title} {description}
  </div>
));

describe('category page', () => {
  it('should render', () => {
    const { container } = renderWithTheme(
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
        category: 'test-category',
        images: 'cover.jpg,test_image.jpg'
      });
    }

    products.push({
      folder: 'test-folder',
      name: 'test-name-2',
      files: ['test-file1'],
      category: 'test-category',
      images: ''
    });

    useProducts.mockReturnValue({
      data: products
    });
    const { queryByText } = renderWithTheme(
      <Router>
        <Category />
      </Router>
    );

    expect(queryByText('test-name-2')).not.toBeInTheDocument();

    fireEvent.click(queryByText('2'));
    expect(queryByText('test-name-2')).toBeInTheDocument();
  });

  it('should change pages', () => {
    useProducts.mockReturnValue({
      data: null
    });

    renderWithTheme(
      <Router>
        <Category />
      </Router>
    );
  });
});
