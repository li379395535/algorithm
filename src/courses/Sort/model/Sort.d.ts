declare type Comparator<T> = (a: T, b: T) => boolean;

interface ISort<T> {
  sort(array: T[]): void,
}
