import tw, { styled } from "twin.macro";

export const Layout = styled.div`
    ${tw`
    flex
    flex-col
    justify-center
    items-center
    w-full
    `}
    flex-grow: 1;
`

export const Content = styled.div`
    ${tw`
    grid
    gap-board
    w-board
    h-board
    p-board
    box-border
    grid-rows-board
    `}
`