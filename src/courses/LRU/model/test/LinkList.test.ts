import LinkList from '../LinkList';

describe('test linklist', () => {
  test('test find middle element when length is even', () => {
    const value = '123421';
    const list = new LinkList(value.split(''));
    const middleNode = list.findMiddleNode();
    expect(middleNode.Value).toBe('3');
  });

  test('test find middle element when length is odd', () => {
    const value = '12321';
    const list = new LinkList(value.split(''));
    const middleNode = list.findMiddleNode();
    expect(middleNode.Value).toBe('3');
  });

  test('test find previous node when current node is start', () => {
    const value = '123';
    const list = new LinkList(value.split(''));
    const startNode = list.List;
    const prevNode = list.findPrevNode(startNode);

    expect(prevNode).toBeUndefined();
  });

  test('test find previous node when current node is end', () => {
    const value = '123';
    const list = new LinkList(value.split(''));
    const lastNode = list.findLastNode();
    const prevNode = list.findPrevNode(lastNode);

    expect(prevNode?.Value).toBe('2');
  });
});
