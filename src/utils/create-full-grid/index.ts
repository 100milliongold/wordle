import { BOARD, CHECK_BOARD, ROW } from 'types';

/**
 * 빈 게임 판 생성
 * @returns
 */
export const createFullGrid = (): BOARD => {
  const newData: BOARD = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
  return newData;
};

/**
 * 한 라인 생성
 */
export const createRow = (): ROW => {
  const newData: ROW = ['', '', '', '', ''];
  return newData;
};

export const createCheckFullGrid = (): CHECK_BOARD => {
  const newData: CHECK_BOARD = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];

  return newData;
};
