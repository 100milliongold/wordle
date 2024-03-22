import { CHAR, CHECK_ROW, ROW, STATE } from 'types';
import { groupBy, isEqual } from 'lodash-es';

const checkRow = (input: ROW, answer?: ROW): CHECK_ROW => {
  if (answer !== undefined) {
    return input.map<STATE>((item, index) =>
      item === answer[index] && sameCharacterTest(input, answer, item) === false
        ? 'correct'
        : isInArray(item, answer) &&
            answerIndex(item, answer) !== index &&
            sameCharacterTest(input, answer, item) === false
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

/**
 * 입력한 문자열에서 같은 값이 있을때 정답보다 큰가?
 * @param input
 * @param answer
 * @returns false : 정답보다 같은 문자가 적다 , true : 입력한 줄에서 같은 문자를 입력했다.
 */
const sameCharacterTest = (inputList: CHAR[], answer: CHAR[], input: CHAR) => {
  const answerGroup = groupBy(answer);
  const inputGroup = groupBy(inputList);
  const inputEntries = Object.entries(inputGroup);

  const entriesFilter = inputEntries
    .filter(([, value]) => value.length > 1)
    .filter(([key, value]) => (answerGroup[key] || []).length < value.length);

  const result = Object.fromEntries(entriesFilter);
  return !isEqual(inputList, answer) && (result[input] || []).length > 0;
};

export default checkRow;
