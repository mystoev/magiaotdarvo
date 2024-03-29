import { useQuery } from 'react-query';
import axios from 'axios';

import { IS_PROD, LOCAL_SERVER } from '../constants';

const PRODUCTS_PHP = 'products.php';

const getProducts = async (categoryName) => {
  const endpoint = IS_PROD ? PRODUCTS_PHP : LOCAL_SERVER + PRODUCTS_PHP;
  const { data } = await axios.get(endpoint + `?category=${categoryName}`);

  return JSON.parse(data);
};

export const useProducts = ({ categoryName }) =>
  useQuery(categoryName, () => getProducts(categoryName));
