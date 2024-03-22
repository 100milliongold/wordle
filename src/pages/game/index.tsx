import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Main, Message, GameKeyboard } from './styles';
import {
  Header,
  Board,
  Keyboard,
  HowToPlayDialog,
  WinningDialog,
} from 'components';
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

  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const onHowToPlayOpenClose = (arg: boolean) => setHowToPlayOpen(arg);

  const [winnerOpen, setWinner] = useState(false);
  const onWinnerOpenClose = (arg: boolean) => setWinner(arg);

  /**
   * 문자 에러 검출
   */
  const [isError, setIsError] = useState(false);

  const {
    reducer: {
      challengeGrid,
      checkGrid,
      workingGrid,
      isWinner,
      totalWordle,
      winCount,
      startTime,
      endTime,
    },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    setIsError(false);
    if (id !== undefined) {
      dispatch(createGrid(stringToRow(decodeHASH(id))));
    } else {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    setWinner(isWinner);
  }, [isWinner]);

  /**
   * 키보드 입력 이벤트,
   */
  const event = useCallback(
    (char: CHAR) => {
      /**
       * 이기면 중지
       */
      if (isWinner) return;
      dispatch(fillBlock(char));
    },
    [dispatch, isWinner],
  );

  /**
   * 마우스 키패드 클릭 이벤트
   */
  const click = useCallback(
    (str: CHAR) => {
      /**
       * 이기면 중지
       */
      if (isWinner) return;
      dispatch(fillBlock(str));
    },
    [dispatch, isWinner],
  );

  /**
   * 삭제 버튼 클릭 혹은 백스페이스 입력시 이벤트
   */
  const remove = useCallback(() => {
    setIsError(false);
    dispatch(removeBlock());
  }, [dispatch]);

  /**
   * 엔터 입력 혹은 엔터 버튼 클릭시 이벤트
   */
  const check = useCallback(async () => {
    const word = workingGrid.filter((o) => o !== '').join('');

    if (word.length < 5) return;
    if (isWinner) return;

    try {
      await getWord(word);
      setIsError(false);
      dispatch(checkBlock());
    } catch (error) {
      setIsError(true);
    }
  }, [dispatch, workingGrid, isWinner]);

  const status = useCallback(
    (char: CHAR) => checkKeyboard(char, challengeGrid, checkGrid),
    [challengeGrid, checkGrid],
  );

  return (
    <>
      <HowToPlayDialog open={howToPlayOpen} onClose={onHowToPlayOpenClose} />
      <WinningDialog
        open={winnerOpen}
        onClose={onWinnerOpenClose}
        totalWordle={totalWordle}
        winCount={winCount}
        startTime={startTime}
        endTime={endTime}
      />
      <Layout data-cy='game-Layout'>
        <Header
          data-cy='game-Header'
          onHowToPlayClick={() => onHowToPlayOpenClose(true)}
        />
        <Main>
          <Board
            checkBoard={checkGrid}
            board={challengeGrid}
            data-cy='game-Board'
          />
          <Message>{isError && <>단어가 존재하지 않습니다.</>}</Message>
          <GameKeyboard>
            <Keyboard
              status={status}
              enter={check}
              remove={remove}
              click={click}
              event={event}
              data-cy='game-Keyboard'
            />
          </GameKeyboard>
        </Main>
      </Layout>
    </>
  );
}
