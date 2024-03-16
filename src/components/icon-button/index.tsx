import React from 'react';
import tw, { styled } from 'twin.macro';

export default function IconButton({ children }: React.PropsWithChildren) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  ${tw`
  md:pl-0
  md:pt-1
  pr-2
  fill-white
  `}
`;
