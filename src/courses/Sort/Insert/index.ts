/* eslint-disable no-param-reassign */
interface IInsertSort<T> {
  sort(array: T[]): T[],
}

type Comparator<T> = (a: T, b: T) => boolean;

function defaultComparator<T>(a: T, b: T): boolean {
  return a > b;
}

class InsertSort<T> implements IInsertSort<T> {
  private comparator: Comparator<T>;

  constructor(comparator?: Comparator<T>) {
    this.comparator = comparator || defaultComparator;
  }

  public sort(array: T[]): T[] {
    if (array.length <= 1) return array;

    for (let index = 1; index < array.length; index += 1) {
      const value = array[index];
      let j = index - 1;
      for (; j >= 0; j -= 1) {
        if (this.comparator(array[j], value)) {
          array[j + 1] = array[j];
        } else {
          break;
        }
      }
      array[j + 1] = value;
    }
    return array;
  }
}

export default InsertSort;
