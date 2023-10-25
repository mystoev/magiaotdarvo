import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AccentBar } from '.';

const CategoryThumbnailStyled = styled.div`
  height: 200px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ThumbTitle = styled.p`
  background-color: var(--secondary-background-color);
  padding: 0 !important;
  line-height: 1.2em;
`;

const ThumbDescription = styled.p`
  background-color: var(--secondary-background-color);
  padding: 0 !important;
  font-size: 0.7em;
  line-height: 1.5em;
`;

const CategoryThumbnail = ({ title, description, img, id }) => (
  <Link to={`../category/${id}`}>
    <CategoryThumbnailStyled>{img && <img src={img} />}</CategoryThumbnailStyled>
    <AccentBar slim />
    <ThumbTitle>{title}</ThumbTitle>
    <ThumbDescription>{description}</ThumbDescription>
    <AccentBar slim />
  </Link>
);

CategoryThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CategoryThumbnail;
