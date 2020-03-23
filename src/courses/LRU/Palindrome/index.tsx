import React, {
  FunctionComponent, useState, ChangeEvent, useEffect,
} from 'react';
import { Input } from 'antd';
import LinkList from '../model/LinkList';
import { ILinkNode } from '../model/LinkNode';

function initLinkList(value: string = '') : LinkList<string> {
  const chars = value.split('');
  return new LinkList(chars);
}

function isPalindrome(values: LinkList<string>): boolean {
  if (values.Length === 1) {
    return true;
  }
  const middleNode = values.findMiddleNode();
  const even = values.Length % 2 === 0;
  let palindromeNode: ILinkNode<string> | undefined;
  if (even) {
    palindromeNode = middleNode.Next;
  } else {
    palindromeNode = middleNode;
  }

  let targetNode: ILinkNode<string> | undefined = middleNode;
  let isPalindromeString = true;
  while (targetNode && palindromeNode) {
    if (targetNode.Value !== palindromeNode.Value) {
      isPalindromeString = false;
      break;
    } else {
      targetNode = values.findPrevNode(targetNode);
      palindromeNode = palindromeNode.Next;
    }
  }
  return isPalindromeString;
}

const Palindrom: FunctionComponent = () => {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<boolean | undefined>();

  const handleValueChange = (v: string) => {
    setValue(v);
  };

  useEffect(() => {
    if (value) {
      const list = initLinkList(value);
      const isPalindromeString = isPalindrome(list);
      setResult(isPalindromeString);
    }
  }, [value]);

  return (
    <div>
      <Input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleValueChange(e.target.value)}
      />
      <div className="result">
        {result !== undefined && result ? `'${value}' is Palindrome string` : `${value} is not Palindrom string.`}
      </div>
    </div>
  );
};

export default Palindrom;
