import { useQuery } from 'react-query';
import axios from 'axios';

import { IS_PROD, PRODUCT_PHP, LOCAL_SERVER } from '../constants/data';

const getProduct = async ({ categoryName, productName }) => {
  const endpoint = IS_PROD ? PRODUCT_PHP : LOCAL_SERVER + PRODUCT_PHP;
  const { data } = await axios.get(endpoint + `?category=${categoryName}&product=${productName}`);

  return JSON.parse(data);
};

export const useProduct = ({ categoryName, productName }) =>
  useQuery(`${categoryName}/${productName}`, () => getProduct({ categoryName, productName }));
