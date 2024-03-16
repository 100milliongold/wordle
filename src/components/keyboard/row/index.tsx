import React from 'react';
import { Layout } from './styles';

export default function Row({ children }: React.PropsWithChildren) {
  return <Layout data-cy='row-layout'>{children}</Layout>;
}
