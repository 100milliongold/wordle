import tw, { styled } from 'twin.macro';

export const Button = styled.button`
  ${tw`
  md:pl-0
  md:pt-1
  pr-2
  fill-white
  `}
`;

export const Layout = styled.div`
  ${tw`relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full `}
`;

export const Header = styled.div`
  ${tw`
    flex justify-end items-center bg-gray-500 text-white text-xl rounded-t-md px-2 py-2
  `}
`;

export const Body = styled.div`
  ${tw`
    grid
    gap-board
    w-board
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
