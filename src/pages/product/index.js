import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

import { useProduct } from '../../hooks/use-product';
import { PageHeader, QueryForm } from '../../components';
import { CATEGORIES_MAP, WEBSITE } from '../../constants/data';
import { imageHref } from '../../selectors/image';

const ProductDetailsContaier = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  gap: 10px;

  .image-gallery-original-style {
    height: 640px;
    border-radius: 3px;
    background-color: var(--main-font-color);

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .image-gallery-thumbnail-style img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .image-gallery {
    flex-basis: 70%;
  }

  .product-details {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    color: var(--main-font-color);
  }

  .product-query-container {
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
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .product-query-container {
      width: 100%;
    }
  }
`;

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
        <ProductDetailsContaier>
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
        </ProductDetailsContaier>
      )}
    </div>
  );
};

export default Product;
