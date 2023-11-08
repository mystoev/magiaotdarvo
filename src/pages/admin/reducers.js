import {
  DESCRIPTION_CHANGE,
  IMAGES_CHANGE,
  IMAGES_TO_DELETE_CHANGE,
  NAME_CHANGE,
  NEW_FILE_CHANGE,
  PRODUCT_LOADED
} from './constants';

export const addProductReducer = (state, { type, payload }) => {
  switch (type) {
    case NAME_CHANGE:
      return {
        ...state,
        name: payload
      };
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: payload
      };
    case IMAGES_CHANGE:
      return {
        ...state,
        images: payload
      };
    default:
      return state;
  }
};

export const editProductReducer = (state, { type, payload }) => {
  switch (type) {
    case NAME_CHANGE:
      return {
        ...state,
        name: payload
      };
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: payload
      };
    case IMAGES_TO_DELETE_CHANGE:
      return {
        ...state,
        imagesToDelete: payload
      };
    case NEW_FILE_CHANGE:
      return {
        ...state,
        newFiles: payload
      };
    case PRODUCT_LOADED:
      return {
        ...state,
        name: payload.name,
        description: payload.description,
        files: payload.images
      };
    default:
      return state;
  }
};
