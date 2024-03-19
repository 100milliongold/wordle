import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { CHAR } from 'types';

interface IProps {
  event: (char: CHAR) => void;
}

export default function PressKey({ event }: IProps) {
  useHotkeys('a', () => event('A'));
  useHotkeys('b', () => event('B'));
  useHotkeys('c', () => event('C'));
  useHotkeys('d', () => event('D'));
  useHotkeys('e', () => event('E'));
  useHotkeys('f', () => event('F'));
  useHotkeys('g', () => event('G'));
  useHotkeys('h', () => event('H'));
  useHotkeys('i', () => event('I'));
  useHotkeys('j', () => event('J'));
  useHotkeys('k', () => event('K'));
  useHotkeys('l', () => event('L'));
  useHotkeys('m', () => event('M'));
  useHotkeys('n', () => event('N'));
  useHotkeys('o', () => event('O'));
  useHotkeys('p', () => event('P'));
  useHotkeys('q', () => event('Q'));
  useHotkeys('r', () => event('R'));
  useHotkeys('s', () => event('S'));
  useHotkeys('t', () => event('T'));
  useHotkeys('u', () => event('U'));
  useHotkeys('v', () => event('V'));
  useHotkeys('w', () => event('W'));
  useHotkeys('x', () => event('X'));
  useHotkeys('y', () => event('Y'));
  useHotkeys('z', () => event('Z'));
  return <></>;
}
