import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  list-style-type: none;

  display: flex;
  justify-content: center;

  padding-left: 0;

  li:not(:last-child) {
    margin-right: 20px;
  }

  li {
    padding: 10px;
    border: 2px solid;
    border-radius: 5px;
    background-color: #e9e9e9;
  }
`;
