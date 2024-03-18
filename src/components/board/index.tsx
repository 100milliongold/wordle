import React from 'react';
import { Layout, Content } from './styles';
import Row from './row';
import { BOARD, CHECK_BOARD } from 'types';

interface IProps {
  board: BOARD;
  checkBoard: CHECK_BOARD;
}

export default function Board({ board, checkBoard }: IProps) {
  // console.log({board , checkBoard});
  
  return (
    <Layout data-cy='board-Layout'>
      <Content data-cy='board-Content'>
        {React.Children.toArray(
          board.map((row, index) => (
            <Row checkRow={checkBoard[index]} row={row} data-cy='board-Row' />
          )),
        )}
      </Content>
    </Layout>
  );
}
