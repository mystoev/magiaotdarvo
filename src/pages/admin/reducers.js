import {
  NAME_CHANGE,
  DESCRIPTION_CHANGE,
  IMAGES_CHANGE,
  NEW_FILE_CHANGE,
  IMAGES_TO_DELETE_CHANGE,
  PRODUCT_LOADED
} from './constants';

export const editProductReducer = (state, { type, payload }) => {
  if (type === NAME_CHANGE) {
    return {
      ...state,
      name: payload
    };
  } else if (type === DESCRIPTION_CHANGE) {
    return {
      ...state,
      description: payload
    };
  } else if (type === IMAGES_TO_DELETE_CHANGE) {
    return {
      ...state,
      imagesToDelete: payload
    };
  } else if (type === NEW_FILE_CHANGE) {
    return {
      ...state,
      newFiles: payload
    };
  } else if (type === PRODUCT_LOADED) {
    return {
      ...state,
      name: payload.name,
      description: payload.description,
      files: payload.images
    };
  }
};

export const addProductReducer = (state, { type, payload }) => {
  if (type === NAME_CHANGE) {
    return {
      ...state,
      name: payload
    };
  } else if (type === DESCRIPTION_CHANGE) {
    return {
      ...state,
      description: payload
    };
  } else if (type === IMAGES_CHANGE) {
    return {
      ...state,
      images: payload
    };
  }
};
