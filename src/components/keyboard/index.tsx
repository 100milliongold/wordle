import React from 'react';
import { Layout } from './styles';
import Row from './row';
import Key from './key';
import Half from './blank';
import { ReactComponent as BackspaceIcon } from 'assets/images/backspace_FILL0_wght400_GRAD0_opsz24.svg';

export default function Keyboard() {
  return (
    <Layout data-cy='keyboard-Layout'>
      <Row>
        <Key>q</Key>
        <Key>w</Key>
        <Key>e</Key>
        <Key>r</Key>
        <Key>t</Key>
        <Key>y</Key>
        <Key>u</Key>
        <Key>i</Key>
        <Key>o</Key>
        <Key>p</Key>
      </Row>
      <Row>
        <Half />
        <Key>a</Key>
        <Key>s</Key>
        <Key>d</Key>
        <Key>f</Key>
        <Key>g</Key>
        <Key>h</Key>
        <Key>j</Key>
        <Key>k</Key>
        <Key>l</Key>
        <Half />
      </Row>
      <Row>
        <Key oneAndAHalf>enter</Key>
        <Key>z</Key>
        <Key>x</Key>
        <Key>c</Key>
        <Key>v</Key>
        <Key>b</Key>
        <Key>n</Key>
        <Key>m</Key>
        <Key oneAndAHalf>
          <BackspaceIcon />
        </Key>
      </Row>
    </Layout>
  );
}
