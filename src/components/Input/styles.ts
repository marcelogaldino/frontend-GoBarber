import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #666360;
  padding: 16px;
  width: 100%;
  align-items: center;
  display: flex;

  & + & {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
