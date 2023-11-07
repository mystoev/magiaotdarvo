import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from '../../../test/utils';

import Upload from './upload';

describe('<Upload /> tests', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Upload />);

    expect(container).toMatchSnapshot();
  });

  it('should upload', async () => {
    const file = new File(['some content'], 'file1.jpg', { type: 'image/jpg' });
    const onUploadMock = jest.fn();
    const { queryByTestId } = renderWithTheme(<Upload onUpload={onUploadMock} />);

    fireEvent.change(queryByTestId('file-input'), { target: { files: [file] } });

    await waitFor(() => {
      expect(onUploadMock).toHaveBeenCalledWith([
        {
          data: 'data:image/jpg;base64,c29tZSBjb250ZW50',
          name: 'file1.jpg'
        }
      ]);
    });
  });
});
