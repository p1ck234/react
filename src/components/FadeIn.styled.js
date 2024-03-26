import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const AnimatedComponent = styled.div`
  animation: ${fadeIn} 2s ease-in;
`;
