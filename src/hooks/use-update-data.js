import axios from 'axios';
import { ADD_FILE, IS_PROD, LOCAL_SERVER, UPDATE_FILE, UPLOAD_FILE } from '../constants';
import { selectToken } from '../selectors/token';

export const useUpdateData = async ({
  category,
  productName,
  newProductName,
  description,
  imagesColumn
}) => {
  const token = selectToken();
  const payload = {
    key: token,
    category,
    productName,
    newProductName,
    description,
    imagesColumn
  };

  const endpoint = IS_PROD ? UPDATE_FILE : LOCAL_SERVER + UPDATE_FILE;
  const { data } = await axios.post(endpoint, payload);
  return data;
};

export const useAddData = async ({ category, newProductName, description, images, folder }) => {
  const token = selectToken();
  const payload = {
    key: token,
    category,
    folder,
    newProductName,
    description,
    images
  };

  const endpoint = IS_PROD ? ADD_FILE : LOCAL_SERVER + ADD_FILE;
  const { data } = await axios.post(endpoint, payload);
  return data;
};

export const useUploadImages = async ({ category, productName, images }) => {
  const token = selectToken();
  const payload = {
    key: token,
    category,
    productName,
    images
  };

  const endpoint = IS_PROD ? UPLOAD_FILE : LOCAL_SERVER + UPLOAD_FILE;
  const { data } = await axios.post(endpoint, payload);
  return data;
};
