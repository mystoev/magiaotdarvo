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
`;

export const ProductsList = ({ children }) => {
  return <ProductsListStyled>{children}</ProductsListStyled>;
};

ProductsList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};
