import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { imageHref } from '../selectors/image';

const SelectableImageContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 200px;
  margin: 0 10px 10px 0;

  .selectable-image {
    height: 100%;
  }

  .selectable-image-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: red;

    &.normal {
      opacity: 0;
    }
    &.hidden {
      opacity: 0.6;
    }
  }
`;

const SelectableImage = ({ category, productName, file, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <SelectableImageContainer
      onClick={() => {
        setIsSelected(!isSelected);
        onSelect?.({ file, isSelected: !isSelected });
      }}>
      <div
        className={
          isSelected ? 'selectable-image-overlay hidden' : 'selectable-image-overlay normal'
        }></div>
      <img src={imageHref(category, productName, file)} className="selectable-image" />
    </SelectableImageContainer>
  );
};

SelectableImage.propTypes = {
  category: PropTypes.string,
  productName: PropTypes.string,
  file: PropTypes.string,
  onSelect: PropTypes.func
};

export default SelectableImage;
