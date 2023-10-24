import { UPDATE_FILE, ADD_FILE, IS_PROD, LOCAL_SERVER } from '../constants/data';
import axios from 'axios';
import { selectToken } from '../selectors/token';

export const useUpdateData = async ({
  category,
  productName,
  newProductName,
  description,
  imagesColumn,
  images
}) => {
  const token = selectToken();
  const payload = {
    key: token,
    category,
    productName,
    newProductName,
    description,
    imagesColumn,
    images
  };

  const endpoint = IS_PROD ? UPDATE_FILE : LOCAL_SERVER + UPDATE_FILE;
  const { data } = await axios.post(endpoint, payload);
  return data;
};

export const useAddData = async ({ category, newProductName, description, images }) => {
  const token = selectToken();
  const payload = {
    key: token,
    category,
    newProductName,
    description,
    images
  };

  const endpoint = IS_PROD ? ADD_FILE : LOCAL_SERVER + ADD_FILE;
  const { data } = await axios.post(endpoint, payload);
  return data;
};
