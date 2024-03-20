import checkKeyboard from './index';
import { CHAR, CHECK_BOARD, STATE, BOARD } from 'types';

const text: BOARD = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];
const status: CHECK_BOARD = [
  ['absent', 'correct', 'present', 'absent', 'absent'],
  ['absent', 'absent', 'absent', 'absent', 'absent'],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];

describe('키보드 테스트', () => {
  it('미입력 테스트', () => {
    const input: CHAR = 'Z';
    const answer: STATE | null = null;
    const result = checkKeyboard(input, text, status);
    console.log('정답 => ', answer);
    console.log('결과 => ', result);
    expect(result).toEqual(answer);
  });

  it('완전 일치 (문자위치와 내용이 같음) 테스트', () => {
    const input: CHAR = 'B';
    const answer: STATE | null = 'correct';
    const result = checkKeyboard(input, text, status);
    console.log('정답 => ', answer);
    console.log('결과 => ', result);
    expect(result).toEqual(answer);
  });

  it('일치 (문자위치 는 틀리지만 내용이 같음) 테스트', () => {
    const input: CHAR = 'C';
    const answer: STATE | null = 'present';
    const result = checkKeyboard(input, text, status);
    console.log('정답 => ', answer);
    console.log('결과 => ', result);
    expect(result).toEqual(answer);
  });

  it('불일치 (문자위치 와 내용이 다름) 테스트', () => {
    const input: CHAR = 'A';
    const answer: STATE | null = 'absent';
    const result = checkKeyboard(input, text, status);
    console.log('정답 => ', answer);
    console.log('결과 => ', result);
    expect(result).toEqual(answer);
  });
});
