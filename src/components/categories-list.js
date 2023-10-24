import React from 'react';

import { useCategories } from '../hooks/use-categories';
import { CategoryThumbnail } from '.';
import './categories-list.less';

const CategoriesList = () => {
  const { data: categories } = useCategories();

  return (
    <div className="section">
      <div className="categories-list">
        {categories &&
          categories.map(({ name, title, description }) => (
            <CategoryThumbnail
              id={name}
              key={name}
              title={title}
              description={description}
              img={`./images/${name}/cover.jpg`}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoriesList;
