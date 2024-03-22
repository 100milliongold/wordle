import { ROW, BOARD, CHECK_BOARD } from 'types';

/**
 * challengeGrid : 보드
 * solvedGrid : 정답 줄
 * workingGrid : 현재 입력한 줄
 * X : 현재 입력한 X 좌표
 * Y : 현재 입력한 Y 좌표
 */

export interface IReducer {
  /**
   * challengeGrid : 입력된 보드
   */
  challengeGrid: BOARD;

  /**
   * solvedGrid : 정답 줄
   */
  solvedRow?: ROW;

  /**
   * workingGrid : 현재 입력한 줄
   */
  workingGrid: ROW;

  /**
   * 정답 상태
   */
  checkGrid: CHECK_BOARD;

  /**
   * 가로
   */
  X: number;

  /**
   * 세로
   */
  Y: number;

  /**
   * 시작 시간
   */
  startTime: number;

  /**
   * 종료 시간
   */
  endTime: number;

  /**
   * 입력 횟수
   */
  totalWordle: number;

  /**
   * 승리 횟수
   */
  winCount: [number, number, number, number, number, number];

  /**
   * 승리여부
   */
  isWinner: boolean;
}
