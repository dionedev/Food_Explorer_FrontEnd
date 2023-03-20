import styled from "styled-components";

export const CustomButton = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.colors.tomato_100};
  border: none;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.light_100};
  font-size: 1.4rem;
`