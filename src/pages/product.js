import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { useProduct } from '../hooks/use-product';
import { PageHeader, QueryForm } from '../components';
import { CATEGORIES_MAP, WEBSITE } from '../constants/data';
import { imageHref } from '../selectors/image';
import './product.less';

const Product = () => {
  const { category, productName } = useParams();
  const { data: product } = useProduct({ categoryName: category, productName });

  const productFiles = product?.images
    .split(',')
    .filter((f) => f !== 'cover.jpg' && f !== 'cover.jpeg' && f !== '.DS_Store');
  const images = productFiles?.map((file) => {
    return {
      original: imageHref(category, productName, file),
      thumbnail: imageHref(category, productName, file),
      originalClass: 'image-gallery-original-style',
      thumbnailClass: 'image-gallery-thumbnail-style'
    };
  });

  return (
    <div>
      {product && (
        <PageHeader
          title={CATEGORIES_MAP[category]}
          linkTo={`/category/${category}`}
          description={product.name}
        />
      )}

      {images && (
        <div className="product-details-container">
          <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
          <div className="product-details">
            <div>
              <p>Име: {product.name}</p>
              <Link to={`/category/${category}`}>
                <p>Категория: {CATEGORIES_MAP[category]}</p>
              </Link>
              {product.price && <p>Цена: {product.price}</p>}
              {product.dateCreated && <p>Дата на изработка: {product.dateCreated}</p>}
              <p>Описание: {product.description}</p>
            </div>
            <div className="product-query-container">
              <h3>Изпрати запитване за този продукт</h3>
              <QueryForm slim productLink={`${WEBSITE}/#/product/${category}/${productName}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
