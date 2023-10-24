import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './upload.less';

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
    <div className="parent">
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
    </div>
  );
};

Upload.propTypes = {
  onUpload: PropTypes.func
};

export default Upload;
