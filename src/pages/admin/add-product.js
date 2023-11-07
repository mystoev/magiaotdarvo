import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { EditContainer, Upload, addProductReducer } from '.';
import { DefaultButton, SelectableImage } from '../../components';
import { CATEGORIES_MAP } from '../../constants';
import { useAddData, useUploadImages } from '../../hooks';
import { DESCRIPTION_CHANGE, IMAGES_CHANGE, NAME_CHANGE } from './constants';

let folder;

const AddProduct = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [state, dispatch] = useReducer(addProductReducer, {
    name: '',
    description: '',
    images: []
  });

  useEffect(() => {
    folder = `${+new Date()}`;
  }, []);

  const handleSave = async () => {
    await useAddData({
      category,
      newProductName: state.name,
      description: state.description,
      images: state.images,
      folder
    });

    navigate('/admin');
  };

  return (
    <EditContainer>
      <h1>Добавяне в категория: {CATEGORIES_MAP[category]}</h1>
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
        {state.images.map(({ name }) => (
          <SelectableImage key={name} file={name} category={category} productName={folder} />
        ))}
        <Upload
          onUpload={async (files) => {
            dispatch({ type: IMAGES_CHANGE, payload: files });
            await useUploadImages({
              category,
              productName: folder,
              images: files
            });
          }}
        />
      </div>
      <DefaultButton onClick={handleSave}>Запази промените</DefaultButton>
    </EditContainer>
  );
};

export default AddProduct;
