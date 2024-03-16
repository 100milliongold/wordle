import React from 'react';
import { Layout, Content } from './styles';
import Row from './row';

export default function Board() {
  return (
    <Layout data-cy='board-Layout'>
      <Content data-cy='board-Content'>
        <Row data-cy='board-Row'></Row>
        <Row data-cy='board-Row'></Row>
        <Row data-cy='board-Row'></Row>
        <Row data-cy='board-Row'></Row>
        <Row data-cy='board-Row'></Row>
        <Row data-cy='board-Row'></Row>
      </Content>
    </Layout>
  );
}
