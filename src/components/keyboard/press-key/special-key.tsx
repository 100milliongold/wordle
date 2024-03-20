import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface IProps {
  remove: () => void;
  enter: () => void;
}

export default function SpecialKey({ remove, enter }: IProps) {
  useHotkeys('backspace', () => remove());
  useHotkeys('enter', () => enter());
  return <></>;
}
