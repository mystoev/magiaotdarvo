import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AccentBarSlim } from '../../components';
import { imageHref } from '../../selectors/image';

const CategoryLink = styled.div`
  text-align: center;
  flex-basis: 23%;
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.second};

  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.accent};
  }

  @media only screen and (max-width: 768px) {
    flex-basis: 90%;
  }
`;

const ProductTitleContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.second};

  p {
    padding: 5px 0px;
    white-space: break-spaces;
    word-wrap: break-word;
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 200px;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;

    &.image-cover {
      opacity: 0.75;
      object-fit: fill;
      filter: blur(5px);
      overflow: hidden;
    }
  }
`;

export const Thumbnail = ({ data, category }) => {
  const file = data.images.split(',').find((f) => f.indexOf('cover') > -1);
  const imgHref = imageHref(category, data.folder, file);

  return (
    <CategoryLink>
      <Link to={`/product/${category}/${data.folder}`}>
        <ProductImage>
          <img className="image-cover" src={imgHref} />
          <img src={imgHref} />
        </ProductImage>
        <AccentBarSlim />
        <ProductTitleContainer>
          <p>{data.name}</p>
        </ProductTitleContainer>
        <AccentBarSlim />
      </Link>
    </CategoryLink>
  );
};

Thumbnail.propTypes = {
  data: PropTypes.object,
  category: PropTypes.string
};
