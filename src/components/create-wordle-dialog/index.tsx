import React, { useState, useCallback, useEffect } from 'react';
import {
  ActionButton,
  Body,
  Button,
  Footer,
  Header,
  Layout,
  Title,
  Word,
  StyledModal,
  Message,
} from './styles';
import { ReactComponent as CloseIcon } from 'assets/images/close_FILL0_wght400_GRAD0_opsz24.svg';
import Modal from 'react-modal';
import Row from 'components/board/row';
import { Keyboard } from 'components';
import { useNavigate } from 'react-router-dom';
import { ROW, CHECK_ROW, CHAR } from 'types';
import { encodeHASH } from 'utils';
import { getWord } from 'services';
import { isAxiosError } from 'axios';

interface IProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

export default function CreateWordle({
  open,
  onClose,
}: React.PropsWithChildren<IProps>) {
  useEffect(() => {
    if (open) {
      setIndex(0);
      setRow(['', '', '', '', '']);
      setCheckRow(['absent', 'absent', 'absent', 'absent', 'absent']);
      setIsError(false);
      setMessage('');
    }
  }, [open]);

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const [row, setRow] = useState<ROW>(['', '', '', '', '']);
  const [checkRow, setCheckRow] = useState<CHECK_ROW>([
    'absent',
    'absent',
    'absent',
    'absent',
    'absent',
  ]);

  const event = useCallback(
    (arg: CHAR) => {
      setRow((prev) => {
        if (index > row.length - 1) {
          setIndex(5);
          return prev;
        }
        prev[index] = arg;
        setIndex(index + 1);
        return prev;
      });
    },
    [index],
  );

  const remove = useCallback(() => {
    setRow((prev) => {
      if (index <= 0) {
        setIndex(0);
        return prev;
      }
      prev[index - 1] = '';
      setIndex((prevIndex) => prevIndex - 1);
      return prev;
    });
    setIsError(false);
    setMessage('');
  }, [index]);

  const setGame = useCallback(async () => {
    const word = row.join('');
    //console.log('word', word);

    try {
      await getWord(word.toLowerCase());
      navigate(`/game/${encodeHASH(word)}`);
      setIsError(false);
      setMessage('');
    } catch (error) {
      if (isAxiosError(error)) {
        setIsError(true);
        setMessage('단어가 존재하지 않습니다.');
        // alert('단어가 존재하지 않습니다.');
      } else {
        console.warn('api ', error);
      }
    }
  }, [row]);

  Modal.setAppElement('#root');

  return (
    <StyledModal
      isOpen={open}
      // style={customStyles}
      // onRequestClose={() => onClose(false)}
      contentLabel='Start Modal'
    >
      {/* <PressKey event={event} /> */}
      <Layout data-cy='create-wordle-dialog-layout'>
        <Header data-cy='create-wordle-dialog-header'>
          <Title data-cy='create-wordle-dialog-title'>새 Word 생성</Title>
          <Button type='button' onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </Header>
        <Body data-cy='create-wordle-dialog-body'>
          <Word>
            <Row row={row} checkRow={checkRow} />
          </Word>
          <Message>{isError && <>{message}</>}</Message>
          <Keyboard
            enter={setGame}
            remove={remove}
            click={event}
            event={event}
            data-cy='new-game-keyboard'
          />
        </Body>
        <Footer data-cy='create-wordle-dialog-footer'>
          <ActionButton onClick={() => onClose(false)}>Close</ActionButton>
        </Footer>
      </Layout>
    </StyledModal>
  );
}
