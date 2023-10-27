import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductsListStyled = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: normal;
  column-gap: 2%;
  row-gap: 20px;

  > .category-link {
    text-align: center;
    flex-basis: 23%;
    box-shadow: 0px 0px 2px var(--secondary-background-color);

    .product-title-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--secondary-background-color);
    }

    a {
      height: 100%;
      display: flex;
      flex-direction: column;
      color: var(--secondary-accent);
    }

    .product-image-container {
      position: relative;
      height: 200px;
    }

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

    .product-title,
    .product-description {
      white-space: break-spaces;
      word-wrap: break-word;
    }

    .product-title {
      padding: 5px 0px;
    }

    .product-description {
      padding-bottom: 5px;
      font-size: 0.7em;
    }
  }

  @media only screen and (max-width: 768px) {
    > .category-link {
      flex-basis: 90%;
    }
  }
`;

export const ProductsList = ({ children }) => {
  return <ProductsListStyled>{children}</ProductsListStyled>;
};

ProductsList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};
