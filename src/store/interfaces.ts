import { ROW, BOARD } from "types";


/**
 * challengeGrid : 보드
 * solvedGrid : 정답 줄
 * workingGrid : 현재 입력한 줄
 * X : 현재 입력한 X 좌표
 * Y : 현재 입력한 Y 좌표
 */

export interface IReducer {
    challengeGrid: BOARD
    solvedGrid?: ROW
    workingGrid: ROW
    X: number,
    Y: number
}