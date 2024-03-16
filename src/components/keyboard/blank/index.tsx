import React from 'react';
import tw, { styled } from 'twin.macro';

export default function Blank() {
  return <Half data-cy='blank'></Half>;
}

const Half = styled.div`
  ${tw`
    flex-half
  `}
`;
