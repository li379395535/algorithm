export interface ILinkNode<T> {
  Value: T,
  Next?: ILinkNode<T>,
}

class LinkNode<T> implements ILinkNode<T> {
  public Value: T;

  public Next?: LinkNode<T>;

  constructor(value: T, next?: LinkNode<T>) {
    this.Value = value;
    this.Next = next;
  }
}

export default LinkNode;
