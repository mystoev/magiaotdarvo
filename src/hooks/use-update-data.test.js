import axios from 'axios';

import Data from '../../public/data.json';
import { useUpdateData, useAddData } from './use-update-data';
import { ADD_FILE, UPDATE_FILE } from '../constants/data';

jest.mock('axios');

describe('use-update-data', () => {
  beforeAll(() => localStorage.setItem('token', 'test-value'));
  afterAll(() => localStorage.clear());

  it('should update data without images', async () => {
    axios.post.mockResolvedValueOnce({ data: 'test update' });
    const updateParams = {
      category: 'books',
      productName: 'notebook-caption',
      newProductName: 'test-product',
      description: 'test-description',
      imagesToDelete: { 'notebook-caption.jpg': true }
    };

    const data = await useUpdateData(updateParams);
    expect(data).toBe('test update');

    const product = Data.find((c) => c.category == updateParams.category).content.find(
      (c) => c.folder == updateParams.productName
    );
    expect(product.name).toBe(updateParams.newProductName);
    expect(product.description).toBe(updateParams.description);
    expect(product.files).toEqual(['cover.jpg']);
    expect(axios.post).toHaveBeenCalledWith(UPDATE_FILE, {
      key: 'test-value',
      data: Data,
      newImages: null
    });
  });

  it('should update data', async () => {
    axios.post.mockResolvedValueOnce({ data: 'test update' });
    const updateParams = {
      category: 'jewery',
      productName: 'earings-ethno',
      newProductName: 'test-product',
      description: 'test-description',
      imagesToDelete: { 'earings-ethno.jpg': true },
      newImages: [{ name: 'test.jpg' }]
    };

    const data = await useUpdateData(updateParams);
    expect(data).toBe('test update');

    const product = Data.find((c) => c.category == updateParams.category).content.find(
      (c) => c.folder == updateParams.productName
    );
    expect(product.name).toBe(updateParams.newProductName);
    expect(product.description).toBe(updateParams.description);
    expect(product.files).toEqual(['cover.jpg', 'test.jpg']);
    expect(axios.post).toHaveBeenCalledWith(UPDATE_FILE, {
      key: 'test-value',
      data: Data,
      newImages: {
        category: updateParams.category,
        productName: updateParams.productName,
        newImages: updateParams.newImages
      }
    });
  });
});

describe('use-add-data', () => {
  beforeAll(() => localStorage.setItem('token', 'test-value'));
  afterAll(() => localStorage.clear());

  it('should add data', async () => {
    axios.post.mockResolvedValueOnce({ data: 'test add' });
    const addParams = {
      category: 'books',
      newProductName: 'test-product',
      description: 'test-description',
      newImages: [{ name: 'test-add.jpg' }]
    };

    const data = await useAddData(addParams);
    expect(data).toBe('test add');

    const product = Data.find((c) => c.category == addParams.category).content.find(
      (c) => c.folder == addParams.newProductName
    );
    expect(product.name).toBe(addParams.newProductName);
    expect(product.description).toBe(addParams.description);
    expect(product.files).toEqual(['test-add.jpg']);
    expect(axios.post).toHaveBeenCalledWith(ADD_FILE, {
      key: 'test-value',
      data: Data,
      newImages: {
        category: addParams.category,
        productName: addParams.newProductName,
        newImages: addParams.newImages
      }
    });
  });
});
