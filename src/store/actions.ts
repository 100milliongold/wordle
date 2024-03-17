import { CHAR , ROW } from 'types'

import * as types from './types'

/**
 * 새 게임 시작
 * @returns 
 */
export const createGrid = (coords: ROW) => ({ 
    payload: coords, 
    type: types.CREATE_GRID 
})

/**
 * 값 입력
 * @param value 
 * @param coords 
 * @returns 
 */
export const fillBlock = (value: CHAR) => ({
    payload: value,
    type: types.FILL_BLOCK,
})

/**
 * 값 삭제
 * @returns 
 */
export const removeBlock = () => ({
    type: types.REMOVE_BLOCK,
})

/**
 * 검사
 * @returns 
 */
export const checkBlock = () => ({
    type: types.CHECK_BLOCK,
})





export type BoardAction =
  | ReturnType<typeof createGrid>
  | ReturnType<typeof fillBlock>
  | ReturnType<typeof removeBlock>
  | ReturnType<typeof checkBlock>;