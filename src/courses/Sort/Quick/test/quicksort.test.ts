import QuickSort from '../index';

describe('test QuickSort', () => {
  const quickSort = new QuickSort<number>((a, b) => a < b);

  test('test quickSort when array has more than one element', () => {
    const array = [2, 5, 6, 9, 10, 1];
    quickSort.sort(array);

    expect(JSON.stringify(array)).toBe(JSON.stringify([1, 2, 5, 6, 9, 10]));
  });
});
