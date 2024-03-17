import React from 'react';
import { STATE } from 'types';
import { Layout } from './styles';

interface IProps {
  state?: STATE;
  style?: React.CSSProperties;
  oneAndAHalf?: boolean;
  onClick?: (arg: unknown) => void;
}

export default function Key({
  children,
  state = null,
  style,
  oneAndAHalf,
  onClick,
}: React.PropsWithChildren<IProps>) {
  return (
    <Layout
      onClick={onClick}
      oneAndAHalf={oneAndAHalf}
      style={style}
      state={state}
      data-cy='key-Layout'
    >
      {children}
    </Layout>
  );
}
