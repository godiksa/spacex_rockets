import styled from 'styled-components';

export const StyledHeaderRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 0.4fr repeat(3, 1fr);

  padding: 15px 50px 15px 30px;
`;

export const StyledBodyRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 0.4fr repeat(3, 1fr);

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
