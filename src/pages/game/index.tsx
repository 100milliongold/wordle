import React from 'react';
import { Layout, Main } from './styles';
import { Header, Board, Keyboard } from 'components';
import { createGrid, RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { stringToRow, decodeHASH } from 'utils';

export default function Game() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    reducer: { challengeGrid, chekGrid },
  } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    if (id !== undefined) {
      dispatch(createGrid(stringToRow(decodeHASH(id))));
    } else {
      navigate('/');
    }
  }, []);

  return (
    <Layout data-cy='game-Layout'>
      <Header data-cy='game-Header' />
      <Main>
        <Board
          checkBoard={chekGrid}
          board={challengeGrid}
          data-cy='game-Board'
        />
        <Keyboard data-cy='game-Keyboard' />
      </Main>
    </Layout>
  );
}
