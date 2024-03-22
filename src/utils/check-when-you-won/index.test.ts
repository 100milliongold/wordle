import checkWhenYouWon from './index';
import { BOARD } from 'types';

const input1: BOARD = [
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];
const input2: BOARD = [
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];
const input3: BOARD = [
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
  ['W', 'O', 'R', 'L', 'D'],
];

describe('승리한 부분 위치 확인 모듈 테스트', () => {
  it('3이 나올것', () => {
    const answer = 3;
    const result = checkWhenYouWon(input1);

    expect(result).toBe(answer);
  });
  it('1이 나올것', () => {
    const answer = 1;
    const result = checkWhenYouWon(input2);

    expect(result).toBe(answer);
  });
  it('5가 나올것', () => {
    const answer = 5;
    const result = checkWhenYouWon(input3);

    expect(result).toBe(answer);
  });
});

export {};
