import {
  DESCRIPTION_CHANGE,
  IMAGES_CHANGE,
  IMAGES_TO_DELETE_CHANGE,
  NAME_CHANGE,
  NEW_FILE_CHANGE,
  PRODUCT_LOADED
} from './constants';
import { addProductReducer, editProductReducer } from './reducers';

describe('add product reducer', () => {
  it('should return correct data on NAME_CHANGE', () => {
    const state = { a: 1 };
    const payload = 'test-add-change-payload';
    const result = addProductReducer(state, { type: NAME_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      name: payload
    });
  });

  it('should return correct data on DESCRIPTION_CHANGE', () => {
    const state = { b: 2 };
    const payload = 'test-add-description-change-payload';
    const result = addProductReducer(state, { type: DESCRIPTION_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      description: payload
    });
  });

  it('should return correct data on IMAGES_CHANGE', () => {
    const state = { c: 3 };
    const payload = 'test-add-images-change-payload';
    const result = addProductReducer(state, { type: IMAGES_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      images: payload
    });
  });

  it('should return correct data on invalid event', () => {
    const state = { d: 4 };
    const payload = 'test-add-invalid';
    const result = addProductReducer(state, { type: 'none', payload });

    expect(result).toEqual(state);
  });
});

describe('edit product reducer', () => {
  it('should return correct data on NAME_CHANGE', () => {
    const state = { e: 5 };
    const payload = 'test-edit-change-payload';
    const result = editProductReducer(state, { type: NAME_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      name: payload
    });
  });

  it('should return correct data on DESCRIPTION_CHANGE', () => {
    const state = { f: 6 };
    const payload = 'test-edit-description-change-payload';
    const result = editProductReducer(state, { type: DESCRIPTION_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      description: payload
    });
  });

  it('should return correct data on IMAGES_TO_DELETE_CHANGE', () => {
    const state = { g: 7 };
    const payload = 'test-edit-images-to-delete-payload';
    const result = editProductReducer(state, { type: IMAGES_TO_DELETE_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      imagesToDelete: payload
    });
  });

  it('should return correct data on NEW_FILE_CHANGE', () => {
    const state = { h: 8 };
    const payload = 'test-edit-new-file-payload';
    const result = editProductReducer(state, { type: NEW_FILE_CHANGE, payload });

    expect(result).toEqual({
      ...state,
      newFiles: payload
    });
  });

  it('should return correct data on PRODUCT_LOADED', () => {
    const state = { i: 9 };
    const payload = {
      name: 'product-loaded-name-test',
      description: 'product-loaded-description-test',
      images: 'product-loaded-images-test'
    };
    const result = editProductReducer(state, { type: PRODUCT_LOADED, payload });

    expect(result).toEqual({
      ...state,
      name: payload.name,
      description: payload.description,
      files: payload.images
    });
  });

  it('should return correct data on invalid event', () => {
    const state = { j: 10 };
    const payload = 'invalid';
    const result = editProductReducer(state, { type: 'invalid-event', payload });

    expect(result).toEqual(state);
  });
});
