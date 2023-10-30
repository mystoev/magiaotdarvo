import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AccentBarSlim } from '.';

const CategoryThumbnailStyled = styled.div`
  height: 200px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ThumbTitle = styled.p`
  background-color: ${(props) => props.theme.colors.second};
  padding: 0 !important;
  line-height: 1.2em;
`;

const ThumbDescription = styled.p`
  background-color: ${(props) => props.theme.colors.second};
  padding: 0 !important;
  font-size: 0.7em;
  line-height: 1.5em;
`;

const StyledLink = styled(Link)`
  flex-basis: 32%;
  min-width: 200px;
  min-height: 200px;
  text-align: center;
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.second};

  @media only screen and (max-width: 768px) {
    flex-basis: 80%;
  }
`;

const CategoryThumbnail = ({ title, description, img, id }) => (
  <StyledLink to={`../category/${id}`}>
    <CategoryThumbnailStyled>{img && <img src={img} />}</CategoryThumbnailStyled>
    <AccentBarSlim />
    <ThumbTitle>{title}</ThumbTitle>
    <ThumbDescription>{description}</ThumbDescription>
    <AccentBarSlim />
  </StyledLink>
);

CategoryThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CategoryThumbnail;
