import styled from 'styled-components';

export const StyledSearchTableWrapper = styled.div`
  padding: 30px 50px;
  max-width: 1280px;
  margin: auto;
`;

export const StyledSearchBarWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;

  margin-bottom: 50px;

  p {
    width: 15%;
    font-weight: 300;
    color: #676c7e;
  }

  h2 {
    width: 30%;
    font-weight: 500;
    color: #283049;
  }
`;
