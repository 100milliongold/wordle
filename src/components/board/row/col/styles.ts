import tw, { styled } from "twin.macro";
import { STATE } from 'types'


export const Layout = styled.div<{ state: STATE }>`
    &::before {
        content: "";
        display: inline-block;
        padding-bottom: 100%;
    }
    ${tw`
    inline-flex
    justify-center
    items-center
    w-full
    text-3xl
    font-bold
    align-middle
    text-board
    font-LibreFranklin
    `}
    ${
    ({ state }) => 
        state === 'absent' ? tw`bg-board-absent` 
        : state === 'correct' ? tw`bg-board-correct` 
        : state === 'present' ? tw`bg-board-present`
        : tw`bg-board`
    }
`