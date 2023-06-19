import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: #f5f5fa;
  border-radius: 50px;
  padding: 11px 15px;
`;

export const StyledIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 13px;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #676c7e;
  background-color: #f5f5fa;

  &::placeholder {
    color: #9b9eac;
  }
`;
