import { isEmpty } from 'lodash';
import { WEBSITE } from '../constants/data';

export const imageHref = (category, productName, fileName) => {
  if (isEmpty(category) || isEmpty(productName) || isEmpty(fileName)) {
    return '';
  }

  return `${WEBSITE}/images/${category}/${productName}/${fileName}`;
};

export const selectCarouselImages = (product, category, productName) => {
  return product?.images
    .split(',')
    .filter((f) => f !== 'cover.jpg' && f !== 'cover.jpeg' && f !== '.DS_Store')
    .map((file) => ({
      original: imageHref(category, productName, file),
      thumbnail: imageHref(category, productName, file),
      originalClass: 'image-gallery-original-style',
      thumbnailClass: 'image-gallery-thumbnail-style'
    }));
};
