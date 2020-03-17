import LinkNode from './LinkNode';

class LinkList<T> {
  private length: number;

  private list: LinkNode<T>;

  constructor(arr: T[]) {
    if (arr.length === 0) {
      throw new Error('input array length must more than zero');
    }
    this.length = 0;
    this.list = new LinkNode<T>(arr[0]);
    arr.forEach((item) => {
      this.push(item);
    });
  }

  public get Length() {
    return this.length;
  }

  private push(value: T) {
    const valueNode = new LinkNode<T>(value);
    const lastNode = this.findLastNode();
    lastNode.Next = valueNode;
    this.length += 1;
  }

  private findLastNode() {
    let currentNode = this.list;
    while (currentNode) {
      if (currentNode.Next) {
        currentNode = currentNode.Next;
      } else {
        break;
      }
    }
    return currentNode;
  }

  public findMiddleNode() {
    const middleIndex = Math.floor((this.length - 1) / 2);
    let currentNode = this.list;
    const index = 0;
    while (currentNode) {
      if (index <= middleIndex && currentNode.Next) {
        currentNode = currentNode.Next;
      } else {
        break;
      }
    }

    return currentNode;
  }

  public findPrevNode(target: LinkNode<T>) {
    let currentNode = this.list;
    let prevNode: LinkNode<T> | undefined;
    while (currentNode) {
      if (currentNode === target) {
        break;
      } else if (currentNode.Next) {
        prevNode = currentNode;
        currentNode = currentNode.Next;
      }
    }
    return prevNode;
  }
}

export default LinkList;
