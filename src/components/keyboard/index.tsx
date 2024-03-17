import React from 'react';
import { Layout } from './styles';
import Row from './row';
import Key from './key';
import Half from './blank';
import PressKey from './press-key';
import { ReactComponent as BackspaceIcon } from 'assets/images/backspace_FILL0_wght400_GRAD0_opsz24.svg';
import { useDispatch } from 'react-redux';
import { fillBlock, removeBlock, checkBlock } from 'store';
import { CHAR } from 'types';

export default function Keyboard() {
  const dispatch = useDispatch();

  const click = React.useCallback(
    (str: CHAR) => {
      dispatch(fillBlock(str));
    },
    [dispatch],
  );
  const remove = React.useCallback(() => {
    dispatch(removeBlock());
  }, [dispatch]);
  const check = React.useCallback(() => {
    dispatch(checkBlock());
  }, [dispatch]);

  return (
    <Layout data-cy='keyboard-Layout'>
      <PressKey />
      <Row>
        <Key onClick={() => click('Q')}>q</Key>
        <Key onClick={() => click('W')}>w</Key>
        <Key onClick={() => click('E')}>e</Key>
        <Key onClick={() => click('R')}>r</Key>
        <Key onClick={() => click('T')}>t</Key>
        <Key onClick={() => click('Y')}>y</Key>
        <Key onClick={() => click('U')}>u</Key>
        <Key onClick={() => click('I')}>i</Key>
        <Key onClick={() => click('O')}>o</Key>
        <Key onClick={() => click('P')}>p</Key>
      </Row>
      <Row>
        <Half />
        <Key onClick={() => click('A')}>a</Key>
        <Key onClick={() => click('S')}>s</Key>
        <Key onClick={() => click('D')}>d</Key>
        <Key onClick={() => click('F')}>f</Key>
        <Key onClick={() => click('G')}>g</Key>
        <Key onClick={() => click('H')}>h</Key>
        <Key onClick={() => click('J')}>j</Key>
        <Key onClick={() => click('K')}>k</Key>
        <Key onClick={() => click('L')}>l</Key>
        <Half />
      </Row>
      <Row>
        <Key oneAndAHalf onClick={() => check()}>
          enter
        </Key>
        <Key onClick={() => click('Z')}>z</Key>
        <Key onClick={() => click('X')}>x</Key>
        <Key onClick={() => click('C')}>c</Key>
        <Key onClick={() => click('V')}>v</Key>
        <Key onClick={() => click('B')}>b</Key>
        <Key onClick={() => click('N')}>n</Key>
        <Key onClick={() => click('M')}>m</Key>
        <Key oneAndAHalf onClick={() => remove()}>
          <BackspaceIcon />
        </Key>
      </Row>
    </Layout>
  );
}
