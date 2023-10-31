import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useProduct } from '../../hooks';
import { PageHeader } from '../../components';
import { CATEGORIES_MAP, WEBSITE } from '../../constants';
import { selectCarouselImages } from '../../selectors/image';
import { ProductQueryContainer } from './product-query';
import { Carousel } from './carousel';
import { ProductDetails } from './product-details';

const ProductInfo = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  gap: 10px;

  a {
    color: ${(props) => props.theme.colors.second};
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailsContainer = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = () => {
  const { category, productName } = useParams();
  const { data: product } = useProduct({ categoryName: category, productName });

  const images = selectCarouselImages(product, category, productName);

  return (
    <>
      {product && (
        <PageHeader
          title={CATEGORIES_MAP[category]}
          linkTo={`/category/${category}`}
          description={product.name}
        />
      )}

      {images && (
        <ProductInfo>
          <Carousel data={images} />
          <DetailsContainer>
            <ProductDetails product={product} category={category} />
            <ProductQueryContainer link={`${WEBSITE}/#/product/${category}/${productName}`} />
          </DetailsContainer>
        </ProductInfo>
      )}
    </>
  );
};

export default Product;
