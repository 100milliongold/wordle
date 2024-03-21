import { IReducer } from './interfaces';
import {
  createCheckFullGrid,
  createFullGrid,
  createRow,
  checkRow,
} from 'utils';
import * as types from './types';
import { BoardAction } from './actions';
import { CHAR, ROW } from 'types';

const initialState: IReducer = {
  challengeGrid: createFullGrid(),
  workingGrid: createRow(),
  chekGrid: createCheckFullGrid(),
  X: 0,
  Y: 0,
};

function reducer(state = initialState, action: BoardAction): IReducer {
  switch (action.type) {
    /**
     * 새 게임
     */
    case types.CREATE_GRID: {
      const solvedRow = action.payload as ROW;
      // console.log('create-grid' , solvedRow);

      const challengeGrid = createFullGrid();
      const chekGrid = createCheckFullGrid();
      const workingGrid = createRow();
      const X = 0,
        Y = 0;
      return {
        ...state,
        solvedRow,
        challengeGrid,
        chekGrid,
        workingGrid,
        X,
        Y,
      };
    }
    /**
     * 값 입력
     */
    case types.FILL_BLOCK: {
      let { Y } = state;
      const { X, challengeGrid, workingGrid } = state;
      if (Y === 5) {
        return {
          ...state,
        };
      }

      challengeGrid[X][Y] = action.payload as CHAR;
      workingGrid[Y] = action.payload;

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
      if (Y === 0) {
        return {
          ...state,
        };
      }
      challengeGrid[X][Y - 1] = '';
      workingGrid[Y - 1] = '';
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
      let { Y, X } = state;
      const { challengeGrid, solvedRow, chekGrid } = state;
      if ((Y > 0 && Y <= 4) || X > 5) {
        return {
          ...state,
        };
      }

      const input = challengeGrid[X];
      const check = checkRow(input, solvedRow);

      // console.log('input =>' , input);
      // console.log('answe =>' , solvedRow);
      // console.log('check =>' , check);

      chekGrid[X] = check;

      Y = 0;
      X = X + 1;

      return {
        ...state,
        challengeGrid,
        X,
        Y,
        chekGrid,
      };
    }

    default:
      return state;
  }
}

export default reducer;
