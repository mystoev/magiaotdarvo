module.exports = {
  PHP_FOLDER: 'src/php',
  ADD_FILE: 'add.php',
  UPDATE_FILE: 'update.php',
  UPLOAD_FILE: 'upload-images.php',
  IS_PROD: process.env.NODE_ENV == 'production',
  LOCAL_SERVER: 'http://localhost:8000/',
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
  }
};
