import { BOARD } from 'types';

/**
 * 몇번째에서 승리했는가?
 * @param board
 * @returns
 */
const checkWhenYouWon = (board: BOARD) =>
  board
    .map((o) => o.filter((i) => i !== '').length === 5)
    .reduce((memo, item) => (item ? memo + 1 : memo), -1);

export default checkWhenYouWon;
