import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { useProducts } from '../hooks/use-products';
import { CATEGORIES_MAP } from '../constants/data';
import { PageHeader, AccentBar } from '../components';
import { imageHref } from '../selectors/image';
import './category.less';

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
        <div className="products-list">{currentItems}</div>
        {pageCount > 1 && (
          <div className="pagination-container">
            <ReactPaginate
              className="pagination"
              activeClassName="active-page"
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageCount={pageCount}
              onPageChange={handlePageClick}
            />
          </div>
        )}
      </>
    )
  );
};

export default CategoryPage;
