import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AccentBarSlim } from '../../components';
import { imageHref } from '../../selectors/image';

export const Thumbnail = ({ data, category }) => {
  const file = data.images.split(',').find((f) => f.indexOf('cover') > -1);
  const imgHref = imageHref(category, data.folder, file);

  return (
    <div className="category-link">
      <Link to={`/product/${category}/${data.folder}`}>
        <div className="product-image-container">
          <img className="image-cover" src={imgHref} />
          <img src={imgHref} />
        </div>
        <AccentBarSlim />
        <div className="product-title-container">
          <p className="product-title">{data.name}</p>
        </div>
        <AccentBarSlim />
      </Link>
    </div>
  );
};

Thumbnail.propTypes = {
  data: PropTypes.object,
  category: PropTypes.string
};
