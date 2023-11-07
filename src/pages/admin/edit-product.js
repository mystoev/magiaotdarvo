import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { EditContainer, Upload, editProductReducer } from '.';
import { DefaultButton, SelectableImage } from '../../components';
import { useProduct, useUpdateData, useUploadImages } from '../../hooks';
import {
  DESCRIPTION_CHANGE,
  IMAGES_TO_DELETE_CHANGE,
  NAME_CHANGE,
  NEW_FILE_CHANGE,
  PRODUCT_LOADED
} from './constants';

const EditProduct = () => {
  const navigate = useNavigate();
  const { category, productName } = useParams();
  const { data: product } = useProduct({ categoryName: category, productName });

  const [state, dispatch] = useReducer(editProductReducer, {
    name: '',
    description: '',
    files: '',
    newFiles: [],
    imagesToDelete: {}
  });

  useEffect(() => {
    if (!product) {
      return;
    }

    dispatch({ type: PRODUCT_LOADED, payload: product });
  }, [product]);

  const handleSave = async () => {
    const fileNames = state.files
      .split(',')
      .filter((file) => !state.imagesToDelete[file])
      .concat(state.newFiles.map((newFile) => newFile.name));

    await useUpdateData({
      category,
      productName,
      newProductName: state.name,
      description: state.description,
      imagesColumn: fileNames.join(',')
    });

    navigate('/admin');
  };

  return (
    <EditContainer>
      <h2>Заглавие</h2>
      <input
        type="text"
        value={state.name}
        onChange={({ target: { value } }) => dispatch({ type: NAME_CHANGE, payload: value })}
      />
      <h2>Описание</h2>
      <textarea
        value={state.description}
        onChange={({ target: { value } }) =>
          dispatch({ type: DESCRIPTION_CHANGE, payload: value })
        }>
        {state.description}
      </textarea>
      <h2>Снимки</h2>
      <div className="images-container">
        {state.files
          .split(',')
          .filter((file) => file !== 'cover.jpg')
          .map((file) => (
            <SelectableImage
              key={file}
              file={file}
              category={category}
              productName={product?.folder}
              onSelect={({ file, isSelected }) => {
                dispatch({
                  type: IMAGES_TO_DELETE_CHANGE,
                  payload: {
                    ...state.imagesToDelete,
                    [file]: isSelected
                  }
                });
              }}
            />
          ))}
        {state.newFiles.map(({ name }) => (
          <SelectableImage
            key={name}
            file={name}
            category={category}
            productName={product?.folder}
          />
        ))}
        <Upload
          onUpload={async (files) => {
            await useUploadImages({
              category,
              productName,
              images: files
            });
            dispatch({ type: NEW_FILE_CHANGE, payload: files });
          }}
        />
      </div>
      <DefaultButton onClick={handleSave}>Запази промените</DefaultButton>
    </EditContainer>
  );
};

export default EditProduct;
