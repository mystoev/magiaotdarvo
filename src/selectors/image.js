import { isEmpty } from 'lodash';
import { WEBSITE } from '../constants/data';

export const imageHref = (category, productName, fileName) => {
  if (isEmpty(category) || isEmpty(productName) || isEmpty(fileName)) {
    return '';
  }

  return `${WEBSITE}/images/${category}/${productName}/${fileName}`;
};
