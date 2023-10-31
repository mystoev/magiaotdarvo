import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CATEGORIES_MAP } from '../../constants';

export const ProductDetails = ({ product: { name, description }, category }) => (
  <div>
    <p>Име: {name}</p>
    <Link to={`/category/${category}`}>
      <p>Категория: {CATEGORIES_MAP[category]}</p>
    </Link>
    <p>Описание: {description}</p>
  </div>
);

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  }),
  category: PropTypes.string
};
