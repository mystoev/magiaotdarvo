import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { imageHref } from '../selectors/image';
import './selectable-image.less';

const SelectableImage = ({ category, productName, file, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="selectable-image-container"
      onClick={() => {
        setIsSelected(!isSelected);
        onSelect?.({ file, isSelected: !isSelected });
      }}>
      <div
        className={
          isSelected ? 'selectable-image-overlay hidden' : 'selectable-image-overlay normal'
        }></div>
      <img src={imageHref(category, productName, file)} className="selectable-image" />
    </div>
  );
};

SelectableImage.propTypes = {
  category: PropTypes.string,
  productName: PropTypes.string,
  file: PropTypes.string,
  onSelect: PropTypes.func
};

export default SelectableImage;
