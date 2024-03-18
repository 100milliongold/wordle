import checkRow from './index';
import { ROW, CHECK_ROW } from "types";


const input : ROW = ['A','A','W','L','Z'];
const answer : ROW = ['W','O','R','L','D'];

describe('check row test', () => {
  it('test', () => {
    const test : CHECK_ROW = ['absent' , 'absent' ,'present' , 'correct' ,'absent']
    const result : CHECK_ROW = checkRow(input , answer)
    console.log({ test, result })
    expect(result).toEqual(test);
  });
});
