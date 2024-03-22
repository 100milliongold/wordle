import { IReducer } from './interfaces';
import {
  createCheckFullGrid,
  createFullGrid,
  createRow,
  checkRow,
  checkWin,
  checkWhenYouWon,
} from 'utils';
import * as types from './types';
import { BoardAction } from './actions';
import { CHAR, ROW } from 'types';

const initialState: IReducer = {
  challengeGrid: createFullGrid(),
  workingGrid: createRow(),
  checkGrid: createCheckFullGrid(),
  X: 0,
  Y: 0,
  startTime: 0,
  endTime: 0,
  winCount: [0, 0, 0, 0, 0, 0],
  totalWordle: 0,
  isWinner: false,
};

function reducer(state = initialState, action: BoardAction): IReducer {
  switch (action.type) {
    /**
     * 새 게임
     */
    case types.CREATE_GRID: {
      const solvedRow = action.payload as ROW;
      // console.log('create-grid' , solvedRow);

      /**
       * 시작 시간 지정
       */
      const startTime = new Date().getTime();
      const endTime = new Date().getTime();

      /**
       * 기본 게임 세팅
       */
      const challengeGrid = createFullGrid();
      const checkGrid = createCheckFullGrid();
      const workingGrid = createRow();

      /**
       * 승리 여부 초기화
       */
      const isWinner = false;

      const X = 0,
        Y = 0;
      return {
        ...state,
        solvedRow,
        challengeGrid,
        checkGrid,
        workingGrid,
        X,
        Y,
        startTime,
        endTime,
        isWinner,
      };
    }
    /**
     * 값 입력
     */
    case types.FILL_BLOCK: {
      let { Y } = state;
      const { X, challengeGrid, workingGrid } = state;

      /**
       * 수평 좌표가 6개 이상일경우 중단
       */
      if (Y === 5) {
        return {
          ...state,
        };
      }
      // console.log('char ->', action.payload);

      /**
       * 해당 좌표측에 키보드 값 입력
       */
      challengeGrid[X][Y] = action.payload as CHAR;
      /**
       * 단어 검사용 줄도 생성
       */
      workingGrid[Y] = action.payload;

      /**
       * 수평 좌표 수정
       */
      Y = Y + 1;
      return {
        ...state,
        challengeGrid,
        workingGrid,
        X,
        Y,
      };
    }
    /**
     * 값 제거
     */
    case types.REMOVE_BLOCK: {
      let { Y } = state;
      const { X, challengeGrid, workingGrid } = state;

      /**
       * 수평 좌표가 0 밑일경우 중단
       */
      if (Y === 0) {
        return {
          ...state,
        };
      }
      /**
       * 해당 좌표에 문자 추가
       */
      challengeGrid[X][Y - 1] = '';

      /**
       * 단어검사용 줄도 삭제
       */
      workingGrid[Y - 1] = '';

      /**
       * 수평좌표 값 감소
       */
      Y = Y - 1;
      return {
        ...state,
        challengeGrid,
        workingGrid,
        X,
        Y,
      };
    }

    /**
     * 라인 확인
     */
    case types.CHECK_BLOCK: {
      let { Y, X, totalWordle, endTime, isWinner } = state;
      const { challengeGrid, solvedRow, checkGrid, winCount } = state;
      if ((Y > 0 && Y <= 4) || X > 5) {
        return {
          ...state,
        };
      }

      /**
       * 검사할 라인 추출
       */
      const input = challengeGrid[X];

      /**
       * 문자가 정답에 있는지 확인
       */
      const check = checkRow(input, solvedRow);

      /**
       * 입력한 횟수 증가
       */
      totalWordle = totalWordle + 1;

      // console.log('input =>' , input);
      // console.log('answe =>' , solvedRow);
      // console.log('check =>' , check);

      /**
       * 승리 했을때 처리
       */
      if (checkWin(check)) {
        const index = checkWhenYouWon(challengeGrid);
        winCount[index] = winCount[index] + 1; // 승리 횟수 증가
        endTime = new Date().getTime(); // 종료 시간 기록
        isWinner = true;
      }

      /**
       * 검사결과를 저장
       */
      checkGrid[X] = check;

      Y = 0;
      X = X + 1;

      return {
        ...state,
        challengeGrid,
        X,
        Y,
        checkGrid,
        totalWordle,
        endTime,
        isWinner,
        winCount,
      };
    }

    default:
      return state;
  }
}

export default reducer;
