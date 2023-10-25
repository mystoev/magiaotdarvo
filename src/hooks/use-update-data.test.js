import axios from 'axios';

import { useUpdateData, useAddData } from './use-update-data';
import { ADD_FILE, UPDATE_FILE, LOCAL_SERVER } from '../constants/data';

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
      imagesColumn: 'cover.jpg,new_image.jpg',
      images: []
    };

    const data = await useUpdateData(updateParams);
    expect(data).toBe('test update');

    expect(axios.post).toHaveBeenCalledWith(LOCAL_SERVER + UPDATE_FILE, {
      key: 'test-value',
      ...updateParams
    });
  });

  it('should update data', async () => {
    axios.post.mockResolvedValueOnce({ data: 'test update' });
    const updateParams = {
      category: 'jewery',
      productName: 'earings-ethno',
      newProductName: 'test-product',
      description: 'test-description',
      imagesColumn: 'new_image.jpg',
      images: [{ name: 'test.jpg' }]
    };

    const data = await useUpdateData(updateParams);
    expect(data).toBe('test update');

    expect(axios.post).toHaveBeenCalledWith(LOCAL_SERVER + UPDATE_FILE, {
      key: 'test-value',
      ...updateParams
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
      images: [{ name: 'test-add.jpg' }]
    };
    const data = await useAddData(addParams);
    expect(data).toBe('test add');

    expect(axios.post).toHaveBeenCalledWith(LOCAL_SERVER + ADD_FILE, {
      key: 'test-value',
      ...addParams
    });
  });
});
