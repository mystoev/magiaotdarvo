import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '../../../test/utils';

import Upload from './upload';

describe('<Upload /> tests', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Upload />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: inline-block;
        background: #ffffff;
        position: relative;
        height: 200px;
      }

      .c0 img {
        height: 100%;
        width: auto;
      }

      .c0 input {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        cursor: pointer;
      }

      <div>
        <div
          class="c0"
        >
          <img
            src="[object Object]"
          />
          <input
            data-testid="file-input"
            multiple=""
            title="Добави снимка"
            type="file"
          />
        </div>
      </div>
    `);
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
