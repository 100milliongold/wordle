import { BOARD, ROW } from "types";


export const createFullGrid = () => {
    const newData : BOARD = [
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']
    ]
    return newData;
}
export const createRow = () => {
    const newData : ROW =
    ['','','','','']
    return newData;
}