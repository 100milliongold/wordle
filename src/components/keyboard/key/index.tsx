import React from 'react';
import { Layout } from './styles';

export default function Key({ children }: React.PropsWithChildren) {
  return <Layout data-cy='key-Layout'>{children}</Layout>;
}
