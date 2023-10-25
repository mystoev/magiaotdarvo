import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
  }
`;

const ImageSection = ({ image }) => (
  <ImageContainer>
    <img src={image} />
  </ImageContainer>
);

ImageSection.propTypes = {
  image: PropTypes.string
};

export default ImageSection;
