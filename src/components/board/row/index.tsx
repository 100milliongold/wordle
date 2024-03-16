import React from 'react';
import Col from './col';
import { Layout } from './styles';

export default function Row() {
  return (
    <Layout data-cy='row-Layout'>
      <Col>C</Col>
      <Col state='correct'>C</Col>
      <Col>C</Col>
      <Col>C</Col>
      <Col state='present'>C</Col>
    </Layout>
  );
}
