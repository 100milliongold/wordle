/**
 * 상태
 * absent : 미일치
 * present : 문자는 어디간에 존재함
 * correct : 위치와 문자가 일치함 (정답)
 * null : 미입력
 */
export type STATE = 'present' | 'correct' | 'absent' | null;

/**
 * 입력한 문자
 */
export type CHAR =
  | ''
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'M'
  | 'N'
  | 'L'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

/**
 * 한 행
 */
export type ROW = [CHAR, CHAR, CHAR, CHAR, CHAR];

/**
 * 입력한 사각형
 */
export type BOARD = [ROW, ROW, ROW, ROW, ROW, ROW];

/**
 * 한행 검사 결과
 */
export type CHECK_ROW = [STATE, STATE, STATE, STATE, STATE];

/**
 * 검사결과
 */
export type CHECK_BOARD = [
  CHECK_ROW,
  CHECK_ROW,
  CHECK_ROW,
  CHECK_ROW,
  CHECK_ROW,
  CHECK_ROW,
];
