class LinkCacheNode<T> {
  public Key: string;

  public Value: T;

  public Next?: LinkCacheNode<T>;

  constructor(key: string, value: T, next?: LinkCacheNode<T>) {
    this.Value = value;
    this.Next = next;
    this.Key = key;
  }
}

export default LinkCacheNode;
