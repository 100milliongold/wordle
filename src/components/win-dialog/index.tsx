import React, { useMemo } from 'react';
import {
  StyledModal,
  Layout,
  Header,
  Button,
  Body,
  Title,
  StatisticsContainer,
  Statistics,
  Value,
  Description,
  GraphContainer,
} from './styles';
import { formatter } from 'utils';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from 'assets/images/close_FILL0_wght400_GRAD0_opsz24.svg';
import GraphContent from './graph';

interface IProps {
  open: boolean;
  onClose: (arg: boolean) => void;
  totalWordle: number;
  winCount: [number, number, number, number, number, number];
  startTime: number;
  endTime: number;
}

export default function WinningDialog(props: IProps) {
  const { open, onClose, totalWordle, winCount, startTime, endTime } = props;

  Modal.setAppElement('#root');

  const time = useMemo(() => endTime - startTime, [endTime, startTime]);
  const totalWin = winCount.reduce((memo, item) => memo + item, 0);

  const winPercent = useMemo(
    () => formatter((totalWin / totalWordle) * 100),
    [totalWin, totalWordle],
  );

  return (
    <StyledModal isOpen={open}>
      <Layout>
        <Header data-cy='win-dialog-header'>
          <Button type='button' onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </Header>
        <Body data-cy='win-dialog-body'>
          <Title data-cy='win-dialog-title'>통계</Title>
          <StatisticsContainer data-cy='win-dialog-statistics-container'>
            <Statistics data-cy='win-dialog-statistics'>
              <Value>{new Date(time).getSeconds()}초</Value>
              <Description>플레이한 시간</Description>
            </Statistics>
            <Statistics>
              <Value>{totalWin}</Value>
              <Description>승리한 횟수</Description>
            </Statistics>
            <Statistics>
              <Value>{winPercent}%</Value>
              <Description>승률</Description>
            </Statistics>
            <Statistics>
              <Value>{totalWordle}</Value>
              <Description>시도한 횟수</Description>
            </Statistics>
          </StatisticsContainer>
          <GraphContainer>
            <Title>추측 분포</Title>
            <GraphContent winCount={winCount} />
          </GraphContainer>
        </Body>
      </Layout>
    </StyledModal>
  );
}
