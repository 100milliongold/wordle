import React, { PropsWithChildren } from 'react';
import { Button } from './styles';
// interface IProps {}

export default function ActionButton({ children }: PropsWithChildren) {
  return <Button>{children}</Button>;
}
