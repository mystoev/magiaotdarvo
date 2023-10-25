import React from 'react';
import styled from 'styled-components';

import { useCategories } from '../hooks/use-categories';
import { CategoryThumbnail } from '.';

const CategoriesListStyled = styled.div`
margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;

  > a {
    flex-basis: 32%;
    min-width: 200px;
    min-height: 200px;
    text-align: center;
    box-shadow: 0px 0px 2px var(--secondary-background-color);
  }
}

@media only screen and (max-width: 768px) {
  a {
    flex-basis: 80%;
  }
}
`;

const CategoriesList = () => {
  const { data: categories } = useCategories();

  return (
    <div className="section">
      <CategoriesListStyled>
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
      </CategoriesListStyled>
    </div>
  );
};

export default CategoriesList;
