import React from 'react';
import { Layout } from './styles';
import Row from './row';
import Key from './key';
import Half from './blank';
import PressKey from './press-key';
import SpecialKey from './press-key/special-key';
import { ReactComponent as BackspaceIcon } from 'assets/images/backspace_FILL0_wght400_GRAD0_opsz24.svg';
import { CHAR } from 'types';

interface IProps {
  event: (str: CHAR) => void;
  click: (str: CHAR) => void;
  remove: () => void;
  enter: () => void;
  ['data-cy']: string;
}

export default function Keyboard(props: IProps) {
  const { enter, event, click, remove } = props;

  return (
    <Layout data-cy={props['data-cy']}>
      <PressKey event={event} />
      <SpecialKey enter={enter} remove={remove} />
      <Row>
        <Key data-cy='key-Q' onClick={() => click('Q')}>
          q
        </Key>
        <Key data-cy='key-W' onClick={() => click('W')}>
          w
        </Key>
        <Key data-cy='key-E' onClick={() => click('E')}>
          e
        </Key>
        <Key data-cy='key-R' onClick={() => click('R')}>
          r
        </Key>
        <Key data-cy='key-T' onClick={() => click('T')}>
          t
        </Key>
        <Key data-cy='key-Y' onClick={() => click('Y')}>
          y
        </Key>
        <Key data-cy='key-U' onClick={() => click('U')}>
          u
        </Key>
        <Key data-cy='key-I' onClick={() => click('I')}>
          i
        </Key>
        <Key data-cy='key-O' onClick={() => click('O')}>
          o
        </Key>
        <Key data-cy='key-P' onClick={() => click('P')}>
          p
        </Key>
      </Row>
      <Row>
        <Half />
        <Key data-cy='key-A' onClick={() => click('A')}>
          a
        </Key>
        <Key data-cy='key-S' onClick={() => click('S')}>
          s
        </Key>
        <Key data-cy='key-D' onClick={() => click('D')}>
          d
        </Key>
        <Key data-cy='key-F' onClick={() => click('F')}>
          f
        </Key>
        <Key data-cy='key-G' onClick={() => click('G')}>
          g
        </Key>
        <Key data-cy='key-H' onClick={() => click('H')}>
          h
        </Key>
        <Key data-cy='key-J' onClick={() => click('J')}>
          j
        </Key>
        <Key data-cy='key-K' onClick={() => click('K')}>
          k
        </Key>
        <Key data-cy='key-L' onClick={() => click('L')}>
          l
        </Key>
        <Half />
      </Row>
      <Row>
        <Key oneAndAHalf onClick={() => enter()}>
          enter
        </Key>
        <Key data-cy='key-Z' onClick={() => click('Z')}>
          z
        </Key>
        <Key data-cy='key-X' onClick={() => click('X')}>
          x
        </Key>
        <Key data-cy='key-C' onClick={() => click('C')}>
          c
        </Key>
        <Key data-cy='key-V' onClick={() => click('V')}>
          v
        </Key>
        <Key data-cy='key-B' onClick={() => click('B')}>
          b
        </Key>
        <Key data-cy='key-N' onClick={() => click('N')}>
          n
        </Key>
        <Key data-cy='key-M' onClick={() => click('M')}>
          m
        </Key>
        <Key oneAndAHalf onClick={() => remove()}>
          <BackspaceIcon />
        </Key>
      </Row>
    </Layout>
  );
}
