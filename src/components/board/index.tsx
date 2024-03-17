import React from 'react';
import { Layout, Content } from './styles';
import Row from './row';
import { BOARD } from 'types';

interface IProps {
  board: BOARD;
}

export default function Board({ board }: IProps) {
  return (
    <Layout data-cy='board-Layout'>
      <Content data-cy='board-Content'>
        {React.Children.toArray(
          board.map((row) => <Row row={row} data-cy='board-Row' />),
        )}
      </Content>
    </Layout>
  );
}
