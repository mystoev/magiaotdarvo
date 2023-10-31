import React from 'react';

import { Thumbnail } from '../category/thumbnail';

export const selectProducts = (data, selectedCategory) => {
  const products =
    data &&
    data.map((d) => (
      <Thumbnail
        key={d.folder}
        data={d}
        category={selectedCategory}
        link={`/admin/edit/${selectedCategory}/${d.folder}`}
      />
    ));

  if (products) {
    products.push(
      <Thumbnail
        key={`new-${selectedCategory}`}
        data={{ name: 'Добави нов' }}
        category={selectedCategory}
        link={`/admin/add/${selectedCategory}`}
      />
    );
  }

  return products;
};
