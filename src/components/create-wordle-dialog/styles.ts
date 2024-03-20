import tw, { styled } from 'twin.macro';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
  &.ReactModal__Content {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    overflow: auto;
    margin-right: -50%;
    outline: none;
    /* padding: 2px; */
    transform: translate(-50%, -50%);
    z-index: 10;
    ${tw`
      w-10/12
      sm:w-96
      p-0
      shadow-2xl
      transition-all
      rounded-lg 
    `}
  }
`;

export const Button = styled.button`
  ${tw`
  md:pl-0
  md:pt-1
  pr-2
  fill-white
  `}
`;

export const Layout = styled.div`
  ${tw`
  relative 
  transform 
  overflow-hidden 
  bg-white 
  `}
`;

export const Header = styled.div`
  ${tw`
    flex justify-between items-center bg-gray-500 text-white text-xl rounded-t-md px-2 py-2
  `}
`;

export const Title = styled.h1`
  ${tw``}
`;

export const Word = styled.div`
  ${tw`
    mb-2
  `}
`;

export const Message = styled.div`
  ${tw`
  text-center
  text-red-500
  h-4
  leading-3	
  text-sm
  font-bold
  `}
`;

export const Body = styled.div`
  ${tw`
    grid
    gap-board
    w-full
    h-fit
    p-board
    `}
`;

export const Footer = styled.div`
  ${tw`
    px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4
  `}
`;

export const ActionButton = styled.button`
  ${tw`bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition`}
`;
