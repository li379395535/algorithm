class LinkNode<T> {
  public Key: string;
  public Value: T;
  public Next?: LinkNode<T>;
  constructor(key: string, value: T, next?: LinkNode<T>) {
    this.Value = value;
    this.Next = next;
    this.Key = key;
  }
}

export default LinkNode;