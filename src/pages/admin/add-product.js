import React, { useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { EditContainer } from './edit-container';
import { Upload, DefaultButton } from '../../components';
import { useAddData } from '../../hooks';
import { CATEGORIES_MAP } from '../../constants';
import { addProductReducer } from './reducers';
import { NAME_CHANGE, DESCRIPTION_CHANGE, IMAGES_CHANGE } from './constants';

const AddProduct = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [state, dispatch] = useReducer(addProductReducer, {
    name: '',
    description: '',
    images: []
  });

  const handleSave = async () => {
    await useAddData({
      category,
      newProductName: state.name,
      description: state.description,
      images: state.images
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
      <br />
      <h2>Нови снимки</h2>
      <Upload onUpload={(files) => dispatch({ type: IMAGES_CHANGE, payload: files })} />
      <DefaultButton onClick={handleSave}>Запази промените</DefaultButton>
    </EditContainer>
  );
};

export default AddProduct;
