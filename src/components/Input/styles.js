import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_400};
  border-radius: 7px;

  > label {
    color: ${({ theme }) => theme.colors.light_400};
  }

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.light_100};
    border-radius: 7px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }

    &:focus {
      border: 1px solid #4A808C;
    }
  }

  > svg {
    margin-left: 16px;
  }
`