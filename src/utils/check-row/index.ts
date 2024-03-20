import { CHAR, CHECK_ROW, ROW, STATE } from 'types';

const checkRow = (input: ROW, answer?: ROW): CHECK_ROW => {
  if (answer !== undefined) {
    return input.map<STATE>((item, index) =>
      item === answer[index]
        ? 'correct'
        : isInArray(item, answer) && answerIndex(item, answer) !== index
          ? 'present'
          : 'absent',
    ) as CHECK_ROW;
  } else {
    throw new Error('answer 가 undefined 일수 없습니다.');
  }
};

/**
 * 입력한 문자가 문자열에 속하는가?
 * @param input
 * @param answer
 * @returns
 */
const isInArray = (input: CHAR, answer: ROW) => answer.indexOf(input) !== -1;

const answerIndex = (input: CHAR, answer: ROW) => answer.indexOf(input);

export default checkRow;
