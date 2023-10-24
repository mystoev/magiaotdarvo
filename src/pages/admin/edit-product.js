import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Upload from '../../components/upload';
import SelectableImage from '../../components/selectable-image';
import { useProduct } from '../../hooks/use-product';
import { useUpdateData } from '../../hooks/use-update-data';
import './edit-product.less';

const EditProduct = () => {
  const { category, productName } = useParams();
  const navigate = useNavigate();
  const { data: product } = useProduct({ categoryName: category, productName });

  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [files, setFiles] = useState(product?.images);
  const [newFiles, setNewFiles] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState({});

  useEffect(() => {
    setName(product?.name);
    setDescription(product?.description);
    setFiles(product?.images);
  }, [product]);

  const handleSave = async () => {
    const fileNames = files
      .split(',')
      .filter((file) => !imagesToDelete[file])
      .concat(newFiles.map((newFile) => newFile.name));

    await useUpdateData({
      category,
      productName,
      newProductName: name,
      description,
      imagesColumn: fileNames.join(','),
      images: newFiles
    });

    navigate('/admin');
  };

  const handleImageSelect = ({ file, isSelected }) => {
    setImagesToDelete((old) => {
      old[file] = isSelected;
      return old;
    });
  };

  return (
    <div className="edit-container">
      <h1>Редактиране</h1>
      <h2>Заглавие</h2>
      <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
      <h2>Описание</h2>
      <textarea value={description} onChange={({ target: { value } }) => setDescription(value)}>
        {description}
      </textarea>
      <h2>Текущи снимки</h2>
      <div className="images-container">
        {files &&
          files
            .split(',')
            .filter((file) => file !== 'cover.jpg')
            .map((file) => (
              <SelectableImage
                key={file}
                category={category}
                productName={product.folder}
                onSelect={handleImageSelect}
                file={file}
              />
            ))}
      </div>
      <br />
      <h2>Нови снимки</h2>
      <Upload onUpload={(files) => setNewFiles(files)} />
      <button className="button-default" onClick={() => handleSave()}>
        Запази промените
      </button>
    </div>
  );
};

export default EditProduct;
