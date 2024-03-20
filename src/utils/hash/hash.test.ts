import { encodeHASH, decodeHASH } from './index';

const before = 'wordle';
const after = encodeHASH('wordle');

describe('해시 알고리즘 테스트', () => {
  it('encoding test', () => {
    console.log({ before: before, after: after });
    expect(encodeHASH(before)).toBe(after);
  });

  it('decoding test', () => {
    console.log({ before: after, after: decodeHASH(after) });
    expect(decodeHASH(after)).toBe(before);
  });
});

export {};
