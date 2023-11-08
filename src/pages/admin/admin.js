import React, { useEffect, useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { AdminContainer, selectThumbnails } from '.';
import { useCategories, useProducts } from '../../hooks';
import { ProductsList } from '../category/products-list';

const Admin = () => {
  const { data: categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0].name);
  const { data: products } = useProducts({ categoryName: selectedCategory });

  const thumbnails = selectThumbnails(products, selectedCategory);

  useEffect(() => {
    if (!categories) {
      return;
    }

    setSelectedCategory(categories[0].name);
  }, [categories]);

  return (
    <AdminContainer>
      {categories && (
        <Tabs
          onSelect={(_index, _lastIndex, { target }) => {
            setSelectedCategory(target.getAttribute('value'));
          }}>
          <TabList>
            {categories.map(({ title, name }) => (
              <Tab value={name} key={name}>
                {title}
              </Tab>
            ))}
          </TabList>

          {categories.map(({ name }) => (
            <TabPanel key={name}>
              <ProductsList>{thumbnails}</ProductsList>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </AdminContainer>
  );
};

export default Admin;
