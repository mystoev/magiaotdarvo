import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AccentBar } from '.';

import './category-thumbnail.less';

const CategoryThumbnail = ({ title, description, img, id }) => (
  <Link to={`../category/${id}`}>
    <div className="category category-background">{img && <img src={img} />}</div>
    <AccentBar slim />
    <p className="thumb-title">{title}</p>
    <p className="thumb-description">{description}</p>
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
