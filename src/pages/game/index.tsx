import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Main, Message, GamekeyBoard } from './styles';
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
import { stringToRow, decodeHASH, checkKeyboard } from 'utils';
import { CHAR } from 'types';
import { getWord } from 'services';

export default function Game() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  /**
   * 문자 에러 검출
   */
  const [isError, setIsError] = useState(false);

  const {
    reducer: { challengeGrid, chekGrid, workingGrid },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    setIsError(false);
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
    setIsError(false);
    dispatch(removeBlock());
  }, [dispatch]);

  const check = useCallback(async () => {
    const word = workingGrid.filter((o) => o !== '').join('');
    if (word.length < 5) return;

    try {
      await getWord(word);
      setIsError(false);
      dispatch(checkBlock());
    } catch (error) {
      setIsError(true);
    }
  }, [dispatch, workingGrid]);

  const status = useCallback(
    (char: CHAR) => checkKeyboard(char, challengeGrid, chekGrid),
    [challengeGrid, chekGrid],
  );

  return (
    <Layout data-cy='game-Layout'>
      <Header data-cy='game-Header' />
      <Main>
        <Board
          checkBoard={chekGrid}
          board={challengeGrid}
          data-cy='game-Board'
        />
        <Message>{isError && <>단어가 존재하지 않습니다.</>}</Message>
        <GamekeyBoard>
          <Keyboard
            status={status}
            enter={check}
            remove={remove}
            click={click}
            event={event}
            data-cy='game-Keyboard'
          />
        </GamekeyBoard>
      </Main>
    </Layout>
  );
}
