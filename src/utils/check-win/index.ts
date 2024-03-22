import { CHECK_ROW, STATE } from "types";


const isMatch = (state: STATE) => state === 'correct';


/**
 * 일치 하는가?
 * @param row 
 * @returns 
 */
export default function checkWin (row: CHECK_ROW) : boolean {
    return row.every(isMatch)
}