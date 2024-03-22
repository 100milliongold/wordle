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
      w-4/5
      p-0
      shadow-2xl
      transition-all
      rounded-lg 
    `}
  }
`;

export const Layout = styled.div`
  ${tw`
  relative 
  transform 
  bg-gray-900 
  text-white
  `}
`;

export const Header = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    flex 
    justify-end 
    items-center
    text-black 
    text-xl 
    rounded-t-md 
    px-2 
    py-2
  `}
`;

export const Button = styled.button`
  ${tw`
  md:pl-0
  md:pt-1
  pr-2
  fill-white
  `}
`;

export const Body = styled.div`
  ${tw`
    grid
    gap-board
    w-full
    h-fit
    p-8
    `}
`;

export const Title = styled.h1`
  ${tw`
   text-lg
  `}
`;

export const StatisticsContainer = styled.div`
  ${tw`
  flex
  mt-3
  flex-row
  justify-between
  `}
`;

export const Statistics = styled.div`
  ${tw`
  flex
  flex-col
  gap-3
  `}
`;

export const Value = styled.h2`
  ${tw`
  text-4xl
  font-bold
  `}
`;

export const Description = styled.p`
  ${tw`
    text-sm
  `}
`;

export const GraphContainer = styled.div`
  ${tw`mt-2`}
`;
