import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { New } from '../../../public/images';

const FileUpload = styled.div`
  display: inline-block;
  background: #ffffff;
  position: relative;
  height: 200px;

  img {
    height: 100%;
    width: auto;
  }

  input {
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
`;

const fileToDataURL = (file) => {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = function ({ target: { result } }) {
      resolve(result.replace('data:image/jpeg;base64,', ''));
    };
    reader.readAsDataURL(file);
  });
};

const readAsDataURL = (uploads) =>
  Promise.all(
    uploads.map(async (u) => {
      const data = await fileToDataURL(u);
      return { data, name: u.name };
    })
  );

const Upload = ({ onUpload }) => {
  const handleChange = async ({ target: { files } }) => {
    const uploads = Array.from(files);

    const result = await readAsDataURL(uploads);
    onUpload(result);
  };

  return (
    <FileUpload>
      <img src={New} />
      <input
        data-testid="file-input"
        title="Добави нова снимка"
        type="file"
        multiple
        onChange={handleChange}
      />
    </FileUpload>
  );
};

Upload.propTypes = {
  onUpload: PropTypes.func
};

export default Upload;
