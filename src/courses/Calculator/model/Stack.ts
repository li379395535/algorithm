interface IStack<T> {
  readonly Length: number,
  Push(value: T): boolean,
  Pop(): T,
}

class Stack<T> implements IStack<T> {
  private values: T[];

  private count: number;

  private capacity: number;

  constructor(cap: number = 10) {
    this.values = [];
    this.count = 0;
    this.capacity = cap;
  }

  public get Length() : number {
    return this.count;
  }

  public Push(value: T): boolean {
    if (this.count === this.capacity) return false;
    this.values[this.count] = value;
    this.count += 1;
    return true;
  }

  public Pop(): T {
    if (this.count === 0) throw new Error();
    const val = this.values[this.count - 1];
    this.count -= 1;
    return val;
  }

  public Peek(): T {
    if (this.count === 0) throw new Error();
    return this.values[this.count - 1];
  }
}

export default Stack;
