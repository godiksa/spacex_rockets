import styled from 'styled-components';

export const StyledHeaderRow = styled.div<{ numHeadColumns: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ numHeadColumns }) =>
    numHeadColumns > 5
      ? `repeat(${numHeadColumns}, 1fr)`
      : `0.9fr 0.4fr repeat(3, 1fr)`};
  gap: 10px;
  align-items: center;

  padding: 15px 50px 15px 30px;
`;

export const StyledBodyRow = styled.div<{ numBodyColumns: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ numBodyColumns }) =>
    numBodyColumns > 5
      ? `repeat(${numBodyColumns}, 1fr)`
      : `0.9fr 0.4fr repeat(3, 1fr)`};
  gap: 10px;

  background-color: white;
  padding: 15px 50px 15px 30px;
  border-radius: 8px;
  margin-bottom: 3px;
`;

export const StyledHeaderItem = styled.span`
  text-align: right;
  font-weight: 500;
  color: #676c7e;
  letter-spacing: 0.1px;

  &:first-child {
    text-align: left;
  }
`;

export const StyledBodyItem = styled.span`
  text-align: right;
  letter-spacing: 0.25px;
  color: #676c7e;

  &:first-child {
    text-align: left;
  }
`;
