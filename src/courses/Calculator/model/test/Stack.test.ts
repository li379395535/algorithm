import Stack from '../Stack';

describe('test Stack', () => {
  let stack:Stack<number>;
  const length: number = 10;
  beforeEach(() => { stack = new Stack<number>(length); });
  test('push value when stack is empty', () => {
    const success = stack.Push(1);

    expect(success).toBeTruthy();
    expect(stack.Length).toBe(1);
  });

  test('push value when stack is not full', () => {
    stack.Push(1);
    stack.Push(2);

    expect(stack.Length).toBe(2);
  });

  test('push value when stack is full', () => {
    for (let index = 0; index < length; index += 1) {
      stack.Push(index);
    }

    expect(stack.Push(1)).toBeFalsy();
  });

  test('pop when stack is empty', () => {
    expect(() => stack.Pop()).toThrow(new Error());
  });

  test('pop when stack is full', () => {
    for (let index = 0; index < length; index += 1) {
      stack.Push(index);
    }
    const val = stack.Pop();

    expect(val).toBe(9);
    expect(stack.Length).toBe(length - 1);
  });

  test('pop when stack length is one', () => {
    stack.Push(1);

    const val = stack.Pop();

    expect(val).toBe(1);
    expect(stack.Length).toBe(0);
  });

  test('peek when stack is empty', () => {
    expect(() => stack.Peek()).toThrowError();
  });

  test('peek when stack is one', () => {
    stack.Push(1);

    const val = stack.Peek();
    expect(val).toBe(1);
    expect(stack.Length).toBe(1);
  });

  test('peek when stack is more than one', () => {
    stack.Push(1);
    stack.Push(2);

    const val = stack.Peek();
    expect(val).toBe(2);
    expect(stack.Length).toBe(2);
  });
});
