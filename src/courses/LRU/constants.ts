interface ITabType {
  LRUCache: string,
  Palindrome: string,
}

// eslint-disable-next-line import/prefer-default-export
export const TabType: ITabType = Object.freeze({
  LRUCache: 'LRU缓存',
  Palindrome: '回文字符串',
});
