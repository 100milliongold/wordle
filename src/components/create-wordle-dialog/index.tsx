import React, { useState, useCallback, useEffect } from 'react';
import { ActionButton, Body, Button, Footer, Header, Layout } from './styles';
import { ReactComponent as CloseIcon } from 'assets/images/close_FILL0_wght400_GRAD0_opsz24.svg';
import Modal from 'react-modal';
import Row from 'components/board/row';
import PressKey from 'components/keyboard/press-key';
import { useHotkeys } from 'react-hotkeys-hook';
import { Keyboard } from 'components';
import { useNavigate } from 'react-router-dom';
import { ROW, CHECK_ROW, CHAR } from 'types';
import { encodeHASH } from 'utils';

interface IProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    zIndex: 10,
  },
};

export default function CreateWordle({
  open,
  onClose,
}: React.PropsWithChildren<IProps>) {
  useEffect(() => {
    if (open) {
      setIndex(0);
      setRow(['', '', '', '', '']);
      setCheckRow(['absent', 'absent', 'absent', 'absent', 'absent']);
    }
  }, [open]);

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
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
          setIndex(4);
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
      if (index < 0) {
        setIndex(0);
        return prev;
      }
      prev[index] = '';
      setIndex(index - 1);
      return prev;
    });
  }, [index]);

  const setGame = useCallback(() => {
    const word = row.join('');
    console.log('word', word);

    navigate(`/game/${encodeHASH(word)}`);
  }, [row]);

  // useHotkeys('backspace', () => remove());
  // useHotkeys('enter', () => setGame());
  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={open}
      style={customStyles}
      // onRequestClose={() => onClose(false)}
      contentLabel='Start Modal'
    >
      {/* <PressKey event={event} /> */}
      <Layout>
        <Header>
          <Button type='button' onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </Header>
        <Body>
          <div className='mb-1'>
            <Row row={row} checkRow={checkRow} />
          </div>
          <Keyboard
            enter={() => setGame()}
            remove={remove}
            click={event}
            event={event}
            data-cy='new-game-keyboard'
          />
        </Body>
        <Footer>
          <ActionButton onClick={() => onClose(false)}>Close</ActionButton>
        </Footer>
      </Layout>
    </Modal>
  );
}
