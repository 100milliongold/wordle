import tw, { styled } from 'twin.macro';
import ReactModal from 'react-modal';
import { STATE } from 'types';

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
      w-8/12
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
    text-2xl
  `}
`;
export const SubTitle1 = styled.h2`
  ${tw`
    text-xl
  `}
`;

export const TextList = styled.ul`
  ${tw`
    list-disc
    text-sm
    px-4
  `}
`;

export const SubTitle2 = styled.h3`
  ${tw`
     text-lg
     font-bold
  `}
`;

export const Example = styled.div`
  ${tw`
    mt-3
   `}
`;

export const Weary = styled.div`
  ${tw`
    mt-2
    mb-5
    `}
`;
export const WearyLetter = styled.div`
  ${tw`
    inline-block
    w-8
    h-8
    mr-1
    `}
`;

export const Tile = styled.div<{ state?: STATE }>`
  ${tw`
    w-full
    h-full
    inline-flex
    justify-center
    items-center
    leading-none
    font-bold
    text-xl
    align-middle
    box-border
    uppercase
    select-none
    border-2
    border-howTo
   `}

  ${({ state }) =>
    state === 'correct'
      ? tw`bg-board-correct text-white border-correct`
      : state === 'present'
        ? tw`bg-board-present text-white border-present`
        : state === 'absent'
          ? tw`bg-board-absent text-white border-absent`
          : state === null
            ? tw`bg-board text-white border-board`
            : tw`bg-white text-black`}

  &:before {
    content: '';
    display: inline-block;
    padding-bottom: 100%;
  }
`;

export const Comment = styled.p`
  ${tw`
     text-sm
     mt-2
   `}
`;
