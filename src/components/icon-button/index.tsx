import React from 'react';
import tw, { styled } from 'twin.macro';


interface IProps {
  onClick? : () => void
}

export default function IconButton({ children, onClick }: React.PropsWithChildren<IProps>) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  ${tw`
  md:pl-0
  md:pt-1
  pr-2
  fill-white
  `}
`;
