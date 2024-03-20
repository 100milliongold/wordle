import { ROW, BOARD, CHECK_BOARD } from 'types';

/**
 * challengeGrid : 보드
 * solvedGrid : 정답 줄
 * workingGrid : 현재 입력한 줄
 * X : 현재 입력한 X 좌표
 * Y : 현재 입력한 Y 좌표
 */

export interface IReducer {
  challengeGrid: BOARD; // challengeGrid : 입력된 보드
  solvedRow?: ROW; // solvedGrid : 정답 줄
  workingGrid: ROW; // workingGrid : 현재 입력한 줄
  chekGrid: CHECK_BOARD; // 정답 상태
  X: number;
  Y: number;
}
