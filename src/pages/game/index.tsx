import React, { useCallback, useEffect } from 'react';
import { Layout, Main } from './styles';
import { Header, Board, Keyboard } from 'components';
import {
  createGrid,
  RootState,
  fillBlock,
  removeBlock,
  checkBlock,
} from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { stringToRow, decodeHASH } from 'utils';
import { CHAR } from 'types';

export default function Game() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    reducer: { challengeGrid, chekGrid },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(createGrid(stringToRow(decodeHASH(id))));
    } else {
      navigate('/');
    }
  }, []);

  const event = (char: CHAR) => dispatch(fillBlock(char));
  const click = useCallback(
    (str: CHAR) => {
      dispatch(fillBlock(str));
    },
    [dispatch],
  );
  const remove = useCallback(() => {
    dispatch(removeBlock());
  }, [dispatch]);
  const check = useCallback(() => {
    dispatch(checkBlock());
  }, [dispatch]);

  return (
    <Layout data-cy='game-Layout'>
      <Header data-cy='game-Header' />
      <Main>
        <Board
          checkBoard={chekGrid}
          board={challengeGrid}
          data-cy='game-Board'
        />
        <Keyboard
          enter={check}
          remove={remove}
          click={click}
          event={event}
          data-cy='game-Keyboard'
        />
      </Main>
    </Layout>
  );
}
