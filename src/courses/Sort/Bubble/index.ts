/* eslint-disable no-param-reassign */
interface BubbleSort<T> {
  sort(array: T[]): T[],
}

type ComparatorType<T> = (a: T, b: T) => boolean;

function defaultComparator<T>(a: T, b: T): boolean {
  return a > b;
}

class BubbleSort<T> implements BubbleSort<T> {
  private comparator: ComparatorType<T>;

  constructor(comparator?: ComparatorType<T>) {
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
