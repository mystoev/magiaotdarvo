import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../../hooks/use-products';
import { CATEGORIES_MAP } from '../../constants/data';
import { PageHeader } from '../../components';
import { Thumbnail } from './thumbnail';
import { Pagination } from './pagination';
import { ProductsList } from './products-list';

export const ITEMS_PER_PAGE = 16;

const useProductsPaging = ({ items }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = items && items.slice(itemOffset, itemOffset + ITEMS_PER_PAGE);
  const pageCount = items ? Math.ceil(items.length / ITEMS_PER_PAGE) : 1;

  const onPageClick = ({ selected }) => {
    const newOffset = (selected * ITEMS_PER_PAGE) % items.length;
    setItemOffset(newOffset);
  };

  return { currentItems, pageCount, onPageClick };
};

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
