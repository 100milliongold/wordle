import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useDispatch } from 'react-redux';
import { removeBlock, checkBlock } from 'store';

export default function SpecialKey() {
  const dispatch = useDispatch();
  useHotkeys('backspace', () => dispatch(removeBlock()));
  useHotkeys('enter', () => dispatch(checkBlock()));
  return <></>;
}
