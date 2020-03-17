import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { Input } from 'antd';
import LinkList from '../model/LinkList';
import LinkNode from '../model/LinkNode';

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
  let palindromeNode: LinkNode<string> | undefined;
  if (even) {
    palindromeNode = middleNode.Next;
  } else {
    palindromeNode = middleNode;
  }

  let targetNode: LinkNode<string> | undefined = middleNode;
  let isPalindrome = true;
  while (targetNode && palindromeNode) {
    if (targetNode.Value !== palindromeNode.Value) {
      isPalindrome = false;
      break;
    } else {
      targetNode = values.findPrevNode(targetNode);
      palindromeNode = palindromeNode.Next;
    }
  }
  return isPalindrome;
}

const Palindrom: FunctionComponent = () => {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<false | undefined>();

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    
    setValue(() => inputValue);
  };

  const getResult = (value: string) => {
    const list = initLinkList(value);
    return isPalindrome(list);
  }
  return (
    <div>
      <Input value={value} onChange={handleValueChange} />
      <div className="result" />
    </div>
  );
};

export default Palindrom;
