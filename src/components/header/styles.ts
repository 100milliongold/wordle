import tw, { styled } from "twin.macro";

export const Layout = styled.header`
    ${tw`
    flex 
    flex-row 
    items-center 
    justify-between 
    flex-nowrap 
    p-0 
    h-16 
    border-b
    border-gray-500
    `}
`;


export const AppHeader = styled.div`
    ${tw`pl-3`}
`

export const Title = styled.h1`
    ${tw`text-center text-lg font-bold`}
`

export const Menu = styled.menu`
    ${tw`
    flex
    flex-row
    items-end
    `}
`