import React from 'react';
import { GraphBarContainer, GraphBar, GraphStatus } from './styles';

interface IProps {
  value: number;
  width: number;
}

export default function Bar({ value, width }: IProps) {
  return (
    <GraphBarContainer>
      <GraphBar width={width}>
        <GraphStatus>{value}</GraphStatus>
      </GraphBar>
    </GraphBarContainer>
  );
}
