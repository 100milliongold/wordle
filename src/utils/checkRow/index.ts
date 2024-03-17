import { CHECK_ROW, ROW, STATE } from 'types';

const checkRow = (input: ROW, answer: ROW): CHECK_ROW => {
  return input.map<STATE>((item, index) =>
    item === answer[index] ? 'correct' : 'correct',
  ) as CHECK_ROW;
};

export default checkRow;
