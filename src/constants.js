module.exports = {
  PHP_FOLDER: 'src/php',
  CATEGORIES_PHP: 'categories.php',
  PRODUCTS_PHP: 'products.php',
  PRODUCT_PHP: 'product.php',
  EMAIL_FILE: 'email.php',
  LOGIN_FILE: 'login.php',
  UPDATE_FILE: 'update.php',
  UPLOAD_FILE: 'upload-images.php',
  ADD_FILE: 'add.php',
  FUNCTIONS_FILE: 'functions.php',
  CATEGORIES_DATA_KEY: 'categoryData',
  IS_PROD: process.env.NODE_ENV == 'production',
  WEBSITE:
    process.env.NODE_ENV == 'production' ? 'https://magiaotdarvo.com' : 'http://localhost:8080',
  CATEGORIES_MAP: {
    kids: 'За децата',
    jewery: 'Бижута',
    eco: 'Еко изделия',
    books: 'Книги и тефтери',
    icons: 'Икони и кръстове',
    art: 'Пана',
    candles: 'Свещници',
    signs: 'Табели',
    boxes: 'Кутии',
    keyholders: 'Ключодържатели',
    photoframes: 'Рамки за снимки',
    other: 'Други'
  },
  LOCAL_SERVER: 'http://localhost:8000/'
};
