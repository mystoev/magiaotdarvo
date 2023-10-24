import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Upload from '../../components/upload';
import SelectableImage from '../../components/selectable-image';
import { useProduct } from '../../hooks/use-product';
import { useUpdateData } from '../../hooks/use-update-data';
import { editProductReducer } from './reducers';
import {
  NAME_CHANGE,
  DESCRIPTION_CHANGE,
  NEW_FILE_CHANGE,
  IMAGES_TO_DELETE_CHANGE,
  PRODUCT_LOADED
} from './constants';
import './edit-product.less';

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
      imagesColumn: fileNames.join(','),
      images: state.newFiles
    });

    navigate('/admin');
  };

  return (
    <div className="edit-container">
      <h1>Редактиране</h1>
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
      <h2>Текущи снимки</h2>
      <div className="images-container">
        {state.files
          .split(',')
          .filter((file) => file !== 'cover.jpg')
          .map((file) => (
            <SelectableImage
              key={file}
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
              file={file}
            />
          ))}
      </div>
      <br />
      <h2>Нови снимки</h2>
      <Upload
        onUpload={(files) => {
          dispatch({ type: NEW_FILE_CHANGE, payload: files });
        }}
      />
      <button className="button-default" onClick={handleSave}>
        Запази промените
      </button>
    </div>
  );
};

export default EditProduct;
