import React from 'react';
import Col from './col';
import { Layout } from './styles';

import { ROW } from 'types';

interface IProps {
  row: ROW;
}

export default function Row({ row }: IProps) {
  return (
    <Layout data-cy='row-Layout'>
      {React.Children.toArray(row.map((char) => <Col>{char}</Col>))}
    </Layout>
  );
}
