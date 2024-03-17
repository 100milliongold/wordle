import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useDispatch } from 'react-redux';
import { fillBlock, removeBlock, checkBlock } from 'store';

export default function PressKey() {
  const dispatch = useDispatch();
  useHotkeys('a', () => dispatch(fillBlock('A')));
  useHotkeys('b', () => dispatch(fillBlock('B')));
  useHotkeys('c', () => dispatch(fillBlock('C')));
  useHotkeys('d', () => dispatch(fillBlock('D')));
  useHotkeys('e', () => dispatch(fillBlock('E')));
  useHotkeys('f', () => dispatch(fillBlock('F')));
  useHotkeys('g', () => dispatch(fillBlock('G')));
  useHotkeys('h', () => dispatch(fillBlock('H')));
  useHotkeys('i', () => dispatch(fillBlock('I')));
  useHotkeys('j', () => dispatch(fillBlock('J')));
  useHotkeys('k', () => dispatch(fillBlock('K')));
  useHotkeys('l', () => dispatch(fillBlock('L')));
  useHotkeys('m', () => dispatch(fillBlock('M')));
  useHotkeys('n', () => dispatch(fillBlock('N')));
  useHotkeys('o', () => dispatch(fillBlock('O')));
  useHotkeys('p', () => dispatch(fillBlock('P')));
  useHotkeys('q', () => dispatch(fillBlock('Q')));
  useHotkeys('r', () => dispatch(fillBlock('R')));
  useHotkeys('s', () => dispatch(fillBlock('S')));
  useHotkeys('t', () => dispatch(fillBlock('T')));
  useHotkeys('u', () => dispatch(fillBlock('U')));
  useHotkeys('v', () => dispatch(fillBlock('V')));
  useHotkeys('w', () => dispatch(fillBlock('W')));
  useHotkeys('x', () => dispatch(fillBlock('X')));
  useHotkeys('y', () => dispatch(fillBlock('Y')));
  useHotkeys('z', () => dispatch(fillBlock('Z')));
  useHotkeys('backspace', () => dispatch(removeBlock()));
  useHotkeys('enter', () => dispatch(checkBlock()));
  return <></>;
}
