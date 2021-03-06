import InsertSort from '../index';

describe('test insertSorter', () => {
  const insertSort = new InsertSort();
  test('lenth of array is less and equal than one', () => {
    const array = [1];
    insertSort.sort(array);

    expect(array[0]).toBe(1);
  });

  test('length of array is larger than one', () => {
    const array = [3, 2, 1];
    insertSort.sort(array);

    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
  });
});
