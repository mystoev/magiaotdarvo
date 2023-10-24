import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SelectableImage from './selectable-image';

describe('<SelectableImage /> tests', () => {
  it('should render', () => {
    const { container } = render(<SelectableImage />);

    expect(container).toMatchSnapshot();
  });

  it('should render with image', () => {
    const { container } = render(
      <SelectableImage category={'cat1'} productName={'name1'} file={'file1'} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onSelect when clicked', () => {
    const onSelectMock = jest.fn();
    const { queryByRole } = render(
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
