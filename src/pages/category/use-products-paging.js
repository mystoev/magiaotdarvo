import { useState } from 'react';

export const ITEMS_PER_PAGE = 16;

export const useProductsPaging = ({ items }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = items && items.slice(itemOffset, itemOffset + ITEMS_PER_PAGE);
  const pageCount = items ? Math.ceil(items.length / ITEMS_PER_PAGE) : 1;

  const onPageClick = ({ selected }) => {
    const newOffset = (selected * ITEMS_PER_PAGE) % items.length;
    setItemOffset(newOffset);
  };

  return { currentItems, pageCount, onPageClick };
};
