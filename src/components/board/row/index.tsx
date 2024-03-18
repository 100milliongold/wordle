import React from 'react';
import Col from './col';
import { Layout } from './styles';

import { CHECK_ROW, ROW } from 'types';

interface IProps {
  row: ROW;
  checkRow: CHECK_ROW;
}

export default function Row({ row, checkRow }: IProps) {
  return (
    <Layout data-cy='row-Layout'>
      {React.Children.toArray(
        row.map((char, index) => <Col state={checkRow[index]}>{char}</Col>),
      )}
    </Layout>
  );
}
