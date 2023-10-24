import React from 'react';
import PropTypes from 'prop-types';

import './image-section.less';

const ImageSection = ({ image }) => (
  <div className="section-image-container">
    <img src={image} />
  </div>
);

ImageSection.propTypes = {
  image: PropTypes.string
};

export default ImageSection;
