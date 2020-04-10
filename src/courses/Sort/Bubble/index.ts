import defaultComparator from '../model';

/* eslint-disable no-param-reassign */
class BubbleSort<T> implements ISort<T> {
  private comparator: Comparator<T>;

  constructor(comparator?: Comparator<T>) {
    this.comparator = comparator || defaultComparator;
  }

  public sort(array: T[]): T[] {
    if (array.length <= 1) return array;
    for (let index = 0; index < array.length; index += 1) {
      let flag: boolean = false;
      for (let j = 0; j < array.length; j += 1) {
        if (this.comparator(array[j], array[j + 1])) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          flag = true;
        }
      }

      if (!flag) {
        break;
      }
    }
    return array;
  }
}

export default BubbleSort;
