import checkWin from './index';
import checkRow from '../check-row';
import { ROW } from 'types';


const input1: ROW = ['A', 'A', 'W', 'L', 'D'];
const input2: ROW = ['W', 'O', 'R', 'L', 'D'];
const answer: ROW = ['W', 'O', 'R', 'L', 'D'];


describe('승리검사 모듈 테스트', () => {
  it('단어 미일치시 false 출력', () => {
    const state = checkRow(input1 , answer);
    const result = checkWin(state)

    console.log('입력 =>' , input1);
    console.log('답안 =>' , answer);
    console.log('검사 결과 =>' , result);

    expect(result).toBe(false);
  });

  it('단어 일치시 true 출력', () => {
    const state = checkRow(input2 , answer);
    const result = checkWin(state)

    console.log('입력 =>' , input2);
    console.log('답안 =>' , answer);
    console.log('검사 결과 =>' , result);

    expect(result).toBe(true);
  });
});

export {};
