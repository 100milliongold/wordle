import tw, { styled } from "twin.macro";
import logoImg from 'assets/images/wordle-icon.svg'

export const Layout = styled.div`
    ${tw`relative flex min-h-screen flex-col justify-center overflow-hidden bg-mainBG pt-12 px-12 w-full h-full`}
`;

export const Container = styled.div`
    ${tw`relative px-6 pb-8 pt-10 flex flex-1 flex-col justify-between items-center lg:mx-auto lg:w-lvw lg:max-w-lg sm:mx-auto sm:max-w-lg sm:px-10 w-full h-full`}
`;

export const Content = styled.div`
    ${tw`mx-auto max-w-md flex flex-1 items-center flex-col w-full h-full`}
`;
export const LogoImg = styled.div`
    ${tw`h-10 w-12 mb-4`}
    background-image: url('${logoImg}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const LogoText = styled.h1`
    ${tw`text-lg leading-4 font-bold`}
`

export const ContentBody = styled.div`
    ${tw`flex flex-col justify-center items-center flex-1 mt-4 gap-5`}
`
export const ContentWelcomeTitle = styled.div`
    ${tw`text-3xl leading-10 font-bold`}
`
export const ContentBodyText = styled.h2`
    ${tw`text-sm leading-10 font-bold`}
`

export const ContentBodyActions = styled.div`
    ${tw`w-full flex flex-col md:flex-row justify-center items-center gap-2`}
`


