import React from 'react';
import { Layout } from './styles';
import Row from './row';
import Key from './key';
import Half from './blank';
import PressKey from './press-key';
import SpecialKey from './press-key/special-key';
import { ReactComponent as BackspaceIcon } from 'assets/images/backspace_FILL0_wght400_GRAD0_opsz24.svg';
import { CHAR, STATE } from 'types';

interface IProps {
  event: (str: CHAR) => void;
  click: (str: CHAR) => void;
  remove: () => void;
  enter: () => void;
  status?: (char: CHAR) => STATE;
  ['data-cy']: string;
}

export default function Keyboard(props: IProps) {
  const { enter, event, click, remove, status } = props;

  return (
    <Layout data-cy={props['data-cy']}>
      <PressKey event={event} />
      <SpecialKey enter={enter} remove={remove} />
      <Row>
        <Key
          data-cy='key-Q'
          state={status ? status('Q') : undefined}
          onClick={() => click('Q')}
        >
          q
        </Key>
        <Key
          data-cy='key-W'
          state={status ? status('W') : undefined}
          onClick={() => click('W')}
        >
          w
        </Key>
        <Key
          data-cy='key-E'
          state={status ? status('E') : undefined}
          onClick={() => click('E')}
        >
          e
        </Key>
        <Key
          data-cy='key-R'
          state={status ? status('R') : undefined}
          onClick={() => click('R')}
        >
          r
        </Key>
        <Key
          data-cy='key-T'
          state={status ? status('T') : undefined}
          onClick={() => click('T')}
        >
          t
        </Key>
        <Key
          data-cy='key-Y'
          state={status ? status('Y') : undefined}
          onClick={() => click('Y')}
        >
          y
        </Key>
        <Key
          data-cy='key-U'
          state={status ? status('U') : undefined}
          onClick={() => click('U')}
        >
          u
        </Key>
        <Key
          data-cy='key-I'
          state={status ? status('I') : undefined}
          onClick={() => click('I')}
        >
          i
        </Key>
        <Key
          data-cy='key-O'
          state={status ? status('O') : undefined}
          onClick={() => click('O')}
        >
          o
        </Key>
        <Key
          data-cy='key-P'
          state={status ? status('P') : undefined}
          onClick={() => click('P')}
        >
          p
        </Key>
      </Row>
      <Row>
        <Half />
        <Key
          data-cy='key-A'
          state={status ? status('A') : undefined}
          onClick={() => click('A')}
        >
          a
        </Key>
        <Key
          data-cy='key-S'
          state={status ? status('S') : undefined}
          onClick={() => click('S')}
        >
          s
        </Key>
        <Key
          data-cy='key-D'
          state={status ? status('D') : undefined}
          onClick={() => click('D')}
        >
          d
        </Key>
        <Key
          data-cy='key-F'
          state={status ? status('F') : undefined}
          onClick={() => click('F')}
        >
          f
        </Key>
        <Key
          data-cy='key-G'
          state={status ? status('G') : undefined}
          onClick={() => click('G')}
        >
          g
        </Key>
        <Key
          data-cy='key-H'
          state={status ? status('H') : undefined}
          onClick={() => click('H')}
        >
          h
        </Key>
        <Key
          data-cy='key-J'
          state={status ? status('J') : undefined}
          onClick={() => click('J')}
        >
          j
        </Key>
        <Key
          data-cy='key-K'
          state={status ? status('K') : undefined}
          onClick={() => click('K')}
        >
          k
        </Key>
        <Key
          data-cy='key-L'
          state={status ? status('L') : undefined}
          onClick={() => click('L')}
        >
          l
        </Key>
        <Half />
      </Row>
      <Row>
        <Key oneAndAHalf onClick={() => enter()}>
          enter
        </Key>
        <Key
          data-cy='key-Z'
          state={status ? status('Z') : undefined}
          onClick={() => click('Z')}
        >
          z
        </Key>
        <Key
          data-cy='key-X'
          state={status ? status('X') : undefined}
          onClick={() => click('X')}
        >
          x
        </Key>
        <Key
          data-cy='key-C'
          state={status ? status('C') : undefined}
          onClick={() => click('C')}
        >
          c
        </Key>
        <Key
          data-cy='key-V'
          state={status ? status('V') : undefined}
          onClick={() => click('V')}
        >
          v
        </Key>
        <Key
          data-cy='key-B'
          state={status ? status('B') : undefined}
          onClick={() => click('B')}
        >
          b
        </Key>
        <Key
          data-cy='key-N'
          state={status ? status('N') : undefined}
          onClick={() => click('N')}
        >
          n
        </Key>
        <Key
          data-cy='key-M'
          state={status ? status('M') : undefined}
          onClick={() => click('M')}
        >
          m
        </Key>
        <Key oneAndAHalf onClick={() => remove()}>
          <BackspaceIcon />
        </Key>
      </Row>
    </Layout>
  );
}
