import React from 'react';
import tw, { styled } from 'twin.macro';

export default function Loading() {
  return <Layout />;
}

export const Layout = styled.div`
  ${tw`relative flex overflow-hidden bg-mainBG w-full h-full`}
`;
