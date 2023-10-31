import { useQuery } from 'react-query';
import axios from 'axios';

import { IS_PROD, LOCAL_SERVER } from '../constants';

const CATEGORIES_PHP = 'categories.php';
const CATEGORIES_KEY = 'categories';

const getCategories = async () => {
  const endpoint = IS_PROD ? CATEGORIES_PHP : LOCAL_SERVER + CATEGORIES_PHP;
  const { data } = await axios.get(endpoint);

  return JSON.parse(data);
};

export const useCategories = () => useQuery(CATEGORIES_KEY, () => getCategories());
