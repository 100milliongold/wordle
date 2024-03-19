import checkRow from './index';
import { ROW, CHECK_ROW } from 'types';

const input1: ROW = ['A', 'A', 'W', 'L', 'D'];
const input2: ROW = ['W', 'O', 'R', 'L', 'D'];
const answer: ROW = ['W', 'O', 'R', 'L', 'D'];

describe('check row test', () => {
  it('test', () => {
    const test1: CHECK_ROW = [
      'absent',
      'absent',
      'present',
      'correct',
      'correct',
    ];
    const result1: CHECK_ROW = checkRow(input1, answer);
    console.log({ test1, result1 });
    expect(result1).toEqual(test1);
  });
  it('test2', () => {
    const test2: CHECK_ROW = [
      'correct',
      'correct',
      'correct',
      'correct',
      'correct',
    ];
    const result2: CHECK_ROW = checkRow(input2, answer);
    console.log({ test2, result2 });
    expect(result2).toEqual(test2);
  });
});
