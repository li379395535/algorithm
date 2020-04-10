import MergeSort from '../index';

describe('test merge sort', () => {
  const mergeSort = new MergeSort();
  test('sort with more element', () => {
    const array = [3, 2, 1, 3, 4];
    mergeSort.sort(array);

    expect(JSON.stringify(array)).toBe(JSON.stringify([1, 2, 3, 3, 4]));
  });
});
