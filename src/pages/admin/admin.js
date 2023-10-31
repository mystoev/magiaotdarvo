import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { imageHref } from '../../selectors/image';
import { useCategories, useProducts } from '../../hooks';
import { DefaultButton } from '../../components';

const AdminContainer = styled.div`
  margin: 20px;

  .select-and-add {
    display: flex;
    gap: 20px;
    justify-content: end;
  }

  h1 {
    margin-top: 20px;
  }

  ul {
    margin-left: 20px;
  }

  .product-edit {
    margin-top: 20px;
  }

  .product-row {
    padding-top: 2px;
    padding-bottom: 2px;
    border-top: 1px solid ${(props) => props.theme.colors.second};
    display: flex;
    flex: 0 0 auto;
    gap: 10px;

    & > * {
      align-self: center;
    }

    & > p {
      flex: 1;
      max-width: 30%;
    }

    .product-images {
      flex: 2;
      display: flex;
      gap: 20px;
      overflow: auto;
    }

    .product-action {
      flex: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 10px;
    font-size: 0.8em;

    .product-row {
      display: block;
      position: relative;

      p {
        max-width: max-content;
        font-size: 1.25em;
      }

      .product-images {
        padding: 5px 0;
        max-width: 60%;
        overflow-x: auto;
      }

      .product-action {
        position: absolute;
        right: 0;
        bottom: 10px;
      }
    }
  }
`;

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
    <AdminContainer>
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
                <DefaultButton
                  onClick={() => {
                    navigate(`/admin/add/${selectedCategory}`);
                  }}>
                  Добави нов
                </DefaultButton>
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
                        <DefaultButton
                          onClick={() => {
                            navigate(`/admin/edit/${selectedCategory}/${folder}`);
                          }}>
                          Редактирай
                        </DefaultButton>
                      </div>
                    </div>
                  </div>
                ))}
            </TabPanel>
          ))}
      </Tabs>
    </AdminContainer>
  );
};

export default Admin;
