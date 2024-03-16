import React from 'react';
import { STATE } from 'types';
import { Layout } from './styles';

interface IProps {
  state?: STATE;
  style?: React.CSSProperties;
  oneAndAHalf?: boolean;
}

export default function Key({
  children,
  state = null,
  style,
  oneAndAHalf,
}: React.PropsWithChildren<IProps>) {
  return (
    <Layout
      oneAndAHalf={oneAndAHalf}
      style={style}
      state={state}
      data-cy='key-Layout'
    >
      {children}
    </Layout>
  );
}
