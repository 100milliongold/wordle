import React, { useCallback } from 'react';
import { formatter } from 'utils';
import { GraphList, Graph, GraphGuess } from './styles';
import Bar from './bar';

interface IProps {
  winCount: [number, number, number, number, number, number];
}

export default function GraphContent({ winCount }: IProps) {
  const totalWin = winCount.reduce((memo, item) => memo + item, 0);

  const getPercent = useCallback(
    (index: number) => formatter((winCount[index] / totalWin) * 100),
    [totalWin],
  );

  return (
    <GraphList>
      <Graph>
        <GraphGuess>1</GraphGuess>
        <Bar width={getPercent(0)} value={winCount[0]} />
      </Graph>
      <Graph>
        <GraphGuess>2</GraphGuess>
        <Bar width={getPercent(1)} value={winCount[1]} />
      </Graph>
      <Graph>
        <GraphGuess>3</GraphGuess>
        <Bar width={getPercent(2)} value={winCount[2]} />
      </Graph>
      <Graph>
        <GraphGuess>4</GraphGuess>
        <Bar width={getPercent(3)} value={winCount[3]} />
      </Graph>
      <Graph>
        <GraphGuess>5</GraphGuess>
        <Bar width={getPercent(4)} value={winCount[4]} />
      </Graph>
      <Graph>
        <GraphGuess>6</GraphGuess>
        <Bar width={getPercent(5)} value={winCount[5]} />
      </Graph>
    </GraphList>
  );
}
