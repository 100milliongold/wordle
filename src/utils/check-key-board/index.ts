import { CHAR, CHECK_BOARD, STATE, BOARD } from 'types';

/**
 * 키보드의 입력 결과문 출력 메서드
 * @param char 키보드 문자
 * @param text 현재 입력된 문자열
 * @param state 현재 정답 상태 값
 * @returns STATE | null
 */
export default function checkKeyboard(
  char: CHAR,
  text: BOARD,
  state: CHECK_BOARD,
): STATE | null {
  // 리스트로 치환
  const inputText = text.flatMap((row) => row);
  const stateList = state.flatMap((row) => row);
  const index = inputText.indexOf(char);

  const filterText = (state: STATE) => filterList(inputText, stateList, state);

  switch (true) {
    case inputText.length !== stateList.length:
      throw Error('입력된 문자열과 결과는 동일해야만 합니다.');
    case index === -1:
      return null;

    // 문자는 존재하며 위치가 일치하는 항목이 있을경우
    case index !== -1 && filterText('correct').indexOf(char) !== -1:
      return 'correct';
    // 문자는 존재하며 위치는 다른 항목이 있을경우
    case index !== -1 && filterText('present').indexOf(char) !== -1:
      return 'present';
    // 문자는 존재하며 위치도 다르고 오답인 경우
    case index !== -1 && filterText('absent').indexOf(char) !== -1:
      return 'absent';

    default:
      return null;
  }
}

const filterList = (text: CHAR[], status: STATE[], filterChar: STATE) =>
  text.filter((_, index) => status[index] === filterChar);
