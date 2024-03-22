import tw, { styled } from 'twin.macro';

export const GraphList = styled.div`
  ${tw`
    mb-5
    ml-5

    // border
    // border-red-500
  `}
`;

export const Graph = styled.div`
  ${tw`
    w-full
    flex
    items-center
    pb-1
    text-sm
    h-full

    // border
    // border-blue-500
  `}
`;

export const GraphGuess = styled.div`
  ${tw`
    font-bold
    text-xs
    tracking-widest	
    m-0
    p-0
    leading-3
    h-full

    
  `}
`;

export const GraphBarContainer = styled.div`
  ${tw`
  w-full
  h-full
  pl-1
  `}
`;

export const GraphStatus = styled.div`
  ${tw`
  h-full
  
  relative
  flex
  justify-center
  `}
`;

export const GraphBar = styled.div<{ width: number }>`
  ${tw`flex`}
  ${({ width }) => (width > 10 ? `width: ${width}%;` : `width: 15px;`)}
  ${({ width }) =>
    width > 0
      ? tw`bg-green-600 pr-2 justify-end`
      : tw`bg-board-absent justify-center`}
`;
