import React from 'react';
import { Layout, Main } from './styles';
import { Header, Board, Keyboard } from 'components';

export default function Game() {
  return (
    <Layout data-cy='game-Layout'>
      <Header data-cy='game-Header' />
      <Main>
        <Board data-cy='game-Board' />
        <Keyboard data-cy='game-Keyboard' />
      </Main>
    </Layout>
  );
}
