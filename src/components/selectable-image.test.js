import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../test/utils';

import SelectableImage from './selectable-image';

describe('<SelectableImage /> tests', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<SelectableImage />);

    expect(container).toMatchSnapshot();
  });

  it('should render with image', () => {
    const { container } = renderWithTheme(
      <SelectableImage category={'cat1'} productName={'name1'} file={'file1'} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onSelect when clicked', () => {
    const onSelectMock = jest.fn();
    const { queryByRole } = renderWithTheme(
      <SelectableImage
        category={'cat1'}
        productName={'name1'}
        file={'file2'}
        onSelect={onSelectMock}
      />
    );

    fireEvent.click(queryByRole('img'));

    expect(onSelectMock).toHaveBeenCalledWith({ file: 'file2', isSelected: true });
  });
});
