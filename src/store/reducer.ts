import { IReducer } from './interfaces'
import { createFullGrid, createRow } from 'utils'
import * as types from './types'
import {BoardAction} from './actions'
import { CHAR, ROW } from 'types'

const initialState: IReducer = {
    challengeGrid: createFullGrid(),
    workingGrid: createRow(),
    X: 0,
    Y: 0
}

function reducer(state = initialState, action: BoardAction): IReducer {
    switch (action.type) {
        case types.CREATE_GRID: {
            const solvedGrid = action.payload as ROW
            const challengeGrid = createFullGrid()
            const X = 0, Y = 0
            return {
                ...state,
                solvedGrid,
                challengeGrid,
                X,Y
            }
        }
        case types.FILL_BLOCK: {
            let { Y } = state
            const {X , challengeGrid} = state
            if(Y === 5){
                return {
                    ...state
                }
            }
            challengeGrid[X][Y] = action.payload as CHAR
            Y = Y + 1
            return {
                ...state,
                challengeGrid,
                X,Y
            }
        }

        case types.REMOVE_BLOCK: {
            let { Y } = state
            const {X , challengeGrid} = state
            if(Y === -1){
                return {
                    ...state
                }
            }
            challengeGrid[X][Y -1] = ''
            Y = Y - 1
            return {
                ...state,
                challengeGrid,
                X,Y
            }
        }

        case types.CHECK_BLOCK: {
            let { Y , X } = state
            const {challengeGrid} = state
            if((Y > 0 && Y <= 4) || (X > 4) ) {
                return {
                    ...state
                }
            }
            challengeGrid[X][Y]
            Y = 0;
            X = X + 1

            return {
                ...state,
                challengeGrid,
                X,Y
            }
        }
        

        default:
            return state
    }
}

export default reducer;

