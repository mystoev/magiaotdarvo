import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import { useProducts } from '../hooks/use-products';
import { CATEGORIES_MAP } from '../constants/data';
import { PageHeader, AccentBar } from '../components';
import { imageHref } from '../selectors/image';

export const ITEMS_PER_PAGE = 16;

const ProductThumbnail = ({ data, category }) => {
  const file = data.images.split(',').find((f) => f.indexOf('cover') > -1);
  const imgHref = imageHref(category, data.folder, file);

  return (
    <div className="category-link">
      <Link to={`/product/${category}/${data.folder}`}>
        <div className="product-image-container">
          <img className="image-cover" src={imgHref} />
          <img src={imgHref} />
        </div>
        <AccentBar slim />
        <div className="product-title-container">
          <p className="product-title">{data.name}</p>
        </div>
        <AccentBar slim />
      </Link>
    </div>
  );
};

ProductThumbnail.propTypes = {
  data: PropTypes.object,
  category: PropTypes.string
};

const ProductsList = styled.div`
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
      // background: var(--secondary-background-color);
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

const PaginationContainer = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 30px auto;

  .pagination {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: nowrap;
    justify-content: center;

    li {
      list-style-type: none;
      border: 1px solid var(--main-font-color);
      border-radius: 5px;

      &.disabled {
        opacity: 0.5;

        a {
          cursor: default;
        }
      }

      a {
        color: var(--main-font-color);
        cursor: pointer;
        padding: 20px;
        line-height: 40px;
      }
    }
  }

  .active-page {
    background-color: var(--secondary-accent);

    a {
      cursor: default !important;
      font-weight: bold;
    }
  }
`;

const CategoryPage = () => {
  const { id: category } = useParams();
  const [itemOffset, setItemOffset] = useState(0);
  const { data } = useProducts({ categoryName: category });

  const items =
    data && data.map((d) => <ProductThumbnail key={d.folder} data={d} category={category} />);

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = items && items.slice(itemOffset, endOffset);
  const pageCount = items ? Math.ceil(items.length / ITEMS_PER_PAGE) : 1;

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * ITEMS_PER_PAGE) % items.length;
    setItemOffset(newOffset);
  };

  return (
    data && (
      <>
        <PageHeader title={CATEGORIES_MAP[category]} />
        <ProductsList>{currentItems}</ProductsList>
        {pageCount > 1 && (
          <PaginationContainer>
            <ReactPaginate
              className="pagination"
              activeClassName="active-page"
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageCount={pageCount}
              onPageChange={handlePageClick}
            />
          </PaginationContainer>
        )}
      </>
    )
  );
};

export default CategoryPage;
