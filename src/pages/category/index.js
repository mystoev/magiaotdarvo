import React from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../../hooks';
import { CATEGORIES_MAP } from '../../constants';
import { PageHeader } from '../../components';
import { Thumbnail } from './thumbnail';
import { Pagination } from './pagination';
import { ProductsList } from './products-list';
import { useProductsPaging } from './use-products-paging';

const CategoryPage = () => {
  const { id: category } = useParams();
  const { data } = useProducts({ categoryName: category });

  const items = data && data.map((d) => <Thumbnail key={d.folder} data={d} category={category} />);
  const { currentItems, pageCount, onPageClick } = useProductsPaging({ items });

  return (
    <>
      <PageHeader title={CATEGORIES_MAP[category]} />
      <ProductsList>{currentItems}</ProductsList>
      <Pagination pageCount={pageCount} onPageClick={onPageClick} />
    </>
  );
};

export default CategoryPage;
