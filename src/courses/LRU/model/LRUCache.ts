import LinkNode from './LinkNode';

class LRUCache<T> {
  private length: number;
  private capacity: number;
  private cache?: LinkNode<T>;

  constructor(cap = 10) {
    this.capacity = cap;
    this.length = 0;
  }

  
  public get Length() : number {
    return this.length;
  }

  
  public get Cache() : LinkNode<T> | undefined {
    return this.cache;
  }

  public setCache(key: string, value: T) {
    const newNode = new LinkNode<T>(key, value);
    if (this.length === 0) {
      this.cache = newNode;
      this.length++;
    } else if (this.length < this.capacity) {
      newNode.Next = this.cache;
      this.cache = newNode;
      this.length++;
    } else if (this.length === this.capacity) {
      newNode.Next = this.cache;
      this.cache = newNode;
      this.length++;
      this.dropEnd();
    }
  }

  public findByKey(key: string): LinkNode<T> | undefined {
    let currentNode = this.cache;
    
    while (currentNode) {
      if (currentNode.Key === key) {
        this.promot(currentNode);
        break;
      } else {
        if (currentNode.Next) {
          currentNode = currentNode.Next;
        } else {
          currentNode = undefined;
          break;
        }
      }
    }
    return currentNode;
  }

  private promot(node: LinkNode<T>) {
    const prevNode = this.findPrevNode(node);
    if (!prevNode) { return; }
    
    prevNode.Next = node.Next
    node.Next = this.cache;
    this.cache = node;
  }

  private findPrevNode(node: LinkNode<T>): LinkNode<T> | undefined {
    let currentNode = this.cache;
    let prevNode = this.cache;
    while(currentNode && currentNode.Key !== node.Key) {
      prevNode = currentNode;
      currentNode = currentNode.Next;
    }
    return prevNode;
  }

  public findEndNode() : LinkNode<T> | undefined {
    return this.findByIndex(this.length - 1);
  }

  private findByIndex(index: number) : LinkNode<T> | undefined {
    let target = this.cache;
    let newIndex: number = index >= this.length ? this.length -1 : index;
    let currentNode = this.cache;
    while (newIndex >= 0) {
      target = currentNode;
      if (currentNode?.Next) {
        currentNode = currentNode.Next;
      }
      newIndex--;
    }
    return target;
  }

  private dropEnd() {
    if (this.length >= 2) {
      const lastSecond = this.findByIndex(this.length - 2);
      if (lastSecond) {
        lastSecond.Next = undefined;
        this.length--;
      }
    } else if (this.length === 1) {
      this.cache = undefined;
    }
  }
}

export default LRUCache;
