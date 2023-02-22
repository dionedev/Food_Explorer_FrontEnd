import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 8px;

  > label {
    color: ${({ theme }) => theme.colors.light_400};
  }

  > input {
    width: 100%;
    height: 48px;
    padding: 16px 14px;
    background-color: ${({ theme }) => theme.colors.dark_900};
    border: none;
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }

    &:focus {
      border: 1px solid #4A808C;
    }
  }
`