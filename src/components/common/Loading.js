import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

function Loading() {
  return (
    <LoadingStyle role="img" aria-label="running shoe">
      👟
    </LoadingStyle>
  );
}

const slide = keyframes`
from {
transform: translateX(0);
}
to {
transform: translateX(200px);
}
`;
const LoadingStyle = styled.span`
  display: block;
  animation: ${slide} 1s ease infinite;
`;
export default Loading;
