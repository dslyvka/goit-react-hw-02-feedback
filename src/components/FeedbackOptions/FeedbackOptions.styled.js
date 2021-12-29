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
      button {
          width: 90px;
          height: 30px;

          border-radius: 5px;
      }
  }
`;
