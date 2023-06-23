import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  overflow: auto;
`;

export const StyledHeaderRow = styled.div<{ numheadcolumns: number }>`
  width: 100%;
  min-width: 650px;
  display: grid;
  grid-template-columns: ${({ numheadcolumns }) =>
    numheadcolumns > 5
      ? `repeat(${numheadcolumns}, 1fr)`
      : `0.9fr 0.4fr repeat(3, 1fr)`};
  gap: 10px;
  align-items: baseline;

  padding: 15px 50px 15px 30px;
`;

export const StyledBodyRow = styled.div<{ numbodycolumns: number }>`
  width: 100%;
  min-width: 650px;
  display: grid;
  grid-template-columns: ${({ numbodycolumns }) =>
    numbodycolumns > 5
      ? `repeat(${numbodycolumns}, 1fr)`
      : `0.9fr 0.4fr repeat(3, 1fr)`};
  gap: 10px;
  align-items: center;

  background-color: white;
  padding: 15px 50px 15px 30px;
  border-radius: 8px;
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 20px;
  }
`;

export const StyledHeaderItem = styled.span`
  text-align: right;
  font-weight: 500;
  color: #676c7e;
  letter-spacing: 0.1px;

  &:first-child {
    text-align: left;
  }

  &:hover {
    cursor: pointer;
    color: #5a71e4;
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
