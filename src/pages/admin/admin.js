import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { imageHref } from '../../selectors/image';
import { useCategories } from '../../hooks/use-categories';
import { useProducts } from '../../hooks/use-products';
import './admin.less';

const Admin = () => {
  const navigate = useNavigate();

  const { data: categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0].name);

  useEffect(() => {
    setSelectedCategory(categories?.[0].name);
  }, [categories]);

  const { data: products } = useProducts({ categoryName: selectedCategory });

  const onTabSelect = (_index, _lastIndex, { target }) => {
    setSelectedCategory(target.getAttribute('value'));
  };

  return (
    <div className="admin-container">
      <h1>Категории</h1>
      <Tabs onSelect={onTabSelect}>
        <TabList>
          {categories &&
            categories.map(({ title, name }) => (
              <Tab value={name} key={name}>
                {title}
              </Tab>
            ))}
        </TabList>

        {categories &&
          categories.map(({ name: categoryName }) => (
            <TabPanel key={categoryName}>
              <div className="select-and-add">
                <button
                  className="button-default"
                  onClick={() => {
                    navigate(`/admin/add/${selectedCategory}`);
                  }}>
                  Добави нов
                </button>
              </div>
              {products &&
                products.map(({ folder, name, images }) => (
                  <div key={folder} className="product-edit">
                    <div className="product-row">
                      <p>{name}</p>
                      <div className="product-images">
                        {images
                          .split(',')
                          .filter((file) => file !== 'cover.jpg')
                          .map((file) => (
                            <img
                              height={50}
                              key={file}
                              src={imageHref(selectedCategory, folder, file)}
                            />
                          ))}
                      </div>
                      <div className="product-action">
                        <button
                          className="button-default"
                          onClick={() => {
                            navigate(`/admin/edit/${selectedCategory}/${folder}`);
                          }}>
                          Редактирай
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default Admin;
