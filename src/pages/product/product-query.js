import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { QueryForm } from '../../components';

const ProductQuery = styled.div`
  font-size: 0.75em;
  width: 80%;

  h3 {
    margin-bottom: 10px;
  }

  fieldset {
    width: 100%;
  }

  input {
    height: 24px;
  }

  textarea {
    height: 120px;
  }

  button {
    margin-top: 5px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductQueryContainer = ({ link }) => {
  return (
    <ProductQuery>
      <h3>Изпрати запитване за този продукт</h3>
      <QueryForm slim productLink={link} />
    </ProductQuery>
  );
};

ProductQueryContainer.propTypes = {
  link: PropTypes.string
};
