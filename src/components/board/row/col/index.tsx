import React from 'react';
import { Layout } from './styles';
import { STATE } from 'types';

interface IProps {
  state?: STATE;
}

export default function Col({
  state = null,
  children,
}: React.PropsWithChildren<IProps>) {
  return (
    <Layout state={state} data-cy='col-Layout'>
      {children}
    </Layout>
  );
}
