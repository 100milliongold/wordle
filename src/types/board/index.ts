/**
 * 상태
 * absent : 미일치
 * present : 문자는 어디간에 존재함
 * correct : 위치와 문자가 일치함 (정답)
 * null : 미입력
 */
export type STATE = 'present' | 'correct' | 'absent' | null

export type CAHR = 'A'