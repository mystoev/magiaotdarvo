import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Upload from '../../components/upload';
import { useAddData } from '../../hooks/use-update-data';
import { CATEGORIES_MAP } from '../../constants/data';
import './edit-product.less';

const AddProduct = () => {
  const navigate = useNavigate();

  const { category } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleSave = async () => {
    await useAddData({
      category,
      newProductName: name,
      description,
      images
    });

    navigate('/admin');
  };

  return (
    <div className="edit-container">
      <h1>Добавяне в категория: {CATEGORIES_MAP[category]}</h1>
      <h2>Заглавие</h2>
      <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
      <h2>Описание</h2>
      <textarea value={description} onChange={({ target: { value } }) => setDescription(value)}>
        {description}
      </textarea>
      <br />
      <h2>Нови снимки</h2>
      <Upload onUpload={(files) => setImages(files)} />
      <button className="button-default" onClick={() => handleSave()}>
        Запази промените
      </button>
    </div>
  );
};

export default AddProduct;
