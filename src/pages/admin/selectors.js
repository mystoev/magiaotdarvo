import React from 'react';

import { Thumbnail } from '../category/thumbnail';

export const selectProducts = (data, selectedCategory) => {
  if (!data) {
    return [];
  }

  return [
    <Thumbnail
      key={`new-${selectedCategory}`}
      data={{ name: 'Добави нов' }}
      category={selectedCategory}
      link={`/admin/add/${selectedCategory}`}
    />,
    ...data.map((d) => (
      <Thumbnail
        key={d.folder}
        data={d}
        category={selectedCategory}
        link={`/admin/edit/${selectedCategory}/${d.folder}`}
      />
    ))
  ];
};
