import React from 'react';
import styled from 'styled-components';

import { useCategories } from '../hooks/use-categories';
import { CategoryThumbnail, Section } from '.';

const CategoriesListStyled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
`;

const CategoriesList = () => {
  const { data: categories } = useCategories();

  return (
    <Section>
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
    </Section>
  );
};

export default CategoriesList;
