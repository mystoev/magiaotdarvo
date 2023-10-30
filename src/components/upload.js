import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FileUpload = styled.div`
  width: 450px;
  margin: 20px 0;
  background: #ffffff;
  border-radius: 25px;

  .file-upload {
    text-align: center;
    border: 5px dashed ${(props) => props.theme.colors.accent};
    border-radius: 25px;
    padding: 1.5rem;
    position: relative;
    cursor: pointer;

    p {
      font-size: 0.87rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  const [selectedNames, setSelectedNames] = useState([]);

  const handleChange = async ({ target: { files } }) => {
    const uploads = Array.from(files);
    setSelectedNames(uploads.map((f) => f.name));

    const result = await readAsDataURL(uploads);
    onUpload(result);
  };

  return (
    <FileUpload>
      <div className="file-upload">
        {selectedNames.length > 0 ? (
          <>
            {selectedNames.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </>
        ) : (
          <h3>{'Натисни тук, за да качиш снимки'}</h3>
        )}
        <input data-testid="file-input" type="file" multiple onChange={handleChange} />
      </div>
    </FileUpload>
  );
};

Upload.propTypes = {
  onUpload: PropTypes.func
};

export default Upload;
