import defaultComparator from '../model';

/* eslint-disable no-param-reassign */
class QuickSort<T> implements ISort<T> {
  private comparator: Comparator<T>;

  constructor(comparator?: Comparator<T>) {
    this.comparator = comparator || defaultComparator;
  }

  public sort(array: T[]) {
    this.realSort(array, 0, array.length - 1);
  }

  private realSort(array: T[], start: number, end: number) {
    if (start >= end) return;

    const pivotIndex = this.partition(array, start, end);
    this.realSort(array, start, pivotIndex);
    this.realSort(array, pivotIndex + 1, end);
  }

  private partition(array: T[], start: number, end: number): number {
    let i = start;
    let j = start;
    const pivot = array[end];
    for (; j < end; j++) {
      if (this.comparator(array[j], pivot)) {
        this.swap(array, i++, j);
      }
    }
    this.swap(array, i, end);
    return i;
  }

  // eslint-disable-next-line class-methods-use-this
  private swap(array: T[], source: number, target: number) {
    const temp = array[source];
    array[source] = array[target];
    array[target] = temp;
  }
}

export default QuickSort;
