const path = require('path');
const { readdirSync, writeFileSync, readFileSync } = require('fs');

const IMAGES_DIR = './public/images';
const OUTPUT_FILE = './public/data.json';
const PRODUCTS_INPUT_FILE = './scripts/products-metadata.json';
const CATEGORIES_INPUT_FILE = './scripts/categories-metadata.json';

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getFiles = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => !dirent.isDirectory())
    .map((dirent) => dirent.name);

const categoriesMetadataContent = readFileSync(CATEGORIES_INPUT_FILE, 'utf8');
const categoriesMetadata = JSON.parse(categoriesMetadataContent);

const productsMetadataContent = readFileSync(PRODUCTS_INPUT_FILE, 'utf8');
const productsMetadata = JSON.parse(productsMetadataContent);

const result = categoriesMetadata.map((category) => {
  const categoryDirs = getDirectories(path.join(IMAGES_DIR, category.folder));

  const content = categoryDirs.map((folder) => {
    const subfolder = path.join(IMAGES_DIR, category.folder, folder);
    const files = getFiles(subfolder);

    return { folder, ...productsMetadata[folder], files };
  });

  return {
    title: category.title,
    description: category.description,
    category: category.folder,
    content
  };
});

try {
  writeFileSync(OUTPUT_FILE, JSON.stringify(result));
  console.log('Data generated successfully!');
} catch (err) {
  console.log('Data generation error!');
  console.error(err);
}
