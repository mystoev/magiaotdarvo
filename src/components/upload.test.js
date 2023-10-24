import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Upload from './upload';

describe('<Upload /> tests', () => {
  it('should render', () => {
    const { container } = render(<Upload />);

    expect(container).toMatchSnapshot();
  });

  it('should upload', async () => {
    const file = new File(['some content'], 'file1.jpg', { type: 'image/jpg' });
    const onUploadMock = jest.fn();
    const { queryByTestId } = render(<Upload onUpload={onUploadMock} />);

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
