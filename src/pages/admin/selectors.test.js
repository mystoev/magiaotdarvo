import { selectThumbnails } from './selectors';

describe('products selectors', () => {
  it('should be empty without data', () => {
    const result = selectThumbnails(null, null);

    expect(result).toEqual([]);
  });

  it('should all thumbnails with one more to add new', () => {
    const category = 'mock-category';
    const data = [
      { folder: 'test-folder-1' },
      { folder: 'test-folder-2' },
      { other: 'no-to-render' }
    ];

    const result = selectThumbnails(data, category);
    expect(result).toHaveLength(data.length + 1);
    expect(result).toMatchInlineSnapshot(`
      [
        <Thumbnail
          category="mock-category"
          data={
            {
              "name": "Добави нов",
            }
          }
          link="/admin/add/mock-category"
        />,
        <Thumbnail
          category="mock-category"
          data={
            {
              "folder": "test-folder-1",
            }
          }
          link="/admin/edit/mock-category/test-folder-1"
        />,
        <Thumbnail
          category="mock-category"
          data={
            {
              "folder": "test-folder-2",
            }
          }
          link="/admin/edit/mock-category/test-folder-2"
        />,
        <Thumbnail
          category="mock-category"
          data={
            {
              "other": "no-to-render",
            }
          }
          link="/admin/edit/mock-category/undefined"
        />,
      ]
    `);
  });
});
