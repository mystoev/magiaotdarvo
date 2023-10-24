import { imageHref } from './image';

describe('image selectors', () => {
  it('should return full link', () => {
    const result = imageHref('cat', 'prod', 'file1.jpg');

    expect(result).toEqual('http://localhost:8080/images/cat/prod/file1.jpg');
  });

  it('should return link with empty args', () => {
    const result = imageHref();

    expect(result).toEqual('');
  });
});
