/* eslint-disable no-debugger */
import LRUCache from '../LRUCache';
import { Cities, JobInfos } from './config';

// declare const describe: () => void;

let Cache: LRUCache<Object[]>;
const SetCache = (key: string) => {
  const value = JobInfos.filter((j) => j.city === key);
  Cache.setCache(key, value);
};

describe('test Cache set function', () => {
  beforeEach(() => {
    Cache = new LRUCache(10);
  });

  test('set one cache', () => {
    const firstCity = Cities[0];
    SetCache(firstCity);
    const cache = Cache.Cache;
    expect(cache?.Key).toBe(firstCity);
  });

  test('set tow caches', () => {
    for (let index = 0; index < 2; index += 1) {
      const city = Cities[index];
      SetCache(city);
    }

    const cache = Cache.Cache;
    expect(cache?.Key).toBe(Cities[1]);
    expect(cache?.Next?.Key).toBe(Cities[0]);
  });

  test('set one cache when Cache is full', () => {
    const length = 10;
    for (let index = 0; index < length; index += 1) {
      const city = Cities[index];
      SetCache(city);
    }

    SetCache(Cities[length]);

    const endNode = Cache.findEndNode();
    const secondCity = Cities[1];
    expect(endNode?.Key).toBe(secondCity);
  });
});

describe('test Cache find function', () => {
  test('find key', () => {
    const length = 3;
    for (let index = 0; index < length; index += 1) {
      const city = Cities[index];
      SetCache(city);
    }

    const secondCity = Cities[1];
    Cache.findByKey(secondCity);
    const cache = Cache.Cache;
    expect(cache?.Key).toBe(secondCity);
  });

  beforeEach(() => {
    Cache = new LRUCache<Object[]>();
  });
});
