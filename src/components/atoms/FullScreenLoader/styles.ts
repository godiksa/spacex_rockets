import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #5a71e4;
  border-right: 3px solid #5a71e4;
  border-bottom: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 0.6s linear infinite;
`;

export const StyledSpinnerWrapper = styled.div`
  position: absolute;
  bottom: 0;

  background-color: #f5f5fa;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;
