import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const CarouselStyled = styled.div`
  .image-gallery-original-style {
    height: 640px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.second};

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .image-gallery-thumbnail-style img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .image-gallery {
    flex-basis: 70%;
  }
`;

export const Carousel = ({ data }) => {
  return (
    <CarouselStyled>
      <ImageGallery items={data} showPlayButton={false} showFullscreenButton={false} />
    </CarouselStyled>
  );
};

Carousel.propTypes = {
  data: PropTypes.array
};
