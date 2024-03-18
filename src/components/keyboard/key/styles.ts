import tw, { styled } from 'twin.macro';
import { STATE } from 'types';

export const Layout = styled.button<{ state: STATE; oneAndAHalf?: boolean }>`
  ${tw`
    uppercase
    text-key
    font-bold
    border-0
    p-0
    m-key
    h-key
    rounded
    fill-white
    cursor-pointer
    flex
    flex-1
    justify-center
    items-center
    overflow-visible
    leading-normal
    font-LibreFranklin
    `}

  ${({ oneAndAHalf }) => `
        ${
          oneAndAHalf
            ? `
        flex: 1.5;
        font-size: 12px;
        `
            : ''
        }
    `}

    ${({ state }) =>
    state === 'absent'
      ? tw`bg-board-absent`
      : state === 'correct'
        ? tw`bg-board-correct`
        : state === 'present'
          ? tw`bg-board-present`
          : tw`bg-board`}
`;
