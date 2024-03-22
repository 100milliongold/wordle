import tw, { styled } from 'twin.macro';

export const Layout = styled.div`
  ${tw`
    relative
    flex
    min-h-screen
    flex-col
    overflow-hidden
    bg-black
    w-full
    h-full
    text-white
    `}
`;

export const Main = styled.main`
  ${tw`
    flex
    flex-col
    my-0
    mx-auto
    w-full
    max-w-96
    flex-1
    `}
`;

export const Message = styled.p`
  ${tw`
    h-8
    w-full
    flex
    justify-center
    text-red-500
    font-bold
  `}
`;

export const GameKeyboard = styled.div`
  ${tw`
  `}
`;
