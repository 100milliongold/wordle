import { ROW, CHAR } from "types";

export const stringToRow = (str: string) : ROW => {
    if(str.length < 5) {
        throw Error(`5 미만의 길이의 텍스트는 입력할수 없습니다 : ${str}`);
    }
    return str.toUpperCase().split("").splice(0, 4).map(o => o as CHAR) as ROW; 
}

export default stringToRow