import React from 'react';
import {
  StyledModal,
  Button,
  Layout,
  Body,
  Title,
  SubTitle1,
  SubTitle2,
  TextList,
  Header,
  Example,
  Tile,
  Weary,
  WearyLetter,
  Comment,
} from './styles';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from 'assets/images/close_FILL0_wght400_GRAD0_opsz24.svg';

interface IProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

export default function HowToPlayDialog({ open, onClose }: IProps) {
  Modal.setAppElement('#root');

  return (
    <StyledModal
      isOpen={open}
      onRequestClose={() => onClose(false)}
      contentLabel='Start Modal'
    >
      <Layout data-cy='how-to-play-dialog-layout'>
        <Header data-cy='how-to-play-dialog-header'>
          <Button type='button' onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </Header>
        <Body data-cy='how-to-play-dialog-body'>
          <Title>게임 방법</Title>
          <SubTitle1>6번의 시도로 Wordle을 맞춰보세요.</SubTitle1>
          <TextList data-cy='how-to-play-dialog-text-list'>
            <li>각 추측은 유효한 5글자 단어여야 합니다. </li>
            <li>
              타일의 색상이 변경되어 귀하의 추측이 단어에 얼마나 근접했는지
              보여줍니다.
            </li>
          </TextList>
          <Example data-cy='how-to-play-dialog-text-example'>
            <SubTitle2>예제</SubTitle2>
            <Weary>
              <WearyLetter>
                <Tile state={'correct'}>W</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>E</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>A</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>R</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>Y</Tile>
              </WearyLetter>
              <Comment>
                <b>W</b> 는 단어 안에 있고 정확한 위치에 있습니다.
              </Comment>
            </Weary>
            <Weary>
              <WearyLetter>
                <Tile>p</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile state={'present'}>i</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>l</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>l</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>s</Tile>
              </WearyLetter>
              <Comment>
                <b>I</b> 는 포함하고 있지만 잘못된 위치에 있습니다.
              </Comment>
            </Weary>
            <Weary>
              <WearyLetter>
                <Tile>v</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>a</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>g</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile state={'absent'}>u</Tile>
              </WearyLetter>
              <WearyLetter>
                <Tile>e</Tile>
              </WearyLetter>
              <Comment>
                <b>U</b> 는 어떤 위치에도 단어에 포함되지 않습니다.
              </Comment>
            </Weary>
          </Example>
        </Body>
      </Layout>
    </StyledModal>
  );
}
