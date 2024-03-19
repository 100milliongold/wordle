import React, { PropsWithChildren } from 'react';
import { Button } from './styles';
interface IProps {
  onClick?: () => void;
}

export default function ActionButton({
  children,
  onClick,
}: PropsWithChildren<IProps>) {
  return <Button onClick={onClick}>{children}</Button>;
}
