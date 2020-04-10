/* eslint-disable no-param-reassign */
import defaultComparator from '../model';

class MergeSort<T> implements ISort<T> {
  private comparator: Comparator<T>;

  constructor(comparator?: Comparator<T>) {
    this.comparator = comparator || defaultComparator;
  }

  public sort(array: T[]) {
    if (array.length <= 1) return;
    this.mergeSort(array, 0, array.length - 1);
  }

  private mergeSort(array: T[], start: number, end: number) {
    if (start >= end) return;

    const middleIndex = Math.floor((end + start) / 2);

    this.mergeSort(array, start, middleIndex);
    this.mergeSort(array, middleIndex + 1, end);
    this.merge(array, start, middleIndex, end);
  }

  // eslint-disable-next-line class-methods-use-this
  private merge(array: T[], start: number, mid: number, end: number) {
    let i = start; let j = mid + 1; let
      k = 0;
    const temp = [];
    while (i <= mid && j <= end) {
      if (array[i] <= array[j]) {
        temp[k++] = array[i++];
      } else {
        temp[k++] = array[j++];
      }
    }

    let newStart; let
      newEnd;
    if (i <= mid) {
      newStart = i;
      newEnd = mid;
    } else {
      newStart = j;
      newEnd = end;
    }

    while (newStart <= newEnd) {
      temp[k++] = array[newStart++];
    }

    for (let index = 0; index <= end - start; index++) {
      array[start + index] = temp[index];
    }
  }
}

export default MergeSort;
