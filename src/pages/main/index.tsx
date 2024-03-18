import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ActionButton, CreateWordle } from 'components';
import { encodeHASH } from 'utils';
import {
  Layout,
  Container,
  Content,
  LogoImg,
  LogoText,
  ContentBody,
  ContentWelcomeTitle,
  ContentBodyText,
  ContentBodyActions,
} from './styles';

export default function Main() {
  const wordle = encodeHASH('WORLD');
  const [open, setOpen] = useState(false);
  const onClose = (arg: boolean) => setOpen(arg);
  return (
    <Layout data-cy='Main-Layout'>
      <CreateWordle open={open} onClose={onClose} />

      <Container data-cy='Main-Container'>
        <Content data-cy='Main-Content'>
          <LogoImg data-cy='Main-LogoImg' />
          <LogoText data-cy='Main-LogoText'>워드러</LogoText>
          <ContentBody data-cy='Main-ContentBody'>
            <ContentWelcomeTitle data-cy='Main-ContentWelcomeTitle'>
              환영합니다.
            </ContentWelcomeTitle>
            <ContentBodyText data-cy='Main-ContentBodyText'>
              새로운 퍼즐과 함께하는 새로운 날입니다.
            </ContentBodyText>
            <ContentBodyActions>
              <Link to={`/game/${wordle}`}>
                <ActionButton>시작하기</ActionButton>
              </Link>
              <ActionButton onClick={() => onClose(true)}>
                워들 생성하기
              </ActionButton>
            </ContentBodyActions>
          </ContentBody>
        </Content>
      </Container>
    </Layout>
  );
}
